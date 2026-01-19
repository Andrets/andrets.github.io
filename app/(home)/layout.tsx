import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
