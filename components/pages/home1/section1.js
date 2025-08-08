
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-feature tf-spacing-3">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-4">
							<div className="wg-feature-item tf-hover-icon wow fadeInUp" data-wow-delay="0s">
								<div className="icon-item hover-icon">
									<i className="flaticon-target" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service">
										Strategic Planning
									</Link>
								</p>
								<p className="text">
									Growing a business means taking many decisions about the way you want to expand your operations. Creating a strategic plan is a key component of planning for growth.
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
							<div className="wg-feature-item style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon-item hover-icon">
									<i className="flaticon-rocket" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service-02">
										Consulting & Advisory
									</Link>
								</p>
								<p className="text">
									Consulting & Advisory” refers to the practice of helping districts to improve performance through analysis of existing problems and development of plans.
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
												Solving Problems
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
							<div className="wg-feature-item style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon-item hover-icon">
									<i className="flaticon-megaphone" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service" className="text-white hover-text-main-yellow">
										Financial
									</Link>
								</p>
								<p className="text">
									"Financial services" help in the development of businesses by giving them the required financial assistance, guaranteeing losses, etc.
									
								</p>
								{/* <span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details" className="text-white hover-text-main-yellow">
												Performance Tracking &amp; Reporting
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details" className="text-white hover-text-main-yellow">
												Automation and Technology
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details" className="text-white hover-text-main-yellow">
												SEO &amp; Content Optimization
											</Link>
										</p>
									</li>
								</ul> */}
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
