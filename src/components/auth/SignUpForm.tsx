"use client";

import { useState } from "react";
import { signUpWithEmail, signInWithGoogle } from "@/lib/auth";
import { Button, Input, Divider } from "@heroui/react";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    await signUpWithEmail(firstName, lastName, email, password);
    window.location.href = "/dashboard";
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      <form onSubmit={handleSignup} className="space-y-4">
        <Input
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" color="primary" fullWidth>
          Create Account
        </Button>
      </form>

      <Divider />

      <Button onPress={signInWithGoogle} fullWidth>
        Continue with Google
      </Button>
    </div>
  );
}
