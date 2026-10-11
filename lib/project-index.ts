import { withBasePath } from "@/lib/config"

// Builds the "Project index" strip: one tile per project card, with a cheap still-image thumbnail.

type Media = { url?: string; fallback?: string; alt?: string }
type ProjectLike = { title: string; image?: Media; images?: Media[] }

export type IndexItem = { title: string; anchor: string; tag: string; thumb: string | null }

const plain = (title: string) => title.replace(/\*\*/g, "").trim()

// Anchor id for a project card; the card and its index tile both call this.
export function projectAnchor(title: string): string {
  return "p-" + plain(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

const CLOUDINARY_THUMB = "w_480,h_300,c_fill,q_auto"

// A still image for a project's first media item. Never returns an embed or a video file:
// 20+ iframes in one strip would stall the page.
export function thumbnailFor(media?: Media): string | null {
  const url = media?.url?.trim() ?? ""
  if (url) {
    const player = url.match(/player\.cloudinary\.com\/embed\/\?.*cloud_name=([^&]+).*public_id=([^&]+)/)
    if (player) return `https://res.cloudinary.com/${player[1]}/video/upload/so_2,${CLOUDINARY_THUMB}/${player[2]}.jpg`

    const res = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/(image|video)\/upload\/)(.*)$/)
    if (res) {
      const rest = res[2] === "video" ? res[3].replace(/\.[a-z0-9]+$/i, ".jpg") : res[3]
      return `${res[1]}${res[2] === "video" ? "so_2," : ""}${CLOUDINARY_THUMB}/${rest}`
    }

    const yt = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/)
    if (yt) return `https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg`

    const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/)
    if (drive) return `https://drive.google.com/thumbnail?id=${drive[1]}&sz=w480`

    // ponytail: other embeds (Vimeo, Google Photos video) and raw video files fall through to the fallback
    const isVideoOrEmbed = /\.(mp4|webm|mov)(\?|$)/i.test(url) || /vimeo\.com|\/embed\//.test(url)
    if (!isVideoOrEmbed) return withBasePath(url)
  }
  return media?.fallback ? withBasePath(media.fallback) : null
}

export function buildProjectIndex(config: any): IndexItem[] {
  const groups: [string, ProjectLike[]][] = [
    ["Now", config.currentWork?.projects ?? []],
    ["Project", config.projects?.featured ?? []],
    ["Research", config.research?.areas ?? []],
  ]
  return groups.flatMap(([tag, projects]) =>
    projects.map((p) => ({
      title: plain(p.title),
      anchor: projectAnchor(p.title),
      tag,
      thumb: thumbnailFor(p.images?.[0] ?? p.image),
    })),
  )
}
