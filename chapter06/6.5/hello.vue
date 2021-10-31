<template>
  <p class="message">message: {{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },
};
</script>

<style scoped>
.message {
  color: aqua;
}
</style>