"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"
import { MaterialIcon } from "@/components/shared/MaterialIcon"

export function BottomNav() {
  const { t } = useLanguage()
  const pathname = usePathname()

  const items = [
    { href: "/", icon: "home", label: t.mobileNav.home },
    { href: "/sobre-nosotros", icon: "info", label: t.mobileNav.about },
    { href: "/historia", icon: "account_tree", label: t.mobileNav.history },
    { href: "/donar", icon: "volunteer_activism", label: t.mobileNav.donate },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bop-surface border-t border-bop-outline-variant pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item) => {
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors min-w-[56px]"
            >
              <div className={`p-1 rounded-full transition-colors ${active ? "bg-bop-primary/10" : ""}`}>
                <MaterialIcon
                  name={item.icon}
                  size={22}
                  filled={active}
                  className={active ? "text-bop-primary" : "text-bop-on-surface-variant"}
                />
              </div>
              <span className={`text-[10px] font-medium ${active ? "text-bop-primary" : "text-bop-on-surface-variant"}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

