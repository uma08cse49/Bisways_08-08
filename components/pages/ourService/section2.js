
import Image from 'next/image'
import Link from 'next/link'
export default function Section2() {
	return (
		<>

			<section className="s-process tf-spacing-1">
				<div className="tf-overlay" />
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.3">
						<img
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							src="/images/section/process.jpg" data-src="/images/section/process.jpg" alt="" className="lazyload" />
					</div>
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="heading mb-50">
									<p className="s-sub-title text-white mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										working process
									</p>
									<p className="s-title text-white text-anime-wave">
										Crafting your Success <br />
										to Process
										<span>
											Roadmap
										</span>
									</p>
								</div>
								<div className="wg-step-skill ">
									<p className="title font-main-2 mb-30 ">
										Step-by-Step Consulting for Sustainable Growth
									</p>
									<br/>
									<p>At Bisways Consulting, we follow a streamlined, four-step process designed to drive clarity,
										 compliance, and consistent business growth</p>
									<span className="line" />
									<ul className="benefit-list">
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Business Insight Session
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Compliance & Financial Audit
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Bespoke Solution Execution
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Continuous Partnership & Progress
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 ">
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 01
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Discover
										</Link>
									</div>
									<p className="text">
										We begin by understanding your business structure, goals,
										 and financial challenges through a detailed consultation.
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 02
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Diagnose
										</Link>
									</div>
									<p className="text">
										Our team analyzes your books, compliance status, and operational gaps to identify key improvement areas.
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 03
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Design & Implement
										</Link>
									</div>
									<p className="text">
										We craft tailored solutions — from compliance to Virtual CFO services — and integrate them seamlessly into your workflow.
									</p>
								</div>
								<div className="wg-process  wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 04
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Monitor & Grow
										</Link>
									</div>
									<p className="text">
										With continuous support, real-time reporting, and strategic advice, we help you stay compliant and scale sustainably.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
