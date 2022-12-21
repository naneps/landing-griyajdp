<template>
  <main class="mx-auto">
    <navbar />
    <HeroSection />
    <ExamplePage id="about" msg="Page 2" background="bg-teal-100" />
    <ExamplePage id="services" msg="Page 3" background="bg-teal-400" />
    <ExamplePage id="pricing" msg="Page 4" background="bg-teal-200" />
    <ExamplePage id="contact" msg="Page 5" background="bg-teal-300" />
    <Footer />
  </main>
</template>
<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import ExamplePage from "./modules/ExamplePage.vue";
import HeroSection from "./modules/HeroSection.vue";
export default {
  components: { Navbar, ExamplePage, Footer, HeroSection },
};
</script>
<style >
</style>