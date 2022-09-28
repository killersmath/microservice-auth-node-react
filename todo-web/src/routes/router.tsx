import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from "@presentation/layouts/DefaultLayout";
import Home from "@presentation/pages/Home";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
