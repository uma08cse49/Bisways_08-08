'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function Section4() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-working tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									WORKING PROCESS
								</p>
								<p className="s-title mb-70 text-center text-anime-wave">
									From Concept to Execution <br />
									Our Consulting
									<span>
										Process
									</span>
								</p>
								<div className="tf-accordion-type-3 accordion" id="accordionExample">
									<div className={`accordion-item ${isAccordion === 1 ? 'active' : ''}`} onClick={() => handleAccordion(1)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												<span className="step">
													Step 01
												</span>
												<span>
													Discovery &amp; Assessment
												</span>
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Discovery &amp; Assessment
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													In this crucial initial phase, we take the time to 
													<br />
													understand your business model, objectives, and <br />
													challenges. We assess your current operations, <br />
													compliance status, and internal controls.
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Client consultation and requirement mapping
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Business structure and regulatory needs assessment
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Financial and operational diagnostics
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Understanding cultural values and long-term vision
														</p>
													</li>
												</ul>
												<br/>
												<div style={{fontWeight:'700'}}>Outcome:</div>
												<br/>
												<p>A complete overview of your business environment and a strategic plan for tailored support.</p>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												
												<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-2.jpg" data-src="/images/section/home-2.jpg" alt="" className="lazyload tf-animate-2" />
									
											</div>
										</div>
									</div>
									<div className={`accordion-item ${isAccordion === 2 ? 'active' : ''}`} onClick={() => handleAccordion(2)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 2 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												<span className="step">
													Step 02
												</span>
												<span>
													Strategy Development
												</span>
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Strategy Development
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													Based on our analysis, we design a custom operational<br />
													framework that aligns with your business goals and regulatory<br />
													requirements.
													
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Operational framework design
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Internal control setup for effective management
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Compliance mapping (accounting, tax, regulatory)
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
														Drafting SOPs and workflows
														</p>
													</li>
												</ul>
												<br/>
												<div style={{fontWeight:'700'}}>Outcome:</div>
												<br/>
												<p>A clear, actionable roadmap that streamlines operations and ensures legal and financial compliance from the ground up.</p>
											
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												
												<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-3.jpg" data-src="/images/section/home-3.jpg" alt="" className="lazyload tf-animate-2" />
									
											</div>
										</div>
									</div>
									<div className={`accordion-item ${isAccordion === 3 ? 'active' : ''}`} onClick={() => handleAccordion(3)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 3 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												<span className="step">
													Step 03
												</span>
												<span>
													Implementation &amp; Execution
												</span>
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Implementation &amp; Execution
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													We take a hands-on approach to execute the strategy,<br />
													 ensuring smooth operations and regulatory compliance,<br />
													  all while minimizing your operational costs.
													
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Setting up bookkeeping and accounting systems
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Tax registration and compliance implementation
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Establishing automated workflows
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Training and process integration
														</p>
													</li>
												</ul>
												<br/>
												<div style={{fontWeight:'700'}}>Outcome:</div>
												<br/>
												<p>A fully operational business system that enables you to focus on your core expertise while we manage the backend.</p>
											
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												
												<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-4.jpg" data-src="/images/section/home-4.jpg" alt="" className="lazyload tf-animate-2" />
									
											</div>
										</div>
									</div>
									<div className={`accordion-item last ${isAccordion === 4 ? 'active' : ''}`} onClick={() => handleAccordion(4)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 4 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												<span className="step">
													Step 04
												</span>
												<span>
													Monitoring &amp; Continuous Improvement
												</span>
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Monitoring &amp; Continuous Improvement
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													Our relationship doesn’t end at implementation.<br />
													 We provide ongoing support, monitor performance,<br />
													  and continuously refine your systems for better<br />
													   efficiency and adaptability.
													
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Regular compliance and tax reviews
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Performance tracking & process optimization
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Financial reporting and advisory
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Proactive recommendations for improvement
														</p>
													</li>
												</ul>
												<br/>
												<div style={{fontWeight:'700'}}>Outcome:</div>
												<br/>
												<p>A scalable, efficient, and legally compliant business model with the flexibility to evolve as you grow.</p>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												
												<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-5.jpg" data-src="/images/section/home-5.jpg" alt="" className="lazyload tf-animate-2" />
									
											</div>
										</div>
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
