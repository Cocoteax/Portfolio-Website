import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Timeline(props) {
  return (
    <section className="timeline">
      <VerticalTimeline>
        {props.timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                boxShadow: "none",
                // border: "2px solid #ffa6fc",
                // borderRadius: "20px",
                padding: "0",
                marginBottom: "20px",
              }}
              contentArrowStyle={{ borderRight: "0px solid transparent" }}
              icon={
                <img
                  src={element.imgUrl}
                  className={`icon-img ${element.iconChange? "icon-img-change" : ""}`}
                  onClick={() => window.open(`${element.link}`, "_blank")}
                  alt="icon"
                />
              }
              iconStyle={{ background: "black" }}
            >
              <h3 className="timeline-title">{element.title}</h3>
              <h4 className="timeline-source">{element.source}</h4>
              {element.description.length>0 && <ul className="timeline-desc-list">
                {element.description.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>}
              {element.techStacks !== undefined && (
                <div className="techStack-container">
                  {element.techStacks.map((techStack, index) => {
                    return (
                      <OverlayTrigger
                        key={index}
                        placement="bottom"
                        overlay={<Tooltip>{techStack[1]}</Tooltip>}
                      >
                        <img
                          src={techStack[0]}
                          className="techStack-icon"
                          alt="skill"
                        ></img>
                      </OverlayTrigger>
                    );
                  })}
                </div>
              )}
              <p className="timeline-date">{element.date}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
