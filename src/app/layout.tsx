import { inter } from '@/lib/font';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
