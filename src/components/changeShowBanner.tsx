"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export function ChangeShowBanner() {
  const [showBanner, setShowBanner] = useState(false);

  const handleChange = (checked: boolean) => {
    setShowBanner(checked);
    localStorage.setItem("show-banner", String(checked));
  };

  useEffect(() => {
    const saved = localStorage.getItem("show-banner");
    if (saved === "true") setShowBanner(true);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="show-banner"
        checked={showBanner}
        onCheckedChange={handleChange}
      />
      <Label htmlFor="show-banner">Show Banner</Label>
    </div>
  );
}
