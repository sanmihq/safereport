"use client";

import { useState } from "react";
import { signInWithEmail, signInWithGoogle, continueAsGuest } from "@/lib/auth";
import { Button, Input, Divider } from "@heroui/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    await signInWithEmail(email, password);
    window.location.href = "/dashboard";
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <Input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />

        <Button type="submit" color="primary" fullWidth>
          Sign In
        </Button>
      </form>

      <Divider />

      <Button onPress={signInWithGoogle} fullWidth>
        Continue with Google
      </Button>

      <Button onPress={continueAsGuest} fullWidth variant="bordered">
        Continue as Guest
      </Button>
    </div>
  );
}
