<template>
  <div class="">
    <div class="app-body">
      <v-sidebar/>
      <v-header/>
      <main class="main">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
<script>
/* ============
   * Template Default
   * ============
   *
   */
import VSidebar from '@/components/Sidebar';
import VHeader from '@/components/Header';

export default {
  name: 'default',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    VSidebar,
    VHeader,
  },
};
</script>
