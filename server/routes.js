'use strict';

module.exports = function(express, path) {

    const HOME_PAGE = path.resolve(__dirname, '../client/index.html');

    let router = express.Router();

    router.get('/', (req, res) => {
        res.sendFile(HOME_PAGE);
    });

    router.get('/about', (req, res) => {
        res.send('Hello about page');
    });

    router.get('/about', (req, res) => {
        res.send('Hello about page');
    });

    return router;
};
