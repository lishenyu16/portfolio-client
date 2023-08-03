import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

export default () => {

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="09/2020 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkHistoryIcon />}
      >
        <h3 className="vertical-timeline-element-title">Sr Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Cast & Crew, Burbank, CA</h4>
        <p>
          Develop/maintain customer facing payroll application website for the frontend
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="03/2018 - 06/2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkHistoryIcon />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">BravoCare, Los Angeles, CA</h4>
        <p>
          Develop health care website as a full stack web developer with Node.js and React, PostgreSQL
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="12/2016 - 03/2018"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkHistoryIcon />}
      >
        <h3 className="vertical-timeline-element-title">Junior Web Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">CybEye, Torrance, CA</h4>
        <p>
          Develop intro websites for branding mobile apps and support senior engineers
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013 - 2016"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Master of Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">CalState University, Los Angeles</h4>
        <p>
          Data Structure, Java, System, Web Development
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2008 - 2012"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Electrical Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Jilin University</h4>
        <p>
          Circuit analysis, Amplifiers, Signals and systems
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  )
}