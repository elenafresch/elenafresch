import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import "./GalleryPlaces.css";

const GalleryPlaces = () => {
  return (
    <div className="gallery-places">
      <main className="gallery-places-inner">
        <FrameComponent4 labelTextDecoration="unset" />
      </main>
      <div className="gallery-places-child" />
      <div className="gallery-places-item" />
      <div className="gallery-places-child1" />
      <div className="shop-now-frame">
        <div className="shop-now2">Shop Now</div>
      </div>
      <FrameComponent3 />
      <div className="divider-container">
        <div className="divider2" />
      </div>
      <div className="gallery-container">
        <div className="gallery-container-child" />
        <div className="gallery-container-inner">
          <div className="gallery-parent">
            <h1 className="gallery1">GALLERY</h1>
            <div className="label-container">
              <div className="label19">Places</div>
            </div>
          </div>
        </div>
        <div className="frame-group">
          <div className="rectangle-parent2">
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
          </div>
          <div className="rectangle-parent3">
            <img
              className="frame-child12"
              loading="lazy"
              alt=""
              src="/rectangle-210@2x.png"
            />
            <img
              className="frame-child12"
              loading="lazy"
              alt=""
              src="/rectangle-212@2x.png"
            />
          </div>
          <div className="rectangle-parent2">
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/rectangle-2071@2x.png"
            />
          </div>
          <div className="rectangle-parent3">
            <img
              className="frame-child12"
              loading="lazy"
              alt=""
              src="/rectangle-210@2x.png"
            />
            <img
              className="frame-child12"
              loading="lazy"
              alt=""
              src="/rectangle-212@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPlaces;
