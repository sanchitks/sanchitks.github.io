"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available; the email is still visible to copy by hand
    }
  };

  return (
    <button className="btn btn-ghost" onClick={copy}>
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
