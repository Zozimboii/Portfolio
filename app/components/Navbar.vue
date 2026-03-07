<script setup>
import { ref } from "vue";

const open = ref(false);

const scrollTo = (id) => {
  const el = document.querySelector(id);

  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    open.value = false;
  }
};
</script>

<template>
  <nav
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 bg-black/60 backdrop-blur-md border border-slate-800 rounded-xl"
  >
    <div class="flex justify-between items-center px-6 py-3">
      <button @click="scrollTo('#home')" class="font-bold text-lg">
        Pruksakorn.dev
      </button>

      <div class="hidden md:flex gap-8 text-gray-400">
        <button @click="scrollTo('#home')" class="hover:text-white">
          Home
        </button>
        <button @click="scrollTo('#about')" class="hover:text-white">
          About
        </button>
        <button @click="scrollTo('#skills')" class="hover:text-white">
          Skills
        </button>
        <button @click="scrollTo('#projects')" class="hover:text-white">
          Projects
        </button>
        <button @click="scrollTo('#contact')" class="hover:text-white">
          Contact
        </button>
      </div>

      <button @click="open = !open" class="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
    </div>

    <div
      v-if="open"
      class="md:hidden border-t border-slate-800 flex flex-col text-center py-4 gap-4"
    >
      <button @click="scrollTo('#home')">Home</button>
      <button @click="scrollTo('#about')">About</button>
      <button @click="scrollTo('#skills')">Skills</button>
      <button @click="scrollTo('#projects')">Projects</button>
      <button @click="scrollTo('#contact')">Contact</button>
    </div>
  </nav>
</template>
