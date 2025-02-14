<script setup lang="ts">
  import Dashboard from "~/components/DashboardPage.vue";
  definePageMeta({
    layout: "default",
  });
  definePageMeta({
    middleware: "auth",
  })
</script>

<template>
  <div>
    <nuxt-route-announcer />
    <Dashboard />
  </div>
</template>
