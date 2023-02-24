import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
