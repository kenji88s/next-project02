import React from "react";

type Props = {
    children: React.ReactNode;
}

export default function Section({ children }: Props) {
    return (
        <body>{children}</body>
    );
}