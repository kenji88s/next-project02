/*
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
  console.log("middleware: " + request.url);
  return NextResponse.next();
}

export const config = {};

BASIC_AUTH_CREDENTIALS=admin:password


import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

export const config = {
  matcher: ["/(.*)"],
};
*/


import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.headers.get("authorization");

  // ユーザー名・パスワード設定
  const validUsername = "admin";
  const validPassword = "password";
  const encodedCredentials = btoa(`${validUsername}:${validPassword}`);

  if (auth === `Basic ${encodedCredentials}`) {
    return NextResponse.next(); // 認証成功 → そのまま次へ
  }

  // 認証失敗時 → ベーシック認証のプロンプトを表示
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

// 適用するルートを制限したい場合
export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"], // 例: `/admin` や `/dashboard` にのみ適用
};
