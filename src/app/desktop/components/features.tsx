import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  features?: Feature[];
}

export function Features({ features = defaultFeatures }: FeaturesProps) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-muted/50">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border border-border">
            <CardHeader>
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/10">
                <Image src={feature.icon} alt={feature.title} width={24} height={24} />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const defaultFeatures: Feature[] = [
  {
    title: 'Next.js 14',
    description: 'Built with the latest version of Next.js for optimal performance and developer experience.',
    icon: '/next.svg'
  },
  {
    title: 'Responsive Design',
    description: 'Fully responsive layout that works beautifully on desktop and mobile devices.',
    icon: '/window.svg'
  },
  {
    title: 'Component Library',
    description: 'Leveraging shadcn/ui for beautiful, accessible, and customizable components.',
    icon: '/file.svg'
  }
];