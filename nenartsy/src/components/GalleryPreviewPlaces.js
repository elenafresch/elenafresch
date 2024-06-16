import { memo } from "react";
import PropTypes from "prop-types";
import "./GalleryPreviewPlaces.css";

const GalleryPreviewPlaces = memo(({ className = "" }) => {
  return (
    <img
      className={`gallery-nested-images1 ${className}`}
      loading="lazy"
      alt=""
      src="/rectangle-218@2x.png"
    />
  );
});

GalleryPreviewPlaces.propTypes = {
  className: PropTypes.string,
};

export default GalleryPreviewPlaces;
