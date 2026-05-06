<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

defineProps<{
  title: string;
  issuer: string;
  year: string;
  file: string;
  image: string;
}>();

const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};

// 🔥 ESC ปิด
const handleKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKey);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKey);
});

// 🔥 lock scroll ตอนเปิด modal
watch(isOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "auto";
});
</script>

<template>
  <!-- CARD -->
  <div
    class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl transition cursor-pointer"
    @click="isOpen = true"
  >
    <img
      :src="image"
      alt="certificate preview"
      class="w-full h-40 object-cover"
    />

    <div class="p-4">
      <h3 class="text-md font-semibold">{{ title }}</h3>
      <p class="text-sm text-zinc-400">{{ issuer }}</p>
      <p class="text-xs text-zinc-500 mt-1">{{ year }}</p>

      <p class="mt-2 text-blue-400 text-sm">View Certificate →</p>
    </div>
  </div>

  <!-- 🔥 MODAL -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
    @click.self="closeModal"
  >
    <!-- 🔥 MODAL BOX (เท่ากับ container เว็บคุณ) -->
    <div
      class="bg-white w-full max-w-6xl h-[80vh] md:h-[85vh] rounded-xl overflow-hidden relative shadow-2xl mx-auto"
      @click.stop
    >
      <!-- CLOSE -->
      <button
        class="absolute top-3 right-3 text-black text-xl z-10 hover:scale-110"
        @click="closeModal"
      >
        ✕
      </button>

      <!-- PDF -->
      <iframe :src="file" class="w-full h-full" />
    </div>
  </div>
</template>
