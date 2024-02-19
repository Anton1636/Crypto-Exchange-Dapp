import React from 'react'
import {
	FaFacebook,
	FaPinterestP,
	FaGooglePlusG,
	FaInstagram,
	FaTelegramPlane,
} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
	return (
		<div
			className='footer'
			style={{ backgroundImage: "url('assets/img/footer-bg.png')" }}
		>
			<div className='container'>
				<div className='row'>
					<div
						className='col-12 wow fadeInUp'
						data-wow-duration='0.3s'
						data-wow-delay='0.2s'
					>
						<div className='top-footer'>
							<div className='logo'>
								<img src='assets/img/logo.png' alt='' />
							</div>
							<a href='/' className='button-1'>
								Get In touch
							</a>
						</div>
					</div>
				</div>

				<div className='row justify-content-between'>
					<div
						className='col-lg-2 col-md-6 wow fadeInUp'
						data-wow-duration='0.3s'
						data-wow-delay='0.3s'
					>
						<div className='footer-box'>
							<h4 className='lasthead'>Company</h4>
							<ul className='footer-link'>
								{['About Us', 'Contact Us', 'Blog', 'Affiliate'].map(
									(item, index) => (
										<li key={index}>
											<a href='#'>{item}</a>
										</li>
									)
								)}
							</ul>
						</div>
					</div>

					<div
						className='col-lg-2 col-md-6 wow fadeInUp'
						data-wow-duration='0.4s'
						data-wow-delay='0.4s'
					>
						<div className='footer-box'>
							<h4 className='lasthead'>Support</h4>
							<ul className='footer-link'>
								{['FAQ', 'Contact Time', "How it's work", 'Details'].map(
									(item, index) => (
										<li key={index}>
											<a href='#'>{item}</a>
										</li>
									)
								)}
							</ul>
						</div>
					</div>

					<div
						className='col-lg-2 col-md-6 wow fadeInUp'
						data-wow-duration='0.5s'
						data-wow-delay='0.5s'
					>
						<div className='footer-box'>
							<h4 className='lasthead'>Policy</h4>
							<ul className='footer-link'>
								{[
									'Terms of use',
									'Private Policy',
									'Refunds Policy',
									'Money Type',
								].map((item, index) => (
									<li key={index}>
										<a href='#'>{item}</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div
						className='col-lg-5 col-md-6 wow fadeInUp'
						data-wow-duration='0.5s'
						data-wow-delay='0.5s'
					>
						<div className='footer-box'>
							<h4 className='lasthead'>Newsletter</h4>
							<form action='#'>
								<div className='form-group'>
									<input type='email' placeholder='Enter email address' />
									<button type='submit' className='button-1'>
										Join Now
									</button>
								</div>
							</form>
							<div className='social-style'>
								<a href='#'>
									<FaFacebook />
								</a>
								<a href='#'>
									<FaSquareXTwitter />
								</a>
								<a href='#'>
									<FaPinterestP />
								</a>
								<a href='#'>
									<FaGooglePlusG />
								</a>
								<a href='#'>
									<FaInstagram />
								</a>
								<a href='#'>
									<FaTelegramPlane />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
