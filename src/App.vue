<template>
  <div id="app">
    <h1 style="position: absolute">{{ this.$store.state.player.planetsCounter }}</h1>
    <TheClickerButton />
  </div>
</template>

<script>
import TheClickerButton from './components/TheClickerButton'

export default {
  name: 'app',
  components: {
    TheClickerButton
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif
  }

  body {
    width: 100%;
    height: 100vh;
  }

  #app {
    display: flex;
    height: 100%;
  }
</style>
