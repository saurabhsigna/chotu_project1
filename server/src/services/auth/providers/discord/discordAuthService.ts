import { Request, Response, raw } from "express";

const fetchRefreshToken = async (
  req: Request,
  res: Response,
  refreshToken: string
) => {
  const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET }: any = process.env;
  const formData = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: "refresh_token",

    refresh_token: refreshToken,
  });
  const targetUrl = "https://discord.com/api/v8/oauth2/token";
  const rawOutput = await fetch(targetUrl, { method: "POST", body: formData });
  const output = await rawOutput.json();
  if (!rawOutput.ok) {
    console.log("hereer");
    res
      .status(rawOutput.status)
      .json({ error: rawOutput.status, message: output });
  }

  return output;
};

const fetchAccessToken = async (req: Request, res: Response) => {
  const { code } = req.query;
  if (!code) res.status(400).json({ error: 400, message: "code is required" });
  const {
    DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET,
    DISCORD_REDIRECT_URI,
  }: any = process.env;
  const formData = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code: code?.toString() as string,
    redirect_uri: DISCORD_REDIRECT_URI,
  });

  const rawOutput = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });
  const parsedOutput: any = await rawOutput.json();
  if (!rawOutput.ok) {
    res
      .status(rawOutput.status)
      .json({ error: rawOutput.status, message: parsedOutput });
  }

  return parsedOutput;
};
const fetchUserDetailsFromAccessToken = async (accessToken: string) => {
  if (accessToken) {
    const rawUserInfo = await fetch("https://discord.com/api/v9/users/@me", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    const parsedUserInfo: any = await rawUserInfo.json();
    const { id, avatar } = parsedUserInfo;
    const profilePic = `https://cdn.discordapp.com/avatars/${id}/${avatar}.webp`;
    parsedUserInfo.profilePic = profilePic;
    return parsedUserInfo;
  }
};
export { fetchRefreshToken, fetchAccessToken, fetchUserDetailsFromAccessToken };
