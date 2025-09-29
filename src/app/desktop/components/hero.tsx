import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        Welcome to <span className="text-primary">Next.js</span> Desktop
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-10">
        A modern web application built with Next.js, Tailwind CSS, and shadcn/ui components.
        Start building amazing experiences today.
      </p>
      <div className="flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </section>
  );
}