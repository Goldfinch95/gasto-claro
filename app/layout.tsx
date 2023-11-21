import '@/app/ui/global.css';
import { montserrat } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}
      <footer className="text-center leading-[3rem] opacity-70">
      © {new Date().getFullYear()} Goldfinch
      </footer>
      </body>
    </html>
  );
}
