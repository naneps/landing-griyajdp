<template>
  <main id="services" class="h-screen bg-slate-100">
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-bold my-3">Propertice By Area</h1>
      <p class="text-sm font-light w-1/2 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, veniam
        maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        ..
      </p>
      <div class="my-5 grid grid-cols-4 gap-3">
        <CardService
          v-for="service in services"
          :id="service.id"
          :key="service.name"
        />
      </div>
    </div>
  </main>
</template>
<script>
import CardService from "../components/CardService.vue";

export default {
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Service 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas.",
        },
        {
          id: 2,
          name: "Service 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas.",
        },
        {
          id: 3,
          name: "Service 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas.",
        },
        {
          id: 4,
          name: "Service 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas.",
        },
      ],
    };
  },
  components: { CardService },
};
</script>
<style>
</style>