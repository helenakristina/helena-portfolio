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
    highlight: "Dependency mapping for Business Continuity/Disaster Recovery (BCDR)",
    detail:
      "Joined as an intern and grew into a full-time engineer over four years. Mapped Intel's systems and infrastructure dependencies as a graph (Neo4J, Elasticsearch), primarily serving the BCDR team's continuity and recovery planning across the division. Broad exposure to large-scale data infrastructure: Hadoop, Hive, Cassandra.",
  },
  {
    year: "2016–2017",
    company: "Cylance",
    role: "Software Engineer",
    highlight: "Endpoint security forensics and high-availability async API",
    detail:
      "Built a production-grade async API and forensics analytics tools for enterprise endpoint investigation. Intensive exposure to security engineering at scale.",
  },
  {
    year: "2017–2019",
    company: "Cox Automotive",
    role: "Senior Engineer – Data Solutions",
    highlight: "Maryland MVA safety recalls (20+ APIs) · vehicle valuations AI · 6 subsidiaries",
    detail:
      "Led the Maryland MVA vehicle recall integration (20+ APIs) and separately designed neural networks for vehicle valuations deployed across 6+ subsidiaries. Safety-critical systems serving Cox's full brand portfolio.",
  },
  {
    year: "2019–2021",
    company: "Flashpoint",
    role: "Senior Engineer / Tech Lead",
    highlight: "Compromised credentials monitoring at scale · 35B+ records, 40TB warehouse",
    detail:
      "Owned Compromised Credentials Monitoring (35B+ records), led data warehouse cleansing (40TB). Built real-time breach detection pipelines and internal tools, mentored engineers, and contributed to security research.",
  },
  {
    year: "2021–2025",
    company: "Learning & Growth",
    role: "Independent Study & Build",
    highlight: "Built Meno (Claude API + RAG) · 2 Coursera specializations · 18 courses",
    detail:
      "Built Meno, a full-stack healthcare application with Claude API integration and RAG pipelines. Completed 2 Coursera specializations and 18 courses across Anthropic and Coursera.",
  },
];
