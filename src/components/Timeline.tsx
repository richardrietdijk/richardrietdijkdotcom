import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import sonicLogo from "./../assets/images/sonic.svg";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2025 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Principal Data Analyst / BI</h3>
            <h4 className="vertical-timeline-element-subtitle">RDC</h4>
            <p>
                Lead the development of modernising Information Services, Implement KPI and financial dashboards, Build and optimize ETL pipelines
              <br />
              <br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faApple} />}
          >
            <h3 className="vertical-timeline-element-title">*Undisclosed*</h3>
            <h4 className="vertical-timeline-element-subtitle">Apple Inc.</h4>
            <p>
              Voice Data Processing, Python Automation, Workflow Optimization,
              Cross-Functional Collaboration
              <br />
              <br />
              <blockquote>"We are lucky to have him on our team."</blockquote>
              <cite>Greg Townsend, Director & Team Lead @ Apple Inc.</cite>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Pursuing, Expected 2026"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Science (M.S.), Data Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Georgia Institute of Technology - Atlanta, Georgia
            </h4>
            <p>
              Relevant Coursework: Analytics, Artificial Intelligence, Deep
              Learning, Machine Learning, Natural Language Processing
            </p>
          </VerticalTimelineElement>
                    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2024 - 2025"
          iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Global Master of Business Administration (MBA)</h3>
          <h4 className="vertical-timeline-element-subtitle">Universidad Isabel I - Madrid, Spain</h4>
          <p>
            Global MBA with dual specializations in Big Data & Business Intelligence and Project Management. 

            <br />
            <br />
          </p>
        </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science (B.S.), Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA</h4>
            <p>Summa Cum Laude, President’s List</p>
            <p>
              Relevant Coursework: Python, SQL, Calculus, Descriptive
              Statistics, Statistical Inference, Data Structures & Algorithms,
              Software Engineering
              <blockquote>
                "Richard's consistent pursuit of knowledge and his exceptional
                ability to grasp and synthesize complex material demonstrate a
                level of academic maturity that is truly commendable."
              </blockquote>
              <cite>Ugochukwu Chinonso Okolie, PhD</cite>
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Associate of Science (A.S.), Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA</h4>
            <p>High Honors | GPA: 4.00, President’s List</p>
          </VerticalTimelineElement> */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer, Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SALT</h4>
            <p>
              Frontend Development, Code Reviews, User Database Management, Team
              Leadership, Content Creation
              <blockquote>
                "It is rare to find such a broad set of talents in one person."
              </blockquote>
              <cite>Tom Moran, Team Lead @ Lumen</cite>
              <br />
              <blockquote>
                "Richard is a skilled programmer and a valuable asset in any
                software development team."
              </blockquote>
              <cite>Marcus Hammarberg, Team Lead @ SALT</cite>
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Development Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              School of Applied Technology
            </h4>
            <p>
              Test Driven Full Stack Development
              <blockquote>
                "Richard is a skilled programmer and a valuable asset in any
                software development team."
              </blockquote>
              <cite>Marcus Hammarberg, Team Lead @ SALT</cite>
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={
              <img
                src={sonicLogo}
                alt="Sonic Icon"
                style={{ width: "100%", height: "90%", paddingTop: "10%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst, Localization QA
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SEGA Europe</h4>
            <p>
              Data Cleaning, Localization QA, SQL, Stakeholder Collaboration,
              User Experience Improvement
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
