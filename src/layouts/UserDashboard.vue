<template>
  <div v-if="this.$store.state.user !== ''" class="dashboard">
    <header class="header flex-center shadow-sm">
      <h1 class="text-center">SHECLUDED</h1>
      <div v-if="$route.name!== 'profile'" class="btn-cont">
        <button @click="leaveHere" class="logout-btn">Log Out</button>
      </div>
    </header>
    <div class="dashboard-cont">
      <div v-if="$route.name!== 'profile'" class="profile pt-5">
        <ProfileCard />
      </div>
      <div class="router-main pt-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <div v-else class="w-100 load d-flex justify-content-center align-items-center">
    <img src="@/assets/images/spinner.svg" alt />
  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard";

export default {
  components: {
    ProfileCard
  },
  watch: {
    $route: {
      immediate: true,
      handler(x) {
        if (x.name === "dashboard") {
          document.body.style.backgroundColor = "#F7F7F7";
        }
      }
    }
  },
  methods: {
    leaveHere() {
      this.$store.dispatch("logoutUser");
      window.location.href = "/";
    }
  },
  async mounted() {
    await this.$store.dispatch("getUser");
  }
};
</script>

<style>
.dashboard {
  width: 100vw;
}
.load {
  height: 100vh;
}
.header {
  height: 8vh;
  background: white;
  color: #f740ac;
  font-size: 12px;
  position: fixed;
  width: 100%;
  z-index: 100;
}
.header h1 {
  font-size: 26px;
  font-style: italic;
  font-weight: bold;
}
.btn-cont {
  position: absolute;
  right: 0;
}
.logout-btn {
  height: 8vh;
  background: #808080;
  width: 8vw;
  color: white;
  border: none;
  font-size: 14px;
}
.dashboard-cont {
  width: 100vw;
  padding-top: 8vh;
}
.profile {
  width: 25vw;
  height: 92vh;
  position: fixed;
}
.router-main {
  margin-left: 28vw;
  width: 72vw;
  padding-right: 3.9vw;
}
</style>