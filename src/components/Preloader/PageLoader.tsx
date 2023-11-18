import { Loader } from "./Loader";
import css from "./Loader.module.css";

export const PageLoader = () => {
  return (
    <div className={css.loader_pageWrapper}>
      <Loader />
    </div>
  );
};
