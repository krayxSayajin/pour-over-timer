import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Pour over recipe types
export const recipeStepSchema = z.object({
  stepNumber: z.number(),
  duration: z.number(), // seconds
  waterAmount: z.number(), // grams
  instruction: z.string(),
  technique: z.string().optional(),
});

export const recipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  expert: z.string(),
  description: z.string(),
  coffeeAmount: z.number(), // grams
  waterAmount: z.number(), // grams
  ratio: z.string(), // e.g., "1:16"
  grindSize: z.string(),
  waterTemp: z.number(), // celsius
  totalTime: z.number(), // seconds
  method: z.string(), // V60, Chemex, etc.
  steps: z.array(recipeStepSchema),
});

export type Recipe = z.infer<typeof recipeSchema>;
export type RecipeStep = z.infer<typeof recipeStepSchema>;
