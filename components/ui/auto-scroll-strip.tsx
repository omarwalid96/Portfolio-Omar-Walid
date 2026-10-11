"use client"

import { useEffect, useRef } from "react"

const SPEED = 32 // px per second
const RESUME_AFTER = 2500 // ms after the visitor stops interacting

// Horizontal strip that drifts on its own and loops. Children must be the item list rendered
// twice (second copy aria-hidden); wrapping at half the scroll width makes the loop seamless.
// Pauses on hover, touch, wheel, keyboard focus, when off screen, and never runs under reduced motion.
export function AutoScrollStrip({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return

        let pos = el.scrollLeft
        let last = performance.now()
        let busyUntil = 0
        let hovering = false
        let visible = false
        let frame = 0

        const half = () => el.scrollWidth / 2
        const wrap = () => {
            if (el.scrollLeft >= half()) el.scrollLeft -= half()
        }
        const tick = (now: number) => {
            const dt = Math.min(now - last, 50)
            last = now
            const idle = !hovering && now > busyUntil && !el.contains(document.activeElement)
            if (visible && idle) {
                pos += (SPEED * dt) / 1000
                if (pos >= half()) pos -= half()
                el.scrollLeft = pos
            } else {
                pos = el.scrollLeft
            }
            frame = requestAnimationFrame(tick)
        }
        const interact = () => (busyUntil = performance.now() + RESUME_AFTER)
        const enter = () => (hovering = true)
        const leave = () => {
            hovering = false
            interact()
        }

        const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
        io.observe(el)
        el.addEventListener("pointerenter", enter)
        el.addEventListener("pointerleave", leave)
        el.addEventListener("pointerdown", interact)
        el.addEventListener("wheel", interact, { passive: true })
        el.addEventListener("touchstart", interact, { passive: true })
        el.addEventListener("scroll", wrap, { passive: true })
        frame = requestAnimationFrame(tick)
        return () => {
            cancelAnimationFrame(frame)
            io.disconnect()
            el.removeEventListener("pointerenter", enter)
            el.removeEventListener("pointerleave", leave)
            el.removeEventListener("pointerdown", interact)
            el.removeEventListener("wheel", interact)
            el.removeEventListener("touchstart", interact)
            el.removeEventListener("scroll", wrap)
        }
    }, [])

    return (
        <ul ref={ref} data-reveal="group" className={className}>
            {children}
        </ul>
    )
}
