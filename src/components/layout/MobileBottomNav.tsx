"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Newspaper, ListOrdered, CirclePlus, Map } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const items = [
    { label: "Home", href: "/", icon: Home },
    { label: "Map", href: "/map", icon: Map },
    { label: "Report", href: "/report", icon: CirclePlus },
    { label: "Feed", href: "/feed", icon: ListOrdered },
    { label: "News", href: "/news", icon: Newspaper },
  ];

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-black/10 bg-white px-8 py-4 sm:hidden">
      <ul className="flex justify-between">
        {items.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;

          return (
            <li key={href}>
              <Link href={href} className="flex flex-col items-center gap-1">
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className={active ? "text-[--brand-green]" : "text-gray-500"}
                />
                <span
                  className={`text-xs ${
                    active
                      ? "font-medium text-[--brand-green]"
                      : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
