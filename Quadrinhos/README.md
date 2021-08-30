# Consumindo API Marvel com Angular

Instalação Angular/Cli e Node.js

# $ apt install nodejs
# $ npm install -g @angular/cli

Criar novo Projeto e iniciar server

# $ ng new Mavel
# $ ng serve

Após conseguir as chaves da API Marvel, no arquivo marvel.service, foi importado os modulos de httpClient, map e rxjs, para ter acesso aos personagens.

Para realizar as foi criado uma timastemp, a chave uma chave publica e uma variavel com a timestamp, chave publica e privada passada por md5, concatenadas ao link temos a configuração a API para buscar os personagens, as edições de quadrinhos, eventos, séries e histórias de cada personagem concatenando o ID de cada um que é apresentado em diferentes telas.

No serviço principal, para listar os personagens marvel-character, busca de MarvelService o get de todos os personagens, assim como a configuração das rotas nas demais telas

Foi ultilizado diretiva ngFor para permitir renderizar cada character capturado enquanto receber os personagens os 50 personagens

Para os itens raros foi feito um sorteio utilizando uma função randomica, os numeros foram guardados em variaveis e comparado a identidicação de cada card

Para realizar a paginação foi usado a biblioteca ngx-pagination

# $ npm install ngx-pagination --save

A paginação esta a concluir



