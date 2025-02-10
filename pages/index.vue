<script setup lang="ts">
  import Dashboard from "~/components/DashboardPage.vue";
  definePageMeta({
    layout: "default",
  });
</script>

<template>
  <div>
    <nuxt-route-announcer />
    <Dashboard />
  </div>
</template>
