import {
  getUserDetailsFromGoogle,
  verifyGoogleAccessToken,
} from "@src/services/auth/providers/google/googleAuthService";
import { Request, Response } from "express";

export const googleAuthGetPageController = (req: Request, res: Response) => {
  const { GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_REDIRECT_URI } = process.env;
  const googleSignInURL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${GOOGLE_OAUTH_REDIRECT_URI}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;
  res.redirect(googleSignInURL);
};

export const googleCallbackController = async (req: Request, res: Response) => {
  const { code }: any = req.query;
  const { GOOGLE_OAUTH_CLIENT_ID: clientId } = process.env;

  try {
    const userDetails = await getUserDetailsFromGoogle(code, req, res);

    const isAccessTokenVerified = await verifyGoogleAccessToken(
      userDetails.data.access_token,
      clientId as string
    );
    if (!isAccessTokenVerified)
      res
        .status(403)
        .json({ error: 403, message: "you're not authenticated." });

    res.send(userDetails);
    // return c.text(code);
  } catch (error: any) {
    console.log(error);
    if (!code) {
      res.status(400).json({ error: 400, mesage: "you're doing it wrong" });
      return "you're doing it wrong";
    }
    let errorMessage = error?.message
      ? error?.message
      : "error from google callback !";
    res.status(500).json({ error: 500, message: errorMessage });
  }
};
