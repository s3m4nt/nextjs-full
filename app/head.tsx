export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>My Next.js App</title>
      <meta name="description" content="An awesome Next.js application." />
      <meta name="author" content="Your Name" />
      <meta property="og:title" content="My Next.js App" />
      <meta property="og:description" content="An awesome Next.js application." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-domain.com" />
      <meta property="og:image" content="/images/og-image.png" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
