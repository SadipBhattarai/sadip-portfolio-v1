"use client";

import { useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;
    setStatus("loading");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const name = String(formData.get("name") || "");
      const phone = String(formData.get("phone") || "");
      const email = String(formData.get("email") || "");
      const message = String(formData.get("message") || "");

      // ✅ Email subject with name
      formData.set("subject", `New message from ${name || "Website Visitor"}`);

      // 1️⃣ Send Email
      const emailRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const emailData = await emailRes.json();

      if (!emailRes.ok || !emailData?.success) {
        throw new Error("Email failed");
      }

      // 2️⃣ Send WhatsApp
      const waRes = await fetch("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const waData = await waRes.json();

      if (!waRes.ok || !waData?.success) {
        throw new Error("WhatsApp failed");
      }

      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return { formRef, handleSubmit, status };
}
