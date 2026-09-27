import { jsPDF } from "jspdf";
import fs from "fs";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4"
});

// Color Palette
const primaryColor = [16, 37, 66];      // Deep navy #102542
const secondaryColor = [0, 150, 136];   // Teal accent #009688
const textColor = [40, 44, 52];        // Charcoal #282c34
const mutedColor = [100, 108, 120];     // Slate gray #646c78
const dividerColor = [0, 150, 136];     // Teal divider line

let y = 14;
const margin = 14;
const pageWidth = 210;
const contentWidth = pageWidth - margin * 2;

// Header
doc.setFont("helvetica", "bold");
doc.setFontSize(20);
doc.setTextColor(...primaryColor);
doc.text("R. ANANTHA LAKSHMI", margin, y);

y += 6;
doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.setTextColor(...secondaryColor);
doc.text("AI/ML & Software Development Enthusiast", margin, y);

y += 5;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...mutedColor);
const contactText = "ananthalakshmirayi88@gmail.com  |  github.com/ananthalakshmirayi88-commits  |  linkedin.com/in/anantha-lakshmi-rayi-0a02b4378";
doc.text(contactText, margin, y);

// Helper function to draw section header
function drawSectionHeader(title) {
  y += 6.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text(title.toUpperCase(), margin, y);
  
  y += 1.8;
  doc.setDrawColor(...dividerColor);
  doc.setLineWidth(0.5);
  doc.line(margin, y, margin + contentWidth, y);
  y += 4;
}

// 1. PROFESSIONAL SUMMARY
drawSectionHeader("Professional Summary");
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(...textColor);
const summaryText = "B.Tech CSM student with hands-on experience building AI/ML and Python-based applications. Interested in Artificial Intelligence, Machine Learning, Software Development, and intelligent web applications. Experienced in developing practical projects involving emergency response, robotics, computer vision, predictive analytics, and conversational AI. Seeking internship opportunities to apply technical skills and contribute to real-world software solutions.";
const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
doc.text(splitSummary, margin, y);
y += splitSummary.length * 3.8;

// 2. TECHNICAL SKILLS
drawSectionHeader("Technical Skills");
const skills = [
  { label: "Languages", value: "Python, Java, JavaScript, HTML, CSS" },
  { label: "AI/ML", value: "Machine Learning, Regression, Classification, Decision Trees, Random Forest, Naïve Bayes, Logistic Regression, K-Means" },
  { label: "Libraries", value: "NumPy, Pandas, Matplotlib, Scikit-learn" },
  { label: "Web", value: "Flask, REST APIs, Responsive Web Development" },
  { label: "Tools", value: "Git, GitHub, VS Code, Google Colab" },
  { label: "Core", value: "Data Structures & Algorithms, OOP, DBMS, Problem Solving" }
];

skills.forEach(skill => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.3);
  doc.setTextColor(...primaryColor);
  doc.text(skill.label, margin, y);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...textColor);
  const valLines = doc.splitTextToSize(skill.value, contentWidth - 25);
  doc.text(valLines, margin + 25, y);
  y += valLines.length * 3.6;
});

// 3. PROJECTS
drawSectionHeader("Projects");

const projects = [
  {
    title: "Agriculture Rover",
    tech: "Python | IoT | Sensors | Embedded Logic | Automation",
    bullets: [
      "Developed an automated agriculture rover prototype for crop field inspection and soil monitoring.",
      "Integrated sensor modules for real-time moisture detection and environmental data collection."
    ]
  },
  {
    title: "Smart Warehouse AI",
    tech: "Python | AI/ML | Computer Vision | Automation | Flask",
    bullets: [
      "Designed an AI-powered smart warehouse management system for automated inventory tracking.",
      "Utilized computer vision and machine learning logic for item categorization and stock level monitoring."
    ]
  },
  {
    title: "AI-Powered Emergency Response System",
    tech: "Python | Flask | AI/ML | HTML | CSS | JavaScript",
    bullets: [
      "Developed an AI-powered dashboard concept for analyzing and managing road accident emergencies.",
      "Designed features for accident detection, severity analysis, location information, and emergency resource identification."
    ]
  },
  {
    title: "AI Smart Traffic Monitoring System",
    tech: "Python | AI/ML | Computer Vision | HTML | CSS | JavaScript",
    bullets: [
      "Developed an AI-based system for analyzing traffic videos with vehicle detection and counting."
    ]
  },
  {
    title: "Ice Cream Sales Prediction",
    tech: "Python | Pandas | NumPy | Scikit-learn | Flask",
    bullets: [
      "Built a machine learning application applying Linear Regression to predict sales using historical data."
    ]
  },
  {
    title: "AI Assistant / Chatbot",
    tech: "Python | Flask | JavaScript | Groq API",
    bullets: [
      "Developed a web-based conversational AI application integrating an AI API for rapid query handling."
    ]
  }
];

projects.forEach(p => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(...primaryColor);
  doc.text(p.title, margin, y);

  y += 3.4;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.8);
  doc.setTextColor(...mutedColor);
  doc.text(p.tech, margin, y);

  y += 3.4;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.2);
  doc.setTextColor(...textColor);

  p.bullets.forEach(b => {
    doc.text("•", margin + 1, y);
    const bLines = doc.splitTextToSize(b, contentWidth - 6);
    doc.text(bLines, margin + 4.5, y);
    y += bLines.length * 3.4;
  });
  y += 1.2;
});

// 4. EDUCATION
drawSectionHeader("Education");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.6);
doc.setTextColor(...primaryColor);
doc.text("B.Tech — Computer Science & Engineering (CSM)", margin, y);
y += 3.4;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(...textColor);
doc.text("KIET College, Kakinada  |  Currently Pursuing 3rd Year  |  CGPA: 7.85", margin, y);

y += 3.8;
doc.setFont("helvetica", "bold");
doc.setFontSize(8.6);
doc.setTextColor(...primaryColor);
doc.text("Intermediate", margin, y);
y += 3.4;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(...textColor);
doc.text("KSN Junior College  |  735/1000", margin, y);

// 5. CERTIFICATIONS
drawSectionHeader("Certifications");
doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(...textColor);
doc.text("•  IBM SkillsBuild — Enterprise Design Thinking Practitioner", margin + 1, y);
y += 3.6;
doc.text("•  EY Certificate", margin + 1, y);
y += 3.6;
doc.text("•  Infosys Springboard — Python Certification", margin + 1, y);

// 6. CAREER INTERESTS
drawSectionHeader("Career Interests");
doc.setFont("helvetica", "normal");
doc.setFontSize(8.2);
doc.setTextColor(...textColor);
doc.text("Artificial Intelligence | Machine Learning | Python Development | Software Development | Data & Analytics", margin, y);

if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public", { recursive: true });
}

const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
fs.writeFileSync("./public/resume.pdf", pdfBuffer);
console.log("Successfully generated ./public/resume.pdf with all 6 projects and certifications");
