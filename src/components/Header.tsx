import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import asqLogo from "../assets/images/asq-logo.png";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isClient]);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const headerHeight = 64; // h-16 = 64px
			const elementPosition = element.offsetTop - headerHeight;
			window.scrollTo({
				top: elementPosition,
				behavior: "smooth",
			});
		}
		setIsMenuOpen(false);
	};

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 backdrop-blur-sm border-b z-50 transition-all duration-300 ${
				scrolled ? "bg-white/95 border-gray-200 shadow-md" : "bg-white/80 border-transparent"
			}`}
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Image src={asqLogo} alt="AsQ Logo" width={50} height={50} className="object-contain" priority />
						<span className="text-xl font-bold text-black">AsQ</span>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						<motion.button
							onClick={() => scrollToSection("home")}
							className="text-gray-700 hover:text-black transition-colors relative cursor-pointer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							ホーム
							<motion.div
								className="absolute bottom-0 left-0 h-0.5 bg-black"
								initial={{ width: 0 }}
								whileHover={{ width: "100%" }}
								transition={{ duration: 0.2 }}
							/>
						</motion.button>
						<motion.button
							onClick={() => scrollToSection("features")}
							className="text-gray-700 hover:text-black transition-colors relative cursor-pointer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							機能
							<motion.div
								className="absolute bottom-0 left-0 h-0.5 bg-black"
								initial={{ width: 0 }}
								whileHover={{ width: "100%" }}
								transition={{ duration: 0.2 }}
							/>
						</motion.button>
					</nav>

					{/* Mobile menu button */}
					<motion.button
						className="md:hidden p-2 rounded-lg hover:bg-gray-100"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</motion.div>
					</motion.button>
				</div>

				{/* Mobile Navigation */}
				<motion.div
					initial={false}
					animate={{
						height: isMenuOpen ? "auto" : 0,
						opacity: isMenuOpen ? 1 : 0,
					}}
					transition={{ duration: 0.3 }}
					className="md:hidden border-t border-gray-200 bg-white"
					style={{ overflow: "hidden" }}
				>
					<nav className="flex flex-col space-y-2 py-4">
						<motion.button
							onClick={() => scrollToSection("home")}
							className="text-left text-gray-700 hover:text-black hover:bg-gray-50 transition-colors px-4 py-2 rounded-lg"
							whileHover={{ x: 5 }}
							transition={{ duration: 0.2 }}
						>
							ホーム
						</motion.button>
						<motion.button
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								scrollToSection("features");
							}}
							className="text-left text-gray-700 hover:text-black hover:bg-gray-50 transition-colors px-4 py-2 rounded-lg cursor-pointer"
							whileHover={{ x: 5 }}
							transition={{ duration: 0.2 }}
						>
							機能
						</motion.button>
					</nav>
				</motion.div>
			</div>
		</motion.header>
	);
}
