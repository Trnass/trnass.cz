function calculateAge(birthDate) {
  const birthYear = new Date(birthDate).getFullYear();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let age = currentYear - birthYear;

  const birthMonth = new Date(birthDate).getMonth();
  const currentMonth = currentDate.getMonth();

  if (currentMonth < birthMonth) {
    age--;
  } else if (currentMonth === birthMonth) {
    const birthDay = new Date(birthDate).getDate();
    const currentDay = currentDate.getDate();
    if (currentDay < birthDay) {
      age--;
    }
  }

  return age;
}

function Aboutme() {
  const birthDate = new Date("2003-06-17");
  const age = calculateAge(birthDate);
  return (
    <>
      <div
        className="elementor-element elementor-element-a07ede3 e-flex e-con-boxed e-con e-parent"
        data-id="a07ede3"
        data-element_type="container"
        data-settings='{"background_background":"classic","content_width":"boxed"}'
        data-core-v316-plus="true"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-a719353 e-con-full e-flex e-con e-child"
            data-id="a719353"
            data-element_type="container"
            data-settings='{"content_width":"full"}'
          ></div>
          <div
            className="elementor-element elementor-element-2ad7902 e-con-full e-flex e-con e-child"
            data-id="2ad7902"
            data-element_type="container"
            data-settings='{"content_width":"full"}'
          >
            <div
              className="elementor-element elementor-element-b3fba27 elementor-widget elementor-widget-wavo-button"
              data-id="b3fba27"
              data-element_type="widget"
              data-widget_type="wavo-button.default"
            >
              <div className="elementor-widget-container">
                <div className="wavo-button has-icon">
                  <a
                    className="wavo-btn grey btn-icon-left"
                    href="https://github.com/Trnass/"
                    target="_blank"
                  >
                    <span className="button_text">NĚCO MÁLO</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-0fa6552 wavo-transform transform-type-translate elementor-widget elementor-widget-heading"
              data-id="0fa6552"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  O MNĚ
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-fbaa168 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
              data-id="fbaa168"
              data-element_type="widget"
              data-widget_type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"> </span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-0888c9f elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
              data-id="0888c9f"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p style={{ "text-align": "center" }}>
                  Je mi {age} let, programování se věnuji od 15 let, stalo se to
                  mým koníčkem, životním stylem a formou projevu, považuji ho za
                  jisté odvětví moderního umění, nicméně to je debata na
                  dlouho... Mám rád pivo a jsem tak trochu snílek, nechci každý
                  den ráno chodit do práce jen kvůli tomu, abych tam zítra šel
                  znovu, chci aby mě bavila, chci abych se do ní těšil, abych si
                  díky ní mohl koupit vysněné auto a abych nemusel počítat
                  peníze, no, programování mi to může dát, proto se snažím
                  zlepšovat ve všech odvětvích, ať už je to webdesign, backend v
                  Node.js, Python (Flask) a nebo v PHP, mikroelektronika,
                  automatizace či cokoliv co mi zrovna přijde užitečné a
                  zábavné.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
