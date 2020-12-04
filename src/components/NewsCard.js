import React from 'react'
import useStyles from './styles'
import placeholder from '../images/news-placeholder.png'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'



const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, idx }) => {

    const classes = useStyles();

    return (
        <Card clasName={classes.card}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image={urlToImage || placeholder} />
                <div clasName={classes.details}>
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
