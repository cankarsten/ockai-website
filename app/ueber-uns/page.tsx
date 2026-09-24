import { About29 } from "@/components/about29";
import { Team1 } from "@/components/team1";
import { Hero1 } from "@/components/hero1"

export default function AboutUs() {
  return (
    <>
      <Hero1 
        heading="Über uns"
        description="Marketing und M&A folgen demselben Kernprozess: die richtige Gegenseite finden, überzeugen, zum Abschluss bringen, erfolgreich umsetzen. Sales ist die Schnittstelle, die diesen Prozess in beiden Disziplinen sichtbar macht. Deshalb setzen wir automatisierte Anwendungsfälle um, die dieser gemeinsamen Logik folgen – individuell für Marketing, Sales oder M&A, nach demselben Prinzip."
        buttons={{}}
        image={{ src: "https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Two girls pointing at a computer" }}
      />
      <About29
        heading="Über uns"
        description="Marketing und M&A folgen demselben Kernprozess: die richtige Gegenseite finden, überzeugen, zum Abschluss bringen, erfolgreich umsetzen. Sales ist die Schnittstelle, die diesen Prozess in beiden Disziplinen sichtbar macht. Deshalb setzen wir automatisierte Anwendungsfälle um, die dieser gemeinsamen Logik folgen – individuell für Marketing, Sales oder M&A, nach demselben Prinzip. "
        sections={[
          {
            title: "Unsere Vision",
            content:
              "Marketing, Sales und M&A folgen demselben Prinzip: die richtige Gegenseite finden und zum Erfolg führen. oCKai macht dieses Prinzip zum Standard. ",
          },
          {
            title: "Unsere Mission",
            content:
              "oCKai setzt automatisierte Lösungen um, die diesen Prozess – von der ersten Identifikation bis zum Vertragsabschluss – direkt in der bestehenden Systemlandschaft unserer Kunden abbilden. ",
          }
        ]}
      />
      <hr />
      <Team1 />
    </>
  );
}
