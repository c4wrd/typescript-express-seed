import { SetupRouter } from './routes/setup-router';
import * as express from 'express';

var server = express();

SetupRouter(server);

server.listen(3000, () => {
    console.log("listeninig");
});
