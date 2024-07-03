import postRouter from "./post.js";
import authRouter from "./auth.js";
import sponsorsRouter from "./sponsor.js";
import studentsRouter from "./students.js";
import paymentsRouter from "./payment.js";
import institutesRouter from "./institutes.js";
import studentSponsorRouter from "./studentSponsor.js";

export const routers = [
  {
    path: "/api/posts",
    router: postRouter,
  },
  {
    path: "/api/sponsors",
    router: sponsorsRouter,
  },
  {
    path: "/api/students",
    router: studentsRouter,
  },
  {
    path: "/api/auth",
    router: authRouter,
  },
  {
    path: "/api/payments",
    router: paymentsRouter,
  },
  {
    path: "/api/institute-list",
    router: institutesRouter,
  },
  {
    path: "/api/student-sponsor",
    router: studentSponsorRouter,
  },
];
