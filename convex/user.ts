import { query } from "./_generated/server";
import { auth } from "./auth";
// import { getAuthUserId } from "@convex-dev/auth/server";

export const current = query({
    args: {},
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);

        if (!userId) {
            return null;
        }

        return await ctx.db.get(userId);
    }
});


import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const ifUserExist = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (!user) {
      throw new Error("Email not found. Try to sign Up");
    }

    return args.email;
  },
});



