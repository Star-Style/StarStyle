import { Link } from "react-router-dom";

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
          <div className="profile-card">Sabrina Carpenter</div>
          <div className="profile-card">Jenna Ortega</div>
          <div className="profile-card">Alexandra Saint Mleux</div>
          <div className="profile-card">Katseye</div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
