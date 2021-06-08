import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../styles/films.css'
import { CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Films = ({ value }) => {
  const classe = useStyles();
  const [films, setFilms] = useState([]);
 

  const key = "2bfc25756289379cfb50e08fccad6a54";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${value}`;
  const urlImg = `https://image.tmdb.org/t/p/w500`;


  useEffect(() => {
    async function Search() {
      if (value) {
        const res = await fetch(url);
        const result = await res.json();
        console.log(result)
        if (result.results) setFilms([...result.results])
      } else {
        setFilms([]);
      }
    }
    Search();
  }, [value, url])


  return (
    <div>
      <div className="cards">
        {films.map((film) => (
          <Link to={"/film/" + film.id}>
            <Card className={classe.root} key={film.id} id="card">
              <CardActionArea>

                {film.backdrop_path ? (
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    src={urlImg + film.backdrop_path}
                    title="Contemplative Reptile"
                  />
                ) : (
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    src="/assets/foto-nao-disponivel.jpg"
                    title="Contemplative Reptile"
                  />
                )}

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {film.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {film.release_date ? (
                      <p>{film.release_date}</p>
                    ) : (
                      <p>Data ainda não divulgada</p>
                    )}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="button">
              </CardActions>
            </Card>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Films;