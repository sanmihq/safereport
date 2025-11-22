"use client";

import { Button } from "@heroui/react";

interface OAuthButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export default function OAuthButton({
  icon,
  label,
  onClick,
}: OAuthButtonProps) {
  return (
    <Button
      size="lg"
      variant="bordered"
      radius="full"
      startContent={<img src={icon} alt={label} className="size-4" />}
      onPress={onClick}
      className="w-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
    >
      {label}
    </Button>
  );
}
