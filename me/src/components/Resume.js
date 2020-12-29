import React from 'react';
import '../App.css';
import './Resume.css';
import Education from "./Education";
import Experience from "./Experience";

import uci_logo from '../images/uci_logo.png';
import propheto_logo from '../images/propheto_logo.png';
import dia_logo from '../images/dia_logo.png';
import siemens_logo from '../images/siemens_logo.png';

const schoolInfo = [
    {
        name: "University of California, Irvine",
        major: "Computer Science",
        degreeType: "B.S.",
        graduation: "Spring 2021",
        logo: uci_logo
    }
];

const experienceInfo = [
    {
        jobTitle: "Software Developer Intern",
        companyName: "Propheto",
        location: "Remote",
        years: "Fall 2020",
        skills: ["HTML", "CSS", "Vue.js", "Firebase", "Git", "Agile"],
        tasks: [
            "Enhanced website on team of 4 using Vue.js, Quasar, Firebase to advance data science talent platform for startup",
            "Spearheaded features such as talent search, skill ranking, profile bookmarks, password reset, profile anonymization",
            "Collaborated with UI designer to draft and incorporate clean, intuitive, responsive website layout to improve usability",
            "Successfully adapted to changing requirements by iteratively producing viable products following Agile principles"
        ],
        logo: propheto_logo
    },
    {
        jobTitle: "Data Intern",
        companyName: "Defense Intelligence Agency",
        location: "Washington, DC",
        years: "Summer 2019",
        skills: ["Python", "AWS", "Jenkins", "Git"],
        tasks: [
            "Configured 2-node Amazon Web Services (AWS) ElasticMapReduce (EMR) cluster using Jenkins script to accelerate processing of 2 terabytes of data by 4x for 16 US defense intelligence organizations",
            "Briefed Chief Information Officer and department’s senior leaders about potential utilization of clusters to optimize data handling efficiency for department’s 10 other big data projects and demoed cluster functionality",
            "Expedited team’s onboarding process for 4 new hires by documenting development environment set-up, yielding a 20% reduction in mentor workloads and 50% reduction in new hire onboarding time"
        ],
        logo: dia_logo
    },
    {
        jobTitle: "Software Engineering Intern",
        companyName: "Siemens PLM Software",
        location: "Cypress, CA",
        years: "Fall 2017—Spring 2019",
        skills: ["Java", "HTML", "CSS", "Vue.js", "Agile"],
        tasks: [
            "Developed software bug tracking application on team of 10 using Java, HTML, CSS, Vue.js following Agile practices to maximize product lifecycle management capability of 1000+ manufacturing companies across 4 continents",
            "Troubleshooted 100+ technical issues on support team of 6 spanning 3 time zones to assist millions of customers",
            "Trained 6 interns over 3 months on customer support duties to reduce individual support workloads by 50%"    
        ],
        logo: siemens_logo
    }
];

function Resume() {
  return (
    <div className="content">
        <h3 id="swe-tagline">Aspiring Software Engineer</h3>
        <h5 id="traits-tagline">Passionate | Creative | Curious</h5>
        <h2 className="resume-section-title">EDUCATION</h2>
        {
            schoolInfo.map((el, idx) => <Education key={idx} details={el} />)
        }
        <br></br>
        <h2 className="resume-section-title no-margin-b">EXPERIENCE</h2>
        {
            experienceInfo.map((el, idx) => <Experience key={idx} details={el} />)
        }
    </div>
  );
}

export default Resume;
