import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTA({
  title = 'Ready to get started?',
  description = 'Join thousands of developers building with our platform',
  buttonText = 'Start Building Now'
}: CTAProps) {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 text-center">
      <Card className="max-w-4xl mx-auto border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl">{title}</CardTitle>
          <CardDescription className="text-lg">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center pb-8">
          <Button size="lg">{buttonText}</Button>
        </CardFooter>
      </Card>
    </section>
  );
}