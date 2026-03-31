"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaterialIcon } from "@/components/shared/MaterialIcon";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVO3K6GoDXjlxLkmoJbD9UL17zkQR54M2Zh55PdLi3ZBhCe-GU2qa6xgek_cwnE21w58kJVtYtPuE8hPNDaALJDnkFExmhFWiFX60iah4kW1guCf7DBFxPzJjf5RIZYHO1Tg52lxrsnhyiSU6gtD93v7pjFA8u2POv32AN2duPyqCTJbI6AcWHvbouYx91vc-v--8tT7XjYQPdWtwYFTwzmx_3H7znbNes9jExFOQv-Tr8JQSYlvvhBCMoWC9uFwCIDLlDi1T9N7o";
const IMG_ORIGIN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5RaXZtdTt9zyzsuGI712P1LPTf8oFt0-k3dVp7FiSH4HOyHqyH282HjFz7z1Es_70lVc4rvS-b0NyDehlZK19kCLiKBk1zjOCYEn5P2hsQUKTPVp373t7_mD03p-hnMlBAAPaelWb-IBgsKo3bjROgvBxWoVtomkNcAaf9g6OPYK0OweDycVJCKcqVVNzW15-LxSV9s1Yb_MQDsSYEc8O0lTxPN81UJZCoYf8CHYCYkY3I4kkULjNP8K3CI6DOir3ORXV7zbFv9c";
const IMG_ALLIANCE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNyZYgjAnAmVGrOOb_M3tD7VDp-jepqe7prIivUaMTnA6BoOvScGo0Rxv3JbAyAHJcYGRHUDmiF1PkDosjctaSItLzZl8hlr74WYxNPX0T1ekQhtOcOl_wa2vnl26r4Xz0jubNMJ-5zPESznmecx12QtD5FErLbY0E1xGZ-2vEq2lAJViEzw2hv-R2aX37WCHkBkieyph4FEDj7h2H47GoSShU6nSNMGHN--ps4VBLmONReHi4LHurhZ4OqKLJtgPfEzZTMnZxWPo";
const IMG_METRICS =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3syv0xS24tnk2f16ya8oiEbCHAQNrNiIFS-i0e-KjXglC2_NR3-CQPD0QYm9YLHiGpS2fnZm-L3iE7OutlH6qI6ekywWHpVP0Dy7hIbgCEEqMM536ucNPRypSjRpFm24Ez_qVNw8nRcY4v40CfGWBjboo7rLMDS6L9Xb0Bf8eUSbF8BjLxZ0z-S-2mhJanu_fdw79SWcS92WeKr73xJtJ9GMMWb4AYqcyxYFjunDIlIj82iWBR_Y9mX_31A8wsRKlEEQYnxa0Axg";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="About Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bop-primary/60 via-bop-primary/50 to-bop-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-14 w-full">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/30 px-3 py-1 rounded-full">
            {a.hero.badge}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {a.hero.title}
            <span className="text-bop-secondary-container">{a.hero.titleHighlight}</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mb-7 leading-relaxed">
            {a.hero.subtitle}
          </p>
          <Button render={<Link href="#impact" />} className="bg-white text-bop-primary hover:bg-white/90 font-semibold rounded-full px-6">
            {a.hero.cta} <MaterialIcon name="arrow_downward" size={16} className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Mission / Origin */}
      <section className="bg-bop-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={IMG_ORIGIN} alt="Origin" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-bop-primary text-white rounded-2xl p-5 shadow-xl w-52">
              <p className="font-headline font-bold text-lg text-bop-secondary-container">{a.mission.overlapTitle}</p>
              <p className="text-white/75 text-xs mt-1 leading-relaxed">{a.mission.overlapDesc}</p>
            </div>
          </div>
          <div className="pt-6 md:pt-0">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-bop-secondary-green border border-bop-secondary-green/30 px-3 py-1 rounded-full mb-4">
              {a.mission.originBadge}
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary mb-5">
              {a.mission.originTitle}
            </h2>
            <p className="text-bop-on-surface-variant leading-relaxed mb-4">{a.mission.originP1}</p>
            <p className="text-bop-on-surface-variant leading-relaxed mb-7">{a.mission.originP2}</p>

            <div className="bg-bop-surface-container rounded-2xl p-5 mb-6">
              <p className="font-semibold text-bop-primary text-sm mb-2">{a.mission.missionCardTitle}</p>
              <p className="text-bop-on-surface-variant text-sm leading-relaxed">{a.mission.missionCardText}</p>
            </div>

            <div className="flex gap-8">
              <div>
                <div className="font-headline text-3xl font-bold text-bop-tertiary">{a.mission.stat1Num}</div>
                <p className="text-bop-on-surface-variant text-xs mt-1">{a.mission.stat1Label}</p>
              </div>
              <div>
                <div className="font-headline text-3xl font-bold text-bop-tertiary">{a.mission.stat2Num}</div>
                <p className="text-bop-on-surface-variant text-xs mt-1">{a.mission.stat2Label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance */}
      <section className="bg-bop-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-bop-secondary-green border border-bop-secondary-green/30 px-3 py-1 rounded-full mb-4">
              {a.alliance.badge}
            </span>
            <p className="text-bop-on-surface-variant max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              {a.alliance.title}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Global card */}
            <div className="bg-white rounded-2xl p-6 border border-bop-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-bop-primary/10 flex items-center justify-center mb-4">
                <MaterialIcon name={a.alliance.globalIcon} size={24} className="text-bop-primary" />
              </div>
              <h3 className="font-headline font-bold text-bop-on-surface mb-2">{a.alliance.globalTitle}</h3>
              <p className="text-bop-on-surface-variant text-sm leading-relaxed mb-4">{a.alliance.globalDesc}</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-bop-primary/10 text-bop-primary border-0 text-xs">{a.alliance.globalTag1}</Badge>
                <Badge className="bg-bop-primary/10 text-bop-primary border-0 text-xs">{a.alliance.globalTag2}</Badge>
              </div>
            </div>

            {/* Local card */}
            <div className="bg-bop-secondary-green rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <MaterialIcon name={a.alliance.localIcon} size={24} className="text-white" />
              </div>
              <h3 className="font-headline font-bold text-white mb-2">{a.alliance.localTitle}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">{a.alliance.localDesc}</p>
              <div className="space-y-2">
                {[a.alliance.fw1, a.alliance.fw2, a.alliance.fw3].map((fw) => (
                  <div key={fw} className="flex items-center gap-2 text-white/90 text-sm">
                    <MaterialIcon name="check_circle" size={16} className="text-bop-secondary-container" filled />
                    {fw}
                  </div>
                ))}
              </div>
            </div>

            {/* Image card */}
            <div className="rounded-2xl overflow-hidden relative h-64 md:h-auto">
              <img src={IMG_ALLIANCE} alt="Alliance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                <p className="text-white/90 text-sm font-medium">{a.alliance.imgCaption}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="bg-bop-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary mb-3">{a.metrics.title}</h2>
            <p className="text-bop-on-surface-variant">{a.metrics.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                { title: a.metrics.m1Title, num: a.metrics.m1Num, desc: a.metrics.m1Desc },
                { title: a.metrics.m2Title, num: a.metrics.m2Num, desc: a.metrics.m2Desc },
              ].map((m) => (
                <div key={m.title} className="bg-bop-surface-container rounded-2xl p-6 flex gap-5 items-start">
                  <div className="font-headline text-4xl font-bold text-bop-tertiary shrink-0">{m.num}</div>
                  <div>
                    <p className="font-semibold text-bop-on-surface mb-1">{m.title}</p>
                    <p className="text-bop-on-surface-variant text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}

              <blockquote className="border-l-4 border-bop-secondary-green pl-5 py-2">
                <p className="text-bop-on-surface-variant italic leading-relaxed text-sm">{a.metrics.quoteText}</p>
                <footer className="mt-3">
                  <span className="font-semibold text-bop-primary text-sm">{a.metrics.quoteAuthor}</span>
                  <span className="text-bop-on-surface-variant text-xs ml-2">— {a.metrics.quoteLocation}</span>
                </footer>
              </blockquote>
            </div>

            <div className="rounded-2xl overflow-hidden h-80 md:h-full min-h-64">
              <img src={IMG_METRICS} alt="Impact" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact metric bars */}
      <section className="bg-bop-primary py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h3 className="font-headline font-bold text-bop-secondary-container text-xl mb-8 text-center">
            {a.impactMetrics.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: a.impactMetrics.metric1, value: a.impactMetrics.metric1Value, sublabel: a.impactMetrics.metric1Label },
              { label: a.impactMetrics.metric2, value: a.impactMetrics.metric2Value, sublabel: a.impactMetrics.metric2Label },
              { label: a.impactMetrics.metric3, value: a.impactMetrics.metric3Value, sublabel: a.impactMetrics.metric3Label },
            ].map((m) => (
              <div key={m.label} className="text-white">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{m.label}</span>
                  <span className="text-bop-secondary-container font-bold">{m.value}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-bop-secondary-container rounded-full"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
                <p className="text-white/60 text-xs">{m.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bop-surface-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary mb-4">{a.cta.title}</h2>
          <p className="text-bop-on-surface-variant leading-relaxed mb-8">{a.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button render={<Link href="/donar" />} className="bg-bop-primary text-white hover:bg-bop-primary-container rounded-full px-6">
              <MaterialIcon name="volunteer_activism" size={18} className="mr-2" />
              {a.cta.btn1}
            </Button>
            <Button variant="outline" render={<Link href="/contacto" />} className="border-bop-outline text-bop-on-surface rounded-full px-6">
              <MaterialIcon name="handshake" size={18} className="mr-2" />
              {a.cta.btn2}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

