import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from "@presentation/layouts/DefaultLayout";
import TaskView from "@presentation/pages/TaskView";
import LoginView from "@presentation/pages/LoginView";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<TaskView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
