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
            clickerPlanetItems: [],
            timeOfLastClick: 0,
            timeSinceLastClick: 0
        }
    },
    methods: {
        clickPlanet(e) {
            this.getMousePosition(e);
            const time = new Date().getTime()

            this.timeSinceLastClick = (this.timeOfLastClick - time) * -1;
            this.timeOfLastClick = time;

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
            if (this.clickerPlanetItems.length >= 100) {

                this.clickerPlanetItems = this.clickerPlanetItems.filter(item => item.show === true)

            } else if (this.clickerPlanetItems.length === 0 || this.timeSinceLastClick  < 800) {

                return;

            } else {

                this.clickerPlanetItems = this.clickerPlanetItems.filter(item => item.show === true)

            }
        }, 2000), 2000)
    }
}
</script>

<style scoped lang="scss">
    .clicker-button {
        width: 90%;
        max-width: 650px;
        height: 90vw;
        margin: auto;
        cursor: pointer;
        position: relative;
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