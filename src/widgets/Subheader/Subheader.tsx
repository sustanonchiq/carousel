import { FC } from 'react'

interface SubheaderProps {}

const Subheader: FC<SubheaderProps> = () => {
	return (
		<div className='flex flex-col sm:flex-row sm:items-center p-4 sm:border-b-[1px] border-b-border'>
			<span className='text-[26px] sm:text-[40px] text-purple pb-4 sm:pb-0 leading-none border-b-[1px] border-b-border sm:border-b-0'>
				1.0
			</span>
			<h1 className='text-[40px] text-purple sm:mx-auto'>Наши услуги</h1>
		</div>
	)
}

export default Subheader
