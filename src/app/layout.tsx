import type { Metadata } from "next";

import "@/app/global.css";
import { TanstackQueryProvider } from "@/app/providers/react-query/QueryClientProvider";

export const metadata: Metadata = {
  title: "Marvel - Search heros",
  description: "Explore o universo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <TanstackQueryProvider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              minHeight: "100vh",
            }}
          >
            {children}
          </div>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
