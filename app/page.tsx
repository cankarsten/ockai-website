import { Hero1 } from "@/components/hero1";
import { Feature43 } from "@/components/feature43";
import { Feature73 } from "@/components/feature73";
import { Testimonial10 } from "@/components/testimonial10";
import { Cta39 } from "@/components/cta39";
import {

  Zap,
} from "lucide-react";


export default function Home() {
  return (
    <>
      <Hero1
        heading={'Passende Partner finden. Zum Abschluss bringen. Automatisiert in Ihrem System'}
        description="oCKai automatisiert ihre Marketing- Sales- und M&A-Prozesse von der ersten Identifikation bis zum Vertragsabschluss. Eingebettet in Ihre bestehende IT-Umgebung und auf Basis bewährter KI-Systeme. "
        buttons={{ primary: { text: "Use Case Anaylse anfragen", url: "/kontakt" } }}
        image={{ src: "https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Two girls pointing at a computer" }}
      />
      <hr />
      <Feature43
        heading="Was wir bieten"
        features={[
          {
            icon: <Zap className="size-5" />,
            title: "Eine Lösung, die ab dem ersten Tag auf Sie zugeschnitten ist.",
            description:
              "Wir liefern eine automatisierte Lösung, die direkt in Ihrem Arbeitsalltag ankommt.",
          },
          {
            icon: <Zap className="size-5" />,
            title: "Der gesamte Prozess aus einer Hand.",
            description:
              "Von der Identifikation passender Anwendungsfälle Vertrag bis zur Umsetzung und Erfolgsmessung – durchgängig aus einer Hand.",
          },
          {
            icon: <Zap className="size-5" />,
            title: "Volle Kontrolle in Ihrer eigenen Umgebung.",
            description:
              "Unsere Lösungen laufen direkt in Ihrer bestehenden IT-Umgebung – so behalten Sie jederzeit die volle Kontrolle über Ihre Daten.",
          }
        ]}
        buttons={{}}

      />
      <hr />
      <Feature73
        heading="Unsere Kernkompetenzen"
        description="Gerne schauen wir uns Ihre bestehenden Bereiche an und erarbeiten zusammen eine automatisierte Lösung für Ihr Problem "
        buttons={{}}
        features={[
          {
            icon: <Zap className="size-5" />,
            title: "Marketing ",
            description:
              "Die richtigen Kooperationspartner finden, verhandeln und Kampagnenerfolg messbar machen. ",
            image: {
              src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
              alt: "Laptop View of Google Search Console",
            },
            href: "https://www.shadcnblocks.com",
          },
          {
            icon: <Zap className="size-5" />,
            title: "Sales",
            description:
              "Kunden identifizieren, priorisieren und bis zum Vertragsabschluss und Onboarding begleiten. ",
            image: {
              src: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
              alt: "Shacking Hands",
            },
            href: "https://www.shadcnblocks.com",
          },
          {
            icon: <Zap className="size-5" />,
            title: "M&A",
            description:
              "Akquisitionsziele und Carve-out-Kandidaten screenen, Due Diligence unterstützen und Post-Merger-Prozesse strukturieren.",
            image: {
              src: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d",
              alt: "§ Persons in an office",
            },
            href: "https://www.shadcnblocks.com",
          }
        ]}
      />
      <hr />
      <Testimonial10 />
      <hr />
      <Cta39 />
    </>
  );
}
