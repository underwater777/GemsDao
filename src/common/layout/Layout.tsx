import React, { PropsWithChildren } from "react"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useMediaQuery } from "@mui/material"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children, variant }: PropsWithChildren<{variant: string}>) {
  const router = useRouter()
  console.log({variant})

  const routeMatch = (path: string) => {
    return router.pathname === path
  }

  if(variant === 'splash') {

    return (
      <>
      <Head>
        <title>Gems Dao</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {children}
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Gems Dao</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="w-full fit-full-h min-h-screen bg-app-default">
        <div className={`w-full flex-1 fit-full-h ${routeMatch("/")?"xl:bg-top xl:bg-no-repeat xl:bg-contain xl:bg-[url('./images/Background.png')]":""}`}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
