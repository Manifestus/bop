"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/shared/MaterialIcon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5RaXZtdTt9zyzsuGI712P1LPTf8oFt0-k3dVp7FiSH4HOyHqyH282HjFz7z1Es_70lVc4rvS-b0NyDehlZK19kCLiKBk1zjOCYEn5P2hsQUKTPVp373t7_mD03p-hnMlBAAPaelWb-IBgsKo3bjROgvBxWoVtomkNcAaf9g6OPYK0OweDycVJCKcqVVNzW15-LxSV9s1Yb_MQDsSYEc8O0lTxPN81UJZCoYf8CHYCYkY3I4kkULjNP8K3CI6DOir3ORXV7zbFv9c";

const SOCIALS = [
  { icon: "facebook", label: "Facebook", href: "#", color: "bg-[#1877F2]" },
  { icon: "alternate_email", label: "Twitter / X", href: "#", color: "bg-[#14171A]" },
  { icon: "photo_camera", label: "Instagram", href: "#", color: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" },
  { icon: "play_circle", label: "YouTube", href: "#", color: "bg-[#FF0000]" },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Contact Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bop-primary/55 via-bop-primary/50 to-bop-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-12 w-full">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/30 px-3 py-1 rounded-full">
            {c.hero.badge}
          </span>
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
            {c.hero.title}
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-bop-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">

          {/* Left: Office info */}
          <div className="space-y-6">
            {/* Office card */}
            <div className="bg-bop-surface-container rounded-2xl p-6">
              <p className="font-headline font-bold text-bop-primary mb-4">{c.office.officeTitle}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-bop-primary/10 flex items-center justify-center shrink-0">
                    <MaterialIcon name="location_on" size={18} className="text-bop-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-bop-on-surface text-sm">{c.office.officeAddress}</p>
                    <p className="text-bop-on-surface-variant text-sm">{c.office.officeCity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-bop-primary/10 flex items-center justify-center shrink-0">
                    <MaterialIcon name="phone" size={18} className="text-bop-primary" />
                  </div>
                  <p className="text-bop-on-surface-variant text-sm">{c.office.directPhone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-bop-primary/10 flex items-center justify-center shrink-0">
                    <MaterialIcon name="mail" size={18} className="text-bop-primary" />
                  </div>
                  <p className="text-bop-on-surface-variant text-sm">{c.office.directEmail}</p>
                </div>
              </div>
              <Button render={<Link href="#" />} variant="outline" size="sm" className="mt-4 rounded-full border-bop-outline text-bop-primary text-xs">
                <MaterialIcon name="map" size={14} className="mr-1" />
                {c.office.openMaps}
              </Button>
            </div>

            {/* Hours */}
            <div className="bg-bop-surface-container rounded-2xl p-6">
              <p className="font-headline font-bold text-bop-primary mb-4">{c.office.hoursTitle}</p>
              <div className="space-y-2">
                {[
                  { day: c.office.hoursMF, time: c.office.hoursMFTime, open: true },
                  { day: c.office.hoursSat, time: c.office.hoursSatTime, open: true },
                  { day: c.office.hoursSun, time: c.office.hoursSunTime, open: false },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center py-2 border-b border-bop-outline-variant/30 last:border-0">
                    <span className="text-bop-on-surface text-sm font-medium">{row.day}</span>
                    <span className={`text-sm ${row.open ? "text-bop-secondary-green font-medium" : "text-bop-on-surface-variant"}`}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alliance */}
            <div className="bg-bop-primary rounded-2xl p-6 text-white">
              <p className="font-headline font-bold text-bop-secondary-container mb-2">{c.office.allianceTitle}</p>
              <p className="text-white/75 text-sm leading-relaxed mb-4">{c.office.allianceDesc}</p>
              <Button render={<Link href="#" />} size="sm" className="bg-white text-bop-primary hover:bg-white/90 rounded-full text-xs">
                <MaterialIcon name="handshake" size={14} className="mr-1" />
                {c.office.allianceCta}
              </Button>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-7 border border-bop-outline-variant/30 shadow-sm">
            <h2 className="font-headline font-bold text-bop-primary text-xl mb-1">{c.form.title}</h2>
            <p className="text-bop-on-surface-variant text-sm mb-6">{c.form.subtitle}</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-bop-secondary-green/10 flex items-center justify-center mb-4">
                  <MaterialIcon name="check_circle" size={36} className="text-bop-secondary-green" filled />
                </div>
                <h3 className="font-headline font-bold text-bop-on-surface text-lg mb-2">¡Mensaje enviado!</h3>
                <p className="text-bop-on-surface-variant text-sm">Te responderemos en menos de 24 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-bop-on-surface-variant text-xs mb-1">
                    {c.form.nameLabel}
                  </Label>
                  <Input
                    id="name"
                    placeholder={c.form.namePlaceholder}
                    required
                    className="rounded-xl border-bop-outline-variant"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-bop-on-surface-variant text-xs mb-1">
                    {c.form.emailLabel}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={c.form.emailPlaceholder}
                    required
                    className="rounded-xl border-bop-outline-variant"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-bop-on-surface-variant text-xs mb-1">
                    {c.form.subjectLabel}
                  </Label>
                  <Select>
                    <SelectTrigger id="subject" className="rounded-xl border-bop-outline-variant">
                      <SelectValue placeholder={c.form.subjectLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{c.form.opt1}</SelectItem>
                      <SelectItem value="donate">{c.form.opt2}</SelectItem>
                      <SelectItem value="volunteer">{c.form.opt3}</SelectItem>
                      <SelectItem value="press">{c.form.opt4}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-bop-on-surface-variant text-xs mb-1">
                    {c.form.messageLabel}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={c.form.messagePlaceholder}
                    rows={5}
                    required
                    className="rounded-xl border-bop-outline-variant resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-bop-primary text-white hover:bg-bop-primary-container rounded-full">
                  <MaterialIcon name="send" size={16} className="mr-2" />
                  {c.form.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="bg-bop-surface-container py-12">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-headline font-bold text-bop-primary text-xl mb-2">{c.social.title}</h2>
          <p className="text-bop-on-surface-variant text-sm mb-8">{c.social.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium ${s.color} hover:opacity-90 transition-opacity`}
              >
                <MaterialIcon name={s.icon} size={18} className="text-white" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-bop-inverse-surface py-14">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <MaterialIcon name="format_quote" size={40} className="text-bop-secondary-container mb-4" filled />
          <blockquote className="font-headline text-lg md:text-xl font-medium text-bop-inverse-on-surface leading-relaxed mb-4">
            {c.quote.text}
          </blockquote>
          <p className="text-bop-inverse-on-surface/60 text-sm">{c.quote.author}</p>
        </div>
      </section>
    </>
  );
}

