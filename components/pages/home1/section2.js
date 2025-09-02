'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section2() {
	const { ref, inView } = useInView({ triggerOnce: false });
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (inView) {
			setAnimate(false); // reset
			setTimeout(() => setAnimate(true), 50); // retrigger animation
		}
	}, [inView]);

	return (
		<>
			<section className="s-about-company tf-spacing-2">
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-section">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										WHO WE ARE
									</p>
									<p className="s-title mb-60 " style={{ fontSize: "45px" }}>
									A Consulting Partner You Can Trust
									</p>
									<p className="mb-60 " style={{ fontSize: "20px" }}>
									At Bisways, we bring clarity to complexity. We’re a multi-disciplinary business consulting firm offering a unique blend of financial acumen, regulatory expertise, and technology-driven solutions.
									</p>

									<p className="mb-60 " style={{ fontSize: "20px" }}>
									Whether you're a founder launching your startup, a CFO managing financial oversight, or a trust managing compliance and governance — we serve as your reliable, long-term partner.
									</p>

									<div className="learn-more-container">
									  {/* Learn More Button/Link */}
									  <a href="/aboutUs" className="learn-more-btn">
              							Learn More →
										</a>
									</div>

									{/* <ul className="list mb-20">
										<li>
											<p className="font-main-2">OUR MISSION</p>
											<p className="text">
												At Bisways, we streamline operations, implement internal controls, and handle compliance, so you can focus on your business.
											</p>
										</li>
										<li>
											<p className="font-main-2">OUR VISION</p>
											<p className="text">
												We envision a world where businesses soar by focusing on what they do best, while we transform their operations into seamless, compliant, and efficient systems that fuel growth and innovation.
											</p>
										</li>
									</ul> */}
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1">
								<div className="image-wrap">
									<div className="image">
										<img
											
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/home-1.jpg" data-src="/images/section/home-1.jpg" alt="" className="lazyload tf-animate-2" />
									
									</div>
									<span
										ref={ref}
										className={`half-circle item-1 ${animate ? 'rollInRight' : ''}`}
									/>
									<span
										className={`half-circle item-2 ${animate ? 'rollInRight' : ''}`}
										data-wow-delay="0.5s"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="tf-marquee slider-saylo style-2">
					<div className="wrap-marquee">
						{Array.from({ length: 10 }).map((_, i) => (
							<div className="marquee-item" key={i}>
								<p className="font-main-2 text">Bisways Consulting Group</p>
							</div>
						))}
					</div>
				</div> */}
			</section>
		</>
	);
}
