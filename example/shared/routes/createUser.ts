import { createHttpRoute } from "@renkei/core";
import { z } from "zod";

export const [createUserRoute, implementCreateUser] = createHttpRoute({
  input: (value) => z.object({
    firstname: z.string(),
    lastname: z.string()
  }).parse(value),
  output: value => z.discriminatedUnion("status", [
    z.object({
      status: z.literal("SUCCESS"),
      message: z.string()
    }),
    z.object({
      status: z.literal("LIMITED"),
      retryAfter: z.date({ coerce: true }),
    }),
    z.object({
      status: z.literal("UNEXPECTED_ERROR"),
    }),
    z.object({
      status: z.literal("FIRSTNAME_EMPTY")
    }),
    z.object({
      status: z.literal("LASTNAME_EMPTY")
    }),
    z.object({
      status: z.literal("FIRSTNAME_TOO_LONG")
    }),
    z.object({
      status: z.literal("LASTNAME_TOO_LONG")
    }),
    z.object({
      status: z.literal("USER_ALREADY_EXISTS")
    })
  ]).parse(value)
})