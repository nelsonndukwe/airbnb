import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito, Poppins } from "next/font/google";
import Navbar from "./componets/Navbar/Navbar";
import ClinetOnly from "./componets/ClinetOnly";
import Modal from "./componets/Modals/Modal";
import RegisterModal from "./componets/Modals/RegisterModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Bookings",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <RegisterModal />
          <Navbar />
        </ClinetOnly>

        {children}
      </body>
    </html>
  );
}
