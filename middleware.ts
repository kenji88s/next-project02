import { NextRequest } from "next/server";
import { nextBasicAuthMiddleware } from "nextjs-basic-auth-middleware";

export function middleware(request: NextRequest) {
  return nextBasicAuthMiddleware(
    {
      users: [
        {
          name: process.env.BASIC_AUTH_USER || "admin",
          password: process.env.BASIC_AUTH_PASS || "password",
        },
      ],
    },
    request
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
