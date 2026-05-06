<script setup lang="ts">
import { certificates } from "~/data/certificates";
import CertificateCard from "../ui/CertificateCard.vue";
</script>

<template>
  <section id="certificate" class="max-w-6xl mx-auto px-6 py-20 md:py-28">
    <!-- Title -->
    <h2 class="text-3xl font-bold mb-12 text-center">Certificates</h2>

    <!-- Empty state -->
    <div v-if="!certificates.length" class="text-center text-gray-500">
      No certificates available
    </div>

    <!-- Grid -->
    <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <CertificateCard
        v-for="cert in certificates"
        :key="cert.id"
        v-bind="cert"
      />
    </div>
  </section>
</template>
