import PropTypes from "prop-types";
import "./Listings.css";
import Card from "./Card";

Listings.propTypes = {
  data: PropTypes.array.isRequired,
};

function Listings({ data }) {

  return (
    <div className="card-list">
      {data.map((listing, index) => (
        <Card
          key={index}
          link={"/listings/" + listing.id}
          id={listing.id}
          title={listing.title}
          cover={listing.cover}
        />
      ))}
    </div>
  );
}

export default Listings;
