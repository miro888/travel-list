import { NavLink } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Animation from "../components/scss/Animation.json";
export default function Logo() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
        <div className="logo container-fluid">
          <div className="navbar-brand col-4">
            <h2 className="text-light  ">Travel Planer</h2>
            <Player
              autoplay
              loop={true}
              src={Animation}
              style={{
                width: "100px",
                height: "100px",
                scale: "1.5",
                borderRadius: "50px",
                backgroundColor: "transparent",
              }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item col-4">
                <NavLink
                  to="trip_list"
                  className="nav-link "
                  aria-current="page"
                >
                  Trip List
                </NavLink>
              </li>
              <li className="nav-item col-4">
                <NavLink to="/forcast" className="nav-link">
                  Forecast
                </NavLink>
              </li>
              <li className="nav-item col-4">
                <NavLink to="/routes" className="nav-link">
                  Routes
                </NavLink>
              </li>
              <li className="nav-item col-4">
                <NavLink to="/campingzone" className="nav-link">
                  Camping Zone
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
