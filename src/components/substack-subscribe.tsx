export function SubstackSubscribe() {
  return (
    <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-lg border border-border/70 bg-background shadow-sm">
      <iframe
        src="https://beremarkablebook.substack.com/embed"
        title="Subscribe to Be Remarkable on Substack"
        className="h-[150px] w-full bg-background"
        scrolling="no"
      />
    </div>
  );
}
