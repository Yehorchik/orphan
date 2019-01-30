var controller = require('./controllers');

module.exports = function(app){
    app.get('/api/donations',controller.all);
    app.post('/api/donations',controller.new);
}
