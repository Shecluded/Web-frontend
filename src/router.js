import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Default.vue"),
      children: [
        {
          path: "",
          name: "login",
          component: () => import("@/views/Login.vue")
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/views/Register.vue")
        },
        {
          path: "verify-alert",
          name: "alert",
          component: () => import("@/views/Alert.vue")
        },
        {
          path: "welcome",
          name: "welcome",
          component: () => import("@/views/Welcome.vue")
        },
        {
          path: "verify",
          name: "verify",
          component: () => import("@/views/VerifyAccount.vue")
        },
        {
          path: "about-you",
          name: "about",
          component: () => import("@/views/About.vue")
        }
      ]
    },
    {
      path: "/dashboard",
      component: () => import("@/layouts/UserDashboard.vue"),
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/views/Dashboard/Overview.vue")
        },
        {
          path: "view-loan",
          name: "viewloan",
          component: () => import("@/views/Dashboard/ViewLoan.vue")
        },
        {
          path: "invite",
          name: "invite",
          component: () => import("@/views/Dashboard/Invite.vue")
        },
        {
          path: "take-loan",
          name: "takeloan",
          component: () => import("@/views/Dashboard/TakeLoan.vue")
        },
        {
          path: "loan-apply",
          name: "applyloan",
          component: () => import("@/views/Dashboard/LoanApply.vue")
        },
        {
          path: "source-income",
          name: "sourceincome",
          component: () => import("@/views/Dashboard/SourceIncome.vue")
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/Dashboard/Profile.vue")
        }

        // {
        //   path: "results",
        //   name: "dashboard-result",
        //   component: () => import("@/views/dashboard/DashboardResult.vue")
        // }
      ]
    }
    // {
    //   path: "*",
    //   component: () => import("@/views/NotFound.vue")
    // }
  ]
});