import morgan from 'morgan';
import logger from "./logger";
// same as 'tiny' but better safe than sorry
const format = ':method :url :status :res[content-length] - :response-time ms';

export default () => morgan(format, {
    stream: {
        write(message) {
            process.stdout.write(message);

            const [method, url, status, resultSizeBytes, _, responseTimeMs] = message.trimEnd().split(' ');
            logger.info("Morgan", {
                method, url,
                status: parseInt(status),
                resultSizeBytes: resultSizeBytes !== '-' ? parseInt(resultSizeBytes) : undefined,
                responseTimeMs: parseFloat(responseTimeMs)
            });
        },
    }
});
