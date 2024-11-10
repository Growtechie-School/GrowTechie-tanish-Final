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

    return true;
  },
});
