import React from "react";

const PortfolioSection = () => {
  const applications = [
    {
      title: "NoteTaker",
      deployedLink: "https://peaceful-brushlands-90540.herokuapp.com/",
      githubLink: "https://github.com/alissonpceva/notetaker",
    },
    {
      title: "Weather API",
      deployedLink: "https://alissonpceva.github.io/Weather-API/",
      githubLink: "https://github.com/alissonpceva/Weather-API",
    },
    {
      title: "SOS Recipes",
      deployedLink: "https://sosrecipes.herokuapp.com/",
      githubLink: "https://github.com/GeorgeDoyle1175/Project2Links",
    },
    {
      title: "PAWFinder",
      deployedLink: "https://pawfinder.herokuapp.com",
      githubLink: "https://github.com/ddelgado25/Pawfinder-ProjectLinks",
    },
  ];

  return (
    <section>
      <h1>Personal Portfolio</h1>
      {applications.map((app, index) => (
        <div key={index}>
          <h2>{app.title}</h2>
          <p>
            <a href={app.deployedLink}>Deployed Application</a>
          </p>
          <p>
            <a href={app.githubLink}>GitHub Repository</a>
          </p>
        </div>
      ))}
    </section>
  );
};

export default PortfolioSection;
