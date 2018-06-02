import express from "express";
import {view} from "./../controllers/talk.controller.js";

const router = express.Router();
router.get("/",view);

export default router;
