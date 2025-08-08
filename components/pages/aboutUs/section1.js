
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-about tf-spacing-7">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="heading">
								<p className="s-sub-title text-white mb-16">
									<i className="icon-angles-right moveLeftToRight" />
									about company
								</p>
								<p className="s-title text-white mb-70 text-anime-wave">
									We Work For Building a Brighter Future Together <br />
									and
									<span>
										Grow Business
									</span>
								</p>
								<div className="image">
									<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/aboutus-1.jpg" data-src="/images/section/aboutus-1.jpg" alt="" className="lazyload tf-animate-2" />
								
								
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="content-right">
								<div className="wg-counter style-4 pt-5">
									{/* <div className="odometer style-4"><CounterUp count={10} /></div> */}
									{/* <span className="sub-odo">+</span> */}
								</div>
								{/* <p className="sub-counter text-white font-main-2 fw-5 fs-20 mb-70 mt-5">
									Years Of Experience In Business Consulting
								</p> */}
								<div className="image mb-30 tf-hover">
									<div className="hover-1">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/aboutus-2.jpg" data-src="/images/section/aboutus-2.jpg" alt="" className="lazyload tf-animate-2" />
								
									
									</div>
								</div>
								<p className="text text-white mb-40">
									Bisways Consulting is a trusted partner for startups, SMEs, and growing businesses across India,
									 offering expert financial, compliance, and strategic advisory services. With a dedicated team of professionals,
									 we specialize in Virtual CFO services, accounting, taxation, ROC filings, GST, and business registrations.
								</p>
								<ul className="list mb-40">
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>
											Customized Solutions
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>
											Expertise &amp; Experience
										</p>
									</li>
								</ul>
								{/* <Link href="/our-service" className="tf-btn text-anime-style-1">
									Get Started
									<i className="icon-chevron-right" />
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
