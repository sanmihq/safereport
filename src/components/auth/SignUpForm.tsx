"use client";

import { useState } from "react";
import { signUpWithEmail, signInWithGoogle, continueAsGuest } from "@/lib/auth";
import { Button, Form, Input } from "@heroui/react";
import OAuthButton from "@/components/auth/OAuthButton";
import { Links } from "@/config/links.config";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    await signUpWithEmail(firstName, lastName, email, password);
    router.push("/dashboard");
  }

  const inputStyles = {
    inputWrapper: "bg-gray-50 border-gray-200 shadow-none",
    input: "text-sm",
  };

  return (
    <div className="mx-auto w-full max-w-[480px] rounded-3xl bg-white p-8 shadow-xl sm:p-10">
      <h1 className="mb-6 text-center text-2xl font-bold text-[#1a1e29]">
        Create your account
      </h1>

      <div className="space-y-6">
        <OAuthButton
          icon="/assets/logos/google.svg"
          label="Continue with Google"
          onClick={signInWithGoogle}
        />

        <div className="relative flex items-center py-2">
          <div className="grow border-t border-gray-200" />
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="grow border-t border-gray-200" />
        </div>

        <Form onSubmit={handleSignup} className="space-y-4">
          <div className="flex gap-4">
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              variant="bordered"
              radius="sm"
              size="lg"
              classNames={inputStyles}
            />
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              variant="bordered"
              radius="sm"
              size="lg"
              classNames={inputStyles}
            />
          </div>

          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="bordered"
            radius="sm"
            size="lg"
            classNames={inputStyles}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="bordered"
            radius="sm"
            size="lg"
            classNames={inputStyles}
          />

          <p className="px-1 text-xs leading-relaxed text-gray-500">
            By creating an account, you agree to our{" "}
            <a className="underline decoration-gray-400 hover:text-gray-700">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="underline decoration-gray-400 hover:text-gray-700">
              Member Agreement
            </a>
            .
          </p>

          <Button
            type="submit"
            size="lg"
            radius="full"
            className="w-full bg-(--brand-green) text-sm font-semibold text-white shadow-md hover:bg-(--brand-green-dark)"
          >
            Create Account
          </Button>
        </Form>

        <div className="space-y-3 pt-2 text-center">
          <p className="text-sm text-gray-500">Prefer not to sign up?</p>
          <Button
            fullWidth
            size="lg"
            radius="full"
            onPress={continueAsGuest}
            className="bg-(--brand-green-light) text-sm font-semibold text-(--brand-green) hover:bg-(--brand-green-light-hover)"
          >
            Continue as Guest
          </Button>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => router.push(Links.routes.login)}
              className="font-medium text-(--brand-green) hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
