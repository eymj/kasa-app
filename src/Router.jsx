import { Routes, Route } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Error from "./routes/Error";
import Listing from "./routes/Listing";

function Router() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="listings/:pid" element={<Listing />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;
