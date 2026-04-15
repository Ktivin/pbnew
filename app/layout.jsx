import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://petbalance.app"),
  title: "PetBalance — онлайн-консультації ветеринарів і фахівців із поведінки тварин",
  description:
    "Сервіс онлайн-консультацій для власників собак і котів: ветеринар, зоопсихолог, кінолог, дієтолог, термінова допомога цілодобово.",
  openGraph: {
    title: "PetBalance — онлайн-консультації для власників тварин",
    description:
      "Швидка допомога ветеринара або спеціаліста з поведінки тварин. Чат, аудіо, відео, розбір аналізів, фото та відео.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PetBalance",
    description: "Онлайн-консультації ветеринарів і спеціалістів із поведінки тварин.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
