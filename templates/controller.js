import express from "express";
import {asyncHandler} from "../express/ErrorHandler/index";

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    res.json({});
}))

export default router;
