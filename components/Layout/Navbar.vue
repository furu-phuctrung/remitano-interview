<template>
  <div class="flex justify-between bg-blue-400 shadow-md py-2 px-32 text-white">
    <div class="text-2xl font-bold">Funny Movie</div>
    <div class="flex flex-col justify-center">
      <template v-if="username">
        <signed-tool-bar />
      </template>
      <template v-else>
        <unsigned-tool-bar />
      </template>
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
  mounted() {
    const username = localStorage.getItem("username");
    const urls = localStorage.getItem("urls");
    const initalState = {
      username: username ?? "",
      urls: urls ? urls.split(";") : [],
    };
    this.$store.commit("init", initalState);
  },
};
</script>

<style>
</style>
