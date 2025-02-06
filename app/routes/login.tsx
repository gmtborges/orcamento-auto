import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Cog } from "lucide-react";
import { Link } from "react-router";

export default function Entrar() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="rounded-full bg-blue-600 p-2">
            <Cog className="text-white" />
          </span>
          <h1 className="text-2xl font-bold">Orçamento Auto</h1>
        </div>
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <CardDescription>Entre com seu número de WhatsApp</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="11 9 9999-9999"
                  type="tel"
                  className="w-full"
                />
              </div>

              <Button className="w-full">Entrar</Button>
            </div>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-sm">Não tem uma conta? </p>
        <p className="mt-4 text-center text-sm">
          <Link
            to="/cadastrar"
            className="font-medium text-blue-500 hover:underline"
          >
            Cadastre como pessoa física
          </Link>
        </p>
        <p className="mt-4 text-center text-sm">
          <Link
            to="/cadastrar-auto"
            className="font-medium text-blue-500 hover:underline"
          >
            Cadastre como prestador
          </Link>
        </p>
      </div>
    </div>
  );
}
