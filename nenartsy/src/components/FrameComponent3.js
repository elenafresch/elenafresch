import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <footer className={`vector-container ${className}`}>
      <img
        className="frame-child61"
        loading="lazy"
        alt=""
        src="/rectangle-202.svg"
      />
      <h1 className="more7">MORE</h1>
      <div className="label140">2024 © Elena Fresch</div>
      <div className="frame-wrapper2">
        <div className="label-parent30">
          <div className="label141">PRINTS</div>
          <div className="label142">GALLERY</div>
          <div className="label143">CONTACT</div>
          <a className="label144">PRIVACY</a>
          <div className="label145">SHIPPING</div>
          <div className="label145">REFUNDS</div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
