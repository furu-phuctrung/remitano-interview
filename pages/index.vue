<template>
  <div class="container-fluid">
    <navbar/>
  </div>
</template>

<script>
export default {
  async asyncData({ req, res }) {
    res.setHeader("Set-Cookie", ["authorized"]);
  },
};
</script>

<style>
</style>
