import { Builder, By, Key, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js'; // Adicione a extensão .js
import { Given, When, Then, After, Before } from '@cucumber/cucumber';
import { expect } from 'chai';

let driver;

Before(async function () {
  const options = new Options(); // Criar uma instância de Options
  options.addArguments('--headless');
  options.addArguments('--disable-gpu');
  options.addArguments('--no-sandbox');
  options.addArguments('--user-data-dir=/tmp/chrome-user-data');

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options) // Aplicar as opções do Chrome
    .build();
});

Given('que o usuário está na página de login', async function () {
  await driver.get('https://horadoqa.github.io/login/');
});

When('o usuário insere o nome de usuário {string} e a senha {string}', async function (username, password) {
  const usernameField = await driver.findElement(By.id('username'));
  const passwordField = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.id('button'));

  await usernameField.sendKeys(username);
  await passwordField.sendKeys(password);
  await loginButton.click();
});

Then('o usuário deve ser redirecionado para a página Bem-Vindo', async function () {
  const welcomeMessage = await driver.wait(until.elementLocated(By.id('inicio')), 5000);
  const messageText = await welcomeMessage.getText();
  expect(messageText).to.include('Bem-vindo');
});

Then('o sistema deve exibir uma mensagem de erro de login', async function () {
  const errorMessage = await driver.wait(until.elementLocated(By.id('error-message')), 5000);
  const errorText = await errorMessage.getText();
  expect(errorText).to.include('E-mail ou senha inválidos!');
});

After(async function () {
  if (driver) {
    await driver.quit();
  }
});