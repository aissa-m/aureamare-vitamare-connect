import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export function SiteFooter() {
  const { t, lang, setLang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--ocean-deep)] text-white/85">
      <div className="container mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="text-primary font-display font-bold">A</span>
            </div>
            <div>
              <div className="font-display text-xl">AureaMare Holding</div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">× VitaMare</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-md leading-relaxed">{t("footer_tag")}</p>

          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/50 mr-2">{t("footer_lang")}</span>
            {(["es", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold uppercase rounded-full border transition ${
                  lang === l ? "bg-accent text-accent-foreground border-accent" : "border-white/20 text-white/70 hover:bg-white/10"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-base text-white mb-4">{t("footer_group")}</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin className="size-4 text-accent" /> AureaMare Holding · España</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-accent" /> VitaMare · Mauritania</li>
          </ul>
        </div>

        <div>
          <div className="font-display text-base text-white mb-4">{t("footer_contact")}</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="size-4 text-accent" /> info@aureamare.com</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-accent" /> +34 692 52 04 97</li>
            <li className="flex items-center gap-2"><MessageCircle className="size-4 text-accent" /> WhatsApp</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {year} AureaMare Holding. {t("footer_rights")}</span>
          <div className="flex gap-5">
            <a href="#about" className="hover:text-white">{t("nav_about")}</a>
            <a href="#contact" className="hover:text-white">{t("nav_contact")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
