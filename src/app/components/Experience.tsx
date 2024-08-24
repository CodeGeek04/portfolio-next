import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "AI Innovation Specialist",
    company_name: "IgniteTech",
    icon: "/ignitetech.jpeg",
    type: "Full-time",
    date: "April 2024 - Present",
    description:
      "Spearheading AI integration in client-facing products and internal processes.",
    points: [
      "Collaborate with cross-functional teams to implement AI solutions in various client-facing products",
      "Design and develop automations to streamline internal workflows, significantly improving operational efficiency",
      "Integrate and optimize multiple API connections including Jira, Salesforce, and Google Workspace suite",
      "Leverage serverless architectures, particularly AWS Lambda, for scalable and efficient solutions",
    ],
  },
  {
    title: "ML Engineer",
    company_name: "IAMAI",
    icon: "/iamai.png",
    type: "Contract",
    date: "May 2024 - July 2024",
    description:
      "Led the development of an AI-powered chatbot for cybercrime awareness.",
    points: [
      "Architected and implemented an AI chat application focused on raising cybercrime awareness",
      "Managed end-to-end deployment and ongoing maintenance, ensuring high availability and performance for a growing user base",
      "Implemented robust security measures to protect sensitive user data and maintain system integrity",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Unity Group",
    icon: "/unity_group.jpeg",
    type: "Freelance",
    date: "May 2024 - July 2024",
    description:
      "Engineered a comprehensive flow management system to enhance internal operations.",
    points: [
      "Developed a custom flow management system, significantly optimizing internal workflows and boosting productivity",
      "Implemented state-of-the-art JWT authentication to ensure robust security measures",
      "Orchestrated deployment on Nginx servers, ensuring optimal performance and scalability",
    ],
  },
  {
    title: "ML Engineer",
    company_name: "Modelslab",
    icon: "/modelslab.jpeg",
    type: "Project-based",
    date: "March 2024",
    description:
      "Pioneered the development of ethical AI deepfake generation technology.",
    points: [
      "Conceptualized and developed an innovative project focused on safe and ethical AI deepfake generation",
      "Implemented advanced machine learning algorithms to ensure high-quality output while maintaining ethical standards",
      "Collaborated with ethics experts to establish guidelines for responsible use of the technology",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Elysium Innovations",
    icon: "/next.svg",
    type: "Freelance",
    date: "Oct 2023 - Dec 2023",
    description:
      "Collaborated with industry leader to develop cutting-edge web applications.",
    points: [
      "Worked directly under Michael Gruen, Forbes 30 Under 30 honoree, developing sophisticated NextJS and React applications",
      "Implemented best practices in frontend development, ensuring optimal performance and user experience",
      "Contributed to the architectural design of scalable and maintainable codebases",
    ],
  },
  {
    title: "Automation Developer",
    company_name: "SKG Pneumatics",
    icon: "/skg.jpg",
    type: "Project-based",
    date: "April 2024",
    description:
      "Revolutionized workflow efficiency through advanced automation solutions.",
    points: [
      "Engineered a comprehensive automation system using Google Sheets and Apps Script, dramatically improving operational workflows",
      "Implemented data-driven decision-making processes, leading to increased productivity and reduced error rates",
      "Provided training and documentation to ensure smooth adoption and long-term sustainability of the automation solution",
    ],
  },
];

const ExperienceCard = ({ experience, isEven }) => {
  return (
    <div className="flex items-center mb-12 relative">
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-700 transform -translate-x-1/2 z-0"></div>
      {isEven ? (
        <>
          <div className="w-5/12 pr-8 text-right">
            <p className="text-lg font-semibold text-primary-500">
              {experience.date}
            </p>
            <p className="text-base text-gray-400">{experience.type}</p>
            <p className="text-base text-white font-medium">
              {experience.company_name}
            </p>
          </div>
          <div className="w-2/12 flex justify-center z-10">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-5/12 pl-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {experience.title}
            </h3>
            <p className="text-base text-gray-300 mb-3">
              {experience.description}
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="w-5/12 pr-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {experience.title}
            </h3>
            <p className="text-base text-gray-300 mb-3">
              {experience.description}
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="w-2/12 flex justify-center z-10">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-5/12 pl-8">
            <p className="text-lg font-semibold text-primary-500">
              {experience.date}
            </p>
            <p className="text-base text-gray-400">{experience.type}</p>
            <p className="text-base text-white font-medium">
              {experience.company_name}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="text-white" id="experience">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Professional Journey
        </h2>
        <div className="max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
