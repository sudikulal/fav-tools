require("../db/mongoose");

const Tool = require("../models/tool.model");

const leariningTool = [
  { link: "http://hacksplaining.com/", name: "hacking tool", type: 1 },
  { link: "https://osintframework.com/", name: "OSINT Framework", type: 1 },
  {
    link: "https://www.naukri.com/blog/interview-questions-and-answers-master-guide-tips-hacks/?utm_campaign=avm&utm_medium=email&utm_source=blogLink1",
    name: "Top Interview Questions &amp; Answers for Job Seekers",
    type: 1,
  },
  {
    link: "https://github.com/DopplerHQ/awesome-interview-questions",
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
  {
    link: "https://www.globalguideline.com/interview_questions/pdf/Nextlabs-Interview-Questions-and-Answers-29447.pdf",
    name: "Nextlabs-Interview-Questions-and-Answers-29447.pdf",
    type: 1,
  },
  { link: "https://nodeschool.io/", name: "NodeSchool", type: 1 },
  { link: "https://career.guru99.com/", name: "Career Guru99", type: 1 },
  {
    link: "https://www.techinterviewhandbook.org/software-engineering-interview-guide/",
    name: "Software Engineer interviews: Everything you need to prepare | Tech Interview Handbook",
    type: 1,
  },
  { link: "https://learnprompting.org/courses", name: "Courses", type: 1 },
  {
    link: "https://alison.com/",
    name: "Alison | Free Online Courses &amp; Online Learning",
    type: 1,
  },
  {
    link: "https://learningstudioai.com/",
    name: "Create courses with AI-powered authoring tool | LearningStudioAI",
    type: 1,
  },
  { link: "https://neetcode.io/", name: "NeetCode.io", type: 1 },
  {
    link: "https://codingnconcepts.com/tricky-javascript-interview-questions/",
    name: "Tricky Javascript Interview Questions - Coding N Concepts",
    type: 1,
  },
  {
    link: "https://workat.tech/",
    name: "Become a software engineer at a product-based company",
    type: 1,
  },
  { link: "https://learn-anything.xyz/", name: "Learn Anything", type: 1 },
  {
    link: "https://linkedin.github.io/future-of-skills/",
    name: "LinkedIn - Future of Skills",
    type: 1,
  },
  {
    link: "https://explore.skillbuilder.aws/learn",
    name: "AWS Skill Builder",
    type: 1,
  },
];

const helperTool = [
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
    name: " There is An AI For That (TAAFT) ",
    type: 2,
  },
  { link: "https://www.hiration.com/", name: " hiration", type: 2 },
  { link: "https://www.mployee.me/", name: "Resume Keywords", type: 2 },
  {
    link: "https://aiseo.ai/",
    name: "AISEO - AI writing assistant, Copywriting &amp; Paraphrasing Tool",
    type: 2,
  },
  {
    link: "https://transform.tools/json-to-jsdoc",
    name: " JSON to JSDoc",
    type: 2,
  },
  {
    link: "https://app.lottiefiles.com/",
    name: "LottieFiles Platform",
    type: 2,
  },
  { link: "https://app.jobscan.co/", name: "Jobscan", type: 2 },
  {
    link: "https://www.kickresume.com/en/",
    name: "Kickresume | Best Online Resume &amp; Cover Letter Builder",
    type: 2,
  },
  {
    link: "https://hwpi.harvard.edu/files/ocs/files/hes-resume-cover-letter-guide.pdf",
    name: "hes-resume-cover-letter-guide.pdf",
    type: 2,
  },
  {
    link: "https://www.careercup.com/resume",
    name: "This is what a GOOD resume should look like | CareerCup",
    type: 2,
  },
  {
    link: "https://www.algoexpert.io/frontend/product",
    name: "FrontendExpert | Ace the Frontend Interviews",
    type: 2,
  },
  {
    link: "https://github.com/raidendotai/openv0/",
    name: "raidendotai/openv0: AI generated UI components",
    type: 2,
  },
  { link: "https://mangoai.co/", name: "Mango AI", type: 2 },
  {
    link: "https://monkeylearn.com/word-cloud/",
    name: "Free Word Cloud Generator – MonkeyLearn",
    type: 2,
  },
  {
    link: "file:///C:/Users/SUDISH/Downloads/LinkedIn%20template.pdf",
    name: "LinkedIn template - LinkedIn template.pdf",
    type: 2,
  },
  { link: "https://app.haikei.app/", name: "Haikei", type: 2 },
  {
    link: "https://gradients.shecodes.io/",
    name: " CSS Gradients | SheCodes",
    type: 2,
  },
  {
    link: "https://www.freepik.com/",
    name: "Freepik: Download Free Videos, Vectors, Photos, and PSD",
    type: 2,
  },
  {
    link: "https://codedamn.com/ai",
    name: "Debug coding problems with AI and solve any programming doubt - Codedamn",
    type: 2,
  },
  { link: "http://svg.io/", name: "AI text prompt to SVG | SVG.io", type: 2 },
  {
    link: "https://www.mage.space/",
    name: "Mage | Free, Fast, Unlimited Stable Diffusion",
    type: 2,
  },
  { link: "https://movie-web.app/", name: "movie-web", type: 2 },
  {
    link: "https://www.stylar.ai/",
    name: "Stylar - Your Ultimate Controllable AI Image Editor",
    type: 2,
  },
  { link: "https://ideogram.ai/t/trending", name: "ideogram", type: 2 },
  {
    link: "https://gpte.ai/",
    name: "GPTE - Free Database of 5,000+ AI Tools",
    type: 2,
  },
  {
    link: "https://www.thepclegends.com/",
    name: "The Pc Legends - Custom Pc Build",
    type: 2,
  },
  { link: "https://www.cofolios.com/", name: "Cofolios", type: 2 },
  {
    link: "https://mode.com/",
    name: "Modern Business Intelligence | Better data, better decisions",
    type: 2,
  },
  {
    link: "https://predis.ai/",
    name: "Social Media Marketing made easy with AI | Predis.ai",
    type: 2,
  },
  {
    link: "https://www.futurepedia.io/",
    name: "Futurepedia - Find The Best AI Tools &amp; Software",
    type: 2,
  },
  { link: "https://agentgpt.reworkd.ai/", name: "AgentGPT", type: 2 },
  { link: "https://www.fixmyresume.xyz/", name: "Resume Reviewer", type: 2 },
  { link: "https://www.kadoa.com/", name: "Kadoa · AI Web Scraper", type: 2 },
  {
    link: "https://resumeworded.com/",
    name: "Resume Worded - Free instant feedback on your resume and LinkedIn profile",
    type: 2,
  },
  {
    link: "https://www.jobscan.co/",
    name: "Jobscan ATS Resume Checker and Job Search Tools",
    type: 2,
  },
  {
    link: "https://www.visualcv.com/",
    name: "VisualCV: Online CV Builder &amp; Professional Resume Maker",
    type: 2,
  },
  { link: "https://skillsyncer.com/dashboard", name: "SkillSyncer", type: 2 },
  {
    link: "https://pdf.wondershare.com/",
    name: "Easy PDF Solution to Create, Convert, Edit PDF -Wondershare PDFelement",
    type: 2,
  },
];

const jobPortel = [
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
  {
    link: "https://kaustubh-natuskar.github.io/moreThanFAANGM/#top",
    name: "moreThanFAANGM | This repository contains opportunities for you to apply to more than 400 product base companies(NOT JUST FAANGM) &amp; good start-ups.",
    type: 3,
  },
  {
    link: "https://app.refermarket.com/hi",
    name: "Refermarket | Largest Active Employee Networking Marketplace",
    type: 3,
  },
  {
    link: "https://www.refer.me/",
    name: "Job Referrals Made Simple | Refer.me",
    type: 3,
  },
  {
    link: "https://rocketreach.co/person",
    name: "RocketReach Search - Find Email, Phone &amp; Social Media",
    type: 3,
  },
  {
    link: "https://github.com/tramcar/awesome-job-boards",
    name: "tramcar/awesome-job-boards",
    type: 3,
  },
  { link: "https://applyish.com/", name: "Apply AI", type: 3 },
  {
    link: "https://unstop.com/",
    name: "Unstop: Connecting talent, colleges, &amp; recruiters!",
    type: 3,
  },
  {
    link: "https://underdog.io/",
    name: "Top startup jobs in NYC, San Francisco, and Remote roles",
    type: 3,
  },
  {
    link: "https://www.becil.com/vacancies",
    name: "Broadcast Engineering Consultants India Limited (BECIL)",
    type: 3,
  },
  {
    link: "https://engage-ai.co/",
    name: "Engage AI | Conversation Copilot | ChatGPT for commenting on LinkedIn and social networks Engage AI",
    type: 3,
  },
];

const workTool = [
  {
    link: "https://www.back4app.com/",
    name: "Back4App - Low-code backend to build modern apps",
    type: 4,
  },
  {
    link: "https://www.cyclic.sh/",
    name: "Cyclic.sh - Fullstack Javascript Apps - Deploy and Host in Seconds",
    type: 4,
  },
  { link: "https://railway.app/", name: "Railway", type: 4 },
  {
    link: "https://fly.io/",
    name: " Deploy app servers close to your users · Fly",
    type: 4,
  },
  {
    link: "https://render.com/",
    name: "Cloud Application Hosting for Developers | Render",
    type: 4,
  },
  {
    link: "https://turso.tech/",
    name: "Turso | The Fastest, Easiest, Cheapest Database in the World",
    type: 4,
  },
  { link: "https://uiverse.io/all", name: "UI components", type: 4 },
  { link: "https://www.devui.io/components", name: "DevUI", type: 4 },
  {
    link: "https://animate.style/",
    name: "Animate.css | A cross-browser library of CSS animations.",
    type: 4,
  },
  { link: "https://glitch.com/dashboard", name: " Glitch: deployer", type: 4 },
  {
    link: "https://layout.bradwoods.io/",
    name: "CSS Layout Generator",
    type: 4,
  },
  {
    link: "https://deta.space/docs/en/build/new-apps",
    name: "deta cloud deploy",
    type: 4,
  },
  {
    link: "https://www.hover.dev/components",
    name: "Prebuilt animations ",
    type: 4,
  },
  {
    link: "https://uptimerobot.com/",
    name: "UptimeRobot: Free Website Monitoring Service",
    type: 4,
  },
  { link: "https://box2d.org/", name: "Box2D", type: 4 },
  { link: "https://google.github.io/liquidfun/", name: "LiquidFun", type: 4 },
  {
    link: "https://brm.io/matter-js/",
    name: "Matter.js - a 2D rigid body JavaScript physics engine · code by @liabru",
    type: 4,
  },
  {
    link: "https://github.com/wellcaffeinated/PhysicsJS/wiki/Fundamentals",
    name: "Fundamentals · wellcaffeinated/PhysicsJS Wiki",
    type: 4,
  },
  {
    link: "https://wellcaffeinated.net/PhysicsJS/",
    name: "PhysicsJS - A modular, extendable, and easy-to-use physics engine for javascript",
    type: 4,
  },
  {
    link: "https://playcss.app/",
    name: "PlayCSS - Daily challenges to test and improve your skills with fun",
    type: 4,
  },
  { link: "https://www.gradientmagic.com/", name: "Gradient Magic", type: 4 },
  { link: "https://barba.js.org/", name: " barba.js", type: 4 },
  {
    link: "https://alexfox.dev/lax.js/",
    name: "https://alexfox.dev/lax.js/",
    type: 4,
  },
  {
    link: "https://www.codeconvert.ai/free-converter",
    name: "Free Code Converter",
    type: 4,
  },
  { link: "https://ui.shadcn.com/", name: "shadcn/ui", type: 4 },
  { link: "https://excalidraw.com/", name: "Excalidraw", type: 4 },
  {
    link: "https://undraw.co/illustrations",
    name: "Illustrations | unDraw",
    type: 4,
  },
  { link: "https://meaboutus.com/", name: "https://meaboutus.com/", type: 4 },
  {
    link: "https://www.linkedin.com/interview-prep/assessments/urn:li:fsd_assessment:(1,a)/question/urn:li:fsd_assessmentQuestion:(10011,aq11)/",
    name: "5) LinkedIn",
    type: 4,
  },
  { link: "https://www.tublian.com/", name: "Tublian", type: 4 },
  {
    link: "https://tympanus.net/codrops/",
    name: "Codrops | Keeping web professionals inspired &amp; up-to-date since 2009",
    type: 4,
  },
  {
    link: "https://www.copy.ai/",
    name: "The only AI platform purpose-built for outcomes",
    type: 4,
  },
  {
    link: "https://www.visme.co/form-builder/",
    name: "Online Form Builder &amp; Form Creator | Visme",
    type: 4,
  },
  {
    link: "https://aiexcelbot.com/",
    name: "AI Excel Bot | Use AI To Generate Excel Formulas In Seconds",
    type: 4,
  },
  { link: "https://mantine.dev/", name: "Mantine", type: 4 },
  {
    link: "https://atroposjs.com/",
    name: "Atropos - Stunning touch-friendly 3D parallax hover effects",
    type: 4,
  },
  {
    link: "https://muffinman.io/react-plx/",
    name: "Plx - React parallax component",
    type: 4,
  },
  { link: "https://gsap.com/", name: "Homepage | GSAP", type: 4 },
  {
    link: "https://humanaigc.github.io/animate-anyone/",
    name: "Animate Anyone",
    type: 4,
  },
];

async function upsertData() {
  try {
    const bulkOperations = [...leariningTool, ...helperTool, ...jobPortel,...workTool].map(
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
