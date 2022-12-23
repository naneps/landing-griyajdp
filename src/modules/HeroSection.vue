<template >
  <section
    id="home"
    class="h-screen bg-center bg-cover"
    style="
      background-image: url('https://github.com/naneps/landing-griyajdp/blob/develop/public/background.jpg?raw=true');
    "
  >
    <div
      class="
        relative
        backdrop-brightness-50 backdrop-blur-sm backdrop-saturate-200
        h-full
        w-full
        flex flex-col
        items-center
        justify-center
      "
    >
      <h1 class="text-4xl font-bold text-white">Find Your Dream Houses</h1>
      <p class="text-xl text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      <box-center :messages="messages" />
    </div>
  </section>
</template>
<script>
import BoxCenter from "../components/BoxCenter.vue";

export default {
  components: { BoxCenter },
  data() {
    return {
      // ...
      messages: [
        {
          heading: "Lorem Ipsum Dolor",
          description: "lorem ipusm dulor sit amte",
        },
        {
          heading: "Lorem Ipsum Dolorss",
          description: "lorem ipusm dulor sit amte",
        },
        {
          heading: "Lorem Ipsum Dolorss",
          description: "lorem ipusm dulor sit amte",
        },
      ],
    };
  },
  methods: {
    // ...
  },
};
</script>
<style >
</style>