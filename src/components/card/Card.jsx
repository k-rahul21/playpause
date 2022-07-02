import * as BsIcons from "react-icons/bs";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          className="card-img"
          src="https://i.ytimg.com/vi/YT7tQzmGRLA/0.jpg"
        />
        <div className="card-info">
          <div className="card-title">
            <h3 className="card-title-header">10 rules that changed my life</h3>
            <div className="like-btn">
              <BsIcons.BsFillSuitHeartFill />{" "}
            </div>
          </div>
          <div className="card-description">
            <h4 className="creator-name">Matt</h4>
            <span className="verified-icon">
              <BsIcons.BsFillCheckCircleFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
