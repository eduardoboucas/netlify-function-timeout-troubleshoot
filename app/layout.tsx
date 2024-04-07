import {ReactNode} from 'react'
export default function(props : Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}