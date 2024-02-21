import React from 'react'

const Statistics = () => {
	return (
		<div className='static'>
			<div className='container'>
				<div className='row'>
					<div
						className='col-lg-3 col-sm-6 wow fadeinUp'
						data-wow-duration='0.3s'
						data-wow-delay='0.3s'
					>
						<div className='platform-box text-center'>
							<div className='icon'>
								<img src='assets/img/offer-icon-1.png' alt='' />
							</div>
							<p className='text'>
								Extra Fast <br /> Transaction
							</p>
						</div>
					</div>

					<div
						className='col-lg-3 col-sm-6 wow fadeinUp'
						data-wow-duration='0.4s'
						data-wow-delay='0.4s'
					>
						<div className='platform-box text-center'>
							<div className='icon'>
								<img src='assets/img/offer-icon-2.png' alt='' />
							</div>
							<p className='text'>
								Secure <br /> Transaction
							</p>
						</div>
					</div>

					<div
						className='col-lg-3 col-sm-6 wow fadeinUp'
						data-wow-duration='0.5s'
						data-wow-delay='0.5s'
					>
						<div className='platform-box text-center'>
							<div className='icon'>
								<img src='assets/img/offer-icon-3.png' alt='' />
							</div>
							<p className='text'>
								No Limits on <br /> Exchange
							</p>
						</div>
					</div>

					<div
						className='col-lg-3 col-sm-6 wow fadeinUp'
						data-wow-duration='0.6s'
						data-wow-delay='0.6s'
					>
						<div className='platform-box text-center'>
							<div className='icon'>
								<img src='assets/img/offer-icon-4.png' alt='' />
							</div>
							<p className='text'>
								We have the best <br /> Exchange rate
							</p>
						</div>
					</div>

					<div className='col-12'>
						<div className='content'>
							<div className='bg-pic'>
								<img src='./assets/img/stasictic-bg.png' />
							</div>

							<div
								className='section-head text-center wow fadeInUp'
								data-wow-duration='0.3s'
								data-wow-delay='0.3s'
							>
								<h4 className='lasthead'>Our stats say more then any words</h4>
								<h2 className='title'>Today's Statistics</h2>
								<p className='text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti nulla ab aliquid consequatur! Ducimus iste porro
									ratione illum itaque nam provident, ab ut doloremque tenetur
									debitis, reprehenderit praesentium? Maiores, ad.
								</p>
							</div>

							<div className='row justify-content-center'>
								<div
									className='col-xl-4 loc-lg-6 wow fadeInUp'
									data-wow-duration='0.3s'
									data-wow-delay='0.3s'
								>
									<div className='statis-boxx'>
										<div className='icon'>
											<img src='assets/img/stasictic-icon-1.png' alt='' />
										</div>
										<div className='statis-content'>
											<h3 className='suntitle'>700</h3>
											<p className='text'>Transaction Made</p>
										</div>
									</div>
								</div>

								<div
									className='col-xl-4 loc-lg-6 wow fadeInUp'
									data-wow-duration='0.4s'
									data-wow-delay='0.4s'
								>
									<div className='statis-boxx'>
										<div className='icon'>
											<img src='assets/img/stasictic-icon-2.png' alt='' />
										</div>
										<div className='statis-content'>
											<h3 className='suntitle'>BTC-USDC</h3>
											<p className='text'>Today's champion pair</p>
										</div>
									</div>
								</div>

								<div
									className='col-xl-4 loc-lg-6 wow fadeInUp'
									data-wow-duration='0.5s'
									data-wow-delay='0.5s'
								>
									<div className='statis-boxx'>
										<div className='icon'>
											<img src='assets/img/stasictic-icon-3.png' alt='' />
										</div>
										<div className='statis-content'>
											<h3 className='suntitle'>12 minutes</h3>
											<p className='text'>Average processing time</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistics
