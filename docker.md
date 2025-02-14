# Docker

## Criando a imagem

```bash
docker build -t cucumber-login .
```

## Rodar o container em modo interativo

```bash
docker run -it cucumber-login bash
```

## Verificações

Verificar o Google Chrome: Execute o comando abaixo para verificar se o Google Chrome está instalado corretamente no container:

```bash
chromedriver --version
```

Versão: 

## Verificar o ChromeDriver
Verifique também se o ChromeDriver está instalado e acessível:

```bash
google-chrome --version
```
Versão: Google Chrome 133.0.6943.98 

## Acessar a pasta /app

```bash
cd /app
```

## Executar o teste

```bash
npx cucumber-js
```

## Manter o container em execução em segundo plano

```bash
docker run -d --name cucumber-container-login cucumber-image
```

## Acessar o Container

```bash
docker exec -it cucumber-container-login bash
```

## Reconstruir o Container depois de alguma alteração

## Parar o container
Se precisar parar o container, use o comando:

```bash
docker ps  # Para listar os containers em execução
docker stop <ID_do_container>
```

## Excluir o Container

```bash
docker rm <ID do Container>
```

## Excluir a imagem

```bash
docker rmi f <Id da Imagem>
```