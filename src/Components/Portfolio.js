import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var profiles = data.profiles.map(function (profiles) {
      var projectImage = "images/portfolio/" + profiles.image;
      return (
        <div key={profiles.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={profiles.url} title={profiles.title}>
              <img alt={profiles.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{profiles.title}</h5>
                  <p>{profiles.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Profiles.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {profiles}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
