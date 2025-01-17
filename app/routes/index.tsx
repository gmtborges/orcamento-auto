import { Link } from "react-router";
import { buttonVariants } from "~/components/ui/button";
import Footer from "~/home/footer";
import Header from "~/home/header";
import BeneficiosAuto from "~/home/beneficios-auto";
import Beneficios from "~/home/beneficios";

export function meta() {
  return [
    { title: "Orçamento Auto" },
    {
      name: "description",
      content:
        "Orçamento de peças e serviços para seu veículo de forma rápida e automatizada pelo Whatsapp!",
    },
  ];
}

export default function Index() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-32">
        <div className="flex max-w-xl flex-col justify-center">
          <h2 className="text-center text-4xl font-bold">
            Orçamento de peças e serviços para seu veículo&nbsp;
            <span className="animate-pulse bg-gradient-to-r from-sky-400 via-sky-600 to-emerald-500 bg-clip-text text-4xl font-extrabold text-transparent">
              num zap!
            </span>
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link className={`${buttonVariants()}`} to="/cadastrar">
              Para pessoas físicas
            </Link>
            <Link
              className={`${buttonVariants({ variant: "secondary" })}`}
              to="/cadastrar-auto"
            >
              Para autopeças e oficinas
            </Link>
          </div>
        </div>
        <Beneficios />
        <BeneficiosAuto />
      </main>
      <Footer />
    </>
  );
}
