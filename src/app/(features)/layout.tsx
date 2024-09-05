import { Footer } from "@/app/(features)/components/Footer/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      {children}
      <Footer />
    </div>
  );
}
