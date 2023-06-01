import React from "react";

const ResumeSection = () => {
  const proficiencies = ["JavaScript", "React", "Node.js", "HTML", "CSS"];

  return (
    <section>
      <h1>Resume Section</h1>
      <p>
        <a href="/path/to/resume.pdf">Download Resume</a>
      </p>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
};

export default ResumeSection;
