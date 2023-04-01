<template>
  <aside class="bg-red-100 min-w-[200px]">
    <ul v-if="links.length">
      <li v-for="(link, i) in links">
        <Link :href="route(link.routeName)" class="text-gray-500" :class="{ 'active': $page.url === link.url }">{{ link.name }}</Link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const links = ref([
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    routeName: 'admin.dashboard'
  },
  {
    name: 'Users',
    url: '/admin/users',
    routeName: 'admin.users'
  },
]);
</script>

<style scoped>
.active {
  @apply text-black underline;
}
</style>