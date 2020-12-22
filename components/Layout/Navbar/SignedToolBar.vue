<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="text-white text-right">{{ username }}</div>
    <div>
      <button class="bg-white text-blue-500 rounded px-2">Share a movie</button>
    </div>
    <div>
      <button
        class="bg-white text-blue-500 rounded px-2 text-left"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("username");
      this.$store.commit("logout");
    },
  },
};
</script>
