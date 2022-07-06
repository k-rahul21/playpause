import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

const SinglePageCard = (props) => {
  const { _id, title, url, description, creator } = props;
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
          <h2 className="video-title">{title}</h2>
          <h5 className="video-creator-name">{creator} </h5>
        </div>
        <div className="footer-details">
          <div className="footer-btn-list">
            <div className="icon-container like-btn">
              <div className="like-icon">
                <AiIcons.AiOutlineLike />
              </div>
              <span className="text">Like</span>
            </div>
            <div className="icon-container  watch-later-btn">
              <div className="watch-later-icon">
                <MdIcons.MdOutlineWatchLater />
              </div>
              <span className="text">Watch Later</span>
            </div>
            <div className="icon-container  copy-link-btn">
              <div className=".copy-icon">
                <AiIcons.AiOutlineCopy />
              </div>
              <span className="text">Copy</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-description">
          <h3 className="sub-heading">Description:</h3>
          <p>{description}</p>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export { SinglePageCard };
