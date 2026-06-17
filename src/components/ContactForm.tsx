import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";
import { Send, MessageCircle } from "lucide-react";

export function ContactForm() {
  const { t } = useI18n();
  const [type, setType] = useState<"buyer" | "supplier" | "other">("buyer");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t("contact_ok"));
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-muted rounded-full">
        {(["buyer", "supplier", "other"] as const).map((opt) => (
          <button
            type="button"
            key={opt}
            onClick={() => setType(opt)}
            className={`text-sm font-semibold py-2.5 rounded-full transition ${
              type === opt ? "bg-gradient-ocean text-primary-foreground shadow-card" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {t(`contact_type_${opt}` as any)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required name="name" placeholder={t("contact_name")} className={input} maxLength={120} />
        <input required name="company" placeholder={t("contact_company")} className={input} maxLength={150} />
        <input required name="country" placeholder={t("contact_country")} className={input} maxLength={80} />
        <input required type="email" name="email" placeholder={t("contact_email")} className={input} maxLength={200} />
        <input name="phone" placeholder={t("contact_phone")} className={`${input} md:col-span-2`} maxLength={50} />
        <textarea required name="message" placeholder={t("contact_message")} rows={5} className={`${input} md:col-span-2 resize-none`} maxLength={2000} />
      </div>

      <input type="hidden" name="type" value={type} />

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-ocean px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-elegant transition disabled:opacity-60"
        >
          <Send className="size-4" /> {t("contact_send")}
        </button>
        <a
          href="https://wa.me/34692520497"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition"
        >
          <MessageCircle className="size-4" /> {t("contact_wa")}
        </a>
      </div>
    </form>
  );
}
