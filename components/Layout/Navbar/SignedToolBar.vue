<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="text-white text-right">{{ username }}</div>
    <div>
      <button
        class="bg-white text-blue-500 rounded px-2 focus:outline-none focus:border-blue-700"
        @click="directToShareMovie"
      >
        Share a movie
      </button>
    </div>
    <div>
      <button
        class="bg-white text-blue-500 rounded px-2 text-left focus:outline-none focus:border-blue-700"
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
    directToShareMovie() {
      this.$nuxt.$router.push("/share-movie");
    },
  },
};
</script>
