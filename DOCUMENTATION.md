
## FLUXO DA REQUISIÇÃO
   Routes -> Controllers -> UseCases -> Repository -> BD

## INSTRUÇÕES AMAZON EC2
   Criar usuário: sudo adduser <nomeuser>  (usr app, pswrd app)
   Dar permissão de adm para usuário: sudo usermod -aG sudo <nomeuser>
   Entrar em "modo adm": sudo su - <nomeuser>
   Configuar o ssh: 
      mkdir .ssh 
      chmod 700 .ssh/
      cd .ssh/
      touch authorized_keys
      vi authorized_keys
      Gerar sshkey e colar no editor
   sudo apt update
   Instalar node:
      Passo a passo do site
   Instalar docker (se for utilizar processos com docker):
      Passo a passo do site
   Instalar yarn:
      sudo npm install --global yarn
   Instalar nginx e configurar:
      sudo apt install nginx
      Passo a passo do tutorial da digiOcean
   Instalar pm2 e configurar:
      sudo npm install pm2 -g
      pm2 start caminho do server.js -- name rentalx
   Rodar as migrations sem CI/CD
      ./node_modules/.bin/typeorm migration:run
   Configurar dominio
      Configurar Route 53 e onde foi comprado
      Configurar certbot (https)
      