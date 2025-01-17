import { Cog, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import { useTheme } from "~/components/theme-provider";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`sticky top-0 z-30 px-3 py-3 backdrop-blur-lg transition-all ${scrollY > 64 && "border border-b"}}`}
    >
      <div className="m-auto flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-600 p-2">
            <Cog className="text-white" />
          </span>
          <h1 className="text-xl font-bold">Orçamento Auto</h1>
        </div>
        <nav>
          <ul className="flex gap-2">
            <li>
              <a className={`${buttonVariants()} font-bold`} href="/entrar">
                Entrar
              </a>
            </li>
            <li>
              {theme === "dark" ? (
                <Button variant={"ghost"} onClick={() => setTheme("light")}>
                  <Sun />
                </Button>
              ) : (
                <Button variant={"ghost"} onClick={() => setTheme("dark")}>
                  <Moon />
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
