export interface CareerEvent {
  readonly year: string;
  readonly company: string;
  readonly role: string;
  readonly highlight: string;
  readonly detail: string;
}

export const careerEvents: CareerEvent[] = [
  {
    year: "2012–2016",
    company: "Intel",
    role: "Software Engineer",
    highlight: "Started as intern, worked across data infrastructure",
    detail:
      "Started as intern, worked across data infrastructure and ecosystem mapping with Neo4J and Elasticsearch.",
  },
  {
    year: "2016–2017",
    company: "Cylance",
    role: "Software Engineer",
    highlight: "Built security systems & forensics analytics",
    detail:
      "Worked on highly-available async API and built security forensics analytics tools protecting enterprise endpoints.",
  },
  {
    year: "2017–2019",
    company: "Cox Automotive",
    role: "Senior Engineer – Data Solutions",
    highlight: "Maryland MVA safety recalls, vehicle valuations AI",
    detail:
      "Led Maryland MVA vehicle recall integration (20+ APIs), designed neural networks for vehicle valuations, served 6+ subsidiaries.",
  },
  {
    year: "2019–2021",
    company: "Flashpoint",
    role: "Senior Engineer / Tech Lead",
    highlight: "Compromised credentials monitoring at scale",
    detail:
      "Owned Compromised Credentials Monitoring (35B+ records), led data warehouse cleansing (40TB). Built real-time breach detection pipelines and internal tools, mentored engineers, and contributed to security research.",
  },
  {
    year: "2021–2025",
    company: "Learning & Growth",
    role: "Sabbatical",
    highlight: "3 Coursera specializations, built Meno, 18 courses",
    detail:
      "Traveled to Spain. Completed 3 Coursera specializations and 18 courses across Anthropic and Coursera. Built Meno, a full-stack healthcare application with Claude API integration and RAG pipelines.",
  },
  {
    year: "2025+",
    company: "Return to Tech",
    role: "Senior Engineer with LLM Expertise",
    highlight: "Ready to build AI solutions",
    detail:
      "Ready to contribute AI solutions, mentor engineers, and build sustainable technical cultures in organizations that value responsible technology.",
  },
];
