import React, { useEffect, useState } from 'react';

const FetchNews = () => {
  const [newsDataArray, setNewsDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=tesla&from=2023-05-25&sortBy=publishedAt&apiKey=df662c9306b94bcaaab1069c8a3aade6'
        );
        if (response.ok) {
          const data = await response.json();
          setNewsDataArray(data.articles);
        } else {
          console.log('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  const displayNews = () => {
    return newsDataArray.map((news, index) => {
      const date = news.publishedAt.split('T')[0];

      return (
        <div key={index} className="card col-3">
          <img
            height="matchparent"
            width="100%"
            src={news.urlToImage}
            alt="News Image"
          />
          <div className="card-body">
            <div
              className="card-title fw-bolder container"
              style={{ textAlign: 'center', fontSize: '15px' }}
            >
              {news.title}
            </div>
            <h6 className="text-dark">{date}</h6>
            <a
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
              href={news.url}
            >
              Learn More..
            </a>
          </div>
        </div>
      );
    });
  };

  return <div id="news-container" className="d-flex flex-wrap">{displayNews()}</div>;
};

export default FetchNews;
