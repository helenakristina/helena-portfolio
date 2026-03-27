export interface CareerEvent {
  readonly year: string;
  readonly company: string;
  readonly role: string;
  readonly color: string;
  readonly highlight: string;
  readonly detail: string;
}

export const careerEvents: CareerEvent[] = [
  {
    year: "2012-2016",
    company: "Intel",
    role: "Software Engineer",
    color: "from-blue-500 to-cyan-500",
    highlight: "Started as intern, worked across data infrastructure",
    detail:
      "Started as intern, worked across data infrastructure and ecosystem mapping with Neo4J and Elasticsearch.",
  },
  {
    year: "2016-2017",
    company: "Cylance",
    role: "Software Engineer",
    color: "from-purple-500 to-pink-500",
    highlight: "Built security systems & forensics analytics",
    detail:
      "Worked on highly-available async API and built security forensics analytics tools protecting enterprise endpoints.",
  },
  {
    year: "2017-2019",
    company: "Cox Automotive",
    role: "Senior Engineer – Data Solutions",
    color: "from-orange-500 to-yellow-500",
    highlight: "Maryland MVA safety recalls, vehicle valuations AI",
    detail:
      "Led Maryland MVA vehicle recall integration (20+ APIs), designed neural networks for vehicle valuations, served 6+ subsidiaries.",
  },
  {
    year: "2019-2021",
    company: "Flashpoint",
    role: "Senior Engineer / Tech Lead",
    color: "from-teal-500 to-green-500",
    highlight: "Compromised credentials monitoring at scale",
    detail:
      "Owned Compromised Credentials Monitoring (35B+ records), led data warehouse cleansing (40TB). Built real-time breach detection pipelines and internal tools, mentored engineers, and contributed to security research.",
  },
  {
    year: "2021-2025",
    company: "Learning & Growth",
    role: "Taking Care of Myself",
    color: "from-gray-400 to-gray-500",
    highlight: "3 Coursera specializations, built Meno, 14+ courses",
    detail:
      "Traveled to Spain. Completed 3 Coursera specializations with 14+ advanced courses (9 perfect scores). Built Meno, a full-stack healthcare application with Claude API integration and RAG pipelines.",
  },
  {
    year: "2025+",
    company: "Return to Tech",
    role: "Senior Engineer with LLM Expertise",
    color: "from-teal-400 to-blue-400",
    highlight: "Ready to build AI solutions",
    detail:
      "Ready to contribute AI solutions, mentor engineers, and build sustainable technical cultures in organizations that value responsible technology.",
  },
];
