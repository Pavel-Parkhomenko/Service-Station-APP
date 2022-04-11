import React, { useCallback, useEffect, useState } from 'react';
import './Main.css';
import Header from '../compsPage/Header';
import './Header.css'
import Footer from '../compsPage/Footer';
import './Footer.css'
import useHttp from '../hooks/httpHook'
import Feedback from '../components/Feedback';

export default function Main(params) {

	const { request } = useHttp()
	const [works, setWorks] = useState([])
	const [feedbacks, setFeedbacks] = useState([]);

	useEffect(async () => {
		const resWorks = await request('work/get-works', 'GET');
		setWorks([...works, ...resWorks.works])
		const resFeedback = await request('client/get-feedbacks', "GET");
        setFeedbacks([...feedbacks, ...resFeedback.data])
	}, [])

	return (
		<>
			<Header menu="menu"/>
			<main className="main">
				<h1 style={{ fontSize: 45 }}>СТО Гомель</h1>
				<div className='container-img-text'>
					<div>
						<img className='img-left' src={require("../img/img-main-1.jpg")} />
						Для автолюбителей в <b>Гомеле 1AK.by</b> предоставляет услуги СТО. Удобное расположение станции технического обслуживания на пр. Речицкий 135 позволяет клиентам осуществлять выгодные покупки в магазине «Первой аккумуляторной компании» и получать услуги по обслуживанию автомобиля.
					</div>
					<p>
						СТО на пр. Речицкий 135 является официальной станцией G-EnergyService, сертифицированной ООО «Газпромнефть-СМ». Клиентам предоставляется широкий ассортимент оригинальных смазочных материалов G-Energy и Gazpromneft. Имеются также два поста для экспресс-замены масла.
					</p>
					<p>
						На станции технического обслуживания в г. Гомель на пр. Речицкий 135 также оказывают услуги по ремонту подвески, шиномонтажу, развалу-схождению, компьютерной диагностике различных систем автомобиля.
					</p>
					<p  id="main-servise_info">	Время работы Service Station в г. Гомель:<b> с 9.00 до 19.00 пн.- вс.</b></p>
					<h2 style={{ fontSize: 45 }}>Перечень услуг СТО в Гомеле</h2>
					<div>
						<p><strong><em>Двигатель</em></strong></p>
						<p>Диагностика двигателя, смена комплекта ГРМ, масляного фильтра, моторного масла, ремня генератора, прокладок ДВС масленого поддона и клапанной крышки, установка защиты двигателя, компьютерная диагностика ДВС.
						</p>
						<p><strong><em>Рулевое управление</em></strong></p>
						<p>Замена жидкости гидроусилителя, ремонт рулевых тяг, рулевой рейки.</p>
						<p><strong><em>Салон</em></strong></p>
						<p>Замена салонного фильтра, установка дополнительного оборудования.</p>
						<p><strong><em>Система выхлопа</em></strong></p>
						<p>Замена глушителей</p>
						<p><strong><em>Зажигание</em></strong></p>
						<p> Замена высоковольтных проводов, катушек зажигания, свечей зажигания, свечей накала</p>
					</div>
					<img style={{ width: 650, height: 450 }} src={require("../img/img-main-2.jpeg")} />
					<div>
						<h3>Услуги магазина «Первой аккумуляторной компании», совмещенного с СТО в Гомеле:</h3>
						<ul className='main-ul'>
							<li>продажа аккумуляторов,</li>
							<li>моторных масел, </li>
							<li>охлаждающих жидкостей, </li>
							<li>тормозных жидкостей, </li>
							<li>трансмиссионных масел,</li>
							<li>автохимии, </li>
							<li>автозапчастей.</li>
						</ul>
					</div>
				</div>
				<div>
					<h2>Отзывы наших клиентов</h2>
					{feedbacks.map((x, ind) => <Feedback key={ind} fio={x.fio} feedback={x.feedback}/>)}
				</div>
				<div id="main-price_table">
					<h2>
						Прейскурант отпускных цен на услуги Service Station в г. Гомель
					</h2>
					<table>
						<tbody>
						<tr>
							<th>Наименование</th>
							<th>Описание</th>
							<th>Стоимость</th>
						</tr>
						{works.map((x, ind) => <tr key={ind}>
							<td>{x.name}</td>
							<td>{x.description}</td>
							<td>{x.cost}</td>
						</tr>)}
						</tbody>
					</table>
					<h3>*Примечание: прейскурант ориентировочный, стоимость услуг уточняйте на СТО.</h3>
				</div>
			</main>

			<Footer />
		</>
	)
};
