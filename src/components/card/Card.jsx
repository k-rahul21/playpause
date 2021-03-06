import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { _id, cover, title, creator, date, views } = props;

  return (
    <div className="card">
      <Link className="single-page-url" to={`/video/${_id}`}>
        <img className="card-img" src={cover} />
        <div className="card-info">
          <div className="card-title">
            <h3 className="card-title-header">{title.slice(0, 22) + "...."}</h3>
            <div className="card-cta">
              <div className="like-btn">
                <BsIcons.BsFillSuitHeartFill />
              </div>
              <div className="watch-later-btn">
                <RiIcons.RiPlayListAddFill />
              </div>
            </div>
          </div>
          <div className="card-description">
            <div className="card-head">
              <h4 className="creator-name">{creator}</h4>
              <span className="verified-icon">
                <BsIcons.BsFillCheckCircleFill />
              </span>
            </div>
            <div className="views-date">
              <p className="views">{views}</p>
              <p className="date">{date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { Card };
