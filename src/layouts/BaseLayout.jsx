import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BaseLayout;
