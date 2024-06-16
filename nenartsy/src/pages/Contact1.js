import InputField from "../components/InputField";
import "./Contact1.css";

const Contact1 = () => {
  return (
    <div className="contact">
      <div className="contact-child" />
      <div className="contact-item" />
      <div className="contact-item" />
      <div className="contact-item" />
      <div className="prints1">PRINTS</div>
      <main className="main-content">
        <section className="page-layout">
          <div className="page-layout-child" />
          <div className="nenartsy-parent">
            <a className="nenartsy1">NENARTSY</a>
            <div className="elena-fresch-wrapper">
              <a className="elena-fresch1">Elena Fresch</a>
            </div>
          </div>
          <nav className="label-parent">
            <a className="label4">HOME</a>
            <a className="label5">ABOUT</a>
            <a className="label6">PRINTS</a>
            <a className="label7">GALLERY</a>
            <div className="label-row">
              <a className="label8">CONTACT</a>
              <div className="label-row-child" />
            </div>
          </nav>
        </section>
        <section className="form-container">
          <div className="form-container-child" />
          <div className="form-content">
            <div className="contact-wrapper">
              <h1 className="contact1">CONTACT</h1>
            </div>
            <h3 className="label9">
              Aliquam aliquet lacus a nisl sodales, nec pretium tortor mattis.
              Cras augue nisi, tempor vel tincidunt vel, interdum in tellus. Sed
              vel facilisis nibh, a euismod nunc. Ut gravida vel quam eu
              ullamcorper. Cras quam nulla, tincidunt ut leo et, aliquet
              sollicitudin mi. Vestibulum tempor euismod ligula, eget gravida
              lacus cursus sed.
            </h3>
          </div>
          <div className="input-fields">
            <div className="input-field-wrapper-parent">
              <div className="input-field-wrapper">
                <InputField label="Name*" contentPlaceholder="Your name" />
                <InputField label="Email*" contentPlaceholder="you@email.com" />
                <div className="textarea-input-field">
                  <div className="textarea-input-field-base">
                    <div className="textarea-input-field-base">
                      <div className="label10">Message*</div>
                      <textarea
                        className="input"
                        placeholder="Enter your message..."
                        rows={6}
                        cols={24}
                      />
                    </div>
                    <div className="hint-text">
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-button-container">
                <button className="submit-button-wrapper">
                  <div className="submit">Submit</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="vector-parent">
        <img className="frame-child" alt="" src="/rectangle-202.svg" />
        <div className="more-info-content">
          <div className="more-wrapper">
            <h1 className="more">MORE</h1>
          </div>
          <div className="label-group">
            <div className="label11">PRINTS</div>
            <div className="label12">GALLERY</div>
            <div className="label13">CONTACT</div>
            <a className="label14">PRIVACY</a>
            <div className="label15">SHIPPING</div>
            <div className="label15">REFUNDS</div>
          </div>
        </div>
        <div className="label-wrapper">
          <div className="label17">2024 © Elena Fresch</div>
        </div>
      </footer>
    </div>
  );
};

export default Contact1;
