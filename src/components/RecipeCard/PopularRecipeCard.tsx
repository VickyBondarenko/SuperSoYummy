import styles from "./PopularRecipeCard.module.css";
import { truncateText } from "../../services/truncateText";
export interface IPopularProps {
  _id?: string;
  title: string;
  preview: string;
  thumb?: string;
  instructions?: string;
}

export const PopularRecipeCard: React.FC<IPopularProps> = ({
  title,
  preview,
  instructions,
}) => {
  return (
    <li className={styles.popular_item}>
      <img
        src={preview}
        alt="recipe preview"
        className={styles.popular_image}
      />

      <div className={styles.popular_info}>
        <h4 className={styles.popular_title}>{title}</h4>
        <p className={styles.popular_text}>
          {truncateText(instructions as string)}
        </p>
      </div>
    </li>
  );
};
