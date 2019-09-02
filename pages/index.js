import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import fetch from 'isomorphic-unfetch';
import Container from '@material-ui/core/Container';
import "../style/index.scss";
import Wrapper from '../components/wrappers/Wrapper';
import data from "../data/data";
import crypto from "crypto";
import HeroCard from '../components/cards/HeroCard';
import { Grid } from '@material-ui/core';

class Index extends Component {

    static async getInitialProps({ req }) {
        const ts = Math.floor(Date.now() / 1000);
        const apikey = data.API_PUBLIC;
        const concatenedString = ts + data.API_PRIVATE + data.API_PUBLIC;
        const hash = crypto.createHash('md5').update(concatenedString).digest('hex');
        const url = `http://gateway.marvel.com:80/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;
        //console.log(url);
        const res = await fetch(url);
        const json = await res.json();
        //console.log(json);
        return {
            herosList: json.data.results
        }
    }

    render() {
        return (
            <Wrapper>
                <h1>Liste des super héros :</h1>
                <div className="listHeros">

                </div>
                <Grid container spacing={3}>
                    {this.props.herosList.map((hero, i) =>
                        <Grid key={i} item xs={6} sm={4}>
                            <HeroCard heroName={hero.name} imagePath={hero.thumbnail.path + "." + hero.thumbnail.extension} />
                        </Grid>
                    )}
                </Grid>
            </Wrapper>
        );
    }
}

export default Index;
