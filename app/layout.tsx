
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = "https://omarwalid96.github.io/Portfolio-Omar-Walid/"
const TITLE = "Omar Walid · Robotics Software Engineer (ROS 2, SLAM, Perception)"
const DESCRIPTION =
  "Omar Walid is a robotics software engineer with 8+ years building ROS 2 autonomy, SLAM, perception and humanoid robots, and shipping commercial service robots."
const OG_IMAGE =
  "https://lh3.googleusercontent.com/pw/AP1GczM6MjJQKdKBn6dUX6OX3ZWRpnhpa8HiJgx4-RR91vqUbdwsETy5ZKZ0VJszP9Z50AxrNT8f2ad6vY4ndmc_mujEyXb1Jw0j2FUXOAG18-MF9CqKgc-lGflb1XVdS66ZlE4aZg9pIO0cBDrX_EXE_oVSUQ=w1015-h1353-s-no-gm"
// Paste the content value of Search Console's "HTML tag" verification method here (URL-prefix property).
const GOOGLE_SITE_VERIFICATION = ""

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  authors: [{ name: "Omar Walid", url: SITE_URL }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Omar Walid",
    type: "profile",
    images: [{ url: OG_IMAGE, alt: "Omar Walid, robotics software engineer" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
  verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
