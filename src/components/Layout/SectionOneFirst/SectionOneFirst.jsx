import React from 'react';
import './SectionOneFirst.module.css';
import HeaderDesc from './HeaderDesc/HeaderDesc';
import HeaderImages from './HeaderImages/HeaderImages';

const SectionOneFirst = () => {
	return (
		<>
			<div className="header__content">
				<HeaderDesc />
				<HeaderImages />
			</div>
		</>
	);
};
export default SectionOneFirst;
