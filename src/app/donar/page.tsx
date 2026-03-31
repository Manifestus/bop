"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaterialIcon } from "@/components/shared/MaterialIcon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVO3K6GoDXjlxLkmoJbD9UL17zkQR54M2Zh55PdLi3ZBhCe-GU2qa6xgek_cwnE21w58kJVtYtPuE8hPNDaALJDnkFExmhFWiFX60iah4kW1guCf7DBFxPzJjf5RIZYHO1Tg52lxrsnhyiSU6gtD93v7pjFA8u2POv32AN2duPyqCTJbI6AcWHvbouYx91vc-v--8tT7XjYQPdWtwYFTwzmx_3H7znbNes9jExFOQv-Tr8JQSYlvvhBCMoWC9uFwCIDLlDi1T9N7o";
const IMG_TRANSPARENCY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3syv0xS24tnk2f16ya8oiEbCHAQNrNiIFS-i0e-KjXglC2_NR3-CQPD0QYm9YLHiGpS2fnZm-L3iE7OutlH6qI6ekywWHpVP0Dy7hIbgCEEqMM536ucNPRypSjRpFm24Ez_qVNw8nRcY4v40CfGWBjboo7rLMDS6L9Xb0Bf8eUSbF8BjLxZ0z-S-2mhJanu_fdw79SWcS92WeKr73xJtJ9GMMWb4AYqcyxYFjunDIlIj82iWBR_Y9mX_31A8wsRKlEEQYnxa0Axg";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export default function DonarPage() {
  const { t } = useLanguage();
  const d = t.donate;

  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedAmount = custom ? Number(custom) : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[48vh] flex items-end">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Donate Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bop-secondary-green/60 via-bop-primary/60 to-bop-primary/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-14 w-full">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/30 px-3 py-1 rounded-full">
            {d.hero.badge}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {d.hero.title}
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
            {d.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-white/15 text-white border-0 text-xs px-3 py-1.5 backdrop-blur-sm">
              <MaterialIcon name="group" size={14} className="mr-1" />
              {d.hero.donorCount}
            </Badge>
            <Badge className="bg-bop-secondary-container text-bop-primary border-0 text-xs px-3 py-1.5">
              <MaterialIcon name="verified" size={14} className="mr-1" />
              {d.hero.impactBadge}
            </Badge>
          </div>
        </div>
      </section>

      {/* Impact note */}
      <div className="bg-bop-secondary-green py-3 text-center">
        <p className="text-white text-sm font-medium">
          <MaterialIcon name="volunteer_activism" size={16} className="mr-1 inline align-middle" />
          {d.hero.impactText}
        </p>
      </div>

      {/* Main content */}
      <section className="bg-bop-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-8">

          {/* Form — 2 cols */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-bop-outline-variant/30 shadow-sm text-center">
                <div className="w-20 h-20 rounded-full bg-bop-secondary-green/10 flex items-center justify-center mx-auto mb-5">
                  <MaterialIcon name="favorite" size={40} className="text-bop-secondary-green" filled />
                </div>
                <h2 className="font-headline font-bold text-bop-primary text-2xl mb-3">¡Gracias por tu donación!</h2>
                <p className="text-bop-on-surface-variant leading-relaxed mb-6">
                  Tu generosidad construye puentes de esperanza. Recibirás un recibo por correo.
                </p>
                <Button render={<Link href="/" />} className="bg-bop-primary text-white rounded-full px-6">
                  <MaterialIcon name="home" size={18} className="mr-2" />
                  Volver al inicio
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount */}
                <div className="bg-white rounded-2xl p-6 border border-bop-outline-variant/30 shadow-sm">
                  <h2 className="font-headline font-bold text-bop-primary mb-4">{d.form.amountTitle}</h2>

                  {/* Frequency toggle */}
                  <div className="flex gap-2 mb-5">
                    {[
                      { label: d.form.monthly, value: true },
                      { label: d.form.oneTime, value: false },
                    ].map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setIsMonthly(opt.value)}
                        className={`flex-1 py-2 rounded-full text-sm font-medium border transition-colors ${
                          isMonthly === opt.value
                            ? "bg-bop-primary text-white border-bop-primary"
                            : "border-bop-outline-variant text-bop-on-surface-variant hover:bg-bop-surface-container"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {isMonthly && (
                    <p className="text-bop-secondary-green text-xs mb-4 flex items-start gap-1">
                      <MaterialIcon name="info" size={14} className="mt-0.5 shrink-0" />
                      {d.form.monthlyNote}
                    </p>
                  )}

                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {PRESET_AMOUNTS.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => { setAmount(a); setCustom(""); }}
                        className={`py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                          amount === a && !custom
                            ? "bg-bop-primary text-white border-bop-primary"
                            : "border-bop-outline-variant text-bop-on-surface hover:bg-bop-surface-container"
                        }`}
                      >
                        ${a}
                      </button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    min={1}
                    placeholder={d.form.customPlaceholder}
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setAmount(0); }}
                    className="rounded-xl border-bop-outline-variant"
                  />
                </div>

                {/* Personal details */}
                <div className="bg-white rounded-2xl p-6 border border-bop-outline-variant/30 shadow-sm">
                  <h2 className="font-headline font-bold text-bop-primary mb-4">{d.form.detailsTitle}</h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label className="text-xs text-bop-on-surface-variant mb-1">{d.form.firstName}</Label>
                      <Input required className="rounded-xl border-bop-outline-variant" />
                    </div>
                    <div>
                      <Label className="text-xs text-bop-on-surface-variant mb-1">{d.form.lastName}</Label>
                      <Input required className="rounded-xl border-bop-outline-variant" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-bop-on-surface-variant mb-1">{d.form.email}</Label>
                    <Input type="email" required className="rounded-xl border-bop-outline-variant" />
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white rounded-2xl p-6 border border-bop-outline-variant/30 shadow-sm">
                  <h2 className="font-headline font-bold text-bop-primary mb-4">{d.form.paymentTitle}</h2>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-bop-on-surface-variant mb-1">{d.form.cardLabel}</Label>
                      <Input placeholder="•••• •••• •••• ••••" className="rounded-xl border-bop-outline-variant" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-bop-on-surface-variant mb-1">{d.form.expiryLabel}</Label>
                        <Input placeholder="MM / AA" className="rounded-xl border-bop-outline-variant" />
                      </div>
                      <div>
                        <Label className="text-xs text-bop-on-surface-variant mb-1">{d.form.cvvLabel}</Label>
                        <Input placeholder="•••" className="rounded-xl border-bop-outline-variant" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-bop-surface-container rounded-xl p-4 mt-4">
                    <MaterialIcon name="lock" size={18} className="text-bop-secondary-green mt-0.5 shrink-0" filled />
                    <div>
                      <p className="text-bop-on-surface font-semibold text-xs">{d.form.secureTitle}</p>
                      <p className="text-bop-on-surface-variant text-xs mt-0.5 leading-relaxed">{d.form.secureDesc}</p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-bop-secondary-green text-white hover:bg-bop-secondary-green/90 rounded-full py-3 font-semibold text-base"
                >
                  <MaterialIcon name="volunteer_activism" size={20} className="mr-2" />
                  {isMonthly
                    ? `${d.form.monthly} — $${selectedAmount || 0} USD`
                    : `${d.form.oneTime} — $${selectedAmount || 0} USD`}
                </Button>
                <p className="text-bop-on-surface-variant text-xs text-center">{d.form.disclaimer}</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-bop-outline-variant/30 shadow-sm">
              <h3 className="font-headline font-bold text-bop-primary mb-5">{d.sidebar.title}</h3>
              <div className="space-y-4">
                {[
                  { icon: d.sidebar.i1Icon, title: d.sidebar.i1Title, desc: d.sidebar.i1Desc },
                  { icon: d.sidebar.i2Icon, title: d.sidebar.i2Title, desc: d.sidebar.i2Desc },
                  { icon: d.sidebar.i3Icon, title: d.sidebar.i3Title, desc: d.sidebar.i3Desc },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-bop-secondary-green/10 flex items-center justify-center shrink-0">
                      <MaterialIcon name={item.icon} size={18} className="text-bop-secondary-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-bop-on-surface text-sm">{item.title}</p>
                      <p className="text-bop-on-surface-variant text-xs leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress */}
            <div className="bg-bop-primary rounded-2xl p-6 text-white">
              <p className="font-headline font-bold text-bop-secondary-container mb-5">{d.sidebar.progressTitle}</p>
              <div className="space-y-4">
                {[
                  { label: d.sidebar.p1Label, value: d.sidebar.p1Value },
                  { label: d.sidebar.p2Label, value: d.sidebar.p2Value },
                ].map((p) => (
                  <div key={p.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/80">{p.label}</span>
                      <span className="text-bop-secondary-container font-bold">{p.value}%</span>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-bop-secondary-container rounded-full"
                        style={{ width: `${p.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden h-40">
              <img src={IMG_TRANSPARENCY} alt="Impact" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

