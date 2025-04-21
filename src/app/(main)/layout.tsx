import Header from "@/components/Other/Header";
import Footer from "@/components/Other/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
