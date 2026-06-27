import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Sign up · Unlimited Voices",
  description:
    "Create your free Unlimited Voices account. Every course free, forever.",
};

export default function SignUpPage() {
  return (
    <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <AuthCard mode="signup" />
    </Container>
  );
}
