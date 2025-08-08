
import Link from 'next/link'
export default function Section4() {
	return (
		<>

			<section className="s-solution tf-spacing-1">
				<div className="mb-70">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8">
								<div className="content">
									<p className="s-title text-white text-anime-wave">
										Driving Business Growth through
										Innovative
										<span>
											Solutions
										</span>
									</p>
									<p className="text text-white">
										At Bisways Consulting, we are dedicated to delivering exceptional service 
										and tailored financial strategies that empower businesses to thrive in an ever-evolving economic landscape.
										By combining deep domain expertise with a client-centric approach, we foster long-term partnerships built on trust,
										integrity, and measurable results. Our mission is to be your trusted Virtual CFO and compliance partner, 
										guiding you toward sustainable growth and industry leadership
									</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="content-right">
									<div className="wg-curve-text tf-animate__box-2 animate__slow">
										<div className="icon">
											<i className="flaticon-rocket" />
										</div>
										<div className="text-rotate">
											<div className="circle">
												<div id="circularText" className="text" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-4">
							<div className="wg-feature-item tf-hover-icon">
								<div className="icon-item hover-icon">
									<i className="flaticon-target" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service">
										Strategic Planning
									</Link>
								</p>
								<p className="text">
									Growing a business means taking many decisions about the way you want to expand your operations.
									 Creating a strategic plan is a key component of planning for growth.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Blueprint for Growth
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Scaling with Purpose
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Smart Moves, Big Impact
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item style-2 tf-hover-icon">
								<div className="icon-item hover-icon">
									<i className="flaticon-rocket" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service-02">
										Consulting & Advisory
									</Link>
								</p>
								<p className="text">
									Consulting & Advisory” refers to the practice of helping districts
									 to improve performance through analysis of existing problems
									 and development of plans.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Clear Strategy, Real Results
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Solving Problem
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Expert Guidance, Every Step
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item last style-3 tf-hover-icon">
								<div className="icon-item hover-icon">
									<i className="flaticon-megaphone" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service" className="text-white hover-text-main-yellow">
										Financial
									</Link>
								</p>
								<p className="text">
									"Financial services" help in the development of businesses by giving them the required financial assistance,
									 guaranteeing losses, etc.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details" className="text-white hover-text-main-yellow">
												Access to Capital and Credit
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details" className="text-white hover-text-main-yellow">
												Risk Management
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details" className="text-white hover-text-main-yellow">
												Financial Planning and Advisory
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
