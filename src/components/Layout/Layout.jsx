import React, { useState } from 'react';
import Header from './Header/Header';
import SectionOneFirst from './SectionOneFirst/SectionOneFirst';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';

const Layout = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<SectionOneFirst />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
		</div>
	);
};

export default Layout;
