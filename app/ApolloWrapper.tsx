'use client'
import {ApolloLink, HttpLink} from '@apollo/client'
import {ApolloNextAppProvider, NextSSRInMemoryCache, NextSSRApolloClient, SSRMultipartLink} from '@apollo/experimental-nextjs-app-support/ssr'
import type {PropsWithChildren} from 'react'
function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://countries.trevorblades.com/'
  })
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: typeof window === 'undefined' ? ApolloLink.from([
      new SSRMultipartLink({
        stripDefer: true,
      }),
      httpLink
    ]) : httpLink
  })
}
export default function(props : PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {props.children}
    </ApolloNextAppProvider>
  )
}