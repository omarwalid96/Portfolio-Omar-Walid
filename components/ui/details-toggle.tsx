import { ChevronDown } from "lucide-react"

// Native <details>: project write-ups stay closed until asked for, no client JS.
export function DetailsToggle({ children }: { children: React.ReactNode }) {
    return (
        <details className="read-more group/details">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 rounded-sm text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                <span className="group-open/details:hidden">Read more</span>
                <span className="hidden group-open/details:inline">Show less</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 ease-out group-open/details:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="read-more-body mt-4">{children}</div>
        </details>
    )
}
