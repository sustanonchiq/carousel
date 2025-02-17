'use client'

import Slide from '@/components/Slide/Slide'
import { SlideT } from '@/utils/types'
import { FC, useEffect, useState } from 'react'

interface CarouselProps {
	slidesList: SlideT[]
}

const Carousel: FC<CarouselProps> = ({ slidesList }) => {
	const [activeSlide, setActiveSlide] = useState(0)
	const [slideWidth, setSlideWidth] = useState(25) //in percents

	useEffect(() => {
		console.log(window.innerWidth)
		if (window.innerWidth < 400) {
			setSlideWidth(100)
		} else if (window.innerWidth < 756) {
			setSlideWidth(50)
		} else if (window.innerWidth < 1000) {
			setSlideWidth(33)
		} else {
			setSlideWidth(25)
		}
	}, [])

	return (
		<div className='flex flex-col-reverse justify-start sm:justify-center sm:flex-col overflow-hidden gap-4 p-4'>
			<div
				className='flex gap-4  py-2 duration-500'
				style={{ transform: `translateX(calc(-${slideWidth * activeSlide}% - ${8 * activeSlide}px))` }}>
				{slidesList?.map(({ imgPath, title, text }, i) => {
					return (
						<Slide
							key={title}
							imgPath={imgPath}
							width={slideWidth}
							title={title}
							text={text}
							isActive={activeSlide === i}
						/>
					)
				})}
			</div>
			<div className='relative flex sm:mx-auto mt-4'>
				{slidesList.map((slide, i) => {
					return (
						<div className='flex items-center' key={slide.title}>
							<div className={`w-[8px] h-[8px] bg-white ${activeSlide !== i ? 'z-[100]' : ''}`}></div>
							<div
								className={`bg-white h-[8px] duration-500 transition-width ${
									activeSlide !== i ? 'z-[100]' : ''
								}  ${activeSlide === i ? 'w-[40px]' : 'w-[8px]'}`}>
								<span
									className={`block bg-[#CCCCCC]  h-[8px] rounded-full duration-500 transition-width cursor-pointer `}
									onClick={() => setActiveSlide(i)}></span>
							</div>
						</div>
					)
				})}
				<span
					className={`absolute block h-full rounded-[10px] w-[22px] duration-[500ms] transition-left bg-black z-0`}
					style={{ left: `${16 * activeSlide + 8}px` }}></span>
			</div>
		</div>
	)
}

export default Carousel
