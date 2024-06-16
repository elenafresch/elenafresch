import PropTypes from "prop-types";
import "./InputField.css";

const InputField = ({ className = "", label, contentPlaceholder }) => {
  return (
    <div className={`input-field ${className}`}>
      <div className="input-field-base">
        <div className="input-field-base">
          <div className="label134">{label}</div>
          <div className="input1">
            <input
              className="content1"
              placeholder={contentPlaceholder}
              type="text"
            />
            <img className="help-icon" alt="" src="/help-icon.svg" />
          </div>
        </div>
        <div className="hint-text1">This is a hint text to help user.</div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  contentPlaceholder: PropTypes.string,
};

export default InputField;
