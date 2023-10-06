import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito, Poppins } from "next/font/google";
import Navbar from "./componets/Navbar/Navbar";
import ClinetOnly from "./componets/ClinetOnly";
import RegisterModal from "./componets/Modals/RegisterModal";
import ToasterProvider from "./Providers/ToasterProvider";
import LoginModal from "./componets/Modals/LoginModal";

import { getCurrentUser } from "./Actions/getCurrentUser";
import RentModal from "./componets/Modals/RentModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Bookings",
};

const font = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <ToasterProvider/>
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClinetOnly>

        {children}
      </body>
    </html>
  );
}
