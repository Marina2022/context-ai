import type {Metadata} from "next";
import "./globals.scss";
import "@/assets/styles/fonts.scss";
import Header from "@/components/layout/Header/Header";

export const metadata: Metadata = {
  title: "Context AI",
  description: "An AI-native workspace built for the future.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <Header/>

    {children}
    </body>
    </html>
  )
}