import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var internship1 = data.internship1.map(function (internship1) {
      return (
        <div key={internship1.company}>
          <h3>{internship1.company}</h3>
          <p className="info">
            {internship1.title}
            <span>&bull;</span> <em className="date">{internship1.years}</em>
          </p>
          <p>{internship1.description}</p>
        </div>
      );
    });
    var training = data.training.map(function (training) {
      return (
        <div key={training.company}>
          <h3>{training.company}</h3>
          <p className="info">
            {training.title}
            <span>&bull;</span> <em className="date">{training.years}</em>
          </p>
          <p>{training.description}</p>
        </div>
      );
    });
    var internship2 = data.internship2.map(function (internship2) {
      return (
        <div key={internship2.company}>
          <h3>{internship2.company}</h3>
          <p className="info">
            {internship2.title}
            <span>&bull;</span> <em className="date">{internship2.years}</em>
          </p>
          <p>{internship2.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row internship1">
        <div className="three columns header-col">
          <h1>
            <span>internship</span>
          </h1>
        </div>

        <div className="nine columns main-col">{internship1}</div>
      </div>

      <div className="row training">
        <div className="three columns header-col">
          <h1>
            <span>training</span>
          </h1>
        </div>

        <div className="nine columns main-col">{training}</div>
      </div>

      <div className="row internship2">
        <div className="three columns header-col">
          <h1>
            <span>internship</span>
          </h1>
        </div>

        <div className="nine columns main-col">{internship2}</div>
      </div>
      
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
