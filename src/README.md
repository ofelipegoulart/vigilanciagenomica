== PASTAS ==

A pasta "assets" é a pasta que armazena os arquivos de estilo do site.

A pasta "components" é onde se encontram os arquivos que montam a estrutura dos componentes do site (barra lateral, footer, etc.)

A pasta "hooks" é uma pasta para configuração de rotas. Não mexi nela desde o início do projeto.

A pasta "layouts" é onde se encontra a estruturação da parte pública e privada. Ela possui os arquivos que permitem o site ter a visualização que tem hoje.

A pasta "private" contém os arquivos que montam as visualizações do acesso restrito.

A pasta "reports" armazena os relatórios que estão em genomacovidsc.ufsc.br/dashboard/relatorios.

A pasta "variables" se encontram os arquivos contendo os dados que preenchem as tabelas/gráficos. Importante dizer que seria possível fazer a inserção dos dados dentro dos arquivos de visualização "src/views", mas o arquivo teria 700 linhas, não permitindo a limpeza do código.

A pasta "views" possui a mesma importância da pasta "private", porém no dashboard público.

== ARQUIVOS ==

O arquivo api.js configura o login do acesso restrito (faz a conexão do backend com o frontend).

O arquivo index.js é um dos arquivos responsáveis pelas rotas do site.

O arquivo privateRoutes.js é o arquivo que faz o roteamento das visualizações do acesso restrito.

O arquivo routes.js é o arquivo que faz o roteamento das visualizações do dashboard público.
