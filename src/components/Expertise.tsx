import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faRProject,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
  "SQL",
  "Data Analysis",
  "Data Visualization",
  "A/B Testing",
  "Tableau",
  "Power BI",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Jupyter",
];

const labelsSecond = [
  "Statistics",
  "Python",
  "SQL",
  "Machine Learning",
  "Model Evaluation",
  "Scikit-Learn",
  "Supervised Learning",
  "Unsupervised Learning",
  "MLOps"
];

const labelsThird = [
  "Azure",
  "AWS",
  "SQL",
  "Docker",
  "Kubernetes",
  "Git",
  "linux",
  "ETL",
  "pySpark",
  "Databricks",
  "Data Pipelines",
  "Cloud Solutions",
  "Big Data"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faChartSimple} size="3x" />
            <h3>Data Analytics & Statistics</h3>
            <p>
              With a strong foundation in Data Analytics and Statistics, I excel
              at transforming complex data into actionable insights. My
              expertise in statistical analysis and data visualization enables
              me to help organizations make informed decisions. I’ve
              successfully applied these skills in real-world settings, where I
              enhanced workflow efficiency through data-driven solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science & Machine Learning</h3>
            <p>
              Through my academic training and hands-on projects in data
              science, I am proficient in building machine learning models, from
              data preprocessing to model deployment (MLOps). I have a deep
              understanding of machine learning algorithms and statistical
              techniques that enable me to solve complex problems.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Data Engineering & Cloud Solutions</h3>
            <p>
              I specialize in building scalable data pipelines, ensuring smooth
              ETL processes, and leveraging cloud solutions like Azure and AWS
              for effective data management and reporting. My experience in data
              engineering allows me to optimize data workflows, making sure that
              organizations can access real-time insights efficiently. I am also
              proficient in containerization tools like Docker, helping to
              streamline deployment in cloud environments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
