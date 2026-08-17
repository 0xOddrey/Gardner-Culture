import "./globals.css";

export const metadata = {
  title: {
    default: "Gardner Academy Staff Policies",
    template: "%s | Gardner Academy Policies",
  },
  description: "Gardner Academy's staff policy library.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
