import React, { useState, useEffect, createRef } from 'react'
import useStyles from './styles'

import placeholder from '../images/news-placeholder.png'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import classNames from 'classnames';


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, idx, activeArticle }) => {

    const classes = useStyles();

    const [elRefs, setElRefs] = useState([]);

    const scrollToRef = (ref) => {
        window.scroll(0, ref.current.offsetTop - 50);
    }

    useEffect(() => {
        window.scroll(0, 0);

        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {

        if (idx === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }

    }, [idx, activeArticle, elRefs])

    return (
        <Card ref={elRefs[idx]} className={classNames(classes.card, activeArticle === idx ? classes.activeCard : null)}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image={urlToImage || placeholder} />
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
                </div>
                <Typography clasName={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>

                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions clasName={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{idx + 1}</Typography>
            </CardActions>

        </Card>
    )
}

export default NewsCard
