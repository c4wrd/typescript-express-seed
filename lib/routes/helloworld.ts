import * as express from 'express';

function RequestHandler (request: express.Request, response: express.Response, next: express.NextFunction) {
    response.send("hello world");
}

export function route(app) {
    app.get('/', RequestHandler);
}