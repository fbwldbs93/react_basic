import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  //{ 변수명 : 값 } 형식으로 받아옴
  //form 으로 보내는 JSON 과 비슷하게 작동
  /*
    해당 페이지의 parameter(:id) 를 오브젝트 형식으로 가져와줌
    오브젝트 형식이기 때문에 distructuring 할 수 있음
  */
  //   console.log(id);

  useEffect(() => {
    const api = fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    api
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.data.movie);
        setLoading(false);
        console.log(data.data.movie);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <p>
            <img src={movie.medium_cover_image} />
          </p>
          <span>{movie.date_uploaded}</span>
          <h4>{movie.title}</h4>
          <p>run time {movie.runtime} minutes</p>
          <p>{movie.description_intro}</p>
          <button>
            <Link to={`${process.env.PUBLIC_URL}/`}>Back to Home</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
