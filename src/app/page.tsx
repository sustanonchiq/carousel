import { SlideT } from '@/utils/types'
import Carousel from '@/widgets/Carousel/Carousel'
import Header from '@/widgets/Header/Header'
import Subheader from '@/widgets/Subheader/Subheader'

export default function Home() {
	const slidesList: SlideT[] = [
		{
			imgPath: '/images/img/Slide1.svg',
			title: 'Анализ текущего состояния карьеры',
			text: '',
		},
		{
			imgPath: '/images/img/Slide2.svg',
			title: 'Поиск работы',
			text: '',
		},
		{
			imgPath: '/images/img/Slide3.svg',
			title: 'Сопроводительные письма и резюме ',
			text: '',
		},
		{
			imgPath: '/images/img/Slide4.svg',
			title: 'Тренинг по презентации личного бренда',
			text: '',
		},
		{
			imgPath: '/images/img/Slide5.svg',
			title: 'Подготовка к собеседованию',
			text: '',
		},
		{
			imgPath: '/images/img/Slide6.svg',
			title: 'Рекомендация по базе STEMPS Career',
			text: '',
		},
	]

	return (
		<>
			<Header />
			<Subheader />
			<Carousel slidesList={slidesList} />
		</>
	)
}
