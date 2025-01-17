import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("entrar", "routes/entrar.tsx"),
  route("politica-privacidade", "routes/politica-privacidade.tsx"),
  route("cadastrar-auto", "routes/cadastrar-auto.tsx"),
  route("cadastrar", "routes/cadastrar.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
