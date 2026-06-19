import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default function MarketingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
