const app = {
  name: "starter",
  title: "Starter template",
  description:
    "Ultimate starter template, created with the latest version of Nextjs 13 and Typescript with an advanced folder structure for large-scale applications.",
  type: "website",
  url: "https://changeme.vercel.app",
  image: "/brand.svg",
  keywords: "starter template",
  robots: "",
  twitter: {
    site: "",
    card: "",
  },
};

export default function DefaultTags() {
  return (
    <>
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* META TAGS */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={app.description} />
      <meta name="keywords" content={app.keywords} />
      <meta name="robots" content={app.robots} />
      {/* Social media TAGS */}
      <meta property="og:title" content={app.title} />
      <meta property="og:description" content={app.description} />
      <meta property="og:url" content={app.url} />
      <meta property="og:type" content={app.type} />
      {/* TWITTER  TAGS */}
      <meta name="twitter:title" content={app.title} />
      <meta name="twitter:description" content={app.description} />
      <meta name="twitter:card" content={app.twitter.card} />
      <meta name="twitter:site" content={app.twitter.site} />
    </>
  );
}
