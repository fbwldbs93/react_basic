import { useState, useEffect } from "react";

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => console.log(json));

    let myPromise = new Promise((resolve, reject) => {
      const api = fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      //fetch 를 해줘야함..!!!

      if (api) {
        // resolve("성공");
        resolve(api);
      } else {
        reject("실패");
      }
    });
    myPromise
      .then((response) => response.json())
      .then((movieData) => setMovie(movieData.data.movies))
      .catch((e) => console.log(e));

    setLoading(false);
  }, []);
  //useEffect => 컴포넌트가 최초 생성될 때 딱 한번만 실행

  return (
    <div>
      <h2>Movie</h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movie.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default MovieApp;
