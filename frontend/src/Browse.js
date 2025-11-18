import { useState, useEffect } from "react";
import "./Browse.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Browse() {
  const location = useLocation();
  const navigate = useNavigate();
  const preselected = location.state?.preselectedCelebrity || "";

  const [selectedCelebrity, setSelectedCelebrity] = useState(preselected);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOutfits() {
      try {
        const res = await fetch("https://starstyle-tiffany-development.up.railway.app/api/outfits");
        const data = await res.json();
        setOutfits(data.data);
      } catch (err) {
        console.error("Error fetching outfits:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchOutfits();
  }, []);

  if (loading) {
    return <div className="browse-page">Loading outfits...</div>;
  }

  const celebrities = [...new Set(outfits.map((o) => o.celebrityId?.name))];
  const occasions = [...new Set(outfits.map((o) => o.occasion))];
  const seasons = [...new Set(outfits.map((o) => o.weather))];

  const filteredOutfits = outfits.filter((outfit) => {
    return (
      (selectedCelebrity === "" ||
        outfit.celebrityId?.name === selectedCelebrity) &&
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
            key={outfit._id}
            className="outfit-card"
            onClick={() => navigate(`/outfit/${outfit._id}`)}
          >
            <img src={outfit.imageUrl} alt={outfit.celebrityId?.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
