import express from 'express';
import path from 'path';

const INDEX_PATH = path.resolve(__dirname, '../client/index.html');

let router = express.Router();

router.get('/', (req, res) => {
    res.render(INDEX_PATH);
});

export default router;
