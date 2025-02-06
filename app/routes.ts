import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("entrar", "routes/login.tsx"),
  route("politica-privacidade", "routes/privacy.tsx"),
  route("cadastrar-auto", "routes/signup-auto.tsx"),
  route("cadastrar", "routes/signup.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
