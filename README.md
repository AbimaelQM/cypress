# Cypress
 - CONTEÚDO DO VÍDEO:
https://www.youtube.com/watch?v=gTRMuWCp8mE

 - GITHUB: github.com/samlucax/youtube-cypress

Testes com Cypress

# Requisitos para esse teste
  Ter o node e yarn instalados

# Iniciar o back-end

  1. No diretório back-end:
  
   - `npm install`
   - `npm start`
  
     1.1 Se der erro com o sqlite3:
      - Delete a pasta `node_modules`
      - Delete o arquivo `package-look.json`
      - Apague a dependência sqlite3 com o comando `npm un sqlite3`
      - Execute novamente o comando `npm install`
      - Instale o sqlite3 `npm i sqlite3`
    
    
# Iniciar o frontend 

  2. No diretório frontend:
   
   - `npm install`
   - `npm start`
      
# Iniciar o cypress 

  3. No diretório cypress:
   
   - `yarn run cypress open`.
  
