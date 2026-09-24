import { Asterisk, CornerDownRight } from "lucide-react";
import React from "react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
interface Process1Props {
  className?: string;
}

const Process1 = ({ className }: Process1Props) => {
  const process = [
    {
      step: "01",
      title: "Automatisierung",
      description:
        "Für klar definierte, wiederkehrende Abläufe.",
    },
    {
      step: "02",
      title: "AI Agent",
      description:
        "Für Aufgaben, die Kontext, Sprache, Recherche oder Bewertung erfordern.",
    },
    {
      step: "03",
      title: "Hybrid",
      description:
        "In der Praxis verbinden wir häufig klassische Automatisierung mit AI Agents.",
    },
    {
      step: "04",
      title: "Optimize & Improve",
      description:
        "We continuously monitor performance and gather feedback to refine and improve the solution. This iterative process ensures long-term success and growth.",
    },
  ];

  return (
    <section className={cn("py-32 m-auto", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              {" "}
              <h1 className="w-fit">Was soll Ihr digitaler Mitarbeiter übernehmen?</h1>
            </div>
            <p className="text-base text-foreground/50">
              Ein digitaler Mitarbeiter kann recherchieren, Informationen aus verschiedenen Systemen zusammenführen, Dokumente analysieren, Inhalte erstellen, Entscheidungen vorbereiten und Aktionen in Ihren Systemen ausführen. Dabei entscheiden wir nicht im Vorfeld, welche Technologie eingesetzt werden muss.
            </p>
          </div>
          <ul className="relative col-span-4 w-full lg:pl-22">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute top-4 right-0" />

                <div className="flex size-12 items-center justify-center bg-muted px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Process1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};
