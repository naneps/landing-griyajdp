<template >
  <nav
    class="
      bg-transparent
      border-gray-200
      px-3
      py-0
      sm:px-4
      sticky
      top-0
      transition-all
      duration-300
      ease-in-out
      dark:bg-gray-900
      backdrop-blur-md
      rounded-bl-lg rounded-br-lg
      z-50
    "
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >JDP</span
        >
      </a>
      <div class="flex items-center md:order-2">
        <!-- Dropdown -->
        <button class="py-2 px-3 bg-blue-600 rounded-md text-white my-3">
          Hubungi
        </button>
        <button
          data-collapse-toggle="mobile-menu-language-select"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-1
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          aria-controls="mobile-menu-language-select"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="
          items-center
          justify-between
          hidden
          w-full
          my-2
          md:flex md:w-auto md:order-1
        "
        id="mobile-menu-language-select"
      >
        <ul
          class="
            flex flex-col
            px-4
            py-2
            mt-4
            border border-gray-100
            md:rounded-br-full md:rounded-bl-full
            bg-gray-300
            shadow-md
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            md:bg-white
            dark:bg-gray-800
            md:dark:bg-gray-900
            dark:border-gray-700
            transition-all
            duration-200
            ease-in-out
          "
        >
          <li v-for="link in links" :key="link.name">
            <a
              v-scroll-to="link.href"
              :href="link.href"
              class="
                block
                py-2
                pl-3
                pr-4
                rounded
                md:px-2 md:py-2
                dark:text-white
                transition-all
                ease-in-out
                duration-200
              "
              :class="{
                'bg-blue-700 rounded-md md:bg-blue-700 text-white': link.active,
                'text-gray-700 dark:text-gray-400': !link.active,
                'rounded-br-full': roundedBR,
                'rounded-bl-full': roundedBL,
                'md:px-5': roundedBR || roundedBL,
              }"
              @click="setActiveLink(link.name)"
              aria-current="page"
              ><span :class="{ 'mr-2': roundedBR, 'ml-2': roundedBL }">{{
                link.name
              }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    links() {
      return this.links.map((link) => ({
        ...link,
        active: link.name === this.selectedLink,
      }));
    },
    roundedBR() {
      return this.links[this.links.length - 1].active ? "rounded-br-full" : "";
    },
    roundedBL() {
      return this.links[0].active ? "rounded-bl-full" : "";
    },
  },
  watch: {
    selectedLink() {
      this.links.forEach((link) => {
        link.active = link.name === this.selectedLink;
      });
    },
    deep: true,
    immediate: true,
  },
  created() {
    this.links.forEach((link) => {
      link.active = link.name === this.selectedLink;
    });
  },
  data() {
    return {
      selectedLink: "Home",
      links: [
        {
          name: "Home",
          href: "#home",
        },
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Services",
          href: "#services",
        },
        {
          name: "Pricing",
          href: "#pricing",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ],
    };
  },
  methods: {
    setActiveLink(link) {
      console.log("???? ~ file: Navbar.vue:202 ~ setActiveLink ~ link", link);
      this.selectedLink = link;
    },
  },
  mounted() {
    // this.$scrollTo(this.$route.hash, 500, { offset: -100 });
    // when scrolling, change the active link in the navbar like first command
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      this.links.forEach((link) => {
        const element = document.querySelector(link.href);
        if (element.offsetTop - 100 <= scrollPosition) {
          this.selectedLink = link.name;
        }
      });
    });
  },
};
</script>
<style >
</style>