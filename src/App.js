import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './components/styles'
import logo from './images/news-hub-logo.png'


import NewsCards from './components/NewsCards'



const alanKey = process.env.REACT_APP_API_KEY

function App() {

  const classes = useStyles();

  const [newsArticles, setNewsArticles] = useState([])


  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
        }
      }

    })

  }, [])


  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={logo} />

      </div>
      <NewsCards articles={newsArticles} />

    </div>
  );
}

export default App;
