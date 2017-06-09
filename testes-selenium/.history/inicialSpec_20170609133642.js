define(['jquery'], function($) {

    describe('just checking', function() {

        it('works for app', function() {
            window.alert($);
        });

    });

});
// describe('teste', function() {

//     it('executando', function() {

//         // var webdriver = require('selenium-webdriver'),
//         //     By = webdriver.By,
//         //     until = webdriver.until;

//         // var driver = new webdriver.Builder()
//         //     .forBrowser('firefox')
//         //     .build();

//         // driver.get('http://localhost/lider');

//         window.alert('============executando========');

//         // var By = require('selenium-webdriver').By;
//         // var until = require('selenium-webdriver').until;
//         // var firefox = require('selenium-webdriver/firefox');

//         // window.alert(By);

//         var fs = require('jquer');

//     });
// });

// var driver = new webdriver.Builder().build();
// driver.get('http://www.google.com');

// var element = driver.findElement(webdriver.By.name('q'));
// element.sendKeys('Cheese!');
// element.submit();

// driver.getTitle().then(function(title) {
//   console.log('Page title is: ' + title);
// });

// driver.wait(function() {
//   return driver.getTitle().then(function(title) {
//     return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
//   });
// }, 3000);

// driver.getTitle().then(function(title) {
//   console.log('Page title is: ' + title);
// });

// driver.quit();