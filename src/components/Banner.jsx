import PropTypes from "prop-types";
import "./Banner.css";

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
};

function Banner({ title, image }) {

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      {title && (
        <div className="banner-text">
          <span>{title}</span>
        </div>
      )}
    </div>
  );
}

export default Banner;
