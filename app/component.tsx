'use client'
import {gql, useSuspenseQuery} from '@apollo/client'
export default function() {
  console.time('query')
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
  console.timeEnd('query')
  return <div>THIS IS A SUSPENSE TEST: {countries.data.countries[0].name}</div>
}