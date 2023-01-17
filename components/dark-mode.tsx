"use client";

import { Button, MoonIcon, SunIcon } from "components";
import useHasMounted from "hooks/useHasMounted";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return theme === "dark" ? (
    <Button onClick={() => setTheme("light")}>
      <SunIcon />
    </Button>
  ) : (
    <Button onClick={() => setTheme("dark")}>
      <MoonIcon />
    </Button>
  );
}
