import { SlideT } from '@/utils/types'
import Carousel from '@/widgets/Carousel/Carousel'
import Header from '@/widgets/Header/Header'
import Subheader from '@/widgets/Subheader/Subheader'

export default function Home() {

	const slidesList: SlideT[] = [
		{
			imgPath: '/images/img/Slide1.svg',
			title: 'Анализ текущего состояния карьеры',
			text: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
		},
		{
			imgPath: '/images/img/Slide2.svg',
			title: 'Поиск работы',
			text: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
		},
		{
			imgPath: '/images/img/Slide3.svg',
			title: 'Сопроводительные письма и резюме ',
			text: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства. ',
		},
		{
			imgPath: '/images/img/Slide4.svg',
			title: 'Тренинг по презентации личного бренда',
			text: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
		},
		{
			imgPath: '/images/img/Slide5.svg',
			title: 'Подготовка к собеседованию',
			text: 'Научим говорить о себе кратко, ясно, ярко, и профессионально',
		},
		{
			imgPath: '/images/img/Slide6.svg',
			title: 'Рекомендация по базе STEMPS Career',
			text: 'Поможем встретиться соискателю и работодателю. ',
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
