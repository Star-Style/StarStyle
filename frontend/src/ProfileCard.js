import { Link } from "react-router-dom";
import "./ProfileCard.css";

export default function ProfileCard({ name, image, linkState, description }) {
  return (
    <Link to="/browse" state={linkState} className="profile-card">
      <div className="profile-card-image">
        <img src={image} alt={name} />
      </div>

      <div className="profile-card-content">
        <div className="profile-card-header">
          <h3>{name}</h3>
        </div>

        <button className="view-button">View</button>
      </div>
    </Link>
  );
}
