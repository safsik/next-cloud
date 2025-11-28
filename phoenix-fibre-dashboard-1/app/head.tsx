import Head from 'next/head';

export default function CustomHead() {
  return (
    <Head>
      <title>Phoenix Fibre Dashboard</title>
      <meta name="description" content="Customer portal for managing Phoenix Fibre services." />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
    </Head>
  );
}