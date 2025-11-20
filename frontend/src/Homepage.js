import { Link } from "react-router-dom";
import "./Homepage.css";
import ProfileCard from "./ProfileCard";

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
          <ProfileCard
            name="Sabrina Carpenter"
            image="https://i.pinimg.com/736x/81/aa/c1/81aac1b0415fe1767d60057031167efe.jpg"
            linkState={{ preselectedCelebrity: "Sabrina Carpenter" }}
          />
          <ProfileCard
            name="Jenna Ortega"
            image="https://i.pinimg.com/736x/01/f7/b5/01f7b53ed752f41368049e7529baf24d.jpg"
            linkState={{ preselectedCelebrity: "Jenna Ortega" }}
          />
          <ProfileCard
            name="Alexandra Saint Mleux"
            image="https://i.imgur.com/rUDuwRP.png"
            linkState={{ preselectedCelebrity: "Alexandra Saint Mleux" }}
          />
          <ProfileCard
            name="Katseye"
            image="https://i.pinimg.com/736x/04/cc/cf/04cccfc701402ec2d056b94d1a705fb9.jpg"
            linkState={{ preselectedCelebrity: "Katseye" }}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
