"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Button, Card, Input, Textarea } from "@/components/ui";
import { Check } from "@/components/ui/icons";
import { getSupabaseBrowser } from "@/lib/supabase/client";
import { TABLES, type ContactInsert } from "@/lib/supabase/types";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email.trim())) next.email = "Please enter a valid email.";
    if (!message.trim()) next.message = "Please enter a message.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const supabase = getSupabaseBrowser();
      if (supabase) {
        const payload: ContactInsert = {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        };
        const { error } = await supabase.from(TABLES.contacts).insert(payload);
        if (error) throw error;
      } else {
        // Env not configured — simulate a successful send in dev/CI.
        await new Promise((r) => setTimeout(r, 600));
      }
      setSent(true);
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <Card className="p-8 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid h-16 w-16 place-items-center rounded-full bg-accent text-[var(--bg)]"
            aria-hidden="true"
          >
            <Check size={30} />
          </motion.span>
          <h2 className="mt-6 font-display text-[20px] font-semibold text-ink">
            Thanks for reaching out.
          </h2>
          <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-body">
            We&rsquo;ve received your message and will get back to you soon.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-7 sm:p-9">
      <form noValidate onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <Textarea
          label="Message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={errors.message}
        />
        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </form>
    </Card>
  );
}
