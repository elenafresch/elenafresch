import { memo } from "react";
import PropTypes from "prop-types";
import "./GalleryPreviewFaces.css";

const GalleryPreviewFaces = memo(({ className = "" }) => {
  return (
    <img
      className={`gallery-nested-images ${className}`}
      loading="lazy"
      alt=""
      src="/rectangle-217@2x.png"
    />
  );
});

GalleryPreviewFaces.propTypes = {
  className: PropTypes.string,
};

export default GalleryPreviewFaces;
