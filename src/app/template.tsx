import Footer from "@/components/public/footer";
import Navbar from "@/components/public/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-[#06070A]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
