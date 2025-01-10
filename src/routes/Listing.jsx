import Carousel from "../components/Carousel";
import Collapsible from "../components/Collapsible";
import { useEffect } from "react";
import "./Listing.css";
import data from "../assets/logements.json";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";
import { useParams, useNavigate } from "react-router";

const isValidId = (id) => {
  return data.some((l) => l.id == id);
};

function Listing() {
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isValidId(params.pid)) {
      navigate("/error");
    }
  }, [navigate, params.pid]);

  const listing = data.find((l) => l.id == params.pid)

  if (!listing) {
    return <div>Loading...</div>; // Fallback if listing is undefined
  }

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = listing;

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="listing">
      <Carousel images={pictures} />
      <div className="listing-info">
        <div className="listing-info-block1">
          <div className="listing-title">{title}</div>
          <div className="listing-location">{location}</div>
          <div className="listing-tags">
            {tags.map((tag, index) => (
              <div key={index} className="listing-tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="listing-info-block2">
          <div className="listing-host">
            <div className="listing-name">{host.name}</div>
            <div className="listing-picture">
              <img src={host.picture}></img>
            </div>
          </div>
          <div className="listing-rating">
            {stars.map((star, index) => (
              <img
                key={index}
                className="star"
                src={star <= rating ? starActive : starInactive}
              ></img>
            ))}
          </div>
        </div>
      </div>

      <div className="listing-collapsibles">
        <Collapsible title="Description">
          <p>{description}</p>
        </Collapsible>

        <Collapsible title="Équipements">
          <ul className="equipments">
            {equipments.map((equipment, index) => (
              <li key={index} className="equipment">
                {equipment}
              </li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
}

export default Listing;
