import ApolloWrapper from './ApolloWrapper.tsx'
import Component from './component.tsx'
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