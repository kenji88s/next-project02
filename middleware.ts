import { NextRequest } from "next/server";
import { nextBasicAuthMiddleware } from "nextjs-basic-auth-middleware";

export function middleware(request: NextRequest) {
  return nextBasicAuthMiddleware(
    {
      users: [
        { name: "admin", password: "password" },
      ],
    },
    request
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
