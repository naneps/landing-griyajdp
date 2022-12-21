<template>
  <main :id="id" class="h-screen" :class="background">
    <div class="flex flex-col items-center justify-center h-full">
      <h1 class="text-4xl font-bold text-gray-800">Example Page</h1>
      <p class="text-xl text-gray-600">{{ msg }}</p>
    </div>
  </main>
</template>
<script>
export default {
  props: {
    background: {
      type: String,
      default: "bg-gray-100",
    },
    msg: {
      type: String,
      default: "Hello World",
    },
    id: {
      type: String,
      default: "example-page",
    },
  },
};
</script>
<style>
</style>