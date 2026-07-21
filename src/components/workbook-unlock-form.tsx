import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type WorkbookUnlockFormProps = {
  error?: string;
};

export function WorkbookUnlockForm({ error }: WorkbookUnlockFormProps) {
  return (
    <form action="/api/workbooks/unlock" method="POST" className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="workbook-access-password"
          className="text-sm font-medium text-foreground"
        >
          Access password
        </label>
        <Input
          id="workbook-access-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "unlock-error" : undefined}
          className="h-12 rounded-md border-border/80 bg-background px-4 text-base shadow-sm"
        />
      </div>
      {error ? (
        <p id="unlock-error" className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      <Button type="submit" size="lg" className="w-full rounded-md sm:w-auto">
        Unlock access
      </Button>
    </form>
  );
}
