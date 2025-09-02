'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"
export default function Hero1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="page-title-home-1">
				<div className="mb-50">
					<div className="tf-container w-1780">
						<div className="row">
							<div className="col-lg-6">
								<div className="content">
									<p className="s-sub-title text-white ">
										<i className="icon-angles-right moveLeftToRight" />
										consulting agency
									</p>
									<p className="s-title text-white-yellow mb-40 text-fs-50">
									Strategic Consulting. Trusted Advisory. Seamless Compliance. <br />
										<div style={{fontSize:"20px",color:' #ffcd4c',borderRadius:'30px 0px 0px 0px'}}>Bisways is your end-to-end business partner — from setting up and scaling your entity, to managing finance, compliance, trust governance, and strategic advisory.</div>
										{/* <span className="animationtext clip">
											<TypeAnimation
												sequence={[
													' Service',
													1000,
													' Firm',
													1000,
													' Office',
													1000,
												]}
												wrapper="span"
												speed={25}
												style={{ display: 'inline-block', marginLeft: "15px" }}
												repeat={Infinity}
												className="cd-words-wrapper ms-3">
											</TypeAnimation>
										</span> */}
									</p>
									<span className="line mb-75" />
									<p className="text font-main-2 fw-5 mb-40">
										At Bisways Consulting Group, we deliver strategic, data-driven solutions powered by domain expertise and the latest technology.
Our energetic team stays ahead of trends to provide innovative, cost- and time-effective results.
We help businesses adapt, grow, and lead in an ever-evolving digital landscape.

									</p>

									<div className="button-group">
										<button class="consultant-btn">Talk to Consultant</button>
										<button class="consultant-btn">Explore Our Capabilities</button>
									</div>
									{/* <div className="bot">
										<Link href="/our-service" className="tf-btn">
											Explore Services
											<i className="icon-chevron-right" />
										</Link>
										<div className="video-wrap">
											<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7">
												<span className="icon style-circle">
													<span className="bg" />
													<span className="wave-3" />
													<i className="icon-play fs-12" />
												</span>
												Watch Video
											</a>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
								<div className="image-wrap">
									<div className="image">
										<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/banner.jpg" data-src="/images/section/banner.jpg" alt="" className="lazyload" />
									
									 {/* <div style={{height:'700px',width:'100%',backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'50px',fontWeight:'700',color:'#ffcd4c'}}>
														Image Here
										</div> */}
									</div>
									{/* <div className="wg-curve-text tf-animate__box animate__slow">
										<div className="icon">
											<i className="flaticon-rocket" />
										</div>
										<div className="text-rotate">
											<div className="circle">
												<div id="circularText" className="text" />
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="tf-marquee slider-Saylo">
					<div className="wrap-marquee">
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Bisways Consulting Group
							</p>
						</div>
					</div>
				</div> */}
			</div>
			{/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} /> */}

		</>
	)
}
