var controller = require('./controllers');

module.exports = function(app){
    app.get('/api/donations',controller.all);
    app.post('/api/donations',controller.new);
    app.get('/api/donations/stories',controller.stories);
    app.put('/api/donations/:id',controller.like);
    app.put('/api/donations/remove/:id',controller.dislike);
    app.delete('/api/donations',controller.delete);
}
