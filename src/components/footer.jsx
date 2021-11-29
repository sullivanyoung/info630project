import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer className="my-10 border-t border-gray-200">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Top area: Blocks */}
				<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 ">
					{/* 1st block */}
					<div className="sm:col-span-12 lg:col-span-3">
						<div className="mb-2">
							{/* Logo */}
							<Link to="/" className="inline-block" aria-label="Cruip">
								<svg
									className="w-8 h-8"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
								>
									<defs>
										<radialGradient
											cx="21.152%"
											cy="86.063%"
											fx="21.152%"
											fy="86.063%"
											r="79.941%"
											id="footer-logo"
										>
											<stop stopColor="green-600" offset="0%" />
											<stop stopColor="#FFFE07" offset="25.871%" />
											<stop stopColor="#00cc00" offset="100%" />
										</radialGradient>
									</defs>
									<rect
										width="32"
										height="32"
										rx="16"
										fill="url(#footer-logo)"
										fillRule="nonzero"
									/>
								</svg>
							</Link>
						</div>
						<div className="text-sm text-gray-600">
							<Link
								to="#"
								className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
							>
								Terms
							</Link>{' '}
							·{' '}
							<Link
								to="#"
								className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
							>
								Privacy Policy
							</Link>
						</div>
					</div>

					{/* 2nd block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<h6 className="text-gray-800 font-medium mb-2">Greenfood</h6>
						<ul className="text-sm">
							<li className="mb-2">
								<a
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									href="/home"
									target="_blank"
									rel="noopener noreferrer"
								>
									Home
								</a>
							</li>
							<li className="mb-2">
								<a
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									href="/home"
									target="_blank"
									rel="noopener noreferrer"
								>
									About Us
								</a>
							</li>
							<li className="mb-2">
								<a
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
									href="/home"
									target="_blank"
									rel="noopener noreferrer"
								>
									Careers
								</a>
							</li>
						</ul>
					</div>

					{/* 3rd block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<h6 className="text-gray-800 font-medium mb-2">Products</h6>
						<ul className="text-sm">
							<li className="mb-2">
								<Link
									to="#"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Order Online
								</Link>
							</li>
							<li className="mb-2">
								<Link
									to="#"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Check Availability
								</Link>
							</li>
							<li className="mb-2">
								<Link
									to="#"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									New Releases
								</Link>
							</li>
						</ul>
					</div>

					{/* 4th block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<h6 className="text-gray-800 font-medium mb-2">Stores</h6>
						<ul className="text-sm">
							<li className="mb-2">
								<Link
									to="#"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									Find One Near You
								</Link>
							</li>
							<li className="mb-2">
								<Link
									to="#"
									className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
								>
									New Openings
								</Link>
							</li>
						</ul>
					</div>

					{/* 5th block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
						{/* Social links */}
						<ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
							<li>
								<a
									class="button--svg"
									href="https://www.facebook.com/"
									target="_blank"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="46"
										height="46"
										viewBox="0 0 46 46"
										role="img"
										aria-labelledby="facebook-icon"
									>
										<title id="facebook-icon">Facebook</title>
										<path
											fill="#3C599A"
											d="M18.896 20.12h1.758v-1.708c0-.753.02-1.915.566-2.635.576-.762 1.368-1.28 2.73-1.28 2.218 0 3.15.316 3.15.316l-.438 2.605s-.73-.212-1.417-.212c-.684 0-1.296.245-1.296.93v1.985h2.803l-.194 2.547h-2.61v8.84h-3.297v-8.84h-1.758V20.12z"
										/>
										<path
											class="button--svg__border"
											fill="#E5E5E5"
											d="M23 3c11.027 0 20 8.972 20 20 0 11.027-8.973 20-20 20-11.028 0-20-8.973-20-20C3 11.972 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a
									class="button--svg"
									href="https://twitter.com/"
									target="_blank"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="46"
										height="46"
										viewBox="0 0 46 46"
										role="img"
										aria-labelledby="twitter-icon"
									>
										<title id="twitter-icon">Twitter</title>
										<path
											class="button--svg__border"
											fill="#E5E5E5"
											d="M23 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S3 34.028 3 23 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z"
										/>
										<path
											fill="#5EA9DE"
											d="M31.52 17.716c-.627.278-1.302.466-2.008.55.722-.432 1.275-1.116 1.536-1.933-.676.4-1.422.69-2.22.847-.637-.68-1.546-1.103-2.552-1.103-1.93 0-3.494 1.565-3.494 3.495 0 .273.03.54.09.796-2.904-.146-5.48-1.536-7.205-3.653-.3.52-.473 1.12-.473 1.76 0 1.212.617 2.28 1.555 2.908-.576-.017-1.115-.176-1.587-.436v.043c0 1.694 1.205 3.107 2.805 3.427-.295.082-.603.123-.923.123-.225 0-.444-.02-.657-.062.445 1.388 1.736 2.4 3.266 2.425-1.196.94-2.704 1.498-4.34 1.498-.283 0-.562-.013-.835-.046 1.55.99 3.385 1.568 5.36 1.568 6.43 0 9.944-5.323 9.944-9.94 0-.153-.003-.306-.01-.454.684-.492 1.278-1.108 1.745-1.81"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a
									class="button--svg"
									href="https://www.instagram.com/"
									target="_blank"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="46"
										height="46"
										viewBox="0 0 46 46"
										role="img"
										aria-labelledby="instagram-icon"
									>
										<title id="instagram-icon">Instagram</title>
										<path
											class="button--svg__border"
											fill="#E5E5E5"
											d="M23 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S3 34.028 3 23 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z"
										/>
										<path
											fill="#5E6C89"
											d="M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a
									class="button--svg"
									href="https://www.youtube.com/"
									target="_blank"
									rel="noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="46"
										height="46"
										viewBox="0 0 46 46"
										role="img"
										aria-labelledby="youtube-icon"
									>
										<title id="youtube-icon">YouTube</title>
										<path
											class="button--svg__border"
											fill="#E5E5E5"
											d="M23 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S3 34.028 3 23 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z"
										/>
										<path
											fill="#E52E28"
											d="M27.68 23c0-.3-.12-.52-.364-.657l-6.24-3.9c-.253-.163-.517-.172-.793-.025-.27.147-.402.374-.402.683v7.803c0 .31.136.537.404.682.13.067.256.1.378.1.164 0 .3-.042.416-.122l6.24-3.9c.243-.14.365-.36.365-.66zm6.242 0c0 .78-.004 1.39-.012 1.83-.008.438-.043.993-.104 1.662-.06.672-.15 1.27-.274 1.8-.13.592-.41 1.092-.84 1.5-.43.405-.935.64-1.512.705-1.804.203-4.53.303-8.18.303-3.65 0-6.375-.1-8.18-.304-.576-.064-1.082-.3-1.517-.706-.435-.407-.717-.907-.847-1.5-.114-.527-.2-1.127-.263-1.8-.06-.668-.095-1.223-.103-1.662-.008-.438-.012-1.05-.012-1.828 0-.78.004-1.39.012-1.828.008-.44.042-.995.103-1.665.062-.67.152-1.27.274-1.797.13-.593.41-1.093.84-1.5.432-.407.936-.642 1.513-.707 1.804-.203 4.53-.305 8.18-.305 3.648 0 6.375.102 8.18.305.576.065 1.08.3 1.516.707.436.406.718.906.85 1.5.112.528.2 1.127.26 1.797.062.67.097 1.226.104 1.665.008.438.012 1.048.012 1.83z"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
