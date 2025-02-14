# Usar uma imagem base do Node.js versão 20
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json para o container
COPY package*.json ./

# Instalar as dependências do projeto (Cucumber, Selenium, etc.)
RUN npm install

# Instalar dependências adicionais para o Chrome
RUN apt-get update && apt-get install -y \
    wget \
    curl \
    unzip \
    vim \
    libx11-dev \
    libxext-dev \
    libxrender-dev \
    libglu1-mesa \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libnss3 \
    libxss1 \
    libgtk-3-0 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Adicionar o repositório do Google e instalar o Google Chrome
RUN curl -sSL https://dl.google.com/linux/linux_signing_key.pub | tee /etc/apt/trusted.gpg.d/google.asc \
    && echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && apt-get clean

# Instalar e atualizar o webdriver-manager
RUN npx webdriver-manager update

# Copiar todo o código fonte para o container
COPY . .

# Expor a porta 4444 (se necessário para Selenium)
EXPOSE 4444

# Definir o comando para rodar os testes com Cucumber
CMD ["npx", "cucumber-js"] 