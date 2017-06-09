var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
driver.get('http://localhost/lider');