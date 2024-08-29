import type { Metadata } from "next";
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
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
