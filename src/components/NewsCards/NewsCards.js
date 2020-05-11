import React, { useState, useEffect } from "react";
import styles from "./NewsCards.module.css";
import { fetchNews } from "../../api";
import NewsCard from "../NewsCard";

const NewsCards = ({ countryCode }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(null);
    const fetchAPI = async () => {
      setNews(await fetchNews(countryCode));
    };

    fetchAPI();
  }, [countryCode]);

  const renderNewsCards = (newsList) => {
    return newsList.map((item) => {
      return (
        <NewsCard
          key={item.url}
          url={item.url}
          urlToImage={item.urlToImage}
          title={item.title}
          description={item.description}
          source={item.source.name}
        />
      );
    });
  };

  if (!news) return <div className={styles.container}>Loading...</div>;
  if (news.length === 0)
    return <div className={styles.container}>No news :(</div>;
  return <div className={styles.container}>{renderNewsCards(news)}</div>;
};

export default NewsCards;
