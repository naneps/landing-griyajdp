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
  methods: {
    // make color bar random when scroll
    randomColor() {
      // make color bar random only dark color
      const color = Math.floor(Math.random() * 16777215).toString(16);
      const colorDark = color.slice(0, 6);
      return colorDark;
    },
  },
  mounted() {
    setInterval(() => {
      document.documentElement.style.setProperty(
        "--scroll-color",
        "#" + this.randomColor()
      );
    }, 1500);
  },
};
</script>
<style >
/* customize scroll bar and make color bar random when scroll*/
::-webkit-scrollbar {
  width: 5px;
  transition: all 0.5s ease-in-out;
}
::-webkit-scrollbar:hover {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--scroll-color);
  transition: all 1s ease-in;
}
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 50px;
}
</style>


