import type { Metadata } from "next";
import { TanstackQueryProvider } from "@/app/providers/react-query/QueryClientProvider";
import "@/app/global.css";

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
          <div>{children}</div>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
