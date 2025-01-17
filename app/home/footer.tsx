import { ArrowUpRight, Cog } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-gray-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-600 p-2">
              <Cog className="text-white" />
            </span>
            <h2 className="text-xl font-bold">Orçamento Auto</h2>
          </div>

          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
            <Link
              to="/politica-privacidade"
              className="flex items-center space-x-2 transition-colors hover:text-sky-400"
            >
              <span>Política de Privacidade</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Orçamento Auto. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
