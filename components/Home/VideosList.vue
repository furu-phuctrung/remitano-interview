<template>
  <div class="container mx-auto mt-20">
    <div
      v-for="(url, i) in videoUrls"
      :key="i"
      class="grid grid-cols-3 mt-10 gap-5"
    >
      <iframe
        width="100%"
        height="100%"
        :src="url"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="col-span-2">
        <div class="text-2xl font-bold text-red-600">Movie Title</div>
        <div>Shared by: someone@gmail.com</div>
        <div>Description:</div>
        <div class="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    videoUrls() {
      return this.$store.state.urls;
    },
  },
};
</script>

<style>
</style>
