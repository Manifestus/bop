"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/shared/MaterialIcon";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl8WNetkq-_UYyob4te6v2lutLj-nvKl3_9kX1T-poPIPBKos-m2HCYaRXlifWdEei43t98Aw66060Ev8wKiGDEI-qR7K64xJHXcakq78EdreAoEIv6lD86hydUMiJboISwPxb8OiS5Cg41mM0PQ81PsJN-ASuWwX1-2yopUAog5kgnc8yGgrHmi_x19B9wLaspFsedcN8JiFRj-XwfmDJ10Do_765RX2sGKqqFxSpLsCsLtjYGmM4zS8r3S6Vos270sbKEWYDHR8";
const IMG_2007 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl8WNetkq-_UYyob4te6v2lutLj-nvKl3_9kX1T-poPIPBKos-m2HCYaRXlifWdEei43t98Aw66060Ev8wKiGDEI-qR7K64xJHXcakq78EdreAoEIv6lD86hydUMiJboISwPxb8OiS5Cg41mM0PQ81PsJN-ASuWwX1-2yopUAog5kgnc8yGgrHmi_x19B9wLaspFsedcN8JiFRj-XwfmDJ10Do_765RX2sGKqqFxSpLsCsLtjYGmM4zS8r3S6Vos270sbKEWYDHR8";
const IMG_2011 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSkc-2eTacF9SBA2HtJO9aX9ayB6zJJjEB4HMseHqiQcFUa-MAJmXVWSGGU8u3OZmnsat1XWum7Rs4B0D6tckgx1icGCzP4UWGjHB0Yl9YFoN9MQ7IEou8yT1Mz4lAWPBbXvsgclTjTjnyTFJ2Yp8EBjxho0dfMSi_659MyhDhYmSUaVseKBjSSnazU2L4sx4jFsqKTxrnYEjl3VNbP9BmwqBLFnOU-cN2ivcU3LZucpcXUjPgPyUbycOv1bRAsWQEqWm8ttGyisM";
const IMG_TODAY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNyZYgjAnAmVGrOOb_M3tD7VDp-jepqe7prIivUaMTnA6BoOvScGo0Rxv3JbAyAHJcYGRHUDmiF1PkDosjctaSItLzZl8hlr74WYxNPX0T1ekQhtOcOl_wa2vnl26r4Xz0jubNMJ-5zPESznmecx12QtD5FErLbY0E1xGZ-2vEq2lAJViEzw2hv-R2aX37WCHkBkieyph4FEDj7h2H47GoSShU6nSNMGHN--ps4VBLmONReHi4LHurhZ4OqKLJtgPfEzZTMnZxWPo";

const TIMELINE_IMAGES = [IMG_2007, IMG_2011, IMG_TODAY];

export default function HistoryPage() {
  const { t } = useLanguage();
  const h = t.history;

  const timelineItems = [
    {
      year: h.timeline.t1Year,
      title: h.timeline.t1Title,
      desc: h.timeline.t1Desc,
      cta: h.timeline.t1Cta,
      tag: h.timeline.t1Tag,
      img: TIMELINE_IMAGES[0],
      accent: "bg-bop-tertiary",
    },
    {
      year: h.timeline.t2Year,
      title: h.timeline.t2Title,
      desc: h.timeline.t2Desc,
      cta: h.timeline.t2Cta,
      tag: h.timeline.t2Tag,
      img: TIMELINE_IMAGES[1],
      accent: "bg-bop-secondary-green",
    },
    {
      year: h.timeline.t3Year,
      title: h.timeline.t3Title,
      desc: h.timeline.t3Desc,
      cta: h.timeline.t3Cta,
      tag: h.timeline.t3Tag,
      img: TIMELINE_IMAGES[2],
      accent: "bg-bop-primary",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="History Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bop-primary/50 via-bop-primary/50 to-bop-primary/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-14 w-full">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/30 px-3 py-1 rounded-full">
            {h.hero.badge}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {h.hero.title}
            <span className="text-bop-secondary-container">{h.hero.titleHighlight}</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
            {h.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Foundation intro */}
      <section className="bg-bop-surface py-12 md:py-16 border-b border-bop-outline-variant">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-bop-tertiary border border-bop-tertiary/30 px-3 py-1 rounded-full mb-4">
            {h.foundation.badge}
          </span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary mb-4">{h.foundation.title}</h2>
          <p className="text-bop-on-surface-variant max-w-2xl mx-auto leading-relaxed">{h.foundation.subtitle}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bop-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="space-y-16">
            {timelineItems.map((item, idx) => (
              <div
                key={item.year}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
              >
                {/* Text */}
                <div>
                  <div className={`inline-flex items-center gap-2 mb-4`}>
                    <span className={`font-headline font-bold text-3xl ${idx === 2 ? "text-bop-primary" : idx === 1 ? "text-bop-secondary-green" : "text-bop-tertiary"}`}>
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-bop-on-surface-variant border border-bop-outline-variant px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-bop-on-surface mb-3">{item.title}</h3>
                  <p className="text-bop-on-surface-variant leading-relaxed mb-5">{item.desc}</p>

                  {idx === 2 && (
                    <div className="bg-bop-primary rounded-xl p-4 mb-5 flex items-center gap-4">
                      <div>
                        <p className="text-bop-secondary-container font-headline font-bold text-xl">{h.timeline.t3ImpactNum}</p>
                        <p className="text-white/70 text-xs">{h.timeline.t3ImpactLabel}</p>
                      </div>
                      <div className="w-px h-10 bg-white/20" />
                      <div>
                        <p className="text-white/60 text-xs font-semibold tracking-widest uppercase">{h.timeline.t3IndexLabel}</p>
                        <p className="text-bop-secondary-container text-sm font-medium">{h.timeline.t3IndexStatus}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution metrics */}
      <section className="bg-bop-primary py-14">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-headline font-bold text-bop-secondary-container text-xl mb-8 text-center">
            {h.metrics.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: h.metrics.m1Label, value: h.metrics.m1Value, status: h.metrics.m1Status },
              { label: h.metrics.m2Label, value: h.metrics.m2Value, status: h.metrics.m2Status },
            ].map((m) => (
              <div key={m.label} className="text-white">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{m.label}</span>
                  <span className="text-bop-secondary-container font-bold">{m.value}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-bop-secondary-container rounded-full" style={{ width: `${m.value}%` }} />
                </div>
                <p className="text-white/60 text-xs">{m.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-bop-surface py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <MaterialIcon name="format_quote" size={48} className="text-bop-outline-variant mb-4" filled />
          <blockquote className="font-headline text-xl md:text-2xl font-medium text-bop-on-surface leading-relaxed mb-8">
            {h.quote.text}
          </blockquote>
          <Button render={<Link href="/donar" />} className="bg-bop-tertiary text-white hover:bg-bop-tertiary-container rounded-full px-6">
            <MaterialIcon name="volunteer_activism" size={18} className="mr-2" />
            {h.quote.cta}
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bop-surface-container py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary mb-4">{h.cta.title}</h2>
          <p className="text-bop-on-surface-variant leading-relaxed mb-8">{h.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button render={<Link href="/sobre-nosotros" />} className="bg-bop-primary text-white hover:bg-bop-primary-container rounded-full px-6">
              <MaterialIcon name="groups" size={18} className="mr-2" />
              {h.cta.btn1}
            </Button>
            <Button variant="outline" render={<Link href="/donar" />} className="border-bop-outline text-bop-on-surface rounded-full px-6">
              <MaterialIcon name="volunteer_activism" size={18} className="mr-2" />
              {h.cta.btn2}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

