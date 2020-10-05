<template>
  <div class="home">
    <h1 class="display-4 ma-4 d-flex justify-center">
      All Videos
    </h1>
    <div class="d-flex flex-wrap">
      <div v-for="video in video" :key="video.name">
        <tasks :video="video"></tasks>
      </div>
    </div>
  </diV>
</template>
<script>
import tasks from '@/components/tasks.vue';

export default {
  name: "home",
        tasks,
  components: {
    
  },
};
</script>

<style scoped lang="scss">
</style> 