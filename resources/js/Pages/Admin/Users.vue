<template>
  <Head title="Dashboard" />

  <div class="bg-gray-300 h-full flex">
    <AdminSideNav />
    <div class="content bg-green-100 w-full overflow-y-scroll">
      <pre>
        {{ $page }}
      </pre>
    </div>
  </div>
</template>



<script setup>
import { Head } from '@inertiajs/vue3';
import AdminSideNav from '@/Components/AdminSideNav.vue'

</script>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';


export default {
  layout: AuthenticatedLayout
}
</script>