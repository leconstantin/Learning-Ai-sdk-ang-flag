import ModeToggle from "@/components/modeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button>Save</Button>
      <ModeToggle />
    </div>
  );
}
