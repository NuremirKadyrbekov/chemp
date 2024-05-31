import React from 'react';
import './SectionOneFirst_old.module.css';
import HeaderDesc from './HeaderDesc/HeaderDesc';
import HeaderImages from './HeaderImages/HeaderImages';

const SectionOneFirst_old = () => {
	return (
		<>
			<div className="container">
				<div className="header__content">
					<HeaderDesc />
					<HeaderImages />
				</div>
			</div>
		</>
	);
};
export default SectionOneFirst_old;
