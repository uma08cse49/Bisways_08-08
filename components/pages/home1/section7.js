'use client'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import { useState } from 'react'
export default function Section7() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<section className="s-working-2 tf-spacing-3">
				<div className="tf-container">
					<div className="row" id="tabs">
						<div className="col-lg-12">
							<div className="content text-center mb-70">
								<p className="s-sub-title mb-17 text-white justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									WHO WE SERVE
								</p>
								<p className="s-title  text-white letter-space-0 text-anime-wave">
								Tailored Solutions. Trusted by Diverse Sectors.
									{/* <span> Our Own</span> */}
								</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="pb-100">
								<div className="image tf-hover">
									<div className="hover-1 hover-14">
										
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-6.jpg" data-src="/images/section/home-6.jpg" alt="" className="lazyload tf-animate-2" />
									
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-right">
								<p className="text fw-5 fs-20 mb-50">
									<ol>
										<li>➡️ Startups & Founders – from incorporation to investor readiness</li>
										<li>➡️ SMEs & Enterprises – robust compliance, reporting & strategy</li>
										<li>➡️ Trusts, Societies & NGOs – governance, funding, and transparency</li>
										<li>➡️ Educational Institutions – trust compliance, audits, affiliations</li>
										<li>➡️ Builders & Contractors – GST, project structuring, tax planning</li>
										<li>➡️ Digital & eCommerce Businesses – advisory, compliance, scale support</li>
									</ol>
									{/* At Bisways Consulting Group, our commitment to prioritizing your interests
									is backed by the exceptional quality of our team. We invest heavily in 
									recruiting and developing talented professionals, creating an environment
									that fosters their growth as trusted leaders—ensuring you receive 
									transparent, integrity-driven service every step of the way.
									 */}
								</p>
								{/* <div className="bot">
									<div className="counter-wrap style-2">
										<div className="relative mb-20">
											<div className="circle-container">
												<svg className="circle" width={130} height={130} viewBox="0 0 130 130">
													<circle cx={65} cy={65} r="62.5" stroke="transparent" strokeWidth={5} fill="none" />
													<circle className="progress-circle-93" cx={65} cy={65} r="62.5" strokeWidth={5} fill="none" />
												</svg>
												<div className="wg-counter style-5">
													<div className="odometer style-5"><CounterUp count={93} /></div>
													<span className="sub-odo">%</span>
												</div>
											</div>
										</div>
										<p className="sub-counter">
											Business <br />
											Development
										</p>
									</div>
									<div className="counter-wrap style-2">
										<div className="relative mb-20">
											<div className="circle-container">
												<svg className="circle" width={130} height={130} viewBox="0 0 130 130">
													<circle cx={65} cy={65} r="62.5" stroke="transparent" strokeWidth={5} fill="none" />
													<circle className="progress-circle-86" cx={65} cy={65} r="62.5" strokeWidth={5} fill="none" />
												</svg>
												<div className="wg-counter style-5">
													<div className="odometer style-5-2"><CounterUp count={86} /></div>
													<span className="sub-odo">%</span>
												</div>
											</div> 
										</div>
										<p className="sub-counter">
											Marketing and <br />
											Research
										</p>
									</div>
									<div className="counter-wrap style-2">
										<div className="relative mb-20">
											<div className="circle-container">
												<svg className="circle" width={130} height={130} viewBox="0 0 130 130">
													<circle cx={65} cy={65} r="62.5" stroke="transparent" strokeWidth={5} fill="none" />
													<circle className="progress-circle-79" cx={65} cy={65} r="62.5" strokeWidth={5} fill="none" />
												</svg>
												<div className="wg-counter style-5">
													<div className="odometer style-5-3"><CounterUp count={79} /></div>
													<span className="sub-odo">%</span>
												</div>
											</div>
										</div>
										<p className="sub-counter">
											Consulting and <br />
											Financial plan
										</p>
									</div>
								</div> */}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-left tab-links">
								<div className="tf-accordion accordion" id="accordionExample2">
									<div className="accordion-item">
										<h2 className="accordion-header item-link current" data-tab="tabs-1" onClick={() => handleAccordion(1)}>
											<button className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
												Why Bisways?
											</button>
										</h2>
										<div id="collapseOne1" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												<ul >
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														We help startups and growing businesses save time and cost.
														</p>
														</div>
													</li>
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														We ensure full legal and tax compliance from day one.
														</p>
														</div>
													</li>
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														We implement technology-driven solutions to ease operations.
														</p>
														</div>
														
													</li>
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														We operate with integrity, confidentiality, and cultural understanding.
														</p>
														</div>
													</li>
												</ul>
											</div>
										</div>



										<h2 className="accordion-header item-link current" data-tab="tabs-1" onClick={() => handleAccordion(1)}>
											<button className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
											Our Core Values 
											</button>
										</h2>
										<div id="collapseOne1" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												<ul >
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Client-Centric – We offer personalized attention, always.
														</p>
														</div>
													</li>
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Multi-Domain Expertise – Finance, legal, tax, tech, CSR.
														</p>
														</div>
													</li>
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Ethical & Transparent – Trustworthy advice, always backed by data.
														</p>
														</div>
														
													</li>
													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Execution-Ready – We don’t stop at advice. We implement too.
														</p>
														</div>
													</li>

													<li >
														<div style={{display:'flex',gap:'10px'}}>
															<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Pan-India Network – Active presence in Tamil Nadu, expanding rapidly.
														</p>
														</div>
													</li>
												</ul>
											</div>
										</div>


									</div>
									<div className="accordion-item">
										<h2 className="accordion-header item-link" data-tab="tabs-2" onClick={() => handleAccordion(2)}>
											<button className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
												How does the consulting process work?
											</button>
										</h2>
										<div id="collapseTwo1" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												We start by understanding your business needs and challenges.Then we design a customized strategy tailored to your goals.Our team implements the solution and sets up key processes.Finally, we monitor progress and provide ongoing support.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header item-link" data-tab="tabs-3" onClick={() => handleAccordion(3)}>
											<button className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
												What types of businesses do you work with?
											</button>
										</h2>
										<div id="collapseThree1" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Our process typically begins with a Discovery Phase, where we assess your business needs and goals. We then develop a customized strategy, implement the solution, and provide ongoing monitoring to ensure continuous improvement.
											</div>
										</div>
									</div>
									<div className="accordion-item item-last">
										<h2 className="accordion-header item-link" data-tab="tabs-4" onClick={() => handleAccordion(4)}>
											<button className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
												CEO POINT
											</button>
										</h2>
										<div id="collapseFour1" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												At Bisways, your success is our mission — always first, always foremost.
Our team of exceptional leaders drives innovation with integrity.
We don’t just solve problems; we unlock your business’s true potential.
Together, we build growth that lasts beyond the balance sheet.

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div >
								<div className="image tf-hover tab-content current" id="tabs-1">
									<div className="hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-7.jpg" data-src="/images/section/home-7.jpg" alt="" className="lazyload tf-animate-2" />
									
									 
									</div>
								</div>
								<div className="image tf-hover tab-content" id="tabs-2">
									<div className="hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/working-s2-1.jpg" data-src="/images/section/working-s2-1.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="image tf-hover tab-content" id="tabs-3">
									<div className="hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/working-s2-2.jpg" data-src="/images/section/working-s2-2.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="image tf-hover tab-content" id="tabs-4">
									<div className="hover-1 hover-14">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/working-s2-1.jpg" data-src="/images/section/working-s2-1.jpg" alt="" className="lazyload" />
									
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
