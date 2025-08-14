import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import { Cairo } from "next/font/google";
import { Footer, Header } from "@/components";
import { CLIENT } from "@/constants";

export const metadata: Metadata = {
  title: "Youssef Hussein | Portfolio",
  icons: {
    icon: "/code.svg"
  },
  description:
    "The personal portfolio of Youssef Hussein, a Full-Stack Web Developer specializing in scalable, production-ready MERN stack applications and modern web technologies.",
  keywords: [
    "Youssef Hussein",
    "Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TailwindCSS",
    "Frontend",
    "Backend",
    "Software Engineer",
    "Personal Website",
    "Projects",
    "Resume",
    "CV",
    "Helwan University",
    "AI",
    "Modern Web",
  ],
  authors: [{ name: "Youssef Hussein", url: CLIENT }],
  creator: "Youssef Hussein",
  openGraph: {
    title: "Youssef Hussein | Portfolio",
    description:
      "Explore the work and skills of Youssef Hussein, a Full-Stack Web Developer with expertise in the MERN stack and modern web technologies.",
    url: CLIENT,
    siteName: "Youssef Hussein Portfolio",
    images: [
      {
        url: `${CLIENT}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Youssef Hussein Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Hussein | Portfolio",
    description:
      "Full-Stack Web Developer crafting scalable, production-ready applications with the MERN stack and modern technologies.",
    images: [`${CLIENT}/og-image.png`],
    creator: "@youssefhussein",
  },
  metadataBase: new URL(CLIENT),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={cairo.className}>
        {/* Header Section */}
        <Header />
        {children}
        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
