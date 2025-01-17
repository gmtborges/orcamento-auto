import { Card, CardContent } from "~/components/ui/card";
import {
  Users,
  TrendingUp,
  MessageSquare,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { Link } from "react-router";

export default function BeneficiosAuto() {
  const steps = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-purple-500" />,
      title: "Alcance Mais Clientes",
      description:
        "Conecte-se com proprietários de veículos que estão procurando por serviços de reparo e manutenção na sua região.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      title: "Aumente seu Faturamento",
      description:
        "Receba um fluxo constante de novos pedidos de serviço e expanda seus negócios com leads qualificados.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Propostas via WhatsApp",
      description:
        "Receba novas solicitações de orçamento diretamente no seu WhatsApp e responda de forma prática, sem precisar aprender um novo sistema.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-500" />,
      title: "Construa Credibilidade",
      description:
        "Destaque sua experiência, certificações e avaliações de clientes para se diferenciar dos concorrentes.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Economize Tempo",
      description:
        "Reduza o tempo gasto com telefonemas e burocracia usando nossa plataforma digital otimizada.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-sky-500" />,
      title: "Visibilidade Local",
      description:
        "Ganhe visibilidade na sua área de atuação e atraia clientes que procuram serviços automotivos próximos.",
    },
  ];

  return (
    <div className="pb-20 pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Faça sua empresa crescer com a gente!
          </h2>
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
          Receba sua primeira proposta!
        </Link>
      </div>
    </div>
  );
}
