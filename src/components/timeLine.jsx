import { timeLine } from "./timeLineObj";
import { TimelineItem } from "./timeLineItem";

export default function Timeline() {
  return (
    timeLine.length > 0 && (
      <div className="timeline">
        <h1 className="bio-title"><b>Timeline</b></h1>
        <div className="timeline-container">
          {timeLine.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </div>
    )
  );
}
