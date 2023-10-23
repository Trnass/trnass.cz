function Projects() {
  const imageStyle = {
    backgroundImage: "url('https://trnass.cz/img/grd.png')",
  };

  const textStyle = {
    textAlign: "justify",
  };

  return (
    <>
      <section
        className="wavo-column-gap-no elementor-section elementor-top-section elementor-element elementor-element-65c4901f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="65c4901f"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5be30576"
            data-id="5be30576"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-4b07fa50 elementor-skin-slideshow elementor-arrows-yes elementor-widget elementor-widget-media-carousel"
                data-id="4b07fa50"
                data-element_type="widget"
                data-settings='{"space_between":{"unit":"px","size":5,"sizes":[]},"skin":"slideshow","effect":"fade","show_arrows":"yes","speed":500,"autoplay":"yes","autoplay_speed":5000,"loop":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","space_between_tablet":{"unit":"px","size":10,"sizes":[]},"space_between_mobile":{"unit":"px","size":10,"sizes":[]}}'
                data-widget_type="media-carousel.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-swiper">
                    <div className="elementor-main-swiper swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div
                            className="elementor-carousel-image"
                            role="img"
                            aria-label="IMG_9907"
                            style={imageStyle}
                          ></div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="elementor-carousel-image"
                            role="img"
                            aria-label="IMG_9907"
                            style={imageStyle}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2752f74b"
            data-id="2752f74b"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-40a8d40f wavo-transform transform-type-translate elementor-widget elementor-widget-heading"
                data-id="40a8d40f"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h5 className="elementor-heading-title elementor-size-default">
                    ZAJÍMAJÍ TĚ MÉ
                  </h5>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-1bc9d3a elementor-headline--style-rotate elementor-widget elementor-widget-animated-headline"
                data-id="1bc9d3a"
                data-element_type="widget"
                data-settings='{"headline_style":"rotate","animation_type":"swirl","rotating_text":"MY PROJECTs\u200b\n\u79c1\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8","rotate_iteration_delay":5000,"loop":"yes"}'
                data-widget_type="animated-headline.default"
              >
                <div className="elementor-widget-container">
                  <h4 className="elementor-headline elementor-headline-animation-type-swirl elementor-headline-letters">
                    <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                      <span className="elementor-headline-dynamic-text elementor-headline-text-active">
                        PROJEKTY?
                      </span>
                      <span className="elementor-headline-dynamic-text">
                        プロジェクト
                      </span>
                    </span>
                  </h4>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-4e839984 elementor-widget elementor-widget-text-editor"
                data-id="4e839984"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p style={textStyle}>
                    Většina je nekomerční, nicméně jsem si s tím pohrál docela
                    dost, pokud chceš vědět více, klikni na obrázek vlevo nebo
                    se přesuň do menu a klikni na "blog", tam o mých projektech
                    sepisuji články. Funfact, appka nalevo vyvolala tolik hádek,
                    že několik lidí dokonce dostalo permu na nejmenovaném RP
                    serveru!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
