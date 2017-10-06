<script>
import Navigation from './Navigation.vue'
export default {
  name: 'dashboard',
  components: {
    Navigation
  }
}
</script>
<template>
  <div class="dashboard-wrapper">
    <Navigation></Navigation>
  </div>
</template>
<style lang="scss" scoped>
$main-bg: #ecf0f1;

.dashboard-wrapper{
  background: $main-bg;
  height: 100vh;
}
</style>
