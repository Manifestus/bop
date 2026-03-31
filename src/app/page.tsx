"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaterialIcon } from "@/components/shared/MaterialIcon";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5RaXZtdTt9zyzsuGI712P1LPTf8oFt0-k3dVp7FiSH4HOyHqyH282HjFz7z1Es_70lVc4rvS-b0NyDehlZK19kCLiKBk1zjOCYEn5P2hsQUKTPVp373t7_mD03p-hnMlBAAPaelWb-IBgsKo3bjROgvBxWoVtomkNcAaf9g6OPYK0OweDycVJCKcqVVNzW15-LxSV9s1Yb_MQDsSYEc8O0lTxPN81UJZCoYf8CHYCYkY3I4kkULjNP8K3CI6DOir3ORXV7zbFv9c";
const IMG_FRAMEWORK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNyZYgjAnAmVGrOOb_M3tD7VDp-jepqe7prIivUaMTnA6BoOvScGo0Rxv3JbAyAHJcYGRHUDmiF1PkDosjctaSItLzZl8hlr74WYxNPX0T1ekQhtOcOl_wa2vnl26r4Xz0jubNMJ-5zPESznmecx12QtD5FErLbY0E1xGZ-2vEq2lAJViEzw2hv-R2aX37WCHkBkieyph4FEDj7h2H47GoSShU6nSNMGHN--ps4VBLmONReHi4LHurhZ4OqKLJtgPfEzZTMnZxWPo";
const IMG_LOOM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ue5yC8UNssANc-KO_fcVGyQ3S-bGyaoiyu3XLY1sjTJ_0G6rjj4mo3a-czIGRAsFV7qiByUCqbdCHiMJK63wS4UFqI-HAntdl1sWQlzTxZUpFIGngsNod1WDDlNTIMHM0zohXyhX8Er5SiQaX2ahOvuVntmkIwdlYqUh7Jjv6WL539rFEn1CBuUMe45CgO1fd0mwjullwTDaquDsDNAQt4vfd8i2_9MNt-drqEZaJQfrzAILcU3Q0Jb6OWjOPPr_xktFXouXK_k";
const IMG_TILAPIA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApnyN9-dY_MHp2v3ndhpXDQxY-tmSXmuyYBSy8yg3DxN0zk6JrYxEDoN-LPH5dNouq_R0PH9U1fjnHOKmw7g4wtUrJOD4vE6S9m6rmTTgCBPlmzKfL-FKUmgjiSGFXdz4FCrGRtz8wxX8sZHpqM8s0-6i7UQzjndWxY0tJcOiquP2QYovRUCx5WisoI8RmSjdHHgIyjcxHvCwZs3u_MDp8Kr4573aPkKV4INGqNNtHDs3wZN0OH6g6wihzBxSBpk6zkEPYiPhmh8M";
const IMG_H2007 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl8WNetkq-_UYyob4te6v2lutLj-nvKl3_9kX1T-poPIPBKos-m2HCYaRXlifWdEei43t98Aw66060Ev8wKiGDEI-qR7K64xJHXcakq78EdreAoEIv6lD86hydUMiJboISwPxb8OiS5Cg41mM0PQ81PsJN-ASuWwX1-2yopUAog5kgnc8yGgrHmi_x19B9wLaspFsedcN8JiFRj-XwfmDJ10Do_765RX2sGKqqFxSpLsCsLtjYGmM4zS8r3S6Vos270sbKEWYDHR8";
const IMG_H2011 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSkc-2eTacF9SBA2HtJO9aX9ayB6zJJjEB4HMseHqiQcFUa-MAJmXVWSGGU8u3OZmnsat1XWum7Rs4B0D6tckgx1icGCzP4UWGjHB0Yl9YFoN9MQ7IEou8yT1Mz4lAWPBbXvsgclTjTjnyTFJ2Yp8EBjxho0dfMSi_659MyhDhYmSUaVseKBjSSnazU2L4sx4jFsqKTxrnYEjl3VNbP9BmwqBLFnOU-cN2ivcU3LZucpcXUjPgPyUbycOv1bRAsWQEqWm8ttGyisM";
const IMG_CTA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVO3K6GoDXjlxLkmoJbD9UL17zkQR54M2Zh55PdLi3ZBhCe-GU2qa6xgek_cwnE21w58kJVtYtPuE8hPNDaALJDnkFExmhFWiFX60iah4kW1guCf7DBFxPzJjf5RIZYHO1Tg52lxrsnhyiSU6gtD93v7pjFA8u2POv32AN2duPyqCTJbI6AcWHvbouYx91vc-v--8tT7XjYQPdWtwYFTwzmx_3H7znbNes9jExFOQv-Tr8JQSYlvvhBCMoWC9uFwCIDLlDi1T9N7o";
const IMG_TRANSPARENCY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC3syv0xS24tnk2f16ya8oiEbCHAQNrNiIFS-i0e-KjXglC2_NR3-CQPD0QYm9YLHiGpS2fnZm-L3iE7OutlH6qI6ekywWHpVP0Dy7hIbgCEEqMM536ucNPRypSjRpFm24Ez_qVNw8nRcY4v40CfGWBjboo7rLMDS6L9Xb0Bf8eUSbF8BjLxZ0z-S-2mhJanu_fdw79SWcS92WeKr73xJtJ9GMMWb4AYqcyxYFjunDIlIj82iWBR_Y9mX_31A8wsRKlEEQYnxa0Axg";

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex flex-col">
        <div className="absolute inset-0">
          <img
            src={IMG_HERO}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bop-primary/70 via-bop-primary/50 to-bop-primary/80" />
        </div>
        <div className="relative z-10 flex-1 flex items-end md:items-center">
          <div className="max-w-7xl mx-auto px-5 md:px-8 pb-12 md:pb-0 w-full grid md:grid-cols-2 gap-10 items-end md:items-center">
            <div className="text-white">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/30 px-3 py-1 rounded-full">
                {h.hero.badge}
              </span>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {h.hero.title}
                <span className="text-bop-secondary-container">
                  {h.hero.titleHighlight}
                </span>
              </h1>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                {h.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  render={<Link href="/sobre-nosotros" />}
                  className="bg-white text-bop-primary hover:bg-white/90 font-semibold rounded-full px-6"
                >
                  {h.hero.cta1}{" "}
                  <MaterialIcon name="arrow_forward" size={16} className="ml-1" />
                </Button>
                <Button
                  variant="outline"
                  render={<Link href="/historia" />}
                  className="border-white/60 text-white hover:bg-white/10 rounded-full px-6 bg-transparent"
                >
                  {h.hero.cta2}
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-64">
                <img
                  src={IMG_TRANSPARENCY}
                  alt="Transparency"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                />
                <div className="text-center">
                  <div className="font-headline text-4xl font-bold text-bop-secondary-container">
                    {h.hero.transparencyNum}
                  </div>
                  <p className="text-white/75 text-xs mt-1 leading-relaxed">
                    {h.hero.transparencyText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="bg-bop-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-72">
            <img
              src={IMG_FRAMEWORK}
              alt="Framework"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="font-headline font-bold text-white">
                {h.framework.imageSubtitle}
              </p>
              <p className="text-white/80 text-sm">
                {h.framework.imageDesc}
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary mb-4">
              {h.framework.title}
            </h2>
            <p className="text-bop-on-surface-variant leading-relaxed mb-7">
              {h.framework.desc}
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: h.framework.f1Icon,
                  title: h.framework.f1Title,
                  desc: h.framework.f1Desc,
                },
                {
                  icon: h.framework.f2Icon,
                  title: h.framework.f2Title,
                  desc: h.framework.f2Desc,
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-4 rounded-xl bg-bop-surface-container"
                >
                  <div className="w-10 h-10 rounded-full bg-bop-primary/10 flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name={f.icon} size={20} className="text-bop-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-bop-on-surface text-sm mb-1">
                      {f.title}
                    </p>
                    <p className="text-bop-on-surface-variant text-sm">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bop-primary py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-3 gap-6 text-center">
          {[
            { num: h.stats.s1Num, label: h.stats.s1Label },
            { num: h.stats.s2Num, label: h.stats.s2Label },
            { num: h.stats.s3Num, label: h.stats.s3Label },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl md:text-5xl font-bold text-bop-secondary-container">
                {s.num}
              </div>
              <div className="text-white/70 text-xs md:text-sm mt-1 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-bop-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-10 md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-bop-secondary-green border border-bop-secondary-green/30 px-3 py-1 rounded-full mb-3">
                {h.projects.badge}
              </span>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary">
                {h.projects.title}
              </h2>
            </div>
            <p className="text-bop-on-surface-variant text-sm max-w-xs mt-3 md:mt-0">
              {h.projects.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: IMG_LOOM,
                badge: h.projects.p1Badge,
                badgeColor: "bg-bop-tertiary",
                title: h.projects.p1Title,
                desc: h.projects.p1Desc,
                progress: 85,
                pLabel: h.projects.p1Progress,
                goal: h.projects.p1Goal,
              },
              {
                img: IMG_TILAPIA,
                badge: h.projects.p2Badge,
                badgeColor: "bg-bop-secondary-green",
                title: h.projects.p2Title,
                desc: h.projects.p2Desc,
                progress: 60,
                pLabel: h.projects.p2Progress,
                goal: h.projects.p2Goal,
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-bop-outline-variant/30 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${p.badgeColor} text-white text-xs border-0`}
                    >
                      {p.badge}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-headline font-bold text-bop-on-surface mb-2">
                    {p.title}
                  </h3>
                  <p className="text-bop-on-surface-variant text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="h-1.5 bg-bop-surface-container-highest rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full bg-bop-secondary-green rounded-full"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-bop-on-surface-variant">
                    <span>{p.pLabel}</span>
                    <span>{p.goal}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-bop-secondary-green rounded-2xl p-6 flex flex-col justify-between">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MaterialIcon name={h.projects.envIcon} size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-white text-lg mb-2">
                  {h.projects.envTitle}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {h.projects.envDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-bop-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary whitespace-nowrap">
              {h.history.title}
            </h2>
            <div className="flex-1 h-px bg-bop-outline-variant" />
          </div>
          <div className="space-y-14">
            {[
              {
                year: h.history.e1Year,
                title: h.history.e1Title,
                desc: h.history.e1Desc,
                img: IMG_H2007,
                reverse: false,
              },
              {
                year: h.history.e2Year,
                title: h.history.e2Title,
                desc: h.history.e2Desc,
                img: IMG_H2011,
                reverse: true,
              },
            ].map((e) => (
              <div
                key={e.year}
                className={`grid md:grid-cols-2 gap-8 items-center`}
              >
                <div className={e.reverse ? "md:order-2" : ""}>
                  <div className="inline-block font-headline font-bold text-bop-tertiary text-xl mb-3 border-b-2 border-bop-tertiary pb-1">
                    {e.year}
                  </div>
                  <h3 className="font-headline text-xl font-bold text-bop-on-surface mb-3">
                    {e.title}
                  </h3>
                  <p className="text-bop-on-surface-variant leading-relaxed">
                    {e.desc}
                  </p>
                </div>
                <div
                  className={`rounded-2xl overflow-hidden h-56 ${
                    e.reverse ? "md:order-1" : ""
                  }`}
                >
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bop-surface-container py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden">
            <div className="h-56 md:h-auto">
              <img
                src={IMG_CTA}
                alt="CTA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-bop-inverse-surface p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-4">
                {h.cta.title}
              </h2>
              <p className="text-bop-inverse-on-surface/80 leading-relaxed mb-8">
                {h.cta.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button render={<Link href="/contacto" />} className="bg-white text-bop-primary hover:bg-white/90 rounded-full">
                  <MaterialIcon name={h.cta.btn1Icon} size={18} className="mr-2" />
                  {h.cta.btn1}
                </Button>
                <Button
                  variant="outline"
                  render={<Link href="#" />}
                  className="border-white/60 text-white hover:bg-white/10 rounded-full bg-transparent"
                >
                  <MaterialIcon name={h.cta.btn2Icon} size={18} className="mr-2" />
                  {h.cta.btn2}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
