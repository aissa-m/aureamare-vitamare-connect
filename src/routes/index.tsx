import { createFileRoute } from "@tanstack/react-router";
import {
  Snowflake, ShieldCheck, Route as RouteIcon, MessageSquare, Award, Eye,
  Fish, Snowflake as Frozen, Anchor, Package, Building2, ArrowRight,
  Leaf, Heart, Sparkles, Handshake, CheckCircle2, MapPin,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";
import heroOcean from "@/assets/hero-ocean.jpg";
import freshFish from "@/assets/fresh-fish.jpg";
import boats from "@/assets/fishing-boats.jpg";
import processing from "@/assets/processing.jpg";
import port from "@/assets/port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AureaMare Holding × VitaMare — Pescado de Mauritania para Europa" },
      { name: "description", content: "Importación y exportación de pescado fresco y congelado desde Mauritania al mercado europeo. Trazabilidad, calidad y pesca responsable." },
      { property: "og:title", content: "AureaMare Holding × VitaMare" },
      { property: "og:description", content: "Pescado fresco y congelado de Mauritania para el mercado europeo. Trazabilidad y calidad B2B." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "keywords", content: "importación pescado Mauritania, pescado fresco Mauritania España, proveedor pescado Mauritania, exportación pescado Mauritania, seafood import Spain, poisson frais Mauritanie Espagne, exportation poisson Mauritanie, fournisseur poisson Mauritanie" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <GroupSection />
      <OfferSection />
      <ProcessSection />
      <QualitySection />
      <SustainabilitySection />
      <BuyersSection />
      <SuppliersSection />
      <MauritaniaSection />
      <ValuesSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroOcean} alt="" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ocean-deep)]/85 via-[var(--ocean-deep)]/65 to-[var(--ocean-deep)]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-6 pt-32 pb-24 text-white">
        <div className="max-w-3xl animate-float-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs uppercase tracking-[0.25em] text-white/90 animate-shimmer">
            <span className="size-1.5 rounded-full bg-accent" />
            {t("hero_eyebrow")}
          </div>
          <h1 className="mt-7 font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] font-medium">
            {t("hero_title").split(" ").slice(0, -3).join(" ")}{" "}
            <span className="text-gradient-gold">{t("hero_title").split(" ").slice(-3).join(" ")}</span>
          </h1>
          <p className="mt-7 text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">{t("hero_sub")}</p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#buyers" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary shadow-elegant hover:scale-[1.02] transition">
              {t("hero_cta_buyer")} <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#suppliers" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition">
              {t("hero_cta_supplier")}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { v: "100%", k: "Trazabilidad" },
              { v: "2", k: "Países · ES / MR" },
              { v: "24/7", k: "Cold chain" },
            ].map((s) => (
              <div key={s.k} className="border-l border-white/20 pl-4">
                <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HELPERS ---------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
      <span className="h-px w-8 bg-accent" />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl">{children}</h2>;
}

/* ---------------- GROUP ---------------- */
function GroupSection() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t("group_eyebrow")}</Eyebrow>
          <SectionTitle>{t("group_title")}</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("group_text")}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            { img: boats, name: t("group_vita_title"), loc: t("group_vita_loc"), text: t("group_vita_text") },
            { img: port, name: t("group_aurea_title"), loc: t("group_aurea_loc"), text: t("group_aurea_text") },
          ].map((c) => (
            <article key={c.name} className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" width={1280} height={896} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                  <MapPin className="size-3.5" /> {c.loc}
                </div>
                <h3 className="mt-3 font-display text-2xl text-foreground">{c.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- OFFER ---------------- */
function OfferSection() {
  const { t } = useI18n();
  const items = [
    { icon: Fish, t: t("offer_1_t"), d: t("offer_1_d") },
    { icon: Frozen, t: t("offer_2_t"), d: t("offer_2_d") },
    { icon: Anchor, t: t("offer_3_t"), d: t("offer_3_d") },
    { icon: Package, t: t("offer_4_t"), d: t("offer_4_d") },
    { icon: Building2, t: t("offer_5_t"), d: t("offer_5_d") },
  ];
  return (
    <section id="products" className="py-28 bg-[var(--sand)]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t("offer_eyebrow")}</Eyebrow>
          <SectionTitle>{t("offer_title")}</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("offer_sub")}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <article
              key={it.t}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-accent/40 shadow-card hover:shadow-elegant transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </article>
          ))}
          <div className="rounded-2xl overflow-hidden relative min-h-[220px] hidden lg:block">
            <img src={freshFish} alt="" loading="lazy" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/80 to-transparent" />
            <div className="relative h-full flex items-end p-6 text-white">
              <div>
                <div className="text-xs uppercase tracking-widest text-accent">Atlántico</div>
                <div className="font-display text-xl">Pesca de origen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function ProcessSection() {
  const { t } = useI18n();
  const steps = [
    t("process_1"), t("process_2"), t("process_3"), t("process_4"),
    t("process_5"), t("process_6"), t("process_7"), t("process_8"),
  ];
  return (
    <section id="process" className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>{t("process_eyebrow")}</Eyebrow>
          <SectionTitle>{t("process_title")}</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("process_sub")}</p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent hidden md:block" />
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {steps.map((s, i) => (
              <li key={s} className="relative text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center shadow-card relative z-10">
                  <span className="font-display text-xl text-gradient-gold font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-4 text-sm font-semibold text-foreground">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUALITY ---------------- */
function QualitySection() {
  const { t } = useI18n();
  const items = [
    { icon: Snowflake, t: t("quality_1_t"), d: t("quality_1_d") },
    { icon: ShieldCheck, t: t("quality_2_t"), d: t("quality_2_d") },
    { icon: RouteIcon, t: t("quality_3_t"), d: t("quality_3_d") },
    { icon: MessageSquare, t: t("quality_4_t"), d: t("quality_4_d") },
    { icon: Award, t: t("quality_5_t"), d: t("quality_5_d") },
    { icon: Eye, t: t("quality_6_t"), d: t("quality_6_d") },
  ];
  return (
    <section id="quality" className="py-28 bg-gradient-ocean text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${heroOcean})`, backgroundSize: "cover", mixBlendMode: "overlay" }} />
      <div className="relative container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            <span className="h-px w-8 bg-accent" /> {t("quality_eyebrow")}
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">{t("quality_title")}</h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">{t("quality_sub")}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.t} className="bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-7 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-primary">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl">{it.t}</h3>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SUSTAINABILITY ---------------- */
function SustainabilitySection() {
  const { t } = useI18n();
  const vals = [t("sus_v1"), t("sus_v2"), t("sus_v3"), t("sus_v4"), t("sus_v5")];
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/5] lg:aspect-[4/5]">
          <img src={boats} alt="" loading="lazy" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/60 to-transparent" />
        </div>
        <div>
          <Eyebrow>{t("sus_eyebrow")}</Eyebrow>
          <SectionTitle>{t("sus_title")}</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("sus_text")}</p>
          <ul className="mt-8 space-y-3">
            {vals.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <Leaf className="size-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUYERS ---------------- */
function BuyersSection() {
  const { t } = useI18n();
  const list = [t("buyers_1"), t("buyers_2"), t("buyers_3"), t("buyers_4"), t("buyers_5"), t("buyers_6")];
  return (
    <section id="buyers" className="py-28 bg-[var(--sand)]">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>{t("buyers_eyebrow")}</Eyebrow>
          <SectionTitle>{t("buyers_title")}</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("buyers_text")}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {list.map((it) => (
              <li key={it} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card">
                <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{it}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-elegant transition">
            {t("buyers_cta")} <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-square">
          <img src={port} alt="" loading="lazy" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SUPPLIERS ---------------- */
function SuppliersSection() {
  const { t } = useI18n();
  const list = [t("sup_1"), t("sup_2"), t("sup_3"), t("sup_4"), t("sup_5"), t("sup_6")];
  return (
    <section id="suppliers" className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-square order-2 lg:order-1">
          <img src={processing} alt="" loading="lazy" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>{t("sup_eyebrow")}</Eyebrow>
          <SectionTitle>{t("sup_title")}</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("sup_text")}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {list.map((it) => (
              <li key={it} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card">
                <Handshake className="size-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{it}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary shadow-card hover:shadow-elegant transition">
            {t("sup_cta")} <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MAURITANIA ---------------- */
function MauritaniaSection() {
  const { t } = useI18n();
  return (
    <section className="py-28 bg-gradient-ocean text-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            <span className="h-px w-8 bg-accent" /> {t("maur_eyebrow")}
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">{t("maur_title")}</h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">{t("maur_text")}</p>
        </div>

        <div className="relative bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-8">
          <svg viewBox="0 0 400 260" className="w-full h-auto" aria-hidden>
            <defs>
              <linearGradient id="rt" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="oklch(0.78 0.13 80)" />
                <stop offset="1" stopColor="oklch(0.86 0.09 85)" />
              </linearGradient>
            </defs>
            {/* Africa hint */}
            <path d="M210,170 q-10,-30 -25,-45 q-20,-15 -10,-40 q5,-15 25,-20 q40,-5 55,15 q15,25 0,55 q-5,20 -25,30 q-10,5 -20,5 z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
            {/* Europe hint */}
            <path d="M110,70 q15,-10 35,-5 q25,5 30,25 q-5,15 -25,15 q-25,0 -45,-15 q-10,-10 5,-20 z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
            {/* dashed route */}
            <path d="M145,95 Q180,130 220,150" fill="none" stroke="url(#rt)" strokeWidth="2.5" strokeDasharray="5 6" />
            {/* points */}
            <circle cx="220" cy="150" r="6" fill="oklch(0.78 0.13 80)" />
            <circle cx="145" cy="95" r="6" fill="oklch(0.78 0.13 80)" />
            <text x="230" y="155" fill="white" fontSize="11" fontFamily="Inter">Nouadhibou</text>
            <text x="60" y="92" fill="white" fontSize="11" fontFamily="Inter">Algeciras</text>
          </svg>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">Origin</div>
              <div className="mt-1 font-semibold">{t("maur_origin")}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">Destination</div>
              <div className="mt-1 font-semibold">{t("maur_dest")}</div>
            </div>
            <div className="col-span-2">
              <div className="text-xs uppercase tracking-widest text-white/50">Route</div>
              <div className="mt-1 font-semibold">{t("maur_route")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VALUES ---------------- */
function ValuesSection() {
  const { t } = useI18n();
  const vals = [
    { i: Leaf, k: t("val_1") },
    { i: Anchor, k: t("val_2") },
    { i: Award, k: t("val_3") },
    { i: Heart, k: t("val_4") },
    { i: RouteIcon, k: t("val_5") },
    { i: Handshake, k: t("val_6") },
  ];
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <Eyebrow>{t("values_eyebrow")}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mx-auto max-w-3xl">{t("values_title")}</h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vals.map((v) => (
            <div key={v.k} className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant hover:border-accent/40 transition-all">
              <div className="mx-auto w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-primary">
                <v.i className="size-6" />
              </div>
              <div className="mt-5 font-display text-lg text-foreground">{v.k}</div>
            </div>
          ))}
        </div>

        <p className="mt-14 font-display italic text-2xl text-gradient-gold inline-flex items-center gap-2">
          <Sparkles className="size-5 text-accent" /> {t("values_thanks")}
        </p>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function ContactSection() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-28 bg-[var(--sand)]">
      <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Eyebrow>{t("contact_eyebrow")}</Eyebrow>
          <SectionTitle>{t("contact_title")}</SectionTitle>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("contact_sub")}</p>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-full bg-gradient-ocean flex items-center justify-center text-primary-foreground"><MapPin className="size-4" /></div>
              AureaMare Holding · España
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary"><MapPin className="size-4" /></div>
              VitaMare · Mauritania
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-elegant">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
