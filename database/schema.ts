import { sql } from "drizzle-orm";
import {
  blob,
  check,
  integer,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

const timestamps = {
  updatedAt: integer("updated_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
};

export const companies = sqliteTable("companies", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  cnpj: text().notNull().unique(),
  cep: text().notNull(),
  whatsapp_number: text().notNull(),
  banner: blob(),
  ...timestamps,
});

export const users = sqliteTable(
  "users",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    companyId: integer("company_id").references(() => companies.id),
    name: text().notNull(),
    password: text().notNull(),
    email: text().notNull().unique(),
    role: text().notNull().default("admin"),
    ...timestamps,
  },
  (table) => [check("role", sql`${table.role} IN ('user', 'admin')`)],
);
