import { Outlet } from "react-router-dom";

import PageHeader from "../components/AppHeader";

import styles from "@presentation/styles/app.module.scss";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <PageHeader />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
