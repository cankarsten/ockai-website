import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "cn";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

type Props = Faq1Props;

const defaultItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    id: "faq-2",
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    id: "faq-3",
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    id: "faq-4",
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
];

const Faq1 = ({
  heading = "Frequently asked questions",
  items = defaultItems,
  className,
}: Props) => {
  return (
    <section className={cn("py-16 m-auto", className)}>
      <div className="container max-w-3xl m-auto">
        <h2 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h2>
        <Accordion>
          {items.map((item, index) => (
            <AccordionItem key={item.id} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq1 };
