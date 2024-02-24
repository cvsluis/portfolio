import { Inter, DM_Serif_Display, Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm",
});
export const montserrat = Montserrat({ subsets: ["latin"], weight: "700", variable: "--font-montserrat" });
