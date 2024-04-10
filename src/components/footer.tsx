import Link from 'next/link';
import React from 'react'

export default function Footer(){
    return(
        <div className='flex flex-col'>
        <footer className='mt-8 flex justify-between items-baseline w-9/12 py-3 px-12 m-auto border-t border-b border-blue-950'>
            <h1 className='text-4xl '><Link href="/">Happy<span className='text-blue-400'>Tails</span></Link></h1>
            <ul className='text-xl flex gap-8'>
                <li>
                    <Link href="/">Cadastre-se</Link>
                </li>
                <li>
                    <Link href="/">Quem somos?</Link>
                </li>
                <li>
                    <Link href="/">Contatos</Link>
                </li>
                <li>
                    <Link href="/">Colabore conosco</Link>
                </li>
            </ul>
            

        </footer>

        <div className='flex justify-center items-baseline w-9/12 mt-6 m-auto'><p className='text-blue-900'>©Copyrigth 2024 All Rights Reserved by HappyTails</p></div>
        </div>
    )
}