import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ url, urlToImage, title, description, source }) => {
    const shortDescription = (text) => {
        let sliced = text.slice(0,100);
        if(sliced.length < text.length) {
            sliced += '...';
        }
        return sliced;
    }
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <a href={url}>
          <img src={urlToImage} alt=""></img>
        </a>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{shortDescription(description)}</div>
        <div className={styles.source}>{source}</div>
      </div>
    </div>
  );
};

export default NewsCard;
