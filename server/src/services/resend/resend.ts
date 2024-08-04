import { Resend } from "resend";
import { Request, Response } from "express";
import sendOtpTemplate from "./emailTemplates/sendOtp";
require("dotenv").config();
export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOTPViaResend = async (
  otp: number,
  { nickName, email, ip }: { nickName: string; email: string; ip?: string },
  res: Response
) => {
  const data: any = await resend.emails.send({
    from: "Boilerplate express <transaction@email.freeschooool.com>",
    to: email,
    subject: "Your OTP",
    text: "bye sab logs",
    react: sendOtpTemplate({
      userFirstName: nickName.split(" ")[0],
      otp,
      loginDate: new Date(),
    }),
  });

  if (data.error) {
    res.status(data.error?.statusCode).send(data?.error.message);
  }

  return new Response(JSON.stringify(data));
};
