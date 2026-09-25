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

interface Feature2Props {
  heading: string;
  description?: string | React.ReactNode;
  image: {
    src: string;
    alt: string;
  };
  buttons?: Buttons;
  reverse?: boolean;
  className?: string;
}

type Props = Partial<Feature2Props>;

const defaultProps: Feature2Props = {
  heading: "Blocks built with Shadcn & Tailwind",
  description:
    "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Feature preview",
  },
  buttons: {
    primary: {
      text: "Get Started",
      url: "https://shadcnblocks.com",
    },
    secondary: {
      text: "Learn More",
      url: "https://shadcnblocks.com",
    },
  },
  reverse: false,
};

function renderDescriptionContent(
  description: string | React.ReactNode,
): React.ReactNode {
  if (typeof description !== "string") {
    return description;
  }

  const normalizedDescription = description
    .replace(/\r\n/g, "\n")
    .replace(/\\n/g, "\n");

  // Allows trusted inline HTML from static page content when needed.
  if (/<\/?[a-z][\s\S]*>/i.test(normalizedDescription)) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: normalizedDescription.replace(/\n/g, "<br />"),
        }}
      />
    );
  }

  const blocks = normalizedDescription
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n");

    return (
      <p key={blockIndex}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

const Feature2 = (props: Props) => {
  const { heading, description, image, buttons, reverse, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-16", className)}>
      <div className="container m-auto">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
          <img
            src={image.src}
            alt={image.alt}
            className={cn(
              "max-h-96 w-full rounded-md object-cover",
              reverse ? "lg:order-2" : "lg:order-1",
            )}
          />
          <div
            className={cn(
              "flex flex-col items-center text-center lg:items-start lg:text-left",
              reverse ? "lg:order-1" : "lg:order-2",
            )}
          >
            <h2 className="my-6 mt-0 text-balance text-4xl font-semibold lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <div className="mb-8 max-w-xl space-y-4 text-muted-foreground lg:text-lg">
                {renderDescriptionContent(description)}
              </div>
            )}
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button render={<a href={buttons.primary.url} />} nativeButton={false}>
                  {buttons.primary.text}
                </Button>
              )}
              {buttons?.secondary && (
                <Button variant="outline" render={<a href={buttons.secondary.url} />} nativeButton={false}>
                  {buttons.secondary.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature2 };
