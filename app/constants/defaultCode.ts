export const INITIAL_TODOS_CODE = `import { mutation, query }
  from "./_generated/server";
import { v } from "convex/values";

export const setComplete = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.patch("todos", args.id, {
      // Try checking a todo—nothing happens!
      // Change this to 'true' and try again.
      completed: false,
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const todos = await ctx.db
      .query("todos")
      .order("desc")
      .collect();
    return todos;
  },
});

export const add = mutation({
  args: {
    text: v.string(),
    category: v.union(
      v.literal("Work"),
      v.literal("Chores"),
      v.literal("Other"),
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
      category: args.category,
      completed: false,
    });
  },
});

export const setIncomplete = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.patch("todos", args.id, {
      completed: false,
    });
  },
});`;

export const INITIAL_SCHEMA_CODE = `import { defineSchema, defineTable }
  from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    category: v.union(
      v.literal("Work"),
      v.literal("Chores"),
      v.literal("Other"),
    ),
    completed: v.boolean(),
  }),
});`;
