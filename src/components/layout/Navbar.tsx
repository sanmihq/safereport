"use client";

import Link from "next/link";
import { useState } from "react";
import { Links } from "@/config/links.config";
import { Button } from "@heroui/react";
import { Shield } from "lucide-react";
import { AppConfig } from "@/config/app.config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const mainLinks = ["home", "map", "report", "feed", "news"] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Shield /> {AppConfig.name}
        </Link>

        {/* Center Nav (Desktop Only) */}
        <div className="font-semi hidden items-center gap-6 sm:flex">
          {mainLinks.map((key) => (
            <Link
              key={key}
              href={Links.routes[key]}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[--brand-green]"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 sm:flex">
          <Button
            as={Link}
            radius="full"
            href={Links.routes.login}
            className="bg-(--brand-green) text-sm font-semibold text-white shadow hover:bg-(--brand-green-dark)"
          >
            Create Account
          </Button>

          <Button
            as={Link}
            radius="full"
            href={Links.routes.report}
            className="bg-red-600 text-sm font-semibold text-white hover:bg-red-500"
          >
            Report Incident
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-xl text-gray-700 sm:hidden"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="border-t border-black/10 bg-white p-4 sm:hidden">
          <div className="flex flex-col space-y-4">
            {mainLinks.map((key) => (
              <Link
                key={key}
                href={Links.routes[key]}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-[--brand-green]"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}

            <Button
              as={Link}
              radius="full"
              href={Links.routes.login}
              className="bg-(--brand-green) text-sm font-semibold text-white shadow hover:bg-(--brand-green-dark)"
            >
              Create Account
            </Button>

            <Button
              as={Link}
              radius="full"
              href={Links.routes.report}
              className="bg-red-600 text-sm font-semibold text-white hover:bg-red-500"
            >
              Report Incident
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
