# Express JS

* Other frameworks that are worth checking out once you have got to grips with Node include: Flatiron, Geddy, and Taco.
* **Jade** for template

## Ouvindo em uma porta

* npm init
* npm install Express
* criar index.js

            ```

                var express = require('express');
                var app = express();

                app.get('/', function(req, res) {
                    res.send('Hello World!');
                });

                app.listen(3000, function() {
                    console.log('Example app listening on port 3000!');
                });
            ```

* node js


## scafolding do Express

* npm install express-generator
* express --view=jade myapp
* cd myapp
* npm install
* DEBUG=myapp:* npm start

