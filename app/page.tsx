import ApolloWrapper from './ApolloWrapper'
import Component from './component'
import {Suspense} from 'react'
export default function() {
  return (
    <Suspense>
      <ApolloWrapper>
        <Component/>
      </ApolloWrapper>
    </Suspense>
  )
}