import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

const SinglePageCard = (props) => {
  const { _id, title, url, description, views, date, creator } = props;
  return (
    <div className="video-container">
      <iframe
        width="900"
        height="500"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="video-footer">
        <div className="footer-title">
          <h2>{title}</h2>
          <h5>{creator}</h5>
        </div>
        <div className="footer-btn-list">
          <div className="like-btn">
            <AiIcons.AiOutlineLike /> <span>Like</span>
          </div>
          <div className="watch-later-btn">
            <MdIcons.MdOutlineWatchLater /> <span>Watch Later</span>
          </div>
          <div className="copy-link-btn">
            <AiIcons.AiOutlineCopy /> <span>Copy</span>
          </div>
        </div>
        <div className="footer-description">
          <h4>Description</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export { SinglePageCard };
