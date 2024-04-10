import Link from 'next/link';
import React from 'react'

export default function Navbar(){
    return(
        <nav className='flex justify-between items-baseline w-9/12 py-3 px-12 m-auto'>
            <h1 className='text-4xl '><Link href="/">Happy<span className='text-blue-400'>Tails</span></Link></h1>
            <ul className='text-xl flex gap-8'>
                <li>
                    <Link href="/adote">Adote</Link>
                </li>
                <li>
                    <Link href="/historias">Histórias</Link>
                </li>
                <li>
                    <Link href="/sobreNos">Sobre Nós</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </ul>

        </nav>
    )
}