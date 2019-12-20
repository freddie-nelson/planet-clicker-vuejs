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

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif
  }

  body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  h1 {
    color: white;
  }

  #app {
    display: flex;
    height: 100vh;
    
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: -1;
        background: url('./assets/images/space-bg.jpg') repeat center;
        background-size: contain;
        animation: space-bg-anim infinite linear 100s;
    }
  }

  @keyframes space-bg-anim {
    from {
      background-position: 0;
    }

    to {
      background-position: 100vw;
    }
  }
</style>
