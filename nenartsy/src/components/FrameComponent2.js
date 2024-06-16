import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="rectangle-parent17">
        <div className="frame-child55" />
        <div className="frame-child56" />
        <img
          className="hero-section-icon"
          loading="lazy"
          alt=""
          src="/herosection@2x.png"
        />
      </div>
      <div className="hero-description">
        <a className="label132">HOME</a>
        <div className="hero-description-child" />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
