import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import "./herocard.scss";

const LinkHero = props => (
    <Link href="/hero/[id]" as={`/hero/${props.id}`}>
        <a>{props.children}</a>
    </Link>
);

const HeroCard = ({ heroId, heroName, imagePath }) => {

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
        <LinkHero id={heroId}>
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
            </Card>
        </LinkHero>
    );
};

export default HeroCard;