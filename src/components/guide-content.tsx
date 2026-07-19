import type { GuideSection } from "@/lib/guides";

type GuideContentProps = {
  sections: GuideSection[];
};

export function GuideContent({ sections }: GuideContentProps) {
  return (
    <div className="guide-prose space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
      {sections.map((section, index) => {
        if (section.type === "heading") {
          const Tag = section.level === 2 ? "h2" : "h3";
          const className =
            section.level === 2
              ? "font-heading text-2xl text-foreground md:text-3xl pt-4"
              : "font-heading text-xl text-foreground md:text-2xl pt-2";

          return (
            <Tag key={`${section.type}-${index}`} className={className}>
              {section.text}
            </Tag>
          );
        }

        if (section.type === "list") {
          return (
            <ul
              key={`${section.type}-${index}`}
              className="list-disc space-y-2 pl-6 marker:text-accent"
            >
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={`${section.type}-${index}`}>{section.text}</p>;
      })}
    </div>
  );
}
