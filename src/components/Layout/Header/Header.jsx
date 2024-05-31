import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { sideLinks } from '../../../routes/sideLinks';
import { menuLinks } from '../../../routes/menuLinks';
import BurgerButton from '../../../ui/burgerButton/BurgerButton';
import BurgerMenu from '../../../ui/burgerMenu/BurgerMenu';

const Header = ({ isOpen, setIsOpen }) => {
	const { pathname } = useLocation();
	const [headerScroll, setHeaderScroll] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleScroll = () => setHeaderScroll(window.scrollY >= 10);
		const handleResize = () => setIsMobile(window.innerWidth < 1000);
		handleScroll();
		handleResize();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={css.header}>
			<div
				className={
					headerScroll
						? `${css.header_scroll} ${css.active}`
						: `${css.header_scroll}`
				}
			>
				<div className="container">
					<div className={css.content}>
						<div className={css.left}>
							<div className={css.logo}>
								<h1>Logo</h1>
							</div>
						</div>
						<div className={css.right}>
							{!isMobile ? (
								<>
									<nav className={css.nav}>
										<ul>
											{sideLinks.map((item, index) => (
												<li key={index}>
													<Link
														to={item.href}
														className={
															pathname === item.href
																? `${css.link} ${css.active}`
																: `${css.link}`
														}
													>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</nav>
									<div className={css.auth}>
										<button>{menuLinks.login.name}</button>
									</div>
								</>
							) : (
								<>
									<BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
									<BurgerMenu
										menuLinks={menuLinks}
										siteLinks={sideLinks}
										isOpen={isOpen}
										setIsOpen={setIsOpen}
										pathname={pathname}
									/>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
