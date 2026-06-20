
import Header from "./components/Header";

import "@/app/_styles/globals.css";

import {Josefin_Sans} from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
});


export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "welcome to The Wild Oasis",
  },
  description:
    "The Wild Oasis is a luxury cabin rental service located in the heart of nature. We offer a variety",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefin.className} flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 py-8 px-6">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>

        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
