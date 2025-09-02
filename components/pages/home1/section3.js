
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-service tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content">
								<p className="s-sub-title mb-17">
									<i className="icon-angles-right moveLeftToRight" />
									What We Do
								</p>
								<p className="s-title mb-70 text-anime-wave-right">
									The Quality Consulting Service to grow your business <span>and sales</span>
								</p>
								<div className="image tf-hover mb-40">
									<div className="hover-1 hover-14">
										{/* <div style={{height:'500px',width:'100%',backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'50px',fontWeight:'700',color:'#ffcd4c'}}>
														Image Here
										</div> */}
										
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/image-1.jpg" data-src="/images/section/image-1.jpg" alt="" className="lazyload tf-animate-2" />
									
									</div>
								</div>
								<p className="text mb-30" style={{fontSize:"22px"}}>
								We offer practical, tailor-made solutions designed to support modern businesses, non-profits, and institutions across every stage of growth.
								</p>
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											
												Register From Anywhere
										
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
												Best In Industry Support
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
												Transparent Fee & Pricing
										</p>
									</li>
								</ul>
								{/* <div className="bot">
									<div className="counter-wrap">
										<div className="wg-counter">
											<div className="odometer"><CounterUp count={10} /></div>
											<span className="sub-odo">+</span>
										</div>
										<p className="sub-counter font-main-3 lh-21">
											Satisficed Clients
										</p>
									</div>
									<span className="line style-stand">
									</span>
									<Link href="/our-service" className="tf-btn style-3">Explore
										All
										Services <i className="icon-chevron-right" /></Link>
								</div> */}

							{/* <div className="button-group">
								<button class="consultant-btn">Download our Service Broucher</button>
							</div> */}

							<div className="learn-more-container">
									  {/* Learn More Button/Link */}
									  <a className="learn-more-btn">
									  ⬇ Download our Broucher 
										</a>
									</div>
							
						</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-data-management" />
								</div>
								<Link href="/#" className="title fw-7">
								 Virtual CFO Services
								</Link>
								<p className="text">
								Financial planning, analysis, and decision support

								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-human-resources" />
								</div>
								<Link href="/#" className="title fw-7">
								Business Registration & Compliance
								</Link>
								<p className="text">
								→ Incorporation, GST, MSME, PAN, DSC, and more
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-target-1" />
								</div>
								<Link href="/#" className="title fw-7">
								Statutory Filings & Advisory
								</Link>
								<p className="text">
								  ROC, MCA, tax returns, GST returns, etc.
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-return-of-investment" />
								</div>
								<Link href="/#" className="title fw-7">
								 Audit & Taxation Services
								</Link>
								<p className="text">
								  Year-end audits, TDS, internal controls, IT returns
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div>

							{/* <div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-target-1" />
								</div>
								<Link href="/#" className="title fw-7">
								NGO, Trust & CSR Consulting
								</Link>
								<p className="text">
								80G/12A registration, DARPAN, CSR-1, FC(R)A
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div> */}


							{/* <div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-target-1" />
								</div>
								<Link href="/#" className="title fw-7">
								Strategic & Digital Advisory
								</Link>
								<p className="text">
								Business structuring, branding, tech enablement
								</p>
								<Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link>
							</div> */}

						{/* <div className="box-icon small-box default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
						<div className="icon hover-icon-2">
							<i className="flaticon-target-1" />
						</div>

						<Link href="/#" className="title fw-7">
							Strategic & Digital Advisory
						</Link>

						<p className="text">
							Business structuring, branding, tech enablement
						</p>

						<Link href="/our-service" className="tf-btn-readmore style-3">
							Read More
							<i className="icon-chevron-right" />
						</Link>
						</div> */}

					</div>
				</div>
			</div>
		</section>

	</>
	)
}
