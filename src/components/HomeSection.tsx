import { motion } from "motion/react";
import { PhoneFrame } from "./PhoneFrame";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import asqLogo from "../assets/images/asq-logo.png";

// Apple logo SVG component
const AppleLogo = () => (
	<svg viewBox="0 0 24 24" className="w-8 h-8 mr-3" fill="currentColor">
		<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
	</svg>
);

export function HomeSection() {
	return (
		<section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					{/* Left side - App image */}
					<motion.div
						className="flex-1 flex justify-center lg:justify-start"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						<PhoneFrame className="w-64 sm:w-72 lg:w-80" />
					</motion.div>

					{/* Right side - Content */}
					<div className="flex-1 text-center lg:text-left">
						{/* AsQ Logo */}
						<motion.div
							className="flex items-center justify-center lg:justify-start mb-8"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<Image src={asqLogo} alt="AsQ Logo" width={100} height={100} className="object-contain" priority />
							<h1 className="text-5xl font-bold text-black">
								AsQ
							</h1>
						</motion.div>

						{/* Catchphrase */}
						<motion.h2
							className="text-3xl sm:text-4xl font-bold text-black mb-8 leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<span className="inline-block">
								すぐに知りたい疑問を
							</span>
							<br />
							<span className="inline-block bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
								即解決
							</span>
						</motion.h2>

						{/* App Store Button */}
						<motion.div
							className="mb-8 flex justify-center lg:justify-start"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
						>
							<motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
								<div className="bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center cursor-pointer w-56">
									<AppleLogo />
									<div className="flex flex-col">
										<span className="text-lg leading-none opacity-90">App Store</span>
										<span className="text-lg font-medium leading-tight">からダウンロード</span>
									</div>
								</div>
							</motion.div>
						</motion.div>

						{/* Android development note */}
						<motion.p
							className="text-gray-600 text-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 1 }}
						>
							※ Android版は現在開発中です
						</motion.p>
					</div>
				</div>
			</div>

			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-full"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{ duration: 4, repeat: Infinity }}
				/>
				<motion.div
					className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-tr from-gray-200 to-transparent rounded-full"
					animate={{
						y: [-10, 10, -10],
						x: [-5, 5, -5],
					}}
					transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				/>
			</div>
		</section>
	);
}
