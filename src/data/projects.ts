export interface ProjectSection {
  type: "header" | "subheader" | "text" | "bullet" | "numbered" | "image" | "divider";
  content?: string;
  src?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  role: string;
  company: string;
  duration: string;
  tools: string[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "paper-id-onboarding",
    title: "Reducing Drop-off: Optimizing Paper.id Onboarding for Activation",
    category: "Product Design",
    year: "2024",
    thumbnail: "https://cdn.dribbble.com/userupload/30598968/file/original-a0e5eadb50b9ce428cacfff1be504753.png?resize=800x600",
    description: "Paper.id onboarding tutorials tailored to users intentions during registration.",
    role: "Sr. Product Designer",
    company: "Paper.id",
    duration: "3 months",
    tools: ["Figma", "Maze", "Miro"],
    sections: [
      { type: "header", content: "Intro" },
      { type: "subheader", content: "Product Overview" },
      { type: "text", content: "Paper.id is a B2B platform that simplifies invoicing, payment processing, and financial management. It offers onboarding tutorials tailored to users intentions during registration, such as creating digital invoices, paying suppliers, or receiving payments." },
      { type: "subheader", content: "Role Background" },
      { type: "text", content: "As a Product Designer, I create intuitive designs to improve user experiences, including an onboarding tutorial to help users get started easily." },
      { type: "divider" },
      { type: "header", content: "Problem Statement" },
      { type: "subheader", content: "Data" },
      { type: "bullet", content: "Since the release of the intention-based tutorial \"Creating Digital Invoice\" around 36.71% of users have accessed this tutorial. However, the execution of this tutorial remains poorly structured." },
      { type: "bullet", content: "According to activation data, users who chose the intention \"Creating Digital Invoices\" and activated in M0 averaged only 15%." },
      { type: "subheader", content: "User Interview" },
      { type: "subheader", content: "Debts" },
      { type: "text", content: "The implementation of the \"Creating Digital Invoice\", \"Pay to Supplier\" and \"Receive Payment\" tutorials is riddled with bugs and debts." },
      { type: "bullet", content: "Creating Digital Invoice" },
      { type: "bullet", content: "Pay to Supplier" },
      { type: "bullet", content: "Receive Payment" },
      { type: "divider" },
      { type: "header", content: "Requirements" },
      { type: "header", content: "Design" },
      { type: "divider" },
      { type: "header", content: "Impact & Insight" },
      { type: "divider" },
      { type: "header", content: "Next Actionable" },
      { type: "numbered", content: "Implement A/B testing for Tutorial with ratio 25:75 to new users" },
      { type: "numbered", content: "Tutorial Revamp to offer more flexibility & engage dormant users" },
    ],
  },
  {
    slug: "payper-digital-payments",
    title: "Optimizing Payper: Smoother, Safer & More Engaging Digital Payments",
    category: "Product Design",
    year: "2024",
    thumbnail: "https://cdn.dribbble.com/userupload/27066523/file/original-0dbab397ab3c9d0b37080c03b641caae.png?resize=800x600",
    description: "Digital payment portal that allows Buyers to pay invoices sent by Suppliers.",
    role: "Sr. Product Designer",
    company: "Paper.id",
    duration: "4 months",
    tools: ["Figma", "FigJam", "Hotjar"],
    sections: [
      { type: "header", content: "Intro" },
      { type: "subheader", content: "Overview" },
      { type: "text", content: "Payper is one of the features offered by Paper.id. It serves as a digital payment portal that allows Buyers to pay invoices sent by Suppliers through Paper.id. Buyers can access Payper from any device, anytime, without needing to be a registered Paper.id user." },
      { type: "subheader", content: "Project Background" },
      { type: "text", content: "Based on feedback from some Customer Users (CUs)/Buyers, they feel that the UX on Payper Mobile Web is still too complex. Additionally, the conversion rate on Mobile Web remains significantly lower compared to Payper Desktop." },
      { type: "subheader", content: "Role Background" },
      { type: "text", content: "As UX Researcher & UI/UX Designer" },
      { type: "divider" },
      { type: "header", content: "Problem" },
      { type: "subheader", content: "Data" },
      { type: "text", content: "Within the span of one month (April 27, 2022 - May 27, 2022), I analyzed the conversion rate and funnel data for Payper." },
      { type: "subheader", content: "Problem Hypothesis" },
      { type: "text", content: "My three partners and I developed several hypotheses that could potentially explain the blockers CUs face when using Payper Mobile Web." },
      { type: "divider" },
      { type: "header", content: "Requirements" },
      { type: "divider" },
      { type: "header", content: "Results" },
      { type: "divider" },
      { type: "header", content: "Impact" },
      { type: "text", content: "After implementing the improvements for one month (May 28, 2022 - June 28, 2022), I analyzed the funnel data for Payper." },
      { type: "header", content: "Conclusion" },
    ],
  },
  {
    slug: "smartfren-sales-training",
    title: "Enhancing Sales Performance: Smartfren Sales Training App",
    category: "Mobile Design",
    year: "2020",
    thumbnail: "https://cdn.dribbble.com/userupload/26116108/file/original-3c97af63581f05f78e271816c692c53d.png?resize=800x600",
    description: "Smartfren retail information system to tracking the activities of internal staff.",
    role: "UI/UX Designer",
    company: "Smartfren",
    duration: "7 months",
    tools: ["Sketch", "Zeplin", "Miro"],
    sections: [
      { type: "header", content: "Intro" },
      { type: "subheader", content: "Project Background" },
      { type: "text", content: "sfPro is a smartfren retail information system, this project is devoted to tracking the activities of outlets, frontliners, low-level employees, top-level employees, and distributors. And one of parts that I do in this project is designed a Sales Training Mobile App." },
      { type: "text", content: "Sales Training Mobile App used for training participants to receive training invitations, take attendance to attend training, take training exams, and view training results scores. Training participants can also see forums with content published by admins or trainers." },
      { type: "subheader", content: "Role Background" },
      { type: "text", content: "As a Product Designer, I am proud to have contributed to the development of the Sales Training Mobile App. My role involved end-to-end processes, including research, user needs analysis, wireframing, UI design, and ensuring that the designs I created were implemented effectively by the tech team. I believe this feature will greatly support Smartfren's goal of empowering its employees and partners with accessible and effective training tools." },
      { type: "divider" },
      { type: "header", content: "Result" },
      { type: "subheader", content: "Homescreen" },
      { type: "text", content: "This homescreen displays a dashboard that contains a report on the training scores that have been followed and the current level status of the participants according to their achievements. I also made a list of next trainings and a list of completed trainings." },
      { type: "subheader", content: "Training Detail" },
      { type: "text", content: "This screen shows upcoming training and training that has started. I made a countdown on this page so the participants know how many days the training will start. Furthermore, there is a button to request a training permit if the participant cannot participate in the training. And after the training has started, participants can make attendance by pressing the Attend button." },
    ],
  },
  {
    slug: "ipusnas-redesign",
    title: "iPusnas Redesign: Enhancing Usability & User Satisfaction",
    category: "Mobile Design",
    year: "2021",
    thumbnail: "https://cdn.dribbble.com/userupload/25561063/file/original-f2ff59592ccb5833c41d2e4bfa1c7b5d.png?resize=800x600",
    description: "Digital library application developed by the Indonesian government.",
    role: "UI/UX Designer",
    company: "Freelance",
    duration: "3 months",
    tools: ["Figma", "Maze", "UserTesting"],
    sections: [
      { type: "header", content: "Intro" },
      { type: "subheader", content: "Overview" },
      { type: "text", content: "iPusnas is provided as an extension service for users who can't come directly to the National Library of Indonesia and iPusnas help users to be able to read books digitally anywhere and anytime. iPusnas provides thousand of books with various book categories such as education, religion, fiction, culture, literature and etc." },
      { type: "divider" },
      { type: "header", content: "Problem" },
      { type: "subheader", content: "Review section about user pain when using iPusnas" },
      { type: "subheader", content: "Matrics of Usability" },
      { type: "text", content: "I did a usability testing with 5 users to find out the measurements of effectiveness, efficiency and user satisfaction with the current iPusnas app. Testing using the think-aloud method and the measurements using ISO 25022 matrics." },
      { type: "text", content: "Number of user comments about the iPusnas app" },
      { type: "divider" },
      { type: "header", content: "The Process" },
      { type: "header", content: "The Result" },
      { type: "header", content: "Prototype" },
      { type: "header", content: "Measurements" },
      { type: "header", content: "Conclusion" },
    ],
  },
];

export const dribbbleShots = [
  {
    title: "Exploration - Landing Page for Analog Camera",
    image: "https://cdn.dribbble.com/userupload/30598968/file/original-a0e5eadb50b9ce428cacfff1be504753.png?resize=800x600",
    url: "https://dribbble.com/putrisyrfh",
  },
  {
    title: "SAV.ORY - Food App",
    image: "https://cdn.dribbble.com/userupload/27066523/file/original-0dbab397ab3c9d0b37080c03b641caae.png?resize=800x600",
    url: "https://dribbble.com/putrisyrfh",
  },
  {
    title: "Your Favorite Book App",
    image: "https://cdn.dribbble.com/userupload/26116108/file/original-3c97af63581f05f78e271816c692c53d.png?resize=800x600",
    url: "https://dribbble.com/putrisyrfh",
  },
  {
    title: "Website Concept - Company Profile KitaBuat Indonesia",
    image: "https://cdn.dribbble.com/userupload/25561063/file/original-f2ff59592ccb5833c41d2e4bfa1c7b5d.png?resize=800x600",
    url: "https://dribbble.com/putrisyrfh",
  },
  {
    title: "UI Design Beauty Concept - My MUA",
    image: "https://cdn.dribbble.com/userupload/25531383/file/original-f9f9626c7032bf0ccd6b663b5c8954c3.png?resize=800x600",
    url: "https://dribbble.com/putrisyrfh",
  },
];

export const experiences = [
  {
    icon: "briefcase",
    role: "Sr. Product Designer",
    company: "Pivot",
    period: "May 2024 - Present",
    location: "BSD, ID",
    description:
      "Led design for B2B Payment solutions (Payment, Payout, Wallets, Account & Balance Management). Boosted transaction success by 15%, sped up delivery by 20%, and ensured 95% design accuracy. Built design system and improved team satisfaction by 25% through mentoring and QA process.",
  },
  {
    icon: "target",
    role: "Sr. Product Designer",
    company: "Paper.id",
    period: "Jan 2024 - May 2024",
    location: "Jakarta, ID",
    description:
      "Led end to end design for onboarding, PaperPayout, KYC/KYB verification, and invoicing features, driving 30% growth in verified SMB users and 25% increase in active payments. Scaled the Design System to cut design to dev handoff time by 40%, mentored junior designers to improve delivery quality, and partnered with product leadership to align design initiatives with long-term business goals.",
  },
  {
    icon: "monitor",
    role: "UI/UX Designer",
    company: "Paper.id",
    period: "May 2021 - Jan 2024",
    location: "Jakarta, ID",
    description:
      "Designed PaperPay Out, KYC, and mobile invoicing flows, contributing to 3 years of OKR success. Boosted active users by 20%, improved conversion by 15%, and reduced UI QA issues by 90% through a new Design System and user research.",
  },
  {
    icon: "phone",
    role: "UI/UX Designer",
    company: "Smartfren",
    period: "Feb - Aug 2020",
    location: "Jakarta, ID",
    description:
      "Rebranded SFPro app for tracking outlet activities, employees, and distributors. Contributed by creating user journeys, wireframes, high-fidelity designs, and prototypes in Sketch. Designed Sales Training app and gamification concept. Collaborated with cross-functional teams.",
  },
  {
    icon: "pen",
    role: "UI/UX Designer",
    company: "Freelance",
    period: "Oct 2020 - Jan 2021",
    location: "Freelance",
    description:
      "Freelanced for 4 months designing an end-to-end flow for a shopping list and food recommendation app for a community of Indonesian workers in Germany, ensuring designs met client needs and real user requirements.",
  },
  {
    icon: "chart",
    role: "Business Analyst",
    company: "BPPT",
    period: "Feb 2019",
    location: "South Tangerang, ID",
    description:
      "Assisted stakeholders by analyzing data within the tech team, gathering and interpreting insights to support decision-making and drive project outcomes, ensuring clear communication for strategic initiatives.",
  },
];
