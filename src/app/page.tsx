import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hello 🚀</h1>

      <Button>Click me</Button>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          Đây là một card demo với shadcn/ui.
        </CardContent>
      </Card>
    </div>
  );
}
