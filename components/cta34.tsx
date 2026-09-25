import { cn } from "cn";
import { Button } from "@/components/ui/button";

interface ButtonLink {
  text: string;
  url: string;
  icon?: React.ReactNode;
}

interface Buttons {
  primary?: ButtonLink;
  secondary?: ButtonLink;
}

interface Cta34Props {
  heading: string;
  description: string;
  buttons?: Buttons;
  className?: string;
}

type Props = Partial<Cta34Props>;

const defaultProps: Cta34Props = {
  heading: "Call to Action",
  description:
    "Get access to our collection of pre-built blocks and components today.",
  buttons: {
    primary: {
      text: "Get Access",
      url: "https://shadcnblocks.com",
    },
    secondary: {
      text: "Schedule a Demo",
      url: "https://shadcnblocks.com",
    },
  },
};

const Cta34 = (props: Props) => {
  const { heading, description, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-16 m-auto", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl rounded-xl border bg-card p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-4 text-center lg:gap-6">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {heading}
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              {buttons?.primary && (
                <Button size="lg" render={<a href={buttons.primary.url} />} nativeButton={false}>{buttons.primary.text}</Button>
              )}
              {buttons?.secondary && (
                <Button variant="outline" size="lg" render={<a href={buttons.secondary.url} />} nativeButton={false}>{buttons.secondary.text}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta34 };
