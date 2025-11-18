import { createRouter, createWebHistory } from "vue-router";
import memberstack from "@memberstack/dom";

// Core Views
import LandingPage from "../views/core/LandingPageNew.vue";
import PricingPage from "../views/core/PricingPage.vue";

// Auth Views
import LoginPage from "../views/auth/LoginPage.vue";
import SignupPage from "../views/auth/SignupPage.vue";
import AccountPage from "../views/auth/AccountPage.vue";

// Interview Views
import InterviewHome from "../views/interviews/InterviewHome.vue";
import PlaybookPage from "../views/interviews/PlaybookPage.vue";
import PlaybookIntroduction from "../views/interviews/PlaybookIntroduction.vue";
import ReactPlaybook from "../views/interviews/ReactPlaybook.vue";
import ReactIntroduction from "../views/interviews/ReactIntroduction.vue";
import ReactLandscape from "../views/interviews/ReactLandscape.vue";
import ReactDeclarativeThinking from "../views/interviews/ReactDeclarativeThinking.vue";
import ReactPreparation from "../views/interviews/ReactPreparation.vue";
import ReactStateDesign from "../views/interviews/ReactStateDesign.vue";
import ReactHooks from "../views/interviews/ReactHooks.vue";
import ReactEventHandling from "../views/interviews/ReactEventHandling.vue";
import ReactBasicConcepts from "../views/interviews/ReactBasicConcepts.vue";
import ReactForms from "../views/interviews/ReactForms.vue";
import PracticeQuestionsPage from "../views/interviews/PracticeQuestionsPage.vue";
import AllPracticeQuestions from "../views/interviews/AllPracticeQuestions.vue";
import FrameworksLanguages from "../views/interviews/FrameworksLanguages.vue";
import QuestionFormats from "../views/interviews/QuestionFormats.vue";
import GFE75 from "../views/interviews/GFE75.vue";
import Blind75 from "../views/interviews/Blind75.vue";
import FrontendSystemDesign from "../views/interviews/FrontendSystemDesign.vue";
import StudyPlans from "../views/interviews/StudyPlans.vue";
import CompanyGuides from "../views/interviews/CompanyGuides.vue";
import FocusAreas from "../views/interviews/FocusAreas.vue";

// Project Views
import ProjectsHome from "../views/projects/ProjectsHome.vue";
import ChallengeGridPage from "../views/projects/ChallengeGridPage.vue";
import ChallengeDetailPage from "../views/projects/ChallengeDetailPage.vue";
import DashboardPage from "../views/projects/DashboardPage.vue";
import SubmissionsPage from "../views/projects/SubmissionsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: PricingPage,
  },
  // Auth Routes
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountPage,
    meta: { requiresAuth: true },
  },
  // Interview Routes
  {
    path: "/interviews",
    name: "InterviewHome",
    component: InterviewHome,
  },
  {
    path: "/interviews/get-started",
    name: "InterviewGetStarted",
    component: InterviewHome, // Using InterviewHome for now, can be changed to a specific component
  },
  {
    path: "/interviews/dashboard",
    name: "InterviewDashboard",
    component: InterviewHome, // Using InterviewHome for now, can be changed to a specific dashboard component
  },
  {
    path: "/interviews/playbook",
    name: "Playbook",
    component: PlaybookPage,
  },
  {
    path: "/interviews/playbook/introduction",
    name: "PlaybookIntroduction",
    component: PlaybookIntroduction,
  },
  {
    path: "/interviews/playbook/coding",
    name: "PlaybookCoding",
    component: () => import("../views/interviews/PlaybookCoding.vue"),
  },
  {
    path: "/interviews/playbook/javascript",
    name: "PlaybookJavaScript",
    component: () => import("../views/interviews/PlaybookJavaScript.vue"),
  },
  {
    path: "/interviews/playbook/algorithms",
    name: "PlaybookAlgorithms",
    component: () => import("../views/interviews/PlaybookAlgorithms.vue"),
  },
  {
    path: "/interviews/playbook/user-interface",
    name: "PlaybookUserInterface",
    component: () => import("../views/interviews/PlaybookUserInterface.vue"),
  },
  {
    path: "/interviews/playbook/ui-cheatsheet",
    name: "PlaybookUICheatsheet",
    component: () => import("../views/interviews/PlaybookUICheatsheet.vue"),
  },
  {
    path: "/interviews/playbook/api-design",
    name: "PlaybookAPIDesign",
    component: () => import("../views/interviews/PlaybookAPIDesign.vue"),
  },
  {
    path: "/interviews/playbook/system-design",
    name: "PlaybookSystemDesign",
    component: () => import("../views/interviews/PlaybookSystemDesign.vue"),
  },
  {
    path: "/interviews/playbook/quiz",
    name: "PlaybookQuiz",
    component: () => import("../views/interviews/PlaybookQuiz.vue"),
  },
  {
    path: "/interviews/playbook/resume",
    name: "PlaybookResume",
    component: () => import("../views/interviews/PlaybookResume.vue"),
  },
  {
    path: "/interviews/questions",
    name: "PracticeQuestions",
    component: AllPracticeQuestions,
  },
  {
    path: "/interviews/questions/frameworks",
    name: "FrameworksLanguages",
    component: FrameworksLanguages,
  },
  {
    path: "/interviews/questions/formats",
    name: "QuestionFormats",
    component: QuestionFormats,
  },
  {
    path: "/interviews/playbook/gfe75",
    name: "GFE75",
    component: GFE75,
  },
  {
    path: "/interviews/playbook/blind75",
    name: "Blind75",
    component: Blind75,
  },
  {
    path: "/interviews/system-design",
    name: "FrontendSystemDesign",
    component: FrontendSystemDesign,
  },
  {
    path: "/interviews/system-design/introduction",
    name: "SystemDesignIntroduction",
    component: () => import("../views/interviews/SystemDesignIntroduction.vue"),
  },
  {
    path: "/interviews/system-design/types-of-questions",
    name: "SystemDesignTypesOfQuestions",
    component: () =>
      import("../views/interviews/SystemDesignTypesOfQuestions.vue"),
  },
  {
    path: "/interviews/system-design/framework",
    name: "SystemDesignFramework",
    component: () => import("../views/interviews/SystemDesignFramework.vue"),
  },
  {
    path: "/interviews/system-design/evaluation-axes",
    name: "SystemDesignEvaluationAxes",
    component: () =>
      import("../views/interviews/SystemDesignEvaluationAxes.vue"),
  },
  {
    path: "/interviews/system-design/common-mistakes",
    name: "SystemDesignCommonMistakes",
    component: () =>
      import("../views/interviews/SystemDesignCommonMistakes.vue"),
  },
  {
    path: "/interviews/system-design/cheatsheet",
    name: "SystemDesignCheatsheet",
    component: () => import("../views/interviews/SystemDesignCheatsheet.vue"),
  },
  {
    path: "/interviews/playbook/react",
    name: "ReactPlaybook",
    component: ReactPlaybook,
  },
  {
    path: "/interviews/playbook/react/introduction",
    name: "ReactIntroduction",
    component: ReactIntroduction,
  },
  {
    path: "/interviews/playbook/react/landscape",
    name: "ReactLandscape",
    component: ReactLandscape,
  },
  {
    path: "/interviews/playbook/react/declarative-thinking",
    name: "ReactDeclarativeThinking",
    component: ReactDeclarativeThinking,
  },
  {
    path: "/interviews/playbook/react/preparation",
    name: "ReactPreparation",
    component: ReactPreparation,
  },
  {
    path: "/interviews/playbook/react/state-design",
    name: "ReactStateDesign",
    component: ReactStateDesign,
  },
  {
    path: "/interviews/playbook/react/hooks",
    name: "ReactHooks",
    component: ReactHooks,
  },
  {
    path: "/interviews/playbook/react/event-handling",
    name: "ReactEventHandling",
    component: ReactEventHandling,
  },

  {
    path: "/interviews/playbook/react/signup-form",
    name: "ReactSignupForm",
    component: () => import("../views/interviews/ReactSignupForm.vue"),
  },
  {
    path: "/interviews/playbook/react/data-fetching",
    name: "ReactDataFetching",
    component: () => import("../views/interviews/ReactDataFetching.vue"),
  },
  {
    path: "/interviews/playbook/react/design-patterns",
    name: "ReactDesignPatterns",
    component: () => import("../views/interviews/ReactDesignPatterns.vue"),
  },
  {
    path: "/interviews/playbook/react/basic-concepts",
    name: "ReactBasicConcepts",
    component: ReactBasicConcepts,
  },
  {
    path: "/interviews/playbook/behavioral",
    name: "BehavioralPlaybook",
    component: () => import("../views/interviews/BehavioralPlaybook.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/intro",
    name: "BehavioralIntro",
    component: () => import("../views/interviews/BehavioralIntro.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/common-questions",
    name: "BehavioralCommonQuestions",
    component: () =>
      import("../views/interviews/BehavioralCommonQuestions.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/tell-me-about-yourself",
    name: "BehavioralTellMeAboutYourself",
    component: () =>
      import("../views/interviews/BehavioralTellMeAboutYourself.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/why-work-here",
    name: "BehavioralWhyWorkHere",
    component: () => import("../views/interviews/BehavioralWhyWorkHere.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/questions-to-ask",
    name: "BehavioralQuestionsToAsk",
    component: () => import("../views/interviews/BehavioralQuestionsToAsk.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/problem-solving",
    name: "BehavioralProblemSolving",
    component: () => import("../views/interviews/BehavioralProblemSolving.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/collaborative",
    name: "BehavioralCollaborative",
    component: () => import("../views/interviews/BehavioralCollaborative.vue"),
  },
  {
    path: "/interviews/playbook/behavioral/growth-mindset",
    name: "BehavioralGrowthMindset",
    component: () => import("../views/interviews/BehavioralGrowthMindset.vue"),
  },
  {
    path: "/interviews/study-plans",
    name: "StudyPlans",
    component: StudyPlans,
  },
  {
    path: "/interviews/company",
    name: "CompanyGuides",
    component: CompanyGuides,
  },
  {
    path: "/interviews/focus-areas",
    name: "FocusAreas",
    component: FocusAreas,
  },
  {
    path: "/interviews/guides",
    name: "InterviewGuides",
    component: InterviewHome, // Using InterviewHome for now
  },
  {
    path: "/interviews/questions/:id",
    name: "QuestionDetail",
    component: () => import("../views/interviews/QuestionDetailPage.vue"),
    props: true,
  },
  // Project Routes
  {
    path: "/projects",
    name: "ProjectsHome",
    component: ProjectsHome,
  },
  {
    path: "/projects/challenges",
    name: "ChallengeGrid",
    component: ChallengeGridPage,
  },
  {
    path: "/projects/challenges/:id",
    name: "ChallengeDetail",
    component: ChallengeDetailPage,
    props: true,
  },
  {
    path: "/projects/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/projects/submissions",
    name: "Submissions",
    component: SubmissionsPage,
    meta: { requiresAuth: true },
  },
  // Catch all 404
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Route guards
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      const member = await memberstack.getCurrentMember();
      if (member.data) {
        next();
      } else {
        next("/login");
      }
    } catch (error) {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
