import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Eswar V",
  role: "Electrical & Electronics Engineer | Data Science Enthusiast",
  summary: "My objective is to build my career in a well-reputed company where my potential can be explored and effectively utilized for the success of the organization as well as my personal growth. As a fresher, I am a self-motivated, target-oriented individual with a positive attitude, eager to learn and contribute. I am a good team player, a fast learner, and easily adaptable to new environments, capable of working both independently and as part of a team.",
  contact: {
    phone: "+91 9488304457",
    email: "eswarvmb25@gmail.com",
    location: "Madurai, Tamilnadu",
    linkedin: "LinkedIn", // Placeholder as URL wasn't explicit in text, usually would be a link
    github: "Github"   // Placeholder
  },
  skills: {
    languages: ["Python", "SQL"],
    tools: ["Power BI", "Machine Learning", "Arduino", "IoT", "Embedded Systems"],
    softSkills: ["Communication Skills", "Leadership Quality", "Team Player", "Fast Learner"],
    spokenLanguages: ["English", "Tamil"]
  },
  internships: [
    {
      company: "Volkswagen Cars Madurai",
      role: "Human Resources Management",
      location: "Madurai",
      duration: "1 week"
    }
  ],
  education: [
    {
      institution: "Sethu Institute of Technology, Virudhunagar Kariyapatti",
      degree: "B.E. in Electrical and Electronics Engineering",
      duration: "Apr 2021 – May 2025",
      score: "CGPA: 8.1"
    },
    {
      institution: "St Joseph Matriculation Higher Secondary School, Madurai",
      degree: "HSC",
      duration: "Jun 2020 – Apr 2021",
      score: "Percentage: 77.37%"
    },
    {
      institution: "St Joseph Matriculation Higher Secondary School, Madurai",
      degree: "SSLC",
      duration: "Jun 2018 – May 2019",
      score: "Percentage: 69.4%"
    }
  ],
  projects: [
    {
      title: "Bus Identification by using RFID for Blind People",
      tech: "Arduino, RFID, IoT, Embedded Systems, Speaker Module",
      description: "Implemented an RFID-based system to identify buses through speakers using ID numbers. This project was presented at the YI Club Innovation Contest in 2024."
    },
    {
      title: "IoT Based Water Monitoring System in Village",
      tech: "IoT, Arduino, Ultrasonic Sensor, Wi-Fi Module (ESP8266)",
      description: "Developed a tank monitoring system for Kallikudi village as an UBA project. Successfully deployed with the team in January 2025."
    },
    {
      title: "Chat Bot",
      tech: "Python, NLP",
      description: "A mini-guide to AI and algorithms designed to ask questions and provide simple answers."
    }
  ],
  certifications: [
    { title: "AI WITH DATA SCIENTIST (3 months course in Data Science with projects)" },
    { title: "CORIZO (Basic Python and Data Science with internship)" },
    { title: "INTERNET OF THINGS (3 weeks course on Arduino and Raspberry Pi)" }
  ],
  achievements: [
    {
      title: "Vertical Chairperson of YI club of SIT",
      issuer: "YI club of Madurai"
    },
    {
      title: "Treasurer",
      issuer: "EEE department of SIT",
      role: "Electrical and Electronics Student Organisation and Research"
    }
  ]
};