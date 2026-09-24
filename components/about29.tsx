import { cn } from "cn";

interface AboutBasicSection {
  title: string;
  content: string;
  label?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface AboutBasicProps {
  heading: string;
  description?: string;
  images?: Image[];
  sections?: AboutBasicSection[];
  className?: string;
}

interface About29Props extends AboutBasicProps { }
type Props = Partial<About29Props>;

const defaultProps: About29Props = {
  heading: "About Us",
  description:
    "We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age. With years of experience in design and development, we craft beautiful, accessible components that help teams build faster.",
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-1-16x9.jpg",
      alt: "Team collaboration",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-2-16x9.jpg",
      alt: "Studio workspace",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-3-16x9.jpg",
      alt: "Team meeting",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-4-16x9.jpg",
      alt: "Office interior",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-5-16x9.jpg",
      alt: "Workshop session",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about/photo-6-16x9.jpg",
      alt: "Founding team",
    },
  ],
  sections: [
    {
      title: "Our Vision",
      content:
        "For years, the process of building custom software has remained challenging. Today, visual builders exist, but tailored solutions still require technical expertise and a lot of time. This is a problem for businesses and individuals alike.\n\nWhat if you could create custom software without writing a single line of code? What if you could build your own tools.\n\nWith our platform, you can! Our tools let you design layouts and create functionality—all without needing to code.\n\nWe believe that everyone should be able to build their own solutions, regardless of their technical background.",
    },
    {
      title: "Our Creators",
      content:
        "Our company has been building web tools for over a decade, focusing on efficiency and user control in every project. We know that the best solutions are the ones that you can create yourself.\n\nWe initially developed these solutions for our own team, and now everyone can benefit from them too. We are proud to offer a platform that is accessible to all, regardless of technical expertise.\n\nOur team is made up of talented individuals who are passionate about creating tools that empower users to build their own solutions with ease. We are dedicated to helping you achieve your goals.",
    },
    {
      label: "Our mission",
      title: "We make creating software easy.",
      content:
        "We aim to help empower 1,000,000 teams to create their own software. Here is how we plan on doing it.",
    },
    {
      label: "What drives us",
      title:
        "We are a team of creators, thinkers, and builders who believe in crafting experiences that truly connect. Our story is built on passion, innovation, and the drive to bring meaningful ideas to life.",
      content:
        "We start from the purpose, the people it serves, and the simplest path forward. Clarity first, then the work gets better.",
    },
  ],
};

const MAX_COLUMNS = 2;
const MAX_IMAGES = 2;
const COLUMN_CHARS = 160;

const truncate = (content: string) => {
  if (content.length <= COLUMN_CHARS) {
    return content;
  }
  return `${content.slice(0, COLUMN_CHARS).trimEnd()}…`;
};

const About29 = (props: Props) => {
  const { heading, description, images, sections, className } = {
    ...defaultProps,
    ...props,
  };

  const gallery = (images ?? []).slice(0, MAX_IMAGES);
  const columns = (sections ?? []).slice(0, MAX_COLUMNS);
  const mission = sections?.[2];
  const valuesTitle = sections?.[2]?.title;
  const valuesBody = sections?.[3]?.content;

  return (
    <section className={cn("pb-26 m-auto", className)}>
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {columns.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-3 border-t border-border pt-6"
            >
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <p className="text-muted-foreground">
                {truncate(section.content)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { About29 };
