import { Helmet } from "react-helmet-async";
import "./App.css";
import Cosmetics from "./components/cosmetics/cosmetics";

function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>Cosmetic Shop | Home</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-orange-700">
        Welcome to my cosmetics shop
      </h1>

      <Cosmetics />
    </div>
  );
}

export default Home;
