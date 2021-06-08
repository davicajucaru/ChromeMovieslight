import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "../styles/film.css";

const Film = () => {
  const [film, setFilm] = useState(undefined);
  const [isFavorite, setIsFavotire] = useState(false);

  let { id } = useParams();


  const key = "2bfc25756289379cfb50e08fccad6a54";
  const urlImg = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    
    async function isFavorite(){
      const ids = await JSON.parse(localStorage.getItem("favorites"))
      console.log(ids)
      if(ids.includes(id)) {
        setIsFavotire(true);
      }
    }

    async function search() {
      if (id) {
        const res = await fetch(url);
        const result = await res.json();
        if (result) setFilm(result);
      }
    }
    isFavorite();
    search();
  }, [id, isFavorite]);

  function addFavorite(id) {
    const antigosIds = JSON.parse(localStorage.getItem("favorites"))
    if (antigosIds.includes(id)) {
      const filter = antigosIds.filter(item => item !== id)
      localStorage.setItem("favorites", JSON.stringify(filter))
    } else {
      const ids = [id, ...antigosIds];
      localStorage.setItem("favorites", JSON.stringify(ids))
    }
  }


  console.log(isFavorite)

  return (
    <>
      {film && (
        <div className="page">
          <div className="film" key={film.id}>
            <h1>Title:{film.title}</h1>
            <img src={urlImg + film.backdrop_path} alt="Foto não disponivel" />
            <div id="title">
              <div id="overview">
                <>
                  <h2>Overview</h2>
                </>
                <p>{film.overview}</p>
              </div>

              <div id="data">
                <p>
                  <strong>Date:</strong>
                  {film.release_date}
                </p>
                <p>
                  <strong>Runtime:</strong>
                  {film.runtime}
                </p>
                <p>
                  <strong>Language:</strong>
                  {film.original_language}
                </p>
                <p>
                  <strong>Budget:</strong>
                  {film.budget}
                </p>
                <p>
                  <strong>Popularity:</strong>
                  {film.popularity}
                </p>
                </div>
                <div className="button-group">
                  {isFavorite ? ( 
                    <a href=" " onClick={() => addFavorite(id)}  ><img src="/assets/star-on.svg" alt=""/></a>
                  ): (
                    <a href=" "  onClick={() => addFavorite(id)}  ><img src="/assets/star-off-black.svg" alt=""/></a>
                  )}
                </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Film;
