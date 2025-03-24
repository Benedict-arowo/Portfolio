// import type React from "react";
// import "@/app/globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import { Inter } from "next/font/google";
// import type { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Benedict Arowo | Full-Stack Developer & Aspiring Electrical Engineer",
// 	description:
// 		"Portfolio of Benedict Arowo, a Full-Stack Developer and Aspiring Electrical Engineer",
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en" suppressHydrationWarning>
// 			<body className={inter.className}>
// 				<ThemeProvider
// 					attribute="class"
// 					defaultTheme="dark"
// 					enableSystem={false}
// 					disableTransitionOnChange>
// 					{children}
// 				</ThemeProvider>
// 			</body>
// 		</html>
// 	);
// }

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				{/* Layout UI */}
				{/* Place children where you want to render a page or nested layout */}
				<main>{children}</main>
			</body>
		</html>
	);
}
