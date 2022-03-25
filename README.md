# Rede de Vigilância Genômica da COVID-19 no estado

Esse repositório contempla os arquivos que estruturam o site <b>Genoma COVID SC,</b> o qual pude desenvolver enquanto integrante do Laboratório de Bioinformática da Universidade Federal de Santa Catarina (UFSC). O site tem como objetivo produzir gráficos e informações a respeito das amostras do vírus Sars-CoV-2 entregues pelo Laboratório Central (LACEN) para o Núcleo de Bioinformática da UFSC desde a semana epidemiológica 40/2021, bem como a análise desses dados.

A pesquisa foi encomendada pela FAPESC (Fundação de Amparo a Pesquisa do Estado de Santa Catarina) durante a pandemia do novo coronavírus (Sars-CoV-2).

Atualmente, o site do projeto foi concluído e pode ser encontrado <a href="https://genomacovidsc.ufsc.br" target="_blank">aqui.</a> No entanto, o próximo tópico explica como clonar este repositório.


## Como instalar o projeto?

Primeiramente, você precisa clonar este repositório. Assim que terminar esse processo, você precisará preparar o ambiente. Dentro do seu terminal e na pasta que você escolheu para clonar o repositório, execute o comando abaixo:

```
npm install
```

Assim que terminar, confira se a interface funciona corretamente, usando o próximo comando:

```
npm start
```

O comando, em instantes, deve acessar o link http://localhost:3000


## Mapa do Site

O site é dividido em 5 grandes áreas:


### Início

A aba <b>Início</b> contempla os principais dados: número de variantes identificadas, amostras analisadas, municípios analisados, bem como a plotagem de gráficos que medem o volume de amostras processadas, etc.

### Painel SC

<b>Painel SC</b> tem como intuito entender não só identificar a incidência por região de amostras analisadas pelo laboratório como também entender o perfil das pessoas as quais tiveram seus testes analisados. Os dados (randomizados) identificam sexo, faixa etária, CT (Cycle Threshold, um índice utilizado por biólogos que mede a quantidade inicial de expressão do gene-alvo. Quanto menor o CT, mais expressão o vírus possui. Durante o projeto, analisou-se testes com o CT menor que 30) e município de residência.

### Mapa

A página do <b>Mapa</b> redireciona o usuário para uma tela contendo uma tag <iframe>, que visualiza um mapa criado na plataforma Microreact. O mapa faz um link com um banco de dados do projeto que insere informações sobre as linhagens do vírus da COVID-19 com os municípios do estado de Santa Catarina.

### Relatórios

A página <b>Relatórios</b> disponibiliza uma tabela de relatórios técnicos produzidos pelos integrantes dos laboratórios, que resumem os dados produzidos durante as semanas epidemiológicas.

### Sobre o Projeto

<b>Sobre o Projeto</b> tem como foco explicar ao usuário o objetivo do projeto e divulgar as instituições participantes do projeto, sejam elas públicas ou privadas.


## Ferramentas

O site gira em torno de algumas plataformas e tecnologias:

* ReactJS: biblioteca javascript que criou toda a interface web.
* Material Dashboard React: por conta do tamanho do projeto e do prazo recebido, houve a necessidade de utilizar um template na internet para que a fase inicial do projeto fosse desenvolvido de forma mais ágil. Com isso, utilizou-se o Material Dashboard React, que possui uma interface já direcionada para a visualização de gráficos. Importante ressaltar que <b>todas as linhas de códigos que ressaltam que é autoria de Creative Tim foram preservadas.</b>
* Metabase: plataforma utilizada para embarcar gráficos. Existe uma conexão entre a plataforma com o banco de dados, e dentro dela são geradas tags <iframe>, as quais são publicadas dentro do código do site. Durante o projeto, por questões internas, houve uma dificuldade de acessar o banco de dados, e por esse motivo, o metabase foi útil para capturar os dados dos cards <b>número de variantes identificadas, amostras analisadas e municípios analisados,</b> através de requisições GET.
* Microreact: a plataforma, utilizada por diversos países a fim de monitorar as linhagens da COVID-19 geograficamente, também foi utilizada pelo site Genoma COVID SC, com objetivo de demonstrar as linhagens do novo coronavírus por município catarinense analisado.

## Colaboradores

O site foi desenvolvido por <a href="https://github.com/ofelipegoulart">mim.</a>

## Status do Projeto

O projeto foi concluído e já disponibilizado para o público.
