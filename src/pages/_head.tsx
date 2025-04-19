import Head from 'next/head';

export default function HeadComponent() {
  return (
    <Head>
      <title>Bodhi's Personal Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Bodhi's Personal Portfolio" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}
