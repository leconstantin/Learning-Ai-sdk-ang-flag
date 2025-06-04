// app/page.tsx or wherever Home is used
import ModeToggle from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import { showBanner } from "@/lib/flags";
import Banner from "@/components/banner";
import { ChangeShowBanner } from "@/components/changeShowBanner";
export default async function Home() {
  const banner = await showBanner();
  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <div className="flex justify-between items-center">
        <Button>Save</Button>
        <ModeToggle />
      </div>
      {banner && <Banner />}
      <ChangeShowBanner />
    </div>
  );
}
