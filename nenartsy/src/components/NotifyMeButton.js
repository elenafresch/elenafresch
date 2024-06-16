import { memo } from "react";
import PropTypes from "prop-types";
import "./NotifyMeButton.css";

const NotifyMeButton = memo(({ className = "" }) => {
  return (
    <button className={`notify-me-button ${className}`}>
      <b className="notify-me">Notify Me</b>
    </button>
  );
});

NotifyMeButton.propTypes = {
  className: PropTypes.string,
};

export default NotifyMeButton;
