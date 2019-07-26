module.exports = function(app) {
    app.get('/', (req, res, next) => {
        res.send(['ipad', 'iphone', 'macbook air', 'waterbottle']);
    });
}