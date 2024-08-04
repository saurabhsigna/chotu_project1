import {
  googleAuthGetPageController,
  googleCallbackController,
} from "@src/controllers/oauth.google.controller";

import express from "express";

const googleAuthRouter = express.Router();

googleAuthRouter.get("/", googleAuthGetPageController);
googleAuthRouter.get("/callback", googleCallbackController);
export { googleAuthRouter };
