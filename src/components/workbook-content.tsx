import type {
  Workbook,
  WorkbookField,
  WorkbookFramework,
  WorkbookSelfAssessmentItem,
} from "@/lib/workbooks";

type WorkbookContentProps = {
  workbook: Workbook;
};

function FieldInput({ field }: { field: WorkbookField }) {
  if (field.type === "checkbox") {
    return (
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-foreground">{field.label}</legend>
        {field.hint ? (
          <p className="text-sm text-muted-foreground">{field.hint}</p>
        ) : null}
        <ul className="space-y-2">
          {(field.options ?? []).map((option) => (
            <li key={option} className="flex items-start gap-3">
              <span
                className="mt-1 size-4 shrink-0 rounded border border-border bg-background print:border-foreground/40"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-foreground">{option}</span>
            </li>
          ))}
        </ul>
      </fieldset>
    );
  }

  if (field.type === "rating") {
    const min = field.scale?.min ?? 1;
    const max = field.scale?.max ?? 5;

    return (
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">{field.label}</p>
        {field.hint ? (
          <p className="text-sm text-muted-foreground">{field.hint}</p>
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
          {field.scale?.labels ? (
            <span className="text-xs text-muted-foreground">{field.scale.labels[0]}</span>
          ) : null}
          {Array.from({ length: max - min + 1 }, (_, index) => min + index).map(
            (value) => (
              <span
                key={value}
                className="inline-flex size-8 items-center justify-center rounded border border-border text-xs font-medium text-muted-foreground print:border-foreground/40"
              >
                {value}
              </span>
            ),
          )}
          {field.scale?.labels ? (
            <span className="text-xs text-muted-foreground">{field.scale.labels[1]}</span>
          ) : null}
        </div>
      </div>
    );
  }

  if (field.type === "lines") {
    const lineCount = field.lines ?? 3;

    return (
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">{field.label}</p>
        {field.hint ? (
          <p className="text-sm text-muted-foreground">{field.hint}</p>
        ) : null}
        <div className="space-y-4 rounded-md border border-border/80 bg-background p-4 print:border-foreground/25 print:p-2">
          {Array.from({ length: lineCount }).map((_, index) => (
            <div
              key={index}
              className="border-b border-dotted border-border/80 pb-6 print:border-foreground/30 print:pb-5"
            />
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "long") {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">{field.label}</label>
        {field.hint ? (
          <p className="text-sm text-muted-foreground">{field.hint}</p>
        ) : null}
        <textarea
          readOnly
          aria-label={field.label}
          rows={field.lines ?? 4}
          className="w-full resize-none rounded-md border border-border/80 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 print:border-foreground/25 print:bg-transparent"
          placeholder="Write your answer here..."
        />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{field.label}</label>
      {field.hint ? (
        <p className="text-sm text-muted-foreground">{field.hint}</p>
      ) : null}
      <div className="rounded-md border border-border/80 bg-background px-3 py-2 print:border-foreground/25">
        <div className="border-b border-dotted border-border/80 pb-8 print:border-foreground/30" />
      </div>
    </div>
  );
}

function FrameworkBlock({ framework }: { framework: WorkbookFramework }) {
  return (
    <div className="rounded-lg border border-border/80 bg-secondary/25 p-6 md:p-8">
      <h3 className="font-heading text-xl text-foreground md:text-2xl">
        {framework.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {framework.description}
      </p>
      <ul className="mt-5 list-disc space-y-2 pl-6 marker:text-accent">
        {framework.items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-foreground md:text-base">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SelfAssessmentBlock({
  title,
  instructions,
  items,
  scoringGuide,
}: {
  title: string;
  instructions: string;
  items: WorkbookSelfAssessmentItem[];
  scoringGuide?: string;
}) {
  const categories = [...new Set(items.map((item) => item.category).filter(Boolean))];

  return (
    <section className="workbook-section">
      <h2 className="font-heading text-2xl text-foreground md:text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        {instructions}
      </p>
      {categories.length > 0 ? (
        <div className="mt-8 space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-heading text-lg text-foreground md:text-xl">
                {category}
              </h3>
              <div className="mt-4 space-y-4">
                {items
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <SelfAssessmentRow key={item.id} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <SelfAssessmentRow key={item.id} item={item} />
          ))}
        </div>
      )}
      {scoringGuide ? (
        <p className="mt-8 rounded-md border border-border/80 bg-card p-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          {scoringGuide}
        </p>
      ) : null}
    </section>
  );
}

function SelfAssessmentRow({ item }: { item: WorkbookSelfAssessmentItem }) {
  return (
    <div className="rounded-md border border-border/80 bg-background p-4 md:p-5">
      <p className="text-sm leading-relaxed text-foreground md:text-base">
        {item.statement}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground">Rate 1 to 5:</span>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className="inline-flex size-7 items-center justify-center rounded border border-border text-xs text-muted-foreground print:border-foreground/40"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WorkbookContent({ workbook }: WorkbookContentProps) {
  return (
    <div className="workbook-content space-y-16 md:space-y-20">
      <section className="workbook-section">
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          How to use this workbook
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {workbook.intro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-border/80 bg-secondary/35 p-6 md:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            What you will complete
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-accent">
            {workbook.intro.whatYouGet.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-foreground md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SelfAssessmentBlock
        title={workbook.selfAssessment.title}
        instructions={workbook.selfAssessment.instructions}
        items={workbook.selfAssessment.items}
        scoringGuide={workbook.selfAssessment.scoringGuide}
      />

      <section className="workbook-section">
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          Frameworks
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Research-backed models you will apply throughout this workbook. Read each
          framework once, then use the exercises to put it into practice.
        </p>
        <div className="mt-8 space-y-6">
          {workbook.frameworks.map((framework) => (
            <FrameworkBlock key={framework.title} framework={framework} />
          ))}
        </div>
      </section>

      <section className="workbook-section">
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          Exercises
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Work through each exercise in order. Fill in every field. The value is in
          the thinking, not perfect answers.
        </p>
        <div className="mt-10 space-y-10">
          {workbook.exercises.map((exercise, index) => (
            <article
              key={exercise.id}
              className="workbook-exercise rounded-lg border border-border/80 bg-card p-6 md:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                Exercise {index + 1}
              </p>
              <h3 className="mt-3 font-heading text-xl text-foreground md:text-2xl">
                {exercise.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {exercise.instructions}
              </p>
              <div className="mt-6 space-y-6">
                {exercise.fields.map((field) => (
                  <FieldInput key={field.id} field={field} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workbook-section">
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          Worksheets
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Reusable templates you can copy for future situations.
        </p>
        <div className="mt-10 space-y-10">
          {workbook.worksheets.map((worksheet) => (
            <article
              key={worksheet.id}
              className="workbook-worksheet rounded-lg border border-border/80 bg-background p-6 md:p-8"
            >
              <h3 className="font-heading text-xl text-foreground md:text-2xl">
                {worksheet.title}
              </h3>
              {worksheet.description ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {worksheet.description}
                </p>
              ) : null}
              <div className="mt-6 space-y-6">
                {worksheet.fields.map((field) => (
                  <FieldInput key={field.id} field={field} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workbook-section">
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          {workbook.actionPlan.title}
        </h2>
        <p className="mt-2 text-sm font-medium text-accent">{workbook.actionPlan.duration}</p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {workbook.actionPlan.instructions}
        </p>
        <div className="mt-8 space-y-6">
          {workbook.actionPlan.days.map((day) => (
            <div
              key={String(day.day)}
              className="rounded-lg border border-border/80 bg-secondary/25 p-6 md:p-7"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="font-heading text-lg text-foreground md:text-xl">
                  Day {day.day}
                </p>
                <p className="text-sm font-medium text-accent">{day.focus}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-accent">
                {day.tasks.map((task) => (
                  <li key={task} className="text-sm leading-relaxed text-foreground md:text-base">
                    {task}
                  </li>
                ))}
              </ul>
              {day.reflection ? (
                <div className="mt-5">
                  <FieldInput
                    field={{
                      id: `reflection-${day.day}`,
                      label: "Reflection",
                      hint: day.reflection,
                      type: "lines",
                      lines: 2,
                    }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="workbook-section">
        <h2 className="font-heading text-2xl text-foreground md:text-3xl">
          Sources
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Frameworks and research cited in this workbook.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-accent">
          {workbook.sources.map((source) => (
            <li key={source.citation} className="text-sm leading-relaxed text-foreground md:text-base">
              {source.citation}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
