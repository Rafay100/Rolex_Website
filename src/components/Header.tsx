import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'> Rolex Watch's</h1>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/watches'>Watches</Link>
            <Link href='/contact'>Contact</Link>
           
        </nav>
    </header>
  )
}

export default Header
