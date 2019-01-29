var controller = require('./controllers');

module.exports = function(app){
    app.get('/api/dontaitons',controller.all);
    app.post('/api/donations',controller.new);
}
