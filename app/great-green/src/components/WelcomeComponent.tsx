import { Link } from "react-router-dom";

function WelcomeComponent() {
  return (
    <section className="hero-banner-2" style={{ backgroundImage: "url(../leaves.png)" }}>
      {/* shape  */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="banner-thumb">
              <img src="assets/images/home2/layer.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="hero-content">
              <div className="sub-heading">Welcome Fred,</div>
              <h2>Are you ready to bring nature to the Sahel?</h2>
              <p>
                Loo you mug lurgy baking cakes boot cracking goal morish up the duff haggle hotpot
                faff about.
              </p>
              <ul>
                <li>
                  <i className="icon_check_alt2"></i>Quality Teachers
                </li>
                <li>
                  <i className="icon_check_alt2"></i>Get Certificate
                </li>
                <li>
                  <i className="icon_check_alt2"></i>Best Curriculam
                </li>
              </ul>
              <Link to="/course-1" className="bisylms-btn-2">
                Start Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeComponent;
