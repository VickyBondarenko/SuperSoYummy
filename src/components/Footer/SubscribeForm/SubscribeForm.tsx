import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import styles from "./SubscribeForm.module.css";
import { useMediaQuery } from "react-responsive";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { fetchSubscribe } from "../../../redux/subscribeSlice/subscribeThunk";

export const SubscribeForm: React.FC = () => {
  const [formValue, setFormValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { value } = form.elements[0] as HTMLInputElement;
    dispatch(fetchSubscribe(value));
    setFormValue("");
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <div className={styles.subscribe_form_wrapper}>
      {isDesktop && (
        <div>
          <h3 className={styles.subscribe_title}>
            Subscribe to our Newsletter
          </h3>
          <p className={styles.subscribe_text}>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmitForm} className={styles.subscribe_form}>
        <label className="relative">
          <FaRegEnvelope
            size={`${isDesktop ? "20" : "18"}`}
            className={styles.subscribe_svg}
          />
          <input
            name="email"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValue(e.target.value)
            }
            value={formValue}
            placeholder="Enter your email address"
            className={`${styles.subscribe_input} dark:border-whiteText placeholder:dark:text-whiteText`}
          />
        </label>

        <button
          type="submit"
          className={`${styles.subscribe_button} bg-accentMain dark:bg-accentDarker hover:bg-overlayBackdrop dark:hover:bg-accentHalfDark`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
