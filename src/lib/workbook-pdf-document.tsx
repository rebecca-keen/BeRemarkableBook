import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type {
  Workbook,
  WorkbookField,
  WorkbookFramework,
  WorkbookSelfAssessmentItem,
} from "@/lib/workbooks";

import { sanitizePdfText } from "@/lib/workbook-pdf-sanitize";

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingBottom: 56,
    paddingHorizontal: 48,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.45,
    color: "#1a1a1a",
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 48,
    right: 48,
    fontSize: 8,
    color: "#666",
    textAlign: "center",
  },
  label: {
    fontSize: 8,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "#666",
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 11,
    color: "#444",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginBottom: 10,
    marginTop: 4,
  },
  sectionIntro: {
    fontSize: 10,
    color: "#444",
    marginBottom: 12,
    lineHeight: 1.5,
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 1.5,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },
  boxTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    marginBottom: 6,
  },
  listItem: {
    marginBottom: 4,
    paddingLeft: 8,
  },
  exerciseCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 14,
    marginBottom: 14,
  },
  exerciseLabel: {
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#666",
    marginBottom: 4,
  },
  exerciseTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    marginBottom: 6,
  },
  fieldLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginBottom: 3,
  },
  fieldHint: {
    fontSize: 9,
    color: "#555",
    marginBottom: 6,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    borderBottomStyle: "dotted",
    height: 22,
    marginBottom: 2,
  },
  lineBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3,
    padding: 8,
    marginBottom: 10,
  },
  shortLineBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3,
    padding: 8,
    marginBottom: 10,
    minHeight: 36,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  ratingBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#999",
    textAlign: "center",
    fontSize: 9,
    paddingTop: 4,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
    gap: 8,
  },
  checkbox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: "#666",
    marginTop: 2,
  },
  categoryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
    marginTop: 8,
    marginBottom: 6,
  },
  assessmentRow: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3,
    padding: 10,
    marginBottom: 8,
  },
  dayCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  dayHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
    marginBottom: 6,
  },
  dayTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
  },
  dayFocus: {
    fontSize: 10,
    color: "#555",
  },
});


function FieldBlock({ field }: { field: WorkbookField }) {
  if (field.type === "checkbox") {
    return (
      <View wrap={false} style={{ marginBottom: 10 }}>
        <Text style={styles.fieldLabel}>{sanitizePdfText(field.label)}</Text>
        {field.hint ? <Text style={styles.fieldHint}>{sanitizePdfText(field.hint)}</Text> : null}
        {(field.options ?? []).map((option) => (
          <View key={option} style={styles.checkboxRow}>
            <View style={styles.checkbox} />
            <Text style={{ flex: 1, fontSize: 10 }}>{sanitizePdfText(option)}</Text>
          </View>
        ))}
      </View>
    );
  }

  if (field.type === "rating") {
    const min = field.scale?.min ?? 1;
    const max = field.scale?.max ?? 5;
    const values = Array.from({ length: max - min + 1 }, (_, i) => min + i);

    return (
      <View wrap={false} style={{ marginBottom: 10 }}>
        <Text style={styles.fieldLabel}>{sanitizePdfText(field.label)}</Text>
        {field.hint ? <Text style={styles.fieldHint}>{sanitizePdfText(field.hint)}</Text> : null}
        <View style={styles.ratingRow}>
          {field.scale?.labels ? (
            <Text style={{ fontSize: 8, color: "#666" }}>
              {sanitizePdfText(field.scale.labels[0])}
            </Text>
          ) : null}
          {values.map((value) => (
            <Text key={value} style={styles.ratingBox}>
              {value}
            </Text>
          ))}
          {field.scale?.labels ? (
            <Text style={{ fontSize: 8, color: "#666" }}>
              {sanitizePdfText(field.scale.labels[1])}
            </Text>
          ) : null}
        </View>
      </View>
    );
  }

  if (field.type === "lines") {
    const lineCount = field.lines ?? 3;

    return (
      <View wrap={false} style={{ marginBottom: 10 }}>
        <Text style={styles.fieldLabel}>{sanitizePdfText(field.label)}</Text>
        {field.hint ? <Text style={styles.fieldHint}>{sanitizePdfText(field.hint)}</Text> : null}
        <View style={styles.lineBox}>
          {Array.from({ length: lineCount }).map((_, index) => (
            <View key={index} style={styles.line} />
          ))}
        </View>
      </View>
    );
  }

  if (field.type === "long") {
    const lineCount = field.lines ?? 4;

    return (
      <View wrap={false} style={{ marginBottom: 10 }}>
        <Text style={styles.fieldLabel}>{sanitizePdfText(field.label)}</Text>
        {field.hint ? <Text style={styles.fieldHint}>{sanitizePdfText(field.hint)}</Text> : null}
        <View style={styles.lineBox}>
          {Array.from({ length: lineCount }).map((_, index) => (
            <View key={index} style={styles.line} />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View wrap={false} style={{ marginBottom: 10 }}>
      <Text style={styles.fieldLabel}>{sanitizePdfText(field.label)}</Text>
      {field.hint ? <Text style={styles.fieldHint}>{sanitizePdfText(field.hint)}</Text> : null}
      <View style={styles.shortLineBox}>
        <View style={styles.line} />
      </View>
    </View>
  );
}

function FrameworkBlock({ framework }: { framework: WorkbookFramework }) {
  return (
    <View wrap={false} style={styles.box}>
      <Text style={styles.boxTitle}>{sanitizePdfText(framework.title)}</Text>
      <Text style={{ ...styles.paragraph, color: "#444" }}>
        {sanitizePdfText(framework.description)}
      </Text>
      {framework.items.map((item) => (
        <Text key={item} style={styles.listItem}>
          {"\u2022 "}
          {sanitizePdfText(item)}
        </Text>
      ))}
    </View>
  );
}

function SelfAssessmentRow({ item }: { item: WorkbookSelfAssessmentItem }) {
  return (
    <View wrap={false} style={styles.assessmentRow}>
      <Text style={{ fontSize: 10, marginBottom: 6 }}>{sanitizePdfText(item.statement)}</Text>
      <View style={styles.ratingRow}>
        <Text style={{ fontSize: 8, color: "#666" }}>Rate 1 to 5:</Text>
        {[1, 2, 3, 4, 5].map((value) => (
          <Text key={value} style={styles.ratingBox}>
            {value}
          </Text>
        ))}
      </View>
    </View>
  );
}

function PageFooter({ title }: { title: string }) {
  return (
    <Text
      style={styles.footer}
      render={({ pageNumber, totalPages }) =>
        `${sanitizePdfText(title)}  |  Page ${pageNumber} of ${totalPages}`
      }
      fixed
    />
  );
}

export function WorkbookPdfDocument({ workbook }: { workbook: Workbook }) {
  const categories = [
    ...new Set(workbook.selfAssessment.items.map((item) => item.category).filter(Boolean)),
  ] as string[];

  return (
    <Document
      title={sanitizePdfText(workbook.title)}
      author="Be Remarkable Book"
      subject={sanitizePdfText(workbook.description)}
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.label}>{sanitizePdfText(workbook.capability)}</Text>
        <Text style={styles.title}>{sanitizePdfText(workbook.title)}</Text>
        <Text style={styles.subtitle}>{sanitizePdfText(workbook.description)}</Text>
        <Text style={styles.sectionTitle}>How to use this workbook</Text>
        {workbook.intro.paragraphs.map((paragraph) => (
          <Text key={paragraph.slice(0, 48)} style={styles.paragraph}>
            {sanitizePdfText(paragraph)}
          </Text>
        ))}
        <View style={styles.box}>
          <Text style={styles.label}>What you will complete</Text>
          {workbook.intro.whatYouGet.map((item) => (
            <Text key={item} style={styles.listItem}>
              {"\u2022 "}
              {sanitizePdfText(item)}
            </Text>
          ))}
        </View>
        <PageFooter title={workbook.title} />
      </Page>

      <Page size="LETTER" style={styles.page}>
        <Text style={styles.sectionTitle}>{sanitizePdfText(workbook.selfAssessment.title)}</Text>
        <Text style={styles.sectionIntro}>
          {sanitizePdfText(workbook.selfAssessment.instructions)}
        </Text>
        {categories.length > 0
          ? categories.map((category) => (
              <View key={category}>
                <Text style={styles.categoryTitle}>{sanitizePdfText(category)}</Text>
                {workbook.selfAssessment.items
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <SelfAssessmentRow key={item.id} item={item} />
                  ))}
              </View>
            ))
          : workbook.selfAssessment.items.map((item) => (
              <SelfAssessmentRow key={item.id} item={item} />
            ))}
        {workbook.selfAssessment.scoringGuide ? (
          <View style={{ ...styles.box, marginTop: 10 }}>
            <Text style={{ fontSize: 10, lineHeight: 1.5 }}>
              {sanitizePdfText(workbook.selfAssessment.scoringGuide)}
            </Text>
          </View>
        ) : null}
        <PageFooter title={workbook.title} />
      </Page>

      <Page size="LETTER" style={styles.page}>
        <Text style={styles.sectionTitle}>Frameworks</Text>
        <Text style={styles.sectionIntro}>
          Research-backed models you will apply throughout this workbook. Read each
          framework once, then use the exercises to put it into practice.
        </Text>
        {workbook.frameworks.map((framework) => (
          <FrameworkBlock key={framework.title} framework={framework} />
        ))}
        <PageFooter title={workbook.title} />
      </Page>

      {workbook.exercises.map((exercise, index) => (
        <Page key={exercise.id} size="LETTER" style={styles.page}>
          {index === 0 ? (
            <>
              <Text style={styles.sectionTitle}>Exercises</Text>
              <Text style={styles.sectionIntro}>
                Work through each exercise in order. Fill in every field. The value is in
                the thinking, not perfect answers.
              </Text>
            </>
          ) : null}
          <View style={styles.exerciseCard}>
            <Text style={styles.exerciseLabel}>Exercise {index + 1}</Text>
            <Text style={styles.exerciseTitle}>{sanitizePdfText(exercise.title)}</Text>
            <Text style={{ ...styles.paragraph, color: "#444", fontSize: 10 }}>
              {sanitizePdfText(exercise.instructions)}
            </Text>
            {exercise.fields.map((field) => (
              <FieldBlock key={field.id} field={field} />
            ))}
          </View>
          <PageFooter title={workbook.title} />
        </Page>
      ))}

      {workbook.worksheets.map((worksheet, index) => (
        <Page key={worksheet.id} size="LETTER" style={styles.page}>
          {index === 0 ? (
            <>
              <Text style={styles.sectionTitle}>Worksheets</Text>
              <Text style={styles.sectionIntro}>
                Reusable templates you can copy for future situations.
              </Text>
            </>
          ) : null}
          <View style={styles.exerciseCard}>
            <Text style={styles.exerciseTitle}>{sanitizePdfText(worksheet.title)}</Text>
            {worksheet.description ? (
              <Text style={{ ...styles.paragraph, color: "#444", fontSize: 10 }}>
                {sanitizePdfText(worksheet.description)}
              </Text>
            ) : null}
            {worksheet.fields.map((field) => (
              <FieldBlock key={field.id} field={field} />
            ))}
          </View>
          <PageFooter title={workbook.title} />
        </Page>
      ))}

      <Page size="LETTER" style={styles.page}>
        <Text style={styles.sectionTitle}>{sanitizePdfText(workbook.actionPlan.title)}</Text>
        <Text style={{ fontSize: 10, color: "#555", marginBottom: 8 }}>
          {sanitizePdfText(workbook.actionPlan.duration)}
        </Text>
        <Text style={styles.sectionIntro}>
          {sanitizePdfText(workbook.actionPlan.instructions)}
        </Text>
        {workbook.actionPlan.days.map((day) => (
          <View key={String(day.day)} wrap={false} style={styles.dayCard}>
            <View style={styles.dayHeader}>
              <Text style={styles.dayTitle}>Day {String(day.day)}</Text>
              <Text style={styles.dayFocus}>{sanitizePdfText(day.focus)}</Text>
            </View>
            {day.tasks.map((task) => (
              <Text key={task} style={styles.listItem}>
                {"\u2022 "}
                {sanitizePdfText(task)}
              </Text>
            ))}
            {day.reflection ? (
              <FieldBlock
                field={{
                  id: `reflection-${day.day}`,
                  label: "Reflection",
                  hint: day.reflection,
                  type: "lines",
                  lines: 2,
                }}
              />
            ) : null}
          </View>
        ))}
        <PageFooter title={workbook.title} />
      </Page>

      <Page size="LETTER" style={styles.page}>
        <Text style={styles.sectionTitle}>Sources</Text>
        <Text style={styles.sectionIntro}>
          Frameworks and research cited in this workbook.
        </Text>
        {workbook.sources.map((source) => (
          <Text key={source.citation} style={styles.listItem}>
            {"\u2022 "}
            {sanitizePdfText(source.citation)}
          </Text>
        ))}
        <PageFooter title={workbook.title} />
      </Page>
    </Document>
  );
}
