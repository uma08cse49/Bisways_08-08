
import Image from 'next/image'
export default function Section1() {
	return (
		<>

			<section className="s-mission tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-5">
							<div className="image">
								<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-9.jpg" data-src="/images/section/home-9.jpg" alt="" className="lazyload tf-animate-2" />
								
							
							</div>
						</div>
						<div className="col-lg-7">
							<div className="content">
								<p className="s-sub-title mb-13">
									<i className="icon-angles-right moveLeftToRight" />
									Mission &amp; vision
								</p>
								<p className="s-title mb-30 text-anime-wave">
									Our Mission and Vision <br /> for Business
									<span>
										Success
									</span>
								</p>
								<p className="text mb-50">
									At Bisways Consulting, we empower businesses with expert financial guidance and smart compliance solutions.
<br/>
									Our mission is to simplify growth through reliable Virtual CFO and advisory services.
									We envision a future where every entrepreneur thrives with clarity, confidence, and control.
									Together, we build sustainable success—one business at a time.

								</p>
								<ul className="list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title-top">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<p className="company">
												Company Mission
											</p>
										</div>
										<p className="text">
											At Bisways, we streamline operations, implement internal controls, and handle compliance,
											 so you can focus on your business. We bring quality, integrity, and efficiency to every step.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title-top">
											<div className="icon">
												<i className="flaticon-opportunity" />
											</div>
											<p className="company">
												Company Vission
											</p>
										</div>
										<p className="text">
											We envision a world where businesses soar by focusing on what they do best,
											 while we transform their operations into seamless,
											  compliant, and efficient systems that fuel growth and innovation.
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
