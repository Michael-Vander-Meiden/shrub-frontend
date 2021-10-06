import { CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    container: {
        padding: theme.spacing(4, 0, 0),
        
    },

    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        
    },
    cardMedia: {
        paddingTop: '56.25%', //16:9
    },
    cardContent: {
        flexGrow: 1,
    },

    searchBar: {
        padding: '20px 0',
        maxWidth: '25%'
    }
}));


export default useStyles;