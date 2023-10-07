
import { createContext, useEffect, useState } from 'react'
import Script from 'next/script';
import Head from 'next/head';
import type { AppProps } from 'next/app'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}