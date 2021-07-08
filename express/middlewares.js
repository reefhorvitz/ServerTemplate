import cors from "cors";
import bodyParser from 'body-parser';
import morgan from "../helpers/morgan";

export function loadMiddlewares(app) {
    app.use(cors());
    app.use(morgan());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}
