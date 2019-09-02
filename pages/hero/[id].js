import React from 'react';
import data from "../../data/data";
import fetch from 'isomorphic-unfetch';
import crypto from "crypto";
import Wrapper from '../../components/wrappers/Wrapper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import "../../style/heropage.scss";

const HeroPage = (props) => {
    const hero = props.hero;
    const styleTableRow = {
        fontFamily: "fantasy"
    };

    return (
        <Wrapper>
            <h1>Fiche identité :</h1>
            <div className="flexContent">
                <img className="flexContent__img" src={hero.thumbnail.path + "." + hero.thumbnail.extension} alt="" />
                <div className="flexContent__infos">
                    <div className="flexContent__infos__identification">
                        <h2 className="flexContent__infos__identification__name">{hero.name}</h2>
                        {hero.description !== "" ?
                            <p className="flexContent__infos__identification__description">{hero.description}</p>
                            :
                            null
                        }
                    </div>
                    {hero.comics.items.length > 0 ?
                        <div className="flexContent__infos__comics">
                            <h2 className="flexContent__infos__comics__title">Comics</h2>
                            <Table size="small">
                                <TableBody>
                                    {hero.comics.items.map((comic, i) => (
                                        <TableRow key={i}>
                                            <TableCell align="left" style={styleTableRow}>{comic.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        :
                        null
                    }
                    {hero.comics.items.length > 0 ?
                        <div className="flexContent__infos__series">
                            <h2 className="flexContent__infos__series__title">Series</h2>
                            <Table size="small">
                                <TableBody>
                                    {hero.series.items.map((serie, i) => (
                                        <TableRow key={i}>
                                            <TableCell align="left" style={styleTableRow}>{serie.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </Wrapper>
    );
};

HeroPage.getInitialProps = async function (context) {
    const { id } = context.query;
    const ts = Math.floor(Date.now() / 1000);
    const apikey = data.API_PUBLIC;
    const concatenedString = ts + data.API_PRIVATE + data.API_PUBLIC;
    const hash = crypto.createHash('md5').update(concatenedString).digest('hex');
    const url = `http://gateway.marvel.com:80/v1/public/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`;
    //console.log(url);
    const res = await fetch(url);
    const json = await res.json();
    //console.log(json);
    return {
        hero: json.data.results[0]
    }
}

export default HeroPage;