const Persons = require('../controllers/persons');

module.exports = function(app){
    app.get('/', Persons.getAll);
    app.get('/new/:name/', Persons.create);
    app.get('/:name',Persons.view);
    app.get('/remove/:name',Persons.remove);
}