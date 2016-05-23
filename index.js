var express = require('express');
var app = express();
var mongodb = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://heroku_7mgmv4x2:due2qgtm2gj5k1fatnl5246enk@ds023912.mlab.com:23912/heroku_7mgmv4x2';
var MongoClient = mongodb.MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function (error, databaseConnection) {
    db = databaseConnection;
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/* Renders the home page */
app.get('/', function (request, response) {
    response.render('index');
});

/* Renders the recipe page depending on the meal type */
app.get('/recipes', function (request, response) {
    var meal_type = request.query.meal_type;

    db.collection('recipes').find({"meal_type":meal_type}).toArray(function (error, recipes) {
        if ( !error ) {
            response.render('recipes', {data: recipes});
        }
        else {
            response.sendStatus(500);
        }
    });
});

app.post('/addRecipe', function (request, response) {
    var meal_type = request.body.meal_type;
    var dish = request.body.dish;
    var description = request.body.description;
    var recipe = request.body.recipe;

    // Creating object to insert
    var toInsert = {
        "meal_type" : meal_type,
        "dish" : dish,
        "description" : description,
        "recipe" : recipe
    };

    db.collection('recipes').insert(toInsert, function (error, saved) {
        if ( !error ) {
            db.collection('recipes').find().toArray(function (error, recipes) {
                if ( !error ) {
                    response.send(recipes);
                }
                else {
                    response.sendStatus(500);
                }
            });
        }
        else {
            response.sendStatus(500);
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
