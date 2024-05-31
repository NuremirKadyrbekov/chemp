import React, { useState } from 'react';
import Header from './Header/Header';
// import SectionOneFirst_old from './SectionOneFirst/SectionOneFirst_old';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionOneFirst from './SectionOneFirst/SectionOneFirst';

const Layout = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			{/*<SectionOneFirst_old />*/}
			<SectionOneFirst />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
		</div>
	);
};

export default Layout;
