import { Badge } from "@/components/ui/badge"

const VISIBLE = 6

// First few technologies as badges; the rest collapse into a "+N more" badge with the full list on hover.
export function TechBadges({ technologies, variant }: { technologies: string[]; variant?: "default" | "outline" }) {
    const shown = technologies.slice(0, VISIBLE)
    const hidden = technologies.slice(VISIBLE)
    return (
        <div className="flex flex-wrap gap-2">
            {shown.map((tech) => (
                <Badge key={tech} variant={variant}>
                    {tech}
                </Badge>
            ))}
            {hidden.length > 0 && (
                <Badge variant="outline" title={hidden.join(", ")}>
                    +{hidden.length} more
                </Badge>
            )}
        </div>
    )
}
