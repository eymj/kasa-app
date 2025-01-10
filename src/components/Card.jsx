import PropTypes from "prop-types";
import "./Card.css";

Card.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

function Card({ title, cover, link }) {
  return (
    <a href={link}>
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url(${cover})`,
        }}
      >
        {title && (
          <div className="card-text">
            <span>{title}</span>
          </div>
        )}
      </div>
    </a>
  );
}

export default Card;
