import React, { useState } from 'react';
import './Main.css';
import Header from '../compsPage/Header';
import './Header.css'
import Footer from '../compsPage/Footer';
import './Footer.css'
import useHttp from '../hooks/httpHook'

export default function Main(params) {

	const { loading, request } = useHttp()
	// const [works, setWorks] = useState([])
	const works = []

	window.addEventListener('load', async () =>  {
		const response = await request('work//get-works', 'GET')
		// setWorks([works, ...response.works])
		// console.log(response.works);
	})

	return (
		<>
			<Header />
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
					<p>	Время работы Service Station в г. Гомель:<b> с 9.00 до 19.00 пн.- вс.</b></p>
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
				<h2>
					Прейскурант отпускных цен на услуги Service Station в г. Гомель
				</h2>
				<table>
				</table>
				<h3>*Примечание: прейскурант ориентировочный, стоимость услуг уточняйте на СТО.</h3>
			</main>

			<Footer />
		</>
	)
};
