import Link from 'next/link';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterProps {
  copyright?: string;
  links?: FooterLink[];
}

export function Footer({
  copyright = '© 2023 Next.js Desktop. All rights reserved.',
  links = defaultLinks
}: FooterProps) {
  return (
    <footer className="py-10 px-6 md:px-10 lg:px-20 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground">{copyright}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="text-muted-foreground hover:text-foreground"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

const defaultLinks: FooterLink[] = [
  { text: 'About', href: '#' },
  { text: 'Features', href: '#' },
  { text: 'Contact', href: '#' }
];