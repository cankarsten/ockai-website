"use client";

import type { FormEvent } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";

interface BookADemo1Props {
  heading: string;
  description: string;
  className?: string;
  ctaText?: string;
  microcopy?: string;
  mailtoTo?: string;
}

type Props = Partial<BookADemo1Props>;

const defaultProps: BookADemo1Props = {
  heading: "Welchen Prozess möchten Sie automatisieren?",
  description:
    "Sie haben bereits einen konkreten Use Case? Oder Sie wissen nur, dass ein Prozess zu viel Zeit kostet, häufig manuell abläuft oder sich nur schwer skalieren lässt? Beides ist ein guter Ausgangspunkt.",
  ctaText: "Gespräch anfragen",
  microcopy:
    "Wir melden uns persönlich bei Ihnen, um den Anwendungsfall und mögliche nächste Schritte zu besprechen.",
  mailtoTo: "",
};

const fieldClassName =
  "mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-ring";

const BookADemo1 = (props: Props) => {
  const { heading, description, className, ctaText, microcopy, mailtoTo } = {
    ...defaultProps,
    ...props,
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") || "").toString().trim();
    const company = (formData.get("company") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const domain = (formData.get("domain") || "").toString().trim();
    const process = (formData.get("process") || "").toString().trim();
    const systems = (formData.get("systems") || "").toString().trim();

    const subject = `Anfrage AI-Automatisierung - ${company || name || "Website"}`;
    const body = [
      "Neue Anfrage über das Website-Formular:",
      "",
      `Name: ${name}`,
      `Unternehmen: ${company}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone || "-"}`,
      `Bereich: ${domain || "-"}`,
      "",
      "Prozess / Aufgabe:",
      process || "-",
      "",
      "Beteiligte Systeme:",
      systems || "-",
    ].join("\n");

    const mailtoUrl = `mailto:${mailtoTo || ""}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const popup = window.open(mailtoUrl, "_blank");

    // Fallback for browsers or environments that block popup creation.
    if (!popup) {
      window.location.assign(mailtoUrl);
    }
  };

  return (
    <section className={cn("py-16 m-auto", className)}>
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {heading}
            </h1>
            <p className="text-muted-foreground lg:text-lg">{description}</p>
            <p className="mt-6 text-muted-foreground lg:text-lg">
              Beschreiben Sie uns kurz, worum es geht. Sie müssen noch nicht
              wissen, welcher AI Agent, welches Modell oder welche Technologie
              dafür die richtige ist.
            </p>
            <p className="mt-4 text-muted-foreground lg:text-lg">
              Gemeinsam schauen wir auf den Prozess und prüfen, wo AI und
              Automatisierung sinnvoll eingesetzt werden können.
            </p>
          </div>

          <form
            className="rounded-xl border border-border bg-card p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Vor- und Nachname"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-medium">
                  Unternehmen *
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Unternehmen"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-Mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@unternehmen.de"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Optional"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="domain" className="text-sm font-medium">
                  Bereich
                </label>
                <select id="domain" name="domain" className={fieldClassName}>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>M&A</option>
                  <option>Übergreifend</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="process" className="text-sm font-medium">
                  Welchen Prozess oder welche Aufgabe möchten Sie verbessern? *
                </label>
                <textarea
                  id="process"
                  name="process"
                  rows={5}
                  placeholder="Beschreiben Sie kurz, wie der Prozess heute funktioniert, wo Zeit verloren geht oder welche Aufgabe Sie automatisieren möchten."
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="systems" className="text-sm font-medium">
                  Welche Systeme sind heute beteiligt?
                </label>
                <textarea
                  id="systems"
                  name="systems"
                  rows={3}
                  placeholder="z. B. Microsoft 365, HubSpot, Salesforce, SAP, Google Workspace, interne Datenbanken ..."
                  className={fieldClassName}
                />
              </div>

              <div>
                <Button type="submit" size="lg" className="w-full">
                  {ctaText}
                </Button>
                <p className="mt-3 text-sm text-muted-foreground">
                  {microcopy}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { BookADemo1 };
