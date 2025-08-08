import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header2({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className="tf-topbar style-2">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">
								<div className="topbar-left">
									<ul className="infor-list">
										<li>
											<div className="icon">
												<i className="flaticon-open-mail" />
											</div>
											<Link href="mailto:Themesflat@gmail.com"> Themesflat@gmail.com </Link>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-phone-call" />
											</div>
											<Link href="/tel:+00012345688"> Phone No : +000 (123) 456 88 </Link>
										</li>
									</ul>
								</div>
								<div className="topbar-right">
									<ul className="infor-list">
										<li>
											<div className="icon">
												<i className="flaticon-placeholder" />
											</div>
											<Link href="https://www.google.com/maps?q=Hopkins,Minnesota(MN),55305" target="_blank"> Hopkins, Minnesota(MN), 55305 </Link>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-clock" />
											</div>
											<Link href="/#"> Working Hours : 08am - 05pm </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{/* /.Topbar */}
			{/* Header */}
			<header className="tf-header style-2">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/">
											<img
												width="139"
												height="39"
												// sizes="100vw"
												// style={{ width: "100%", height: "auto" }}
												id="logo_header" src="/images/logo/logo-2.png" data-retina="./images/logo/logo-2@2x.png" alt="" />
										</Link>
									</div>
								</div>
								<div className="header-center">
									<nav className="main-nav">
										<Menu />
									</nav>
								</div>
								{/* <div className="header-right">
									<Link href="/our-service" className="tf-btn style-9 small">
										Get In Touch
										<i className="icon-chevron-right" />
									</Link>
									<div className="union style-2 mobile-button" onClick={handleMobileMenu}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
									<div className="union style-2 btn-open-welcome" onClick={handleWelcomeBox}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
								</div> */}
							</div>
							<div className={isMobileMenu ? "mobile-nav-wrap active" : "	mobile-nav-wrap"}>
								<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
								<div className="inner-mobile-nav overflow-y-auto">
									<div className="top">
										<div className="logo">
											<Link href="/" rel="home" className="main-logo">
												<img
													width="139"
													height="39"
													// sizes="100vw"
													// style={{ width: "100%", height: "auto" }}
													id="mobile-logo_header" alt="" src="/images/logo/logo-4.png" />
											</Link>
											<div className="mobile-nav-close" onClick={handleMobileMenu}>
												<i className="icon-xmark" />
											</div>
										</div>
										<nav id="mobile-main-nav" className="mobile-main-nav">
											<MobileMenu />
										</nav>
									</div>
									<div className="bottom">
										<div className="wrap">
											<p className="title">
												Contact Us
											</p>
											<ul className="contact-list mb-20">
												<li>
													<p>
														Address: <Link href="https://www.google.com/maps?q=55East10thStreet,NewYork,NY10003,UnitedStates" target="_blank">
															55 East 10th Street, New York, NY 10003, United States
														</Link>
													</p>
												</li>
												<li>
													<p>
														Email: <Link href="mailto:themesflat@gmail.com">
															themesflat@gmail.com
														</Link>
													</p>
												</li>
												<li>
													<p>
														Call: <Link href="/tel:+00012345688">
															+000 (123) 456 88
														</Link>
													</p>
												</li>
											</ul>
											<ul className="social-list">
												<li>
													<Link href="/#">
														<i className="icon-facebook" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-twitter" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-linkedin" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-youtube" />
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
