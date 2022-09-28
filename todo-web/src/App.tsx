import { RecoilRoot } from "recoil";

import AppRouter from "./routes/router";

import "@presentation/styles/app.scss";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
};

export default App;
