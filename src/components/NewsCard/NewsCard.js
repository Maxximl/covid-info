import React from "react";
import styles from "./NewsCard.module.css";
import { limitTextLength } from "../../utils/limitTextLength";

const NewsCard = ({ url, urlToImage, title, description, source }) => {
  return (
    <div className={styles.container}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.image}>
          <img src={urlToImage} alt="news_photo"></img>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            {title ? limitTextLength(title, 90) : null}
          </div>
          <div className={styles.description}>
            {description ? limitTextLength(description, 100) : null}
          </div>
          <div className={styles.source}>{source}</div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
