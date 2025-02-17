import { SlideT } from '@/utils/types'
import Image from 'next/image'
import { FC } from 'react'

interface SlideProps extends SlideT {
	isActive: boolean
	width: number
}

const Slide: FC<SlideProps> = ({ imgPath, title, text, width, isActive }) => {
	return (
		<div
			className={`relative h-[210px] sm:h-[256px] bg-[#F0F0F0] rounded-[8px] p-4 sm:p-6 shrink-0 ${
				isActive ? ' shadow-activeSlide' : ''
			}`}
			style={{ width: `calc(${width + '% - 8px'})` }}>
			<div className='flex flex-row gap-6 sm:flex-col'>
				<Image src={imgPath} alt='slide' width={80} height={80} className='w-[60px] sm:w-[80px]' />
				<h3 className='sm:absolute bottom-6 text-[24px] sm:text-[28px] leading-7 sm:leading-9'>
					{title}
				</h3>
			</div>
			<p className='absolute bottom-4 block sm:hidden p-0 m-0'>{text}</p>
		</div>
	)
}

export default Slide
