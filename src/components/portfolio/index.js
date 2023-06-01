import React from "react";

const PortfolioSection = () => {
  const applications = [
    {
      title: "Application 1",
      deployedLink: "https://example.com/application1",
      githubLink: "https://github.com/developer/application1",
    },
    // Add more application objects as needed
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
