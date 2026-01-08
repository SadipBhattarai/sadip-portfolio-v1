import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );

    const text =
      `New message from *${name || "Website Visitor"}*\n\n` +
      `Name: *${name || "-"}*\n` +
      `Phone: ${phone || "-"}\n` +
      `Email: ${email || "-"}\n\n` +
      `${message}`;

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to: process.env.TWILIO_WHATSAPP_TO!,
      body: text,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to send WhatsApp" },
      { status: 500 }
    );
  }
}
