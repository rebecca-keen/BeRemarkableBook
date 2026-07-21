import { siteConfig } from "@/lib/site-config";

type BookIntroVideoProps = {
  title?: string;
  className?: string;
};

export function BookIntroVideo({
  title = siteConfig.bookIntroVideo.title,
  className,
}: BookIntroVideoProps) {
  const { embedUrl, watchUrl } = siteConfig.bookIntroVideo;

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg border border-border/80 bg-background shadow-sm">
        <div className="relative aspect-video w-full">
          <iframe
            src={`${embedUrl}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Watch on YouTube
        </a>
      </p>
    </div>
  );
}
