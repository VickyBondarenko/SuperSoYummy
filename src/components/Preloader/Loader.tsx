import Fork from "../../assets/fork.svg";
import Knife from "../../assets/knife.svg";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loader_wrapper}>
      <img className={css.loader_img} src={Fork} alt="Spinner" />
      <img className={css.loader_img} src={Knife} alt="Spinner" />
    </div>
  );
};
