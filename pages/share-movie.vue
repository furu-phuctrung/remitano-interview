<template>
  <div class="container-fluid h-screen flex flex-col">
    <navbar />
    <div class="flex-grow flex flex-col justify-center">
      <div class="container mx-auto">
        <div
          class="w-2/3 border rounded shadow mx-auto relative p-10"
          id="share-movie-box"
        >
          <div class="grid grid-cols-4 gap-4">
            <div>Youtube URL:</div>
            <input
              v-model="url"
              class="col-span-3 border rounded text-black focus:outline-none focus:border-blue-700 px-2"
              placeholder="Url"
            />
            <button
              class="col-start-2 col-span-3 bg-white text-blue-500 rounded px-2 border focus:outline-none focus:border-blue-700"
              @click="submit"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    submit() {
      if (!this.url.trim()) {
        alert("Url is required!");
        return;
      }
      this.$store.commit("pushUrl", this.url);
      this.$nuxt.$router.push("/");
    },
  },
};
</script>

<style>
#share-movie-box::before {
  content: "Share a Youtube movie";
  left: 20px;
  top: -15px;
  background: #ffffff;
  padding: 0 5px 0 5px;
  position: absolute;
  font-weight: 500;
}
</style>
