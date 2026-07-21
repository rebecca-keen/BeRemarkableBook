"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";

import {
  unlockWorkbooks,
  type UnlockState,
} from "@/app/workbooks/unlock/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState: UnlockState = {};

export function WorkbookUnlockForm() {
  const [state, formAction, pending] = useActionState(
    unlockWorkbooks,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
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
          disabled={pending}
          aria-invalid={Boolean(state.error)}
          aria-describedby={state.error ? "unlock-error" : undefined}
          className="h-12 rounded-md border-border/80 bg-background px-4 text-base shadow-sm"
        />
      </div>
      {state.error ? (
        <p id="unlock-error" className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      ) : null}
      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="w-full rounded-md sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Unlocking...
          </>
        ) : (
          "Unlock access"
        )}
      </Button>
    </form>
  );
}
