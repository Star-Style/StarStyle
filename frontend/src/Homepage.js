import { Link } from "react-router-dom";
import "./Homepage.css";

function HomePage() {
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
          <Link
            to="/browse"
            state={{ preselectedCelebrity: "Sabrina Carpenter" }}
            className="profile-card"
          >
            Sabrina Carpenter
          </Link>
          <Link
            to="/browse"
            state={{ preselectedCelebrity: "Jenna Ortega" }}
            className="profile-card"
          >
            Jenna Ortega
          </Link>
          <Link
            to="/browse"
            state={{ preselectedCelebrity: "Alexandra Saint Mleux" }}
            className="profile-card"
          >
            Alexandra Saint Mleux
          </Link>
          <Link
            to="/browse"
            state={{ preselectedCelebrity: "Katseye" }}
            className="profile-card"
          >
            Katseye
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
