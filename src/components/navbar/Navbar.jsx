import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

export default function Navbar() {
	//**************** functions ****************//
	function animation() {
		let tabsNewAnim = $('#navbarSupportedContent');
		let activeItemNewAnim = tabsNewAnim.find('.active');
		let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
		let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
		let itemPosNewAnimTop = activeItemNewAnim.position();
		let itemPosNewAnimLeft = activeItemNewAnim.position();
		$('.hori-selector').css({
			top: itemPosNewAnimTop.top + 'px',
			left: itemPosNewAnimLeft.left + 'px',
			height: activeWidthNewAnimHeight + 'px',
			width: activeWidthNewAnimWidth + 'px',
		});
		$('#navbarSupportedContent').on('click', 'li', function (e) {
			$('#navbarSupportedContent ul li').removeClass('active');
			$(this).addClass('active');
			let activeWidthNewAnimHeight = $(this).innerHeight();
			let activeWidthNewAnimWidth = $(this).innerWidth();
			let itemPosNewAnimTop = $(this).position();
			let itemPosNewAnimLeft = $(this).position();
			$('.hori-selector').css({
				top: itemPosNewAnimTop.top + 'px',
				left: itemPosNewAnimLeft.left + 'px',
				height: activeWidthNewAnimHeight + 'px',
				width: activeWidthNewAnimWidth + 'px',
			});
		});
	}

	useEffect(() => {
		animation();
		$(window).on('resize', function () {
			setTimeout(function () {
				animation();
			}, 500);
		});
	}, []);

	return (
		<nav className='navbar navbar-expand-lg navbar-mainbg'>
			<div className='container'>
				<NavLink className='navbar-brand navbar-logo' to='/' exact>
					New Horizons
				</NavLink>

				<button
					className='navbar-toggler'
					onClick={function () {
						setTimeout(function () {
							animation();
						});
					}}
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i className='fas fa-bars text-white'></i>
				</button>

				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav ml-auto'>
						<div className='hori-selector'>
							<div className='left'></div>
							<div className='right'></div>
						</div>

						<li className='nav-item active'>
							<NavLink className='nav-link' to='/' exact>
								<i class='fas fa-home'></i>Home
							</NavLink>
						</li>

						<li className='nav-item'>
							<NavLink className='nav-link' to='/about' exact>
								<i class='fas fa-user-tie'></i>About
							</NavLink>
						</li>

						<li className='nav-item'>
							<NavLink className='nav-link' to='/services' exact>
								{/* <i class='fas fa-tools'></i>Services */}
								<i class='fas fa-cogs'></i>Services
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/portfolio' exact>
								<i class='fas fa-images'></i>Portfolio
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/contact' exact>
								<i class='fas fa-envelope'></i>Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
