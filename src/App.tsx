import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

export function App() {
  return (
    <div className="min-h-screen bg-secondary p-4 font-body">
      <header className="mb-6 font-heading text-3xl text-on-secondary">
        Welcome to Tailwind 4 Demo
      </header>

      <Button className="mb-6">Primary Button</Button>

      <Card>
        {" "}
        <h2 className="mb-2 font-heading text-2xl">Card Title</h2>
        <p className="font-body">
          This is a demo card styled using Tailwind CSS 4.0 utilities.
        </p>
        <div className="space-x-2">
          <Badge label="Info" variant="info" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
        </div>
      </Card>
    </div>
  );
}

export default App;
