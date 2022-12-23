<template >
  <div
    ref="BoxCenter"
    class="
      absolute
      w-1/2
      h-32
      bg-white
      shadow-md
      rounded-md
      -bottom-16
      p-2
      overflow-clip
    "
  >
    <div class="flex item-center justify-center w-full">
      <div class="grid grid-cols-4 gap-3">
        <!-- ... -->
        <div
          class="
            w-44
            h-28
            border-l-2 border-r-2
            flex flex-col
            justify-center
            p-2
          "
          v-for="message in messages"
          :key="message.heading"
        >
          <h1 class="font-semibold">{{ message.heading }}</h1>
          <p class="font-light">{{ message.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxCenter",
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    boxCenter() {
      return this.$refs.BoxCenter;
    },
  },
  watch: {
    //watch position y of boxcenter and change class
  },
  mounted() {
    //watch position y of boxcenter and change class
    // scroll up and down

    window.addEventListener("scroll", () => {
      // watch position y of boxcenter and change class
      let yOfBoxCenter = this.boxCenter.getBoundingClientRect().y;

      if (yOfBoxCenter < 70) {
        // showalert
        // alert("show alert");
        this.boxCenter.classList.add("rounded-bl-full");
        this.boxCenter.classList.add("rounded-br-full");
        this.boxCenter.classList.add("transition-all");
        this.boxCenter.classList.add("duration-300");
      } else {
        this.boxCenter.classList.remove("rounded-bl-full");
        this.boxCenter.classList.remove("rounded-br-full");
      }
    });
  },
};
</script>
<style>
</style>