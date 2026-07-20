import type { Workbook } from "@/lib/workbooks";

type WorkbookPreviewContentProps = {
  workbook: Workbook;
};

function formatSourceNames(workbook: Workbook): string {
  const names = workbook.sources
    .map((source) => {
      const match = source.citation.match(/^([^,(]+)/);
      return match?.[1]?.trim();
    })
    .filter(Boolean);

  if (names.length === 0) {
    return "Research-backed frameworks from leaders in the field.";
  }

  if (names.length === 1) {
    return `Built on research from ${names[0]}.`;
  }

  if (names.length === 2) {
    return `Built on research from ${names[0]} and ${names[1]}.`;
  }

  return `Built on research from ${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}.`;
}

export function WorkbookPreviewContent({ workbook }: WorkbookPreviewContentProps) {
  const teaser = workbook.intro.paragraphs.slice(0, 2);

  const outlineSections = [
    {
      title: "Self-assessment",
      items: [workbook.selfAssessment.title],
    },
    {
      title: "Frameworks",
      items: workbook.frameworks.map((framework) => framework.title),
    },
    {
      title: "Exercises",
      items: workbook.exercises.map((exercise) => exercise.title),
    },
    {
      title: "Worksheets",
      items: workbook.worksheets.map((worksheet) => worksheet.title),
    },
    {
      title: "Action plan",
      items: [workbook.actionPlan.title],
    },
  ];

  return (
    <div className="space-y-16 md:space-y-20">
      <section>
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          Preview
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {teaser.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          {formatSourceNames(workbook)}
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          What&apos;s inside
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Section titles only. Full exercises, worksheets, and fill-in fields
          unlock after purchase.
        </p>
        <div className="mt-8 space-y-6">
          {outlineSections.map((section) => (
            <div
              key={section.title}
              className="rounded-lg border border-border/80 bg-secondary/25 p-6 md:p-7"
            >
              <h3 className="font-heading text-lg text-foreground md:text-xl">
                {section.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-accent">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-foreground md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          What you get
        </h2>
        <div className="mt-8 rounded-lg border border-border/80 bg-secondary/35 p-6 md:p-8">
          <ul className="list-disc space-y-2 pl-6 marker:text-accent">
            {workbook.intro.whatYouGet.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-foreground md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
