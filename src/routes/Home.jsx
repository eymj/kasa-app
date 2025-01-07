import Banner from "../components/Banner";
import Listings from "../components/Listings";
import hero1 from "../assets/hero1.png"
import data from '../assets/logements.json'
import "./Home.css";

function Home() {

  return (
    <div className="home">
      <Banner image={hero1} title="Chez vous, partout et ailleurs"/>
      <Listings data={data} />
    </div>
    
  );
}

export default Home;
