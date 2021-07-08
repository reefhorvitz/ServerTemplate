import winston from 'winston';
import config from 'config';
import {ElasticsearchTransport} from "winston-elasticsearch";
const {env} = config;
const { node, level, auth } = config.logger;

const serviceName = "";
const index = "";

const esTransportOpts = {
    level,
    clientOpts:{node, auth},
    index
};

const esTransport = new ElasticsearchTransport(esTransportOpts);

const logger = winston.createLogger({
    level,
    format: winston.format.json(),
    defaultMeta: { service: serviceName, environment: env },
    transports: [
        new winston.transports.Console(),
        esTransport
    ],
});

export default logger;
