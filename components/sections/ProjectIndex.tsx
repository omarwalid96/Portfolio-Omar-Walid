import { buildProjectIndex } from "@/lib/project-index"
import { AutoScrollStrip } from "@/components/ui/auto-scroll-strip"

interface ProjectIndexProps {
    config: any
}

// One tile per project; each links to its full card further down the page.
// Drifts on its own (AutoScrollStrip); swipe, trackpad or shift+wheel still scroll it by hand.
export function ProjectIndex({ config }: ProjectIndexProps) {
    const items = buildProjectIndex(config)

    return (
        <section id="index" aria-labelledby="index-heading" className="py-12 px-4">
            <div className="container mx-auto">
                <div className="flex items-end justify-between gap-4 mb-6">
                    <div>
                        <h2 id="index-heading" className="text-2xl font-semibold tracking-tight text-foreground">
                            Project index
                        </h2>
                        <p className="text-muted-foreground mt-1">
                            {items.length} projects. Pick one to jump to its details.
                        </p>
                    </div>
                    <span className="hidden sm:block text-sm text-muted-foreground" aria-hidden="true">
                        Hover to pause · scroll sideways →
                    </span>
                </div>

                {/* Live carousel: the list is rendered twice so the drift can loop; the copy is hidden from AT and keyboard. */}
                <AutoScrollStrip className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 [mask-image:linear-gradient(to_right,transparent,black_4%,black_92%,transparent)]">
                    {[false, true].map((copy) => items.map((item, index) => (
                        <li key={(copy ? "copy-" : "") + item.anchor} aria-hidden={copy || undefined} inert={copy || undefined} data-reveal-item style={{ "--i": Math.min(index, 6) } as React.CSSProperties} className="snap-start shrink-0 w-56 sm:w-64">
                            <a
                                href={`#${item.anchor}`}
                                tabIndex={copy ? -1 : undefined}
                                className="group block rounded-xl outline-none transition-transform duration-150 ease-out active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                {/* Title sits under the image: a dead thumbnail (alt="") renders nothing and the title shows through. */}
                                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm font-medium text-muted-foreground">
                                        {item.title}
                                    </div>
                                    {item.thumb && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={item.thumb}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            className="relative h-full w-full object-cover transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:scale-[1.04] motion-reduce:transition-none"
                                        />
                                    )}
                                </div>
                                <p
                                    className={
                                        item.tag === "Now"
                                            ? "mt-3 text-xs font-medium text-blue-600 dark:text-blue-400"
                                            : "mt-3 text-xs font-medium text-muted-foreground"
                                    }
                                >
                                    {item.tag}
                                </p>
                                <p className="mt-0.5 text-sm font-medium leading-snug text-foreground line-clamp-2 group-hover:underline underline-offset-4">
                                    {item.title}
                                </p>
                            </a>
                        </li>
                    
                    )))}
                </AutoScrollStrip>
            </div>
        </section>
    )
}
