import NotifyMeButton from "./NotifyMeButton";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="content-child" />
      <div className="prints-coming-soon-wrapper">
        <div className="prints-coming-soon">
          <h1 className="prints8">PRINTS</h1>
          <div className="prints-description">
            <i className="label123">coming soon</i>
          </div>
        </div>
      </div>
      <div className="rectangle-parent16">
        <img
          className="frame-child51"
          loading="lazy"
          alt=""
          src="/rectangle-207@2x.png"
        />
        <img
          className="frame-child51"
          loading="lazy"
          alt=""
          src="/rectangle-208@2x.png"
        />
        <img
          className="frame-child51"
          loading="lazy"
          alt=""
          src="/rectangle-209@2x.png"
        />
      </div>
      <div className="content-inner">
        <div className="frame-parent22">
          <div className="notify-me-button-wrapper">
            <NotifyMeButton />
          </div>
          <div className="label123">
            <span>{`In the meantime, explore my `}</span>
            <i>gallery</i>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
