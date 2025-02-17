'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false)

	return (
		<header className='relative flex items-center justify-between p-4 border-b-[1px] border-b-border'>
			<div className='flex items-center gap-4'>
				<Image src='/images/logo/logo-big.svg' width={28} height={28} alt='лого' />
				<span className='hidden sm:block text-base uppercase text-black'>stemps</span>
			</div>
			<nav className='hidden sm:block'>
				<ul className='flex list-none gap-6 text-black'>
					<li>
						<Link href='/' className='hover:underline'>
							О школе
						</Link>
					</li>
					<li>
						<Link href='/' className='hover:underline'>
							Курсы
						</Link>
					</li>
					<li>
						<Link href='/' className='hover:underline'>
							Библиотека
						</Link>
					</li>
				</ul>
			</nav>
			<nav
				className={`absolute left-0 right-0 bottom-0 top-0 p-4 flex justify-center sm:hidden duration-500 bg-black${
					isMenuOpened ? ' -translate-y-0' : ' -translate-y-full'
				}`}>
				<ul className='flex list-none gap-6 text-black'>
					<li>
						<Link href='/' className='hover:underline text-white'>
							О школе
						</Link>
					</li>
					<li>
						<Link href='/' className='hover:underline text-white'>
							Курсы
						</Link>
					</li>
					<li>
						<Link href='/' className='hover:underline text-white'>
							Библиотека
						</Link>
					</li>
					<li onClick={() => setIsMenuOpened(false)}>
						<Image src='/images/icons/close.svg' width={26} height={26} />
					</li>
				</ul>
			</nav>
			<Link className='hidden sm:flex items-center gap-4 text-base text-black ' href='/login'>
				Вход
				<Image src='/images/icons/login.svg' width={30} height={28} alt='Вход' />
			</Link>
			<button
				onClick={() => setIsMenuOpened(true)}
				className='block sm:hidden bg-black text-white text-base py-1 px-2 rounded-[4px]'>
				Меню
			</button>
		</header>
	)
}

export default Header
