import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main
        className={`${styles.main_before} relative container mx-auto min-h-screen`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
