'use strict'

const text =  
`Программа запускает http-сервер и формирует файл с данными для API.
    
Гайд:
service.js <command>
Команды:
--version:            выводит номер версии
--help:               печатает этот текст
--generate <count>    формирует файл mocks.json`;


module.exports = {
  getHelp: () => {
    console.log(text);
  }
};