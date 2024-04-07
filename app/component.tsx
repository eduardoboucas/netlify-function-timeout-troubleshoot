'use client'
import {gql, useSuspenseQuery} from '@apollo/client'
export default function() {
  const countries = useSuspenseQuery(gql`
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
  return <div>THIS IS A SUSPENSE TEST: {countries.data.countries[0].name}</div>
}