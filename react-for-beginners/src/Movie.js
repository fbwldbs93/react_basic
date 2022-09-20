import PropTypes from "prop-types";
//어떤 props 를 가지고 있는지 알면 좋을 것 같아서 prop-types 사용
import { Link } from "react-router-dom";
//router 사용하기 위해 npm i react-router-dom
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
        {/* key 값은 고유해야한다는 점만 꼭 기억하기 */}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
