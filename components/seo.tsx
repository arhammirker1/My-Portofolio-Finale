import type React from "react"

interface SEOProps {
  title: string
  description: string
  url: string
  image?: string
  author?: string
  type?: string
}

export function SEO({
  title,
  description,
  url,
  image = "/og-image.png",
  author = "Arham Mirkar",
  type = "website",
}: SEOProps): React.ReactElement {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </>
  )
}
