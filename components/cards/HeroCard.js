import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./herocard.scss";


const HeroCard = ({ heroName, imagePath }) => {

    const styleCard = {
        width: '320px'
    };

    const styleCardMedia = {
        height: '320px'
    };

    const styleTypography = {
        fontSize: '1.4rem'
    };

    return (
        <Card style={styleCard}>
            <CardActionArea>
                <CardMedia
                    image={imagePath}
                    style={styleCardMedia}
                />
                <CardContent>
                    <Typography style={styleTypography} gutterBottom variant="h5" component="h2">{heroName}</Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions> */}
        </Card>

    );
};

export default HeroCard;