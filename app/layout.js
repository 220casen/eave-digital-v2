import "./globals.css";

export const metadata = {
  title: "Eave Digital | Built for Business. Designed for Growth.",
  description:
    "Conversion-focused websites and growth systems for service businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
