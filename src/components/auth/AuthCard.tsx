"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  type AuthError,
} from "firebase/auth";
import { Button, Card, Input } from "@/components/ui";
import { Check } from "@/components/ui/icons";
import { Logo } from "@/components/Logo";
import {
  getFirebase,
  googleProvider,
  isFirebaseConfigured,
} from "@/lib/firebase/config";

type Mode = "signin" | "signup";

const benefits = [
  "Every course free, forever",
  "Track XP, streaks and progress",
  "Earn verified credentials",
  "Join hackathons and contests",
];

/** Monochrome "G" mark — single currentColor stroke, no multicolor logo. */
function GoogleMark() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.2c0 5-3.5 8.3-8.7 8.3a8.5 8.5 0 1 1 5.7-14.8" />
      <path d="M21 12.2h-8.3" />
    </svg>
  );
}

/** Map common Firebase auth error codes to plain, friendly messages. */
function friendlyError(code: string): string {
  switch (code) {
    case "auth/invalid-email":
      return "That email address doesn't look right.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/user-not-found":
    case "auth/invalid-credential":
      return "We couldn't find an account with those details.";
    case "auth/wrong-password":
      return "That password is incorrect.";
    case "auth/email-already-in-use":
      return "An account already exists with that email.";
    case "auth/weak-password":
      return "Please choose a password with at least 6 characters.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment and try again.";
    case "auth/popup-closed-by-user":
      return "The Google sign-in window was closed before finishing.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function AuthCard({ mode }: { mode: Mode }) {
  const router = useRouter();
  const isSignup = mode === "signup";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const emailError =
    touched && !isValidEmail(email) ? "Enter a valid email address." : undefined;
  const passwordError =
    touched && password.length < 6
      ? "Password must be at least 6 characters."
      : undefined;
  const confirmError =
    touched && isSignup && confirm !== password
      ? "Passwords don't match."
      : undefined;

  const isValid =
    isValidEmail(email) &&
    password.length >= 6 &&
    (!isSignup || confirm === password);

  function goToDashboard() {
    router.push("/dashboard");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    setFormError(null);
    if (!isValid) return;

    setLoading(true);

    // Not configured → simulate a successful flow for the demo.
    if (!isFirebaseConfigured) {
      setTimeout(goToDashboard, 600);
      return;
    }

    const fb = getFirebase();
    if (!fb) {
      setTimeout(goToDashboard, 600);
      return;
    }

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(fb.auth, email, password);
      } else {
        await signInWithEmailAndPassword(fb.auth, email, password);
      }
      goToDashboard();
    } catch (err) {
      const code = (err as AuthError)?.code ?? "";
      setFormError(friendlyError(code));
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setFormError(null);

    if (!isFirebaseConfigured) {
      setGoogleLoading(true);
      setTimeout(goToDashboard, 600);
      return;
    }

    const fb = getFirebase();
    if (!fb) {
      setGoogleLoading(true);
      setTimeout(goToDashboard, 600);
      return;
    }

    setGoogleLoading(true);
    try {
      await signInWithPopup(fb.auth, googleProvider);
      goToDashboard();
    } catch (err) {
      const code = (err as AuthError)?.code ?? "";
      setFormError(friendlyError(code));
      setGoogleLoading(false);
    }
  }

  const busy = loading || googleLoading;

  return (
    <Card className="mx-auto w-full max-w-[960px] overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* LEFT — quiet value panel (hidden on small screens) */}
        <aside className="hidden flex-col justify-between bg-surface-2 p-10 lg:flex">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-caption">
              {isSignup ? "Create your account" : "Welcome back"}
            </span>
            <h2 className="mt-5 max-w-[18ch] font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink">
              {isSignup
                ? "Start learning for free, and keep what you build."
                : "Pick up right where you left off."}
            </h2>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-body">
              One account for every course, contest and credential. Open to every
              student.
            </p>
          </div>

          <ul className="mt-10 space-y-3.5">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-accent">
                  <Check size={18} />
                </span>
                <span className="text-[15px] leading-snug text-body">{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT — focused form */}
        <div className="p-7 sm:p-10">
          <div className="mx-auto w-full max-w-[420px]">
            <Logo />

            <h1 className="mt-8 font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
              {isSignup ? "Create your account" : "Sign in"}
            </h1>
            <p className="mt-2 text-[15px] text-body">
              {isSignup
                ? "It takes less than a minute."
                : "Welcome back. Let's keep going."}
            </p>

            {!isFirebaseConfigured && (
              <p className="mt-5 rounded-[10px] border border-hairline bg-surface-2 px-3.5 py-2.5 text-[13px] leading-snug text-caption">
                Demo mode. Connect Firebase to enable real accounts.
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <Input
                label="Email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                disabled={busy}
              />
              <Input
                label="Password"
                type="password"
                autoComplete={isSignup ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                disabled={busy}
              />
              {isSignup && (
                <Input
                  label="Confirm password"
                  type="password"
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  error={confirmError}
                  disabled={busy}
                />
              )}

              {formError && (
                <p
                  role="alert"
                  className="rounded-[10px] border border-red-500/40 bg-red-500/5 px-3.5 py-2.5 text-[13px] leading-snug text-red-500"
                >
                  {formError}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={busy}
              >
                {loading
                  ? isSignup
                    ? "Creating account…"
                    : "Signing in…"
                  : isSignup
                    ? "Create account"
                    : "Sign in"}
              </Button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-hairline" />
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-caption">
                or
              </span>
              <span className="h-px flex-1 bg-hairline" />
            </div>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={handleGoogle}
              disabled={busy}
            >
              <GoogleMark />
              {googleLoading ? "Connecting…" : "Continue with Google"}
            </Button>

            <p className="mt-7 text-center text-[14px] text-body">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <Link
                    href="/auth/signin"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    Sign in
                  </Link>
                </>
              ) : (
                <>
                  New here?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    Create an account
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
