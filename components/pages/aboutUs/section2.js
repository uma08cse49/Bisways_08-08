'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"
export default function Section2() {
	useEffect(() => {
		const elements = document.querySelectorAll(
			".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4"
		)

		if (!elements.length) return

		const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active-animate")
					}
				})
			},
			{
				root: null, // viewport
				threshold: isSmallScreen ? 0.2 : 0.3, // Adjust based on screen size
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])
	return (
		<>

			<section className="s-why-choose-3 tf-spacing-8">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="wg-company">
								<ul className="list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<Link href="/#">
												Company Mission
											</Link>
										</div>
										<p className="text">
											At Bisways, we streamline operations, implement internal controls, and handle compliance,
											 so you can focus on your business. We bring quality,
											 integrity, and efficiency to every step.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<i className="flaticon-market" />
											</div>
											<Link href="/#">
												Company Vision &amp; Goals
											</Link>
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
						<div className="col-lg-5">
							<div className="image tf-hover">
								<div className="hover-1">
									<img
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/aboutus-3.jpg" data-src="/images/section/aboutus-3.jpg" alt="" className="lazyload tf-animate-2" />
								
								
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="content">
								<div className="content-left">
									<p className="s-sub-title text-white">
										<i className="icon-angles-right moveLeftToRight" />
										Why choose us
									</p>
									<p className="s-title text-white mb-30 text-anime-wave">
										Professional Skills and
										<span>
											Experience
										</span>
									</p>
									<p className="text text-white">
										Founded on principles of integrity, professionalism, and innovation,
										 Bisways empowers business owners to focus on growth while we manage the complexities of finance and compliance
									</p>
								</div>
								<div className="content-right">
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p>
												Business Consulting
											</p>
											<p className="percent">
												89%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }} />
										</div>
									</div>
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p>
												Marketing Consulting
											</p>
											<p className="percent">
												73%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }} />
										</div>
									</div>
									<div className="wg-skill ">
										<div className="name">
											<p>
												Financial Consulting
											</p>
											<p className="percent">
												80%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
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
