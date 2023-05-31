import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import react from "../assets/img/react.svg";

function Timeline() {
  return (
    <section>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{ borderRight: "7px solid transparent" }}
          icon={<img src={react} />}
          iconStyle={{ background: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{ borderRight: "7px solid transparent" }}
          icon={<img src={react} />}
          iconStyle={{ background: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{ borderRight: "7px solid transparent" }}
          icon={<img src={react} />}
          iconStyle={{ background: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
