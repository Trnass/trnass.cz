import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Měsíce jsou indexované od 0, proto přidáváme 1
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  }
  const today = getCurrentDate();
  return (
    <>
      <div
        data-elementor-type="footer"
        data-elementor-id="941"
        className="elementor elementor-941 elementor-location-footer"
        data-elementor-post-type="elementor_library"
      >
        <section
          className="wavo-column-gap-no elementor-section elementor-top-section elementor-element elementor-element-5b3d2639 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="5b3d2639"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3651be67"
              data-id="3651be67"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-bd324df elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons"
                  data-id="bd324df"
                  data-element_type="widget"
                  data-widget_type="social-icons.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-social-icons-wrapper elementor-grid">
                      <span className="elementor-grid-item">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-bounce-in elementor-repeater-item-fc9a748"
                          href="http://instagram.com/accel._bar._"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">
                            Instagram
                          </span>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="fa-icon"
                          />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-github elementor-animation-bounce-in elementor-repeater-item-3d3a122"
                          href="https://github.com/trnass"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Github</span>
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="fa-icon"
                          />{" "}
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-bounce-in elementor-repeater-item-dd0f04b"
                          href="https://twitter.com/trnass"
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Twitter</span>
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="fa-icon"
                          />{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-b21a0a6 elementor-widget elementor-widget-spacer"
                  data-id="b21a0a6"
                  data-element_type="widget"
                  data-widget_type="spacer.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-48c15df0 wavo-transform transform-type-translate elementor-widget elementor-widget-heading"
                  data-id="48c15df0"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      <a href="https://trnass.cz/">
                        Copyright 23.10.2023 - {today} © All rights Reserved.
                        Trnass
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
