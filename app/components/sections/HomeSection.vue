<script setup></script>

<template>
  <section
    id="home"
    class="max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-20 grid md:grid-cols-2 gap-12 items-center py-20 md:py-28"
  >
    <div>
      <p class="text-purple-400 text-sm md:text-base mb-2">Hi, my name is</p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">Boss</h1>

      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6"
      >
        Fullstack Developer
      </h2>

      <p
        class="text-gray-400 text-sm md:text-base mb-8 max-w-md leading-relaxed"
      >
        I build modern and scalable web applications using technologies across
        frontend, backend, and database systems.
      </p>

      <div class="flex flex-wrap gap-4">
        <NuxtLink
          to="#projects"
          class="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
        >
          View Projects
        </NuxtLink>

        <NuxtLink
          to="#contact"
          class="px-6 py-3 border border-gray-600 rounded-lg hover:border-white transition"
        >
          Contact
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-center relative">
      <div
        class="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
      ></div>

      <div
        class="relative p-[3px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
      >
        <NuxtImg
          src="/profile.jpg"
          class="w-40 sm:w-52 md:w-64 rounded-full border border-slate-800 shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>
