
import Image from 'next/image'
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-service-4 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									consulting services
								</p>
								<p className="s-title text-center text-anime-wave">
									The Bisways Consulting Service to grow your business 
									<span>
										and sales
									</span>
								</p>
							</div>
							<div className="grid-layout-3">
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height : "350px" }}
											src="/images/section/service-a.jpg" data-src="/images/section/service-a.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-data-management" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Entity Setup & Registrations
										</Link>
										<p className="text">
											We help you choose and register the ideal business structure tailored to your goals and compliance needs.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height : "350px" }}
											src="/images/section/service-b.jpg" data-src="/images/section/service-b.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-human-resources" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Accounting & Finance
										</Link>
										<p className="text">
											We provide end-to-end accounting, bookkeeping, and financial reporting services to keep your business compliant and audit-ready..
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height : "350px" }}
											src="/images/section/service-c.jpg" data-src="/images/section/service-c.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-target-1
                                      " />
										</div>
										<Link href="/service-details" className="title fw-7">
											Secraterial Complainces
										</Link>
										<p className="text">
											We ensure your business stays compliant with all corporate laws, filings, and governance standards under the Companies Act.


										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height : "350px" }}
											src="/images/section/service-d.jpg" data-src="/images/section/service-d.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-return-of-investment" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Taxation
										</Link>
										<p className="text">
											We offer comprehensive direct and indirect tax services, including GST, Income Tax, and TDS compliance.
Our team ensures accurate filings.

										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14" >
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height : "350px" }}
											src="/images/section/service-e.jpg" data-src="/images/section/service-e.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-viral-marketing
                                      " />
										</div>
										<Link href="/service-details" className="title fw-7">
											Advisory
										</Link>
										<p className="text">
											We provide expert financial, business, and compliance advisory to help you make informed decisions with confidence.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height : "350px" }}
											src="/images/section/service-f.jpg" data-src="/images/section/service-f.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-solution" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Licenses & Business Permits
										</Link>
										<p className="text">
											We assist in obtaining all mandatory licenses and regulatory permits required to legally operate your business.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
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
