
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-value tf-spacing-2">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									our value
								</p>
								<p className="s-title text-center text-anime-wave">
									Values That Drive Our Consulting <br />
									Approach Commitment
									<span>
										to Excellence
									</span>
								</p>
							</div>
							<div className="grid-layout-3">
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-market-1 hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Confidentiality First 
									</Link>
									<p className="text">
										Respect and protect confidentiality
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-excellent hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Professional Integrity
									</Link>
									<p className="text">
										Observe high professional and ethical standards
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-integration hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Cultural Sensitivity 
									</Link>
									<p className="text">
										We understand the client’s culture and help preserve it
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-integrity hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Technology for Efficiency 
									</Link>
									<p className="text">
										Break the technology to ease the operations and reduce costs
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-teamwork hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Continuous Learning & Innovation
									</Link>
									<p className="text">
										We embrace new ideas, tools, and knowledge to stay ahead in a fast-changing business environment
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-dna hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Collaboration & Team Spirit
									</Link>
									<p className="text">
										We work hand-in-hand with clients and internal teams to deliver comprehensive solutions
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
