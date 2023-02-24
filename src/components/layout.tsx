import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <div className="layout-content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
