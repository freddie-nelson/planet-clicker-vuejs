<template>
  <div 
    class="clicker-button" 
    @click="clickPlanet">
      <audio ref="clickSound" src="../assets/audio/click.wav"></audio>
      <div ref="clickPlanetItemContainer" class="clicker-button__item-container">
          <ClickerPlanetItem v-for="(item, index) in clickerPlanetItems" :key="index" :item="item" />
      </div>
  </div>
</template>

<script>
import ClickerPlanetItem from "./ClickerPlanetItem";

export default {
    name: 'TheClickerButton',
    components: {
        ClickerPlanetItem
    },
    data() {
        return {
            clickerPlanetItems: []
        }
    },
    methods: {
        clickPlanet(e) {
            this.getMousePosition(e);
            this.$store.state.player.planetsCounter += this.$store.state.player.planetsPerClick;
        },
        getMousePosition(e) {
            let ele = e.target.getBoundingClientRect();
            let x = e.clientX - ele.left;
            let y = e.clientY - ele.top;

            this.clickerPlanetItems.push({show: true, x: x, y: y });
        }
    },
    created() {
        setTimeout(setInterval(() => {
            if (this.clickerPlanetItems.length === 0) {
                return;
            } else {
                this.clickerPlanetItems = this.clickerPlanetItems.filter(item => item.show === true)
            }
        }, 1000), 2000)
    }
}
</script>

<style scoped lang="scss">
    .clicker-button {
        width: 100%;
        max-width: 650px;
        height: 100%;
        margin: auto;
        cursor: pointer;
        position: relative;
        margin: 0 20px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: url('../assets/images/earth-img.png') no-repeat center;
            background-size: contain;
            animation: clicker-button-spin infinite linear 180s;
        }
        

        &__item-container {
            width: 100%;
            height: 100%;
            position: relative;
        }
    }

    @keyframes clicker-button-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>