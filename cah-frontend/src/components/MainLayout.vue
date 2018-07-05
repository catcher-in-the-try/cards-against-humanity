<template>
  <div id="main-layout">
    <div id="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        d: {
          cards: {
            count: {
              black: 89,
              white: 161,
            },
          },
          game: {
            status: 'playing',
          },
        },
      };
    },
  };
</script>

<style scoped>

</style>
