"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { MaterialIcon } from "@/components/shared/MaterialIcon"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function TopAppBar() {
  const { t, toggleLanguage } = useLanguage()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/sobre-nosotros", label: t.nav.about },
    { href: "/proyectos", label: t.nav.projects },
    { href: "/historia", label: t.nav.history },
    { href: "/contacto", label: t.nav.contact },
  ]

  return (
    <header className="md:hidden sticky top-0 z-50 glass-header border-b border-bop-outline-variant">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="p-1 text-bop-on-surface" aria-label="Menu">
            <MaterialIcon name="menu" size={24} />
          </SheetTrigger>
          <SheetContent side="left" className="bg-bop-surface border-bop-outline-variant w-72">
            <SheetHeader>
              <SheetTitle className="font-headline text-bop-primary text-left">
                {t.nav.brand}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-bop-on-surface hover:bg-bop-surface-container rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-bop-outline-variant">
                <Link
                  href="/donar"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-bop-primary hover:bg-bop-surface-container rounded-lg transition-colors"
                >
                  <MaterialIcon name="volunteer_activism" size={20} />
                  {t.nav.donate}
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Brand */}
        <Link href="/" className="font-headline font-bold text-base text-bop-primary">
          {t.nav.brand}
        </Link>

        {/* Language toggle + Donate icon */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="text-xs font-semibold tracking-widest text-bop-on-surface-variant px-2 py-1 border border-bop-outline-variant rounded-full"
          >
            {t.nav.lang}
          </button>
        </div>
      </div>
    </header>
  )
}

