// Self-check for lib/project-index.ts: node scripts/check-project-index.mjs
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import ts from "typescript"
import yaml from "js-yaml"

const src = ts.transpileModule(readFileSync(new URL("../lib/project-index.ts", import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
}).outputText.replace(/import \{ withBasePath \} from "@\/lib\/config";?/, "const withBasePath = (s) => s;")
const { thumbnailFor, projectAnchor, buildProjectIndex } = await import("data:text/javascript," + encodeURIComponent(src))

assert.equal(
  thumbnailFor({ url: "https://player.cloudinary.com/embed/?cloud_name=abc&public_id=clip_1" }),
  "https://res.cloudinary.com/abc/video/upload/so_2,w_480,h_300,c_fill,q_auto/clip_1.jpg",
)
assert.equal(
  thumbnailFor({ url: "https://res.cloudinary.com/abc/image/upload/v1/a.jpg" }),
  "https://res.cloudinary.com/abc/image/upload/w_480,h_300,c_fill,q_auto/v1/a.jpg",
)
assert.equal(thumbnailFor({ url: "https://www.youtube.com/embed/OWwtr_71cqI" }), "https://i.ytimg.com/vi/OWwtr_71cqI/hqdefault.jpg")
assert.equal(thumbnailFor({ url: "https://drive.google.com/file/d/AbC_1/preview" }), "https://drive.google.com/thumbnail?id=AbC_1&sz=w480")
assert.equal(thumbnailFor({ url: "https://x.com/a.mp4", fallback: "/local.png" }), "/local.png")
assert.equal(thumbnailFor({ url: "https://x.com/a.mp4" }), null)
assert.equal(thumbnailFor({ url: "https://x.com/a.png" }), "https://x.com/a.png")
assert.equal(projectAnchor("**RoboScribe**, Cursor Hackathon"), "p-roboscribe-cursor-hackathon")

// Every tile must point at a unique card id, or two tiles jump to the same card.
const config = yaml.load(readFileSync(new URL("../config/portfolio.yaml", import.meta.url), "utf8"))
const items = buildProjectIndex(config)
const anchors = items.map((i) => i.anchor)
assert.equal(new Set(anchors).size, anchors.length, "duplicate project anchors")
console.log(`ok: ${items.length} tiles, ${items.filter((i) => !i.thumb).length} without thumbnail`)
