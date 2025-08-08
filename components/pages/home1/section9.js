
export default function Section9() {
	return (
		<>

			<section className="s-contact">
				<div className="tf-container ">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title mb-17">
										<i className="icon-angles-right moveLeftToRight" />
										need consultations
									</p>
									<p className="s-title text-anime-wave-right">
										Ready to Get Free <span>
											Consultation ?
										</span>
									</p>
									<ul className="list ">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap">Address Business</p>
											<p className="infor">
												3rd Floor, Lisa Ponnammal St, Plot no.31,<br />
												Plot no.31,<br />
												Golden George Nagar, Nerkundram,<br />
												Chennai, TamilNadu 600107							
											</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.2s">
											<p className="cap">Contact Us</p>
											<p className="infor">
												info@bisways.com <br />
												91 99403 44774
											</p>
										</li>
									</ul>
								</div>
								<div className="content-right">
									<p className="title mb-30 text-center font-main-2">
										Get Free Consultation
									</p>
									<form action="#" className="form-contact style-3">
										<div className="cols mb-20">
											<fieldset>
												<input type="text" placeholder="Full Name" required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder="Phone" required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<input type="email" placeholder="Email" required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder="Subject" required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<textarea className="h-100px" placeholder="Write message" />
											</fieldset>
										</div>
										<button type="submit" className="tf-btn full">
											Get Consultation
											<i className="icon-chevron-right" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
