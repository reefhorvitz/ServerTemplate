import {getIn} from "./objects";

export function getReadableError(err) {
    const readableErr = getIn(err, ['response', 'data', 'readable_error']);
    const message = getIn(err, ['response', 'data', 'message'])
    const stackMessage = getIn(err, ['message'])
    return readableErr || message || stackMessage;
}

