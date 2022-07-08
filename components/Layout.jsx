import React from 'react'
import Nav from './Navbar/Navbar'

export default function Layout({ children }) {
  return (
    <>
        <Nav />
        <main> {children} </main>
    </>
  )
}

