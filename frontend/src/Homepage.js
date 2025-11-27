import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";
import ProfileCard from "./ProfileCard";
import alexsaintmelux from "./assets/alex-saintmleux.jpg";
import jennaortega from "./assets/jenna-ortega.jpg";
import katseye from "./assets/katseye.jpg";
import sabrinacarpenter from "./assets/sabrina-carpenter.jpg";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/browse?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  return (
    <div className="homepage">
      <section className="welcome-banner">
        <h2>Celebrity Style Made Affordable</h2>
        <h3>
          Discover outfits worn by your favorite celebrities and find
          budget-friendly alternatives.
        </h3>
        <input
          type="text"
          placeholder="Search by celebrity or occasion"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <div className="welcome-buttons">
          <Link to="/quiz">
            <button className="quiz">Take Style Quiz</button>
          </Link>
          <Link to="/browse">
            <button className="browse">Browse All Looks</button>
          </Link>
        </div>
      </section>
      <section className="profiles-section">
        <h2>Featured Collections</h2>
        <div className="profiles">
          <ProfileCard
            name="Jenna Ortega"
            image={jennaortega}
            linkState={{ preselectedCelebrity: "Jenna Ortega" }}
          />
          <ProfileCard
            name="Sabrina Carpenter"
            image={sabrinacarpenter}
            linkState={{ preselectedCelebrity: "Sabrina Carpenter" }}
          />
          <ProfileCard
            name="Alexandra Saint Mleux"
            image={alexsaintmelux}
            linkState={{ preselectedCelebrity: "Alexandra Saint Mleux" }}
          />
          <ProfileCard
            name="Katseye"
            image={katseye}
            linkState={{ preselectedCelebrity: "Katseye" }}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
