<template>
  <Head title="Dashboard" />

  <div class="bg-gray-300 h-full flex">
    <AdminSideNav />
    <div class="content bg-green-100 w-full">
      This is the content
    </div>
  </div>
</template>



<script setup>
import { Head } from '@inertiajs/vue3';
import AdminSideNav from '@/Components/AdminSideNav.vue'
import { ref } from 'vue';

const links = ref([{
  name: 'users'
}]);
</script>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';


export default {
  layout: AuthenticatedLayout
}
</script>