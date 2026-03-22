export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

const d = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const dw = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original-wordmark.svg`;

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: d("react") },
      { name: "Next.js", icon: d("nextjs") },
      { name: "Tailwind CSS", icon: d("tailwindcss") },
      { name: "TypeScript", icon: d("typescript") },
      { name: "Flutter", icon: d("flutter") },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: d("nodejs") },
      { name: "Python", icon: d("python") },
      { name: "PHP", icon: d("php") },
      { name: "Java", icon: d("java") },
      { name: "REST APIs", icon: d("fastapi") },
    ],
  },
  {
    category: "Salesforce",
    items: [
      { name: "Apex", icon: d("salesforce") },
      { name: "SOQL", icon: d("salesforce") },
      { name: "Sales Cloud", icon: d("salesforce") },
      { name: "Salesforce Flows", icon: d("salesforce") },
      { name: "Platform Events", icon: d("salesforce") },
      { name: "Salesforce CLI", icon: d("salesforce") },
    ],
  },
  {
    category: "Data Science & AI",
    items: [
      { name: "Python", icon: d("python") },
      { name: "Machine Learning", icon: d("pytorch") },
      { name: "Data Analytics", icon: d("pandas") },
      { name: "TensorFlow/Scikit-learn", icon: d("tensorflow") },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: dw("amazonwebservices") },
      { name: "Terraform", icon: d("terraform") },
      { name: "Docker", icon: d("docker") },
      { name: "Git", icon: d("git") },
      { name: "GitHub", icon: d("github") },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", icon: d("vscode") },
      { name: "Cursor", icon: d("cursor") },
      { name: "Postman", icon: d("postman") },
      { name: "Figma", icon: d("figma") },
    ],
  },
];
