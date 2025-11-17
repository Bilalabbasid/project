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
import PracticeQuestionsPage from "../views/interviews/PracticeQuestionsPage.vue";

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
    path: "/interviews/playbook",
    name: "Playbook",
    component: PlaybookPage,
  },
  {
    path: "/interviews/questions",
    name: "PracticeQuestions",
    component: PracticeQuestionsPage,
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
