'use client'
import { sliderTestimonial2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section4() {
	return (
		<>

			<section className="s-process-2 tf-spacing-1">
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.5" data-bleed={5}>
						<img
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							src="/images/widget/process.jpg" alt="" />
					</div>
				</div>
				<div className="tf-overlay" />
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-5">
								<div className="content">
									<p className="s-sub-title text-white mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										working process
									</p>
									<p className="s-title text-white mb-40 text-anime-wave">
										What Our Clients
										Say
										<span>
											about Us
										</span>
									</p>
									<p className="text text-white mb-40">
										Good Support from Online Tax Filings 
business teams for my company financial 
services. Now I am not worrying about my 
all taxes and company licenses. Thanks for 
the support.

									</p>
									<div className="bot">
										<div className="btn-slider-tesimonial btn-slide btn-prev style-4">
											<i className="icon-arrow-left" />
										</div>
										<div className="btn-slider-tesimonial btn-slide btn-next style-4">
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<Swiper {...sliderTestimonial2} className="swiper-container slider-testimonial-2 overflow-hidden">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"They are Excellent experience in
accounting service, Gst Filing, Roc Filing,
ITR Filing, Document Preparation and also
providing all Registration service.
Professionalism, expertise, and excellent
service by BK, GST & Co Auditors the entire
service process is comfortable and good
Experience. 5 STARS to him. I highly
recommend this company.
"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> SHARATH KUMAR </Link>
													<p className="duty"> CRYSTAL ENTERPRISES</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"I have been using them for a couple of
years on various tax Filings. They have
been really efficient, quick, approachable,
and friendly. I have been recommending
them to all my friends. I highly recommend
it to anyone who is looking for an honest
genuine accountant for your Indian/NRl
tax filling needs. Keep up the good service.
"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> SIVA BHARATHI </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Good, well-trained, and knowledgeable
auditors. So polite to clients. Giving
wonderful guidance and helping at any
time.
"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> KABILAN MV </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"We have been availing their accounting
and tax filing services for several years
now. Super happy with their proactive and
flexible service.

"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> SHIVA SHANKARI NEDUNCHEZIAN </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

