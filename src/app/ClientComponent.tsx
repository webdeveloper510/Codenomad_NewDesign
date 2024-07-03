"use client";

import "./globals.css";

export default function ClientComponent({ children, interClass }) {
  return (
    <body className={interClass}>
      {children}
      <style jsx global>{`
        .custom-font {
          font-family: 'Lufga', sans-serif;
        }
      `}</style>
    </body>
  );
}
