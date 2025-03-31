
"use client";


import React from "react";
import { usePathname } from "next/navigation";

type Props = {
    children: React.ReactNode;
}

export default function Section({ children }: Props) {

    const pathname = usePathname(); // 現在のページのパスを取得
    const pageId = pathname === "/" ? "index" : pathname.replace(/\//g, "-").replace(/^-/, "");

    return (
        <body id={pageId}>{children}</body>
    );
}