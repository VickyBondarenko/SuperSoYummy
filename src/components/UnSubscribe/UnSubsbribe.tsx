import style from "./Unsubscribe.module.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchUnSubscribe } from "../../redux/subscribeSlice/subscribeThunk";

export const UnSubscribe = () => {
  const dispatch = useAppDispatch();

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const url = window.location.href;

    const id: string | undefined = url.split("/").pop();

    if (id) {
      dispatch(fetchUnSubscribe(id));
    } else {
      console.error("ID not found!");
    }
  };

  return (
    <div className={style.wrapper}>
      <div>
        <h3 className={style.unsub_title}>SoYummy newsletter!</h3>
        <p className={style.unsub_text}>
          You see this page, if you were redirected from link in an email
          message.
        </p>
        <p className={style.unsub_text}>
          If you don't want to recive our newsletter emails, click the button
          below
        </p>
        <button className={style.unsub_button} onClick={clickHandler}>
          Don't recieve news
        </button>
      </div>
    </div>
  );
};
