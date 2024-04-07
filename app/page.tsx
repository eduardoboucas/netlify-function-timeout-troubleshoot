import Component from './component'
import {Suspense} from 'react'
export default function() {
  return (
    <Suspense>
      <Component/>
    </Suspense>
  )
}