import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {

  const { data: session, status } = useSession();
  function onSignInClick() {
    if (status === 'unauthenticated') { signIn('auth0', { callbackUrl: '/dashboard' }); }
    // return alert("onsigninclicked");
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <button
          onClick={onSignInClick}
        >
          sign in
        </button>
      </main>
    </>
  )
}
