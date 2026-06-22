import "./globals.css";

export const metadata = {
  title: "Visual Poetry",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5] text-black">
        {children}
      </body>
    </html>
  );
}