
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-we-do tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									what we do
								</p>
								<p className="s-title text-center text-anime-style-2">
									Empowering Businesses with Expert <br />
									Business
									<span>
										Consulting
									</span>
								</p>
							</div>
							<div className="feature-group overflow-hidden">
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-workflow" />
									</div>
									<Link href="/service-details" className="title">
										Customized Strategic
										Planning &amp; Ideas
									</Link>
									<span className="line mb-30" />
									<p className="text">
										At Bisways Consulting,
										we craft personalized strategies that align with your business goals,
										tackle unique challenges, and unlock growth opportunities.
									</p>
									<div className="image">
										<Link href="/service-details">
											<img
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/service-1.jpg" data-src="/images/section/service-1.jpg" alt="" className="lazyload" />
										</Link>
									</div>
								</div>
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-workflow" />
									</div>
									<Link href="/service-details" className="title">
										Blueprinting Brilliance for Your Business
									</Link>
									<span className="line mb-30" />
									<p className="text">
										We decode your business DNA to design unique pathways for progress.
										By combining analytical depth with creative problem-solving,
										 we unlock fresh possibilities and drive meaningful transformation.
									</p>
									<div className="image">
										<Link href="/service-details">
											<img
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/service-2.jpg" data-src="/images/section/service-2.jpg" alt="" className="lazyload" />
										</Link>
									</div>
								</div>
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-team" />
									</div>
									<Link href="/service-details" className="title">
										Elevating Efficiency, Empowering Growth
									</Link>
									<span className="line mb-30" />
									<p className="text">
										We streamline your business workflows to eliminate friction,
										 boost productivity, and cut unnecessary costs.Through intelligent systems and sharp process insights,
										  we help you operate smarter ,not just faster.

									</p>
									<div className="image">
										<Link href="/service-details">
											<img
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/service-3.jpg" data-src="/images/section/servie-3.jpg" alt="" className="lazyload" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
