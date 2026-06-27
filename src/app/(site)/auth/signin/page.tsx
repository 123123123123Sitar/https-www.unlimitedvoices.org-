import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Sign in · Unlimited Voices",
  description: "Sign in to your Unlimited Voices account and keep learning.",
};

export default function SignInPage() {
  return (
    <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <AuthCard mode="signin" />
    </Container>
  );
}
