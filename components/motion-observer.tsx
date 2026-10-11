"use client"

import { useEffect } from "react"

// Reveal-on-scroll without hiding content by default (static export, JS-off safe):
// only elements below the fold when this mounts are hidden, then revealed as they enter.
// ponytail: one observer for the whole page; no animation library.
export function MotionObserver() {
    useEffect(() => {
        const root = document.documentElement
        const els = document.querySelectorAll<HTMLElement>("[data-reveal]")
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (!e.isIntersecting) continue
                    e.target.setAttribute("data-revealed", "")
                    io.unobserve(e.target)
                }
            },
            { rootMargin: "0px 0px -10% 0px" },
        )
        // Already on screen or above it (e.g. loaded at /#projects): show now, never hide.
        els.forEach((el) => (el.getBoundingClientRect().top < innerHeight ? el.setAttribute("data-revealed", "") : io.observe(el)))
        root.dataset.motion = "armed" // hides only the off-screen items, without a transition
        requestAnimationFrame(() => requestAnimationFrame(() => (root.dataset.motion = "on")))
        return () => io.disconnect()
    }, [])
    return null
}
