import { Link } from "react-router-dom";

function Topbar({ user, getUsername }) {
  let topbarContent;

  if (user) {
    topbarContent = (
      <Link to="/profile" className="profile-link">
        Hello, {getUsername()}!
      </Link>
    );
  } else {
    topbarContent = (
      <div className="login-signup-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    );
  }

  return (
    <header className="topbar">
      <h1>StarStyle</h1>
      <div className="topbar-right">{topbarContent}</div>
    </header>
  );
}

export default Topbar;
