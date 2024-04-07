'use client'
import {gql, useSuspenseQuery} from '@apollo/client'
import {performance} from 'node:perf_hooks'
export default function() {
  const start = performance.now()
  const countries = useSuspenseQuery<{
    countries : Array<{
      name : string
    }>
  }>(gql`
    query {
      countries {
        name
      }
    }
  `, {
    context: {
      fetchOptions: {
        next: {
          revalidate: 15
        }
      }
    }
  })
  console.log('query duration:', performance.now() - start)
  return <div>THIS IS A SUSPENSE TEST: {countries.data.countries[0].name}</div>
}