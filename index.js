import {loadHandlers} from "./lib/EventHandler/runner";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import express from 'express';
import {loadErrorHandler} from "./express/ErrorHandler";
import loadRoutes from "./express/routes";
import {loadMiddlewares} from "./express/middlewares";
import logger from "./helpers/logger";
const app = express();
const PORT = process.env.PORT || 9999;


async function run() {
    await loadHandlers();
    loadMiddlewares(app);
    loadRoutes(app);
    loadErrorHandler(app);
    logger.info({message: "started app"});
    app.listen(PORT, () => console.log("express server started at port "+PORT));
}

process.on('uncaughtException', (err) => {
    logger.error('service carshed', err);
    // process.exit()
    setTimeout(() => process.exit(), 5000)
});

run();
