// 1. NewsCard/styles.js:
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

    logoContainer: {
        display: 'flex',
        justifyContent: 'center'
    },

    media: {
        height: 250,
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },

    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },

    newscards: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white'
    },

    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
});