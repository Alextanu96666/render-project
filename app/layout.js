import "./globals.css";

export const metadata = {
  title: "Guestbook – CI/CD Demo",
  description: "Next.js + MongoDB + Docker + Render",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
