import type { Metadata } from "next";
import { TanstackQueryProvider } from "@/app/providers/react-query/QueryClientProvider";
import "@/app/global.css";
import { Footer } from "@/app/(features)/components/Footer/Footer";

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
          <div className="layoutProvider">
            <div>{children}</div>
            <Footer />
          </div>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
