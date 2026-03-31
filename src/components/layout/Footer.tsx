"use client"

import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { MaterialIcon } from "@/components/shared/MaterialIcon"

const MAP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBIGGtig7vEttP0zdUcn6wn4pltomZWSvdjg50pRbqOG7dZy-gqOQTuZQVdF9QozJjoxGixy3wD6sgT6bqo1gtgD9ZKXwdPQx031UlJZrM3ocCoOJKBDrQ-cKQeMM7Dg0FD1nPPoLKDeuQR4XcpUd80CdaEMvkUiUiauPMMBg0HZODgNdCikTlJmh1OjeUBCEVVWAgi7egLsHiEy_GnkexMgC5NCtcBT-hBduk6kqmOoLGaGVs2wNP6qoS-Dojzq4Yd1r7YRutqncA"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-bop-inverse-surface text-bop-inverse-on-surface">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand column */}
        <div className="md:col-span-1">
          <Link href="/" className="font-headline font-bold text-lg text-white block mb-3">
            {t.footer.brand}
          </Link>
          <p className="text-sm text-bop-inverse-on-surface/70 leading-relaxed">
            {t.footer.tagline}
          </p>
          <div className="flex gap-3 mt-4">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Website">
              <MaterialIcon name="public" size={18} className="text-white" />
            </button>
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Share">
              <MaterialIcon name="share" size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-headline font-semibold text-sm text-white uppercase tracking-wider mb-4">
            {t.footer.navTitle}
          </h4>
          <ul className="space-y-2 text-sm text-bop-inverse-on-surface/70">
            <li><Link href="/" className="hover:text-white transition-colors">{t.footer.navHome}</Link></li>
            <li><Link href="/proyectos" className="hover:text-white transition-colors">{t.footer.navProjects}</Link></li>
            <li><Link href="/historia" className="hover:text-white transition-colors">{t.footer.navHistory}</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">{t.footer.navTransparency}</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-headline font-semibold text-sm text-white uppercase tracking-wider mb-4">
            {t.footer.legalTitle}
          </h4>
          <ul className="space-y-2 text-sm text-bop-inverse-on-surface/70">
            <li><Link href="#" className="hover:text-white transition-colors">{t.footer.legalPrivacy}</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">{t.footer.legalTerms}</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">{t.footer.legalReports}</Link></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-headline font-semibold text-sm text-white uppercase tracking-wider mb-4">
            {t.footer.locationTitle}
          </h4>
          <div className="rounded-lg overflow-hidden mb-3 h-28">
            <img src={MAP_IMG} alt="Map" className="w-full h-full object-cover opacity-80" />
          </div>
          <p className="text-sm text-bop-inverse-on-surface/70">
            {t.footer.locationCity}<br />
            {t.footer.locationCA}
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-xs text-bop-inverse-on-surface/50 text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

