import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems: { key: any; href: string }[] = [
  { key: "nav_home", href: "#top" },
  { key: "nav_about", href: "#about" },
  { key: "nav_products", href: "#products" },
  { key: "nav_process", href: "#process" },
  { key: "nav_quality", href: "#quality" },
  { key: "nav_buyers", href: "#buyers" },
  { key: "nav_suppliers", href: "#suppliers" },
  { key: "nav_contact", href: "#contact" },
];

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-ocean flex items-center justify-center shadow-card">
            <span className="text-primary-foreground font-display text-lg font-semibold">A</span>
          </div>
          <div className="leading-tight">
            <div className={cn("font-display text-lg font-semibold tracking-tight", scrolled ? "text-foreground" : "text-white")}>
              AureaMare
            </div>
            <div className={cn("text-[10px] uppercase tracking-[0.2em]", scrolled ? "text-muted-foreground" : "text-white/70")}>
              Holding
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((it) => (
            <a
              key={it.key}
              href={it.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-foreground/80" : "text-white/85",
              )}
            >
              {t(it.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className={cn("hidden md:flex items-center text-xs font-semibold rounded-full overflow-hidden border", scrolled ? "border-border" : "border-white/30")}>
            {(["es", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1.5 transition-colors uppercase",
                  lang === l
                    ? "bg-accent text-accent-foreground"
                    : scrolled ? "text-foreground/70 hover:bg-muted" : "text-white/80 hover:bg-white/10",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary shadow-card hover:shadow-elegant transition-shadow"
          >
            {t("nav_cta")}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-foreground" : "text-white")}
            aria-label="menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {navItems.map((it) => (
              <a
                key={it.key}
                href={it.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 text-base font-medium py-1.5"
              >
                {t(it.key)}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {(["es", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-semibold uppercase rounded-full border",
                    lang === l ? "bg-accent text-accent-foreground border-accent" : "border-border text-foreground/70",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
