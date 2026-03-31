"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { t, toggleLanguage } = useLanguage()
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/sobre-nosotros", label: t.nav.about },
    { href: "/proyectos", label: t.nav.projects },
    { href: "/historia", label: t.nav.history },
    { href: "/contacto", label: t.nav.contact },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <nav className="hidden md:flex sticky top-0 z-50 glass-header border-b border-bop-outline-variant">
      <div className="max-w-7xl mx-auto px-6 py-4 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-headline font-bold text-xl text-bop-primary tracking-tight">
          {t.nav.brand}
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? "text-bop-primary bg-bop-surface-container"
                  : "text-bop-on-surface-variant hover:text-bop-on-surface hover:bg-bop-surface-container"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Lang switcher + Donate */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-semibold tracking-widest text-bop-on-surface-variant border border-bop-outline-variant rounded-full hover:bg-bop-surface-container transition-colors"
          >
            {t.nav.lang}
          </button>
          <Button render={<Link href="/donar" />} className="bg-bop-primary text-white hover:bg-bop-primary-container rounded-full px-5">
            {t.nav.donate}
          </Button>
        </div>
      </div>
    </nav>
  )
}
