"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaterialIcon } from "@/components/shared/MaterialIcon";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNyZYgjAnAmVGrOOb_M3tD7VDp-jepqe7prIivUaMTnA6BoOvScGo0Rxv3JbAyAHJcYGRHUDmiF1PkDosjctaSItLzZl8hlr74WYxNPX0T1ekQhtOcOl_wa2vnl26r4Xz0jubNMJ-5zPESznmecx12QtD5FErLbY0E1xGZ-2vEq2lAJViEzw2hv-R2aX37WCHkBkieyph4FEDj7h2H47GoSShU6nSNMGHN--ps4VBLmONReHi4LHurhZ4OqKLJtgPfEzZTMnZxWPo";
const IMG_LOOM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ue5yC8UNssANc-KO_fcVGyQ3S-bGyaoiyu3XLY1sjTJ_0G6rjj4mo3a-czIGRAsFV7qiByUCqbdCHiMJK63wS4UFqI-HAntdl1sWQlzTxZUpFIGngsNod1WDDlNTIMHM0zohXyhX8Er5SiQaX2ahOvuVntmkIwdlYqUh7Jjv6WL539rFEn1CBuUMe45CgO1fd0mwjullwTDaquDsDNAQt4vfd8i2_9MNt-drqEZaJQfrzAILcU3Q0Jb6OWjOPPr_xktFXouXK_k";
const IMG_TILAPIA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApnyN9-dY_MHp2v3ndhpXDQxY-tmSXmuyYBSy8yg3DxN0zk6JrYxEDoN-LPH5dNouq_R0PH9U1fjnHOKmw7g4wtUrJOD4vE6S9m6rmTTgCBPlmzKfL-FKUmgjiSGFXdz4FCrGRtz8wxX8sZHpqM8s0-6i7UQzjndWxY0tJcOiquP2QYovRUCx5WisoI8RmSjdHHgIyjcxHvCwZs3u_MDp8Kr4573aPkKV4INGqNNtHDs3wZN0OH6g6wihzBxSBpk6zkEPYiPhmh8M";
const IMG_5ADAY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5RaXZtdTt9zyzsuGI712P1LPTf8oFt0-k3dVp7FiSH4HOyHqyH282HjFz7z1Es_70lVc4rvS-b0NyDehlZK19kCLiKBk1zjOCYEn5P2hsQUKTPVp373t7_mD03p-hnMlBAAPaelWb-IBgsKo3bjROgvBxWoVtomkNcAaf9g6OPYK0OweDycVJCKcqVVNzW15-LxSV9s1Yb_MQDsSYEc8O0lTxPN81UJZCoYf8CHYCYkY3I4kkULjNP8K3CI6DOir3ORXV7zbFv9c";

const PROJECT_IMAGES = [IMG_LOOM, IMG_TILAPIA, IMG_5ADAY];

const PROJECT_BADGE_COLORS = [
  "bg-bop-tertiary",
  "bg-bop-secondary-green",
  "bg-bop-primary",
];

export default function ProyectosPage() {
  const { t } = useLanguage();
  const p = t.projects;

  const projects = [
    {
      badge: p.p1Badge,
      title: p.p1Title,
      desc: p.p1Desc,
      details: p.p1Details,
      progress: p.p1Progress,
      progressLabel: p.p1ProgressLabel,
      tags: [p.p1Tag1, p.p1Tag2],
      img: PROJECT_IMAGES[0],
      badgeColor: PROJECT_BADGE_COLORS[0],
    },
    {
      badge: p.p2Badge,
      title: p.p2Title,
      desc: p.p2Desc,
      details: p.p2Details,
      progress: p.p2Progress,
      progressLabel: p.p2ProgressLabel,
      tags: [p.p2Tag1, p.p2Tag2],
      img: PROJECT_IMAGES[1],
      badgeColor: PROJECT_BADGE_COLORS[1],
    },
    {
      badge: p.p3Badge,
      title: p.p3Title,
      desc: p.p3Desc,
      details: p.p3Details,
      progress: p.p3Progress,
      progressLabel: p.p3ProgressLabel,
      tags: [p.p3Tag1, p.p3Tag2],
      img: PROJECT_IMAGES[2],
      badgeColor: PROJECT_BADGE_COLORS[2],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Projects Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-bop-secondary-green/50 via-bop-primary/55 to-bop-primary/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-14 w-full">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 border border-white/30 px-3 py-1 rounded-full">
            {p.hero.badge}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {p.hero.title}
            <span className="text-bop-secondary-container">{p.hero.titleHighlight}</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
            {p.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Collective impact banner */}
      <section className="bg-bop-primary py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-3 gap-6 text-center">
          {[
            { num: p.impact.i1Num, label: p.impact.i1Label },
            { num: p.impact.i2Num, label: p.impact.i2Label },
            { num: p.impact.i3Num, label: p.impact.i3Label },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-headline text-3xl md:text-4xl font-bold text-bop-secondary-container">{s.num}</div>
              <div className="text-white/70 text-xs md:text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-bop-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-bop-secondary-green border border-bop-secondary-green/30 px-3 py-1 rounded-full mb-3">
              {p.featured.badge}
            </span>
            <div className="md:flex md:items-end md:justify-between">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-bop-primary">
                {p.featured.title}
              </h2>
              <p className="text-bop-on-surface-variant text-sm max-w-xs mt-2 md:mt-0">
                {p.featured.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {projects.map((proj, idx) => (
              <div
                key={proj.title}
                className={`grid md:grid-cols-2 gap-8 items-stretch bg-white rounded-3xl overflow-hidden border border-bop-outline-variant/30 shadow-sm ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-64 md:h-auto min-h-48 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${proj.badgeColor} text-white border-0 text-xs`}>
                      {proj.badge}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline font-bold text-bop-on-surface text-xl mb-2">{proj.title}</h3>
                    <p className="text-bop-on-surface-variant text-sm leading-relaxed mb-3">{proj.desc}</p>
                    <p className="text-bop-on-surface-variant text-sm leading-relaxed mb-5">{proj.details}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-bop-surface-container text-bop-on-surface-variant px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-bop-on-surface-variant mb-1.5">
                      <span>{proj.progressLabel}</span>
                      <span className="font-semibold">{proj.progress}%</span>
                    </div>
                    <div className="h-2 bg-bop-surface-container-highest rounded-full overflow-hidden">
                      <div
                        className="h-full bg-bop-secondary-green rounded-full transition-all"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bop-inverse-surface py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-4">{p.cta.title}</h2>
          <p className="text-bop-inverse-on-surface/75 leading-relaxed mb-8">{p.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button render={<Link href="/donar" />} className="bg-bop-secondary-container text-bop-primary hover:bg-bop-secondary-container/90 rounded-full px-6 font-semibold">
              <MaterialIcon name={p.cta.btn1Icon} size={18} className="mr-2" />
              {p.cta.btn1}
            </Button>
            <Button variant="outline" render={<Link href="/contacto" />} className="border-white/40 text-white hover:bg-white/10 rounded-full px-6 bg-transparent">
              <MaterialIcon name={p.cta.btn2Icon} size={18} className="mr-2" />
              {p.cta.btn2}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

