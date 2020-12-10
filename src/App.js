import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './components/app-styles'
import logo from './images/news-hub-logo.png'


import NewsCards from './components/NewsCards'


const alanKey = process.env.REACT_APP_API_KEY

function App() {

  const classes = useStyles();

  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)


  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
        }
      }

    })

  }, [])


  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={logo} />

      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />

    </div>
  );
}

export default App;
