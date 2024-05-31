import React from 'react';
import css from './SectionOneFirst.module.css';
import lay from '../../../sources/images/Lay.png';
import h2 from '../../../sources/images/h_2.png';

const SectionOneFirst = () => {
	return (
		<>
			<section className={css.SectionOneFirst}>
				<div className="container">
					<div className={css.content}>
						<div className={css.left}>
							<h1 className={css.title}>
								Легкие и безопасные <span>онлайн-платежи</span>
							</h1>
							<p className={css.text}>
								Миллионы компаний всех размеров используют Наш сервис онлайн и
								лично для приема платежей, отправки выплат, автоматизации
								финансовых процессов и увеличения доходов.
							</p>
							<button>Начать сейчас</button>
						</div>
						<div className={css.right}>
							<img className={css.h2} src={h2} alt="h_2" />
							<img className={css.lay} src={lay} alt="lay" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default SectionOneFirst;
