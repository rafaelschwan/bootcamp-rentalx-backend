# Cadastro de carros

**RF**
Deve ser possível cadastrar um novo carro

**RN**  
Não deve ser possível cadastrar um carro com uma placa já existente
O carro deve ser cadastraro com disponibilidade por padrão
O usuário responsável pelo cadastro deve ser um usuario administrador

# Listagem de carros

**RF**
Deve ser possível listar todos carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
O usuário nao precisa estar logado no sistema

# Cadastro de especificações do carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar todos os carros

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado
Não deve ser possível duas especificações iguais para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuario administrador

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuario administrador

# Aluguéis de carros

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguél deve ter duração mínima de 24 horas
Não deve ser possível cadastrar um novo aluguél caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguél caso já exista um aberto para o mesmo carro

**-----------------------------------------------------------------------------------------------------------------------------------**

# Legendas
**RF**  > Requisitos funcionais
**RNF** > Requisitos não funcionais
**RN**  > Regras de negócio
