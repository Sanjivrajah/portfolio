export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    role: "Sales Cloud Software Engineer",
    company: "Hilti Asia IT Services",
    duration: "2023 - Present",
    responsibilities: [
      "Develop Salesforce Sales Cloud features, automation flows, and platform integrations for enterprise processes.",
      "Build full-stack internal tools with modern web technologies to improve delivery and operational workflows.",
      "Collaborate with global product and engineering teams to ship scalable solutions across regions.",
    ],
  },
  {
    role: "Lorem Ipsum Dolor",
    company: "Lorem Ipsum Corp",
    duration: "2022 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
  },
  {
    role: "Lorem Ipsum Amet",
    company: "Lorem Ipsum Corp",
    duration: "2023 - 2024",
    responsibilities: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
  },
  {
    role: "Lorem Ipsum Sit",
    company: "Lorem Ipsum Corp",
    duration: "2022 - 2023",
    responsibilities: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
      "Qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.",
    ],
  },
];
