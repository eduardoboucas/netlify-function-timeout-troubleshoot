import ApolloWrapper from './ApolloWrapper'
import {ReactNode} from 'react'
export default function(props : Readonly<{
  children : ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          {props.children}
        </ApolloWrapper>
      </body>
    </html>
  )
}