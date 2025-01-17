import { Card, CardContent } from "~/components/ui/card";
import {
  MessageSquare,
  Search,
  ShieldCheck,
  Clock,
  Store,
  CheckCircle,
} from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { Link } from "react-router";

export default function Beneficios() {
  const steps = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: "Crie sua Conta",
      description:
        "Faça seu cadastro na plataforma de forma rápida e segura para começar a usar nossos serviços.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      title: "Valide seu WhatsApp",
      description:
        "Confirme seu número de WhatsApp para permitir que você envie orçamentos e receba atualizações.",
    },
    {
      icon: <Search className="h-8 w-8 text-emerald-500" />,
      title: "Envie sua Solicitação",
      description:
        "Descreva o serviço ou peça que você precisa, incluindo informações de seu automóvel.",
    },
    {
      icon: <Store className="h-8 w-8 text-orange-500" />,
      title: "Busca Automática",
      description:
        "Nosso sistema envia sua solicitação automaticamente para nossa rede de oficinas e lojas de autopeças.",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Receba Propostas",
      description:
        "Aguarde enquanto os parceiros analisam seu pedido e enviam suas melhores ofertas.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-sky-500" />,
      title: "Escolha a Melhor Oferta",
      description:
        "Compare os preços e condições oferecidas e selecione a proposta que melhor atende suas necessidades.",
    },
  ];

  return (
    <div className="mt-44 w-full bg-slate-50 pb-20 pt-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Como Funciona</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Envie solicitações de orçamentos de peças e serviços e nossa
            integração com WhatsApp fará as cotações de forma automática para
            você!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-none shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full p-3">{step.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link to="/cadastrar-auto" className={buttonVariants()}>
          Faça seu primeiro orçamento!
        </Link>
      </div>
    </div>
  );
}
