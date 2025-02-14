# Projeto com Cucumber e Docker

## Descrição do Projeto

Este projeto usa o **Cucumber** para realizar testes automatizados com especificações em linguagem Gherkin e o **Docker** para garantir um ambiente de execução isolado e replicável. A seguir, apresentamos a estrutura do projeto e os passos para configurar, construir e executar o projeto no Docker.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
.
├── Dockerfile            # Arquivo de configuração para construir a imagem Docker.
├── README.md            # Documentação principal do projeto.
├── docker.md            # Documentação adicional sobre o uso e configuração do Docker.
├── features/             # Diretório contendo os arquivos de especificação dos testes em Gherkin.
│   └── login.feature    # Arquivo de especificação de teste, escrito em Gherkin.
├── steps/                # Diretório contendo a implementação dos passos do Cucumber.
│   └── loginSteps.js    # Implementação dos passos descritos no arquivo .feature.
├── package-lock.json    # Arquivo gerado automaticamente pelo npm, garantindo versões consistentes das dependências.
└── package.json         # Arquivo de configuração do Node.js, incluindo dependências, scripts e informações do projeto.
```

### Descrição dos Arquivos e Diretórios

- **Dockerfile**: Arquivo usado para criar a imagem Docker do projeto. Contém instruções sobre como configurar o ambiente necessário para rodar os testes, incluindo a instalação de dependências e configurações do sistema.
  
- **README.md**: Arquivo de documentação principal do projeto. Contém informações sobre o que é o projeto, como configurá-lo e como utilizá-lo.

- **docker.md**: Arquivo de documentação adicional sobre o uso do Docker no projeto. Detalha como construir e executar o contêiner Docker, bem como o funcionamento de outras ferramentas e configurações necessárias.

- **features/**: Diretório que contém arquivos de especificação de testes automatizados escritos em Gherkin (linguagem de especificação do Cucumber).

- **login.feature**: Arquivo de especificação de teste que descreve o comportamento esperado da funcionalidade de login, utilizando a linguagem Gherkin (palavras-chave como `Given`, `When`, `Then`).

- **steps/**: Diretório contendo os arquivos que implementam os passos definidos nos arquivos `.feature` para os testes do Cucumber.

- **loginSteps.js**: Arquivo que implementa a lógica dos passos descritos no arquivo `login.feature`, conectando as especificações aos testes reais a serem executados.

- **package-lock.json**: Arquivo gerado automaticamente pelo **npm**. Ele bloqueia as versões das dependências para garantir que todos os membros da equipe e ambientes de CI/CD usem as mesmas versões.

- **package.json**: Arquivo de configuração do **npm**. Contém informações sobre o projeto (nome, versão) e as dependências necessárias, além de scripts para facilitar a execução de tarefas.

