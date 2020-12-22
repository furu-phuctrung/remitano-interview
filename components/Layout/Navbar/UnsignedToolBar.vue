<template>
  <div class="grid grid-cols-3 gap-4">
    <input
      v-model="username"
      class="border rounded text-black focus:outline-none focus:border-blue-700 px-2"
      placeholder="Username"
    />
    <input
      v-model="password"
      type="password"
      class="border rounded text-black focus:outline-none focus:border-blue-700 px-2"
      placeholder="Password"
    />
    <button
      class="bg-white text-blue-500 rounded px-2 border focus:outline-none focus:border-blue-700"
      @click="login"
    >
      Login/Register
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.username.trim()) {
        alert("Username is required!");
        return;
      }
      if (!this.password.trim()) {
        alert("Password is required!");
        return;
      }
      localStorage.setItem("username", this.username);
      this.$store.commit("login", this.username);
    },
  },
};
</script>
