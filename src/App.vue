<template>
  <div id="app">
    <router-view></router-view>
    <contenu></contenu>
  </div>
</template>

<script>

import Contenu from './components/Contenu'

export default {
  name: 'App',
  components: {
    'contenu': Contenu
  }
}
</script>

<style>

</style>
