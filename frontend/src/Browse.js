import { useState } from "react";
import { outfits } from "./data/outfits";
import "./Browse.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Browse() {
  const navigate = useNavigate();

  const [selectedCelebrity, setSelectedCelebrity] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");

  const celebrities = Array.from(new Set(outfits.map((o) => o.celebrity)));
  const occasions = Array.from(new Set(outfits.map((o) => o.occasion)));
  const seasons = Array.from(new Set(outfits.map((o) => o.weather)));

  const filteredOutfits = outfits.filter((outfit) => {
    return (
      (selectedCelebrity === "" || outfit.celebrity === selectedCelebrity) &&
      (selectedOccasion === "" || outfit.occasion === selectedOccasion) &&
      (selectedSeason === "" || outfit.weather === selectedSeason)
    );
  });

  return (
    <div className="browse-page">
      <div className="filters">
        <select
          className="filter-select"
          value={selectedCelebrity}
          onChange={(e) => setSelectedCelebrity(e.target.value)}
        >
          <option value="">All Celebrities</option>
          {celebrities.map((celebrity) => (
            <option key={celebrity} value={celebrity}>
              {celebrity}
            </option>
          ))}
        </select>
        <select
          className="filter-select"
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
        >
          <option value="">All Occasions</option>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        <select
          className="filter-select"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
        >
          <option value="">All Seasons</option>
          {seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </div>
      <div className="outfit-grid">
        {filteredOutfits.map((outfit) => (
          <div
            key={outfit.id}
            className="outfit-card"
            onClick={() => console.log("clicked outfit:", outfit.id)}
          >
            <img src={outfit.image} alt={outfit.title} />
            <h3>{outfit.title}</h3>
          </div>
        ))}
      </div>
      <Link to="/" className="return-link-on-profile">
        Return to Home
      </Link>
    </div>
  );
}

export default Browse;
