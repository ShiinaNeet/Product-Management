"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { msg: "Invalid credentials", status: "error" };
        case "CredentialsSignin":
          throw error;
        default:
          return { msg: "Something went wrong", status: "error" };
      }
    }
    throw error;
  }
}
