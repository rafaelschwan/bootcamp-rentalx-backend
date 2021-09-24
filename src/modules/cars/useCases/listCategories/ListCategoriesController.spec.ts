import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import createConnection from '@shared/infra/typeorm';
import { Connection } from 'typeorm';

let connection: Connection;

describe("List a Category Controller", () => {

  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();

    const id = uuidv4();
    const password = await hash('admin', 8);

    await connection.query(
      `INSERT INTO  
        USERS(id, name, email, password, "isAdmin", created_at, driver_license)  
        VALUES('${id}', 'admin', 'admin@admin.com', '${password}', true, 'now()', 'XXXXXXXX' )`,
    );

  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to list all categories", async () => {

    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'admin'
    });
    const { refresh_token } = responseToken.body;

    await request(app).post("/categories")
      .send({
        name: "Category supertest 2",
        description: "Category supertest 2"
      }).set({
        Authorization: `Bearer ${refresh_token}`
      });

    const response = await request(app).get('/categories');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });

});
