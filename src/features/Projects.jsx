import { useEffect, useState } from "react";
import data from "../assets/my-data.json";

function Projects() {
  const [myData, setMyData] = useState(data.projects);
  useEffect(()=>{},[])

  // //////////
  return (
    <div id="projects-container">
      {myData.map((data, i) => (
        <div key={data.id} className="card">
          <div className={i % 2 === 0 ? "inner-card" : "inner-card odd"}>
            <div className="preview-container">
              {data.images.length > 0 ? (
                <img
                  src={`assets/images/project-previews/${data.images[0]}`}
                  alt="thumbnails"
                />
              ) : (
                <img src={data.images[0]} alt="preview" />
              )}
            </div>
            <div className="info">
              <p>{data.description}</p>
              <ul className="technologies">
                {data.languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
              <div className="url">
                <a href={data.Code}>Code</a>
                <a href={data["Live URL"]}>Live URL</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
