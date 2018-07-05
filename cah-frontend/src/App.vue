<template>
  <div id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from './components/MainLayout';

  export default {
    components: { MainLayout },
    name: 'App',
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Arimo:400,700');
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
  @import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');

  body {
    margin: 0;
  }

  #app {
    font-family: Arimo, sans-serif;
  }
</style>
