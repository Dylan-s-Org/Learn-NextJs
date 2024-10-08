import WelcomeTemplates from "@/emails/WelcomeTemplates";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "dylandang.test@gmail.com",
    subject: "...",
    react: <WelcomeTemplates name="Huy" />,
  });

  return NextResponse.json({});
}
