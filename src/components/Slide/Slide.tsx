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
			className={`bg-[#F0F0F0] rounded-[8px] p-6 shrink-0 ${isActive ? ' shadow-activeSlide' : ''}`}
			style={{ width: `calc(${width + '% - 8px'})` }}>
			<Image src={imgPath} alt='slide' width={80} height={80} />
			{title}
			{text}
		</div>
	)
}

export default Slide
