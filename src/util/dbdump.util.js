require("../db/mongoose");

const Tool = require("../models/tool.model");

leariningTool = [
  { link: "http://hacksplaining.com/", name: "hacking tool", type: 1 },
  { link: "https://osintframework.com/", name: "OSINT Framework", type: 1 },
  {
    name: "Top Interview Questions &amp; Answers for Job Seekers",
    link: "https://www.naukri.com/blog/interview-questions-and-answers-master-guide-tips-hacks/?utm_campaign=avm&utm_medium=email&utm_source=blogLink1",
    type: 1,
  },
  {
    link: "https://github.com/practical-tutorials/project-based-learning",
    name: "project based learning",
    type: 1,
  },
  { link: "https://uiverse.io/all", name: "UI components", type: 1 },
  {
    link: "https://github.com/DopplerHQ/awesome-interview-questions",
    name: "DopplerHQ/awesome-interview-questions: :octocat: A curated awesome list of lists of interview questions. Feel free to contribute!",
    type: 1,
  },
  {
    link: "https://www.theforage.com/welcome-onboard/recommendations",
    name: "Job similuation",
    type: 1,
  },
  {
    link: "https://www.adzuna.com/prepper/home",
    name: "Practice your interview",
    type: 1,
  },
  {
    link: "https://roadmap.sh/",
    name: "Developer Roadmaps - roadmap.sh",
    type: 1,
  },
  {
    link: "https://overapi.com/",
    name: "OverAPI.com | Collecting all the cheat sheets",
    type: 1,
  },
  {
    link: "https://devdocs.io/javascript/global_objects/array",
    name: "JavaScript / Array — DevDocs",
    type: 1,
  },
  { link: "https://devdocs.io/", name: "DevDocs API Documentation", type: 1 },
  {
    link: "https://devhints.io/",
    name: "Devhints — TL;DR for developer documentation",
    type: 1,
  },
  {
    link: "https://github.com/codecrafters-io/build-your-own-x",
    name: "build your own x",
    type: 1,
  },
  {
    link: "https://ebookfoundation.github.io/free-programming-books/books/free-programming-books-langs.html",
    name: "free-programming-books",
    type: 1,
  },
  {
    link: "https://github.com/yangshun/tech-interview-handbook",
    name: "tech-interview-handbook:",
    type: 1,
  },
  {
    link: "https://github.com/trekhleb/javascript-algorithms",
    name: "javascript-algorithms:",
    type: 1,
  },
  {
    link: "https://github.com/ryanmcdermott/clean-code-javascript",
    name: "ryanmcdermott/clean-code-javascript: ",
    type: 1,
  },
  {
    link: "https://cheatography.com/programming/",
    name: "2486 Programming Cheat Sheets ",
    type: 1,
  },
  {
    link: "https://learngitbranching.js.org/",
    name: "Learn Git Branching",
    type: 1,
  },
  {
    link: "https://unschooler.me/",
    name: "AI Courses for Educators, Universities &amp; Schools",
    type: 1,
  },
  {
    link: "https://github.com/airbnb/javascript",
    name: "airbnb/javascript: JavaScript Style Guide",
    type: 1,
  },
  {
    link: "https://github.com/tianocore/tianocore.github.io/wiki/Debug-FAQ",
    name: "Debug FAQ · tianocore/tianocore.github.io Wiki",
    type: 1,
  },
  { link: "https://exercism.org/", name: "Exercism", type: 1 },
  { link: "https://www.frontendmentor.io/", name: "Frontend Mentor ", type: 1 },
  { link: "https://jschallenger.com/", name: "JSchallenger", type: 1 },
  {
    link: "https://learnjavascript.online/",
    name: "Learn JavaScript",
    type: 1,
  },
  {
    link: "https://www.30secondsofcode.org/",
    name: "30 seconds of code",
    type: 1,
  },
  {
    link: "https://tutsplus.com/",
    name: "Free Courses, Tutorials, Tips &amp; Tricks with Envato Tuts+",
    type: 1,
  },
];

helperTool = [
  {
    link: "https://www.forefront.ai/app/chat/new",
    name: "Forefront Chat",
    type: 2,
  },
  { link: "http://enchancecv.com/", name: "enhavecv", type: 2 },
  {
    link: "https://gitmind.com/app/templates?lang=en",
    name: "GitMind",
    type: 2,
  },
  {
    link: "https://animista.net/",
    name: "Animista - On-Demand CSS Animations Library",
    type: 2,
  },
  {
    link: "https://builder.io/content",
    name: "Builder.io: Visual Development Platform",
    type: 2,
  },
  {
    link: "https://rapidapi.com/hub",
    name: "API Hub - Free Public &amp; Open Rest APIs | Rapid",
    type: 2,
  },
  {
    link: "https://webflow.com/?r=0",
    name: "Webflow: Create a custom website",
    type: 2,
  },
  {
    link: "https://v1.wized.com/",
    name: "wized | Intelligence Center",
    type: 2,
  },
  {
    link: "https://x8ki-letl-twmt.n7.xano.io/workspace/52109-0/dashboard",
    name: "Xano - backend tool",
    type: 2,
  },
  { link: "https://app.wonsulting.ai/", name: "WonsultingAI", type: 2 },
  {
    link: "https://neverinstall.com/spaces",
    name: "Neverinstall | Create cloud pc spaces of all your favorite apps from your browser",
    type: 2,
  },
  {
    link: "https://ray.so/",
    name: "Create beautiful images of your code",
    type: 2,
  },
  {
    link: "https://builtwith.com/",
    name: "BuiltWith Technology Lookup",
    type: 2,
  },
  {
    link: "https://tio.run/#javascript-node",
    name: "JavaScript (Node.js) – Try It Online",
    type: 2,
  },
  {
    link: "https://www.pexels.com/",
    name: "Free Stock Photos, Royalty Free Stock Images &amp; Copyright Free Pictures · Pexels",
    type: 2,
  },
  { link: "https://dev.to/", name: "DEV Community", type: 2 },
  {
    link: "https://www.opensourcealternative.to/",
    name: "Open Source Alternatives to Proprietary Software",
    type: 2,
  },
  {
    link: "https://explainshell.com/",
    name: "explainshell.com - match command-line arguments to their help text",
    type: 2,
  },
  {
    link: "https://www.pdfdrive.com/",
    name: "PDF Drive - Search and download PDF files for free.",
    type: 2,
  },
  { link: "https://getbuddies.co/b", name: "MelanyAI:helath coach", type: 2 },
  { link: "https://symptomchecker.io/", name: "SymptomChecker.io", type: 2 },
  { link: "https://app.spline.design/home", name: "Spline", type: 2 },
  {
    link: "https://grow.google/certificates/interview-warmup/category/",
    name: "Interview Warmup - Grow with Google",
    type: 2,
  },
  {
    link: "https://huntr.co/",
    name: "Huntr - Job Application Tracker &amp; CRM",
    type: 2,
  },
  {
    link: "https://donotpay.com/",
    name: "DoNotPay - Your AI Consumer Champion",
    type: 2,
  },
  { link: "https://sipreads.com/", name: "Sipreads ", type: 2 },
  {
    link: "https://www.pramp.com/#/",
    name: "Practice Mock Interviews",
    type: 2,
  },
  {
    link: "https://cursor.sh/",
    name: "Cursor - The AI-first Code Editor",
    type: 2,
  },
  {
    link: "https://theresanaiforthat.com/",
    name: "There&#39;s An AI For That (TAAFT) ",
    type: 2,
  },
  {
    link: "https://www.hover.dev/components/heros",
    name: "Animated Hero Sections for React and TailwindCSS",
    type: 2,
  },
  {
    link: "https://www.hover.dev/components",
    name: "Prebuilt animations ",
    type: 2,
  },
  { link: "https://www.hiration.com/", name: "hiration", type: 2 },
  { link: "https://www.mployee.me/", name: "Resume Keywords", type: 2 },
];

jobPortel = [
  {
    link: "https://www.ncs.gov.in/",
    name: "NCS|Home: National Career Service",
    type: 3,
  },
  {
    link: "https://weworkremotely.com/remote-jobs/search",
    name: "We Work Remotely:",
    type: 3,
  },
  { link: "https://remote.co/", name: "Remote Work:- Remote.co", type: 3 },
  {
    link: "https://justremote.co/",
    name: "Remote Jobs: justremote.co",
    type: 3,
  },
  { link: "https://www.flexjobs.com/", name: "FlexJobs:", type: 3 },
  { link: "https://wellfound.com/", name: "Wellfound", type: 3 },
  {
    link: "https://www.workingnomads.com/jobs",
    name: "Remote Jobs | Working Nomads",
    type: 3,
  },
  {
    link: "https://www.simplyhired.co.in/",
    name: "Job Search Engine | SimplyHired",
    type: 3,
  },
  { link: "https://remoteok.com/", name: "remoteok", type: 3 },
  {
    link: "https://dailyremote.com/",
    name: "Remote Jobs | DailyRemote",
    type: 3,
  },
  { link: "https://cutshort.io/", name: "Cutshort: ", type: 3 },
  { link: "https://www.hirist.com/", name: "Hirist", type: 3 },
  { link: "https://www.instahyre.com/", name: "Instahyre", type: 3 },
  { link: "https://himalayas.app/", name: "himalayas", type: 3 },
  { link: "https://remotive.com/", name: "remotive", type: 3 },
  { link: "https://remoteleads.io/", name: "remoteleads.io", type: 3 },
  {
    link: "https://nodesk.co/",
    name: "NoDesk - Where Everyone Works Remote",
    type: 3,
  },
  {
    link: "https://www.virtualvocations.com/",
    name: "Virtual Vocations",
    type: 3,
  },
  { link: "https://pangian.com/", name: "Pangian.com", type: 3 },
  { link: "https://authenticjobs.com/", name: "Authentic Jobs", type: 3 },
  { link: "https://arc.dev/", name: "Arc.dev", type: 3 },
  { link: "https://hunter.io/", name: " Hunter (Email Hunter)", type: 3 },
];

async function upsertData() {
  try {
    const bulkOperations = [...leariningTool, ...helperTool, ...jobPortel].map(
      (data) => ({
        updateOne: {
          filter: { link: data.link },
          update: { $set: data },
          upsert: true,
        },
      })
    );

    await Tool.bulkWrite(bulkOperations);
  } catch (error) {
    console.error("Error:", error);
  }
}

upsertData().then(console.log).catch(console.log);
