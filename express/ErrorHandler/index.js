import { getReadableError } from "../../helpers/error";

export const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

export function loadErrorHandler(app) {
    app.use((err, req, res, next) => {
        if (typeof err === 'string') {
            err = { msg: err };
        }
        err.statusCode = err.statusCode || 500;
        const message = getReadableError(err);
        res.status(err.statusCode).json({
            message, err
        })
    });
}
