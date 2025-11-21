import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css";


export const metadata: Metadata = {
  title: "Ottonomi AI - Autonomous Traffic Intelligence. Powered by AI.",
  description:
    "Transform traffic data into autonomous insights and real-time control for smarter, safer cities with Ottonomi AI.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        {/* Analytics component removed */}
      </body>
    </html>
  )
}
