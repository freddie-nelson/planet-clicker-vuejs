<template>
  <div v-if="this.item.show" class="clicker-button-item" :style="{ left: `${this.item.x}px`, top: `${this.item.y}px` }" @animationend="deleteItem">
      <img src="../assets/images/rocket-img.png" alt="">
      <h2>+{{ this.$store.state.player.planetsPerClick }}</h2>
  </div>
</template>

<script>
export default {
    name: 'ClickerPlanetItem',
    props: {
        item: Object,
    },
    methods: {
        deleteItem() {
            this.item.show = false;
        }
    }
}
</script>

<style scoped lang="scss">
    .clicker-button-item {
        position: absolute;
        left: 100;
        top: 100;
        animation: clicker-button-item-fadeout forwards .7s ease-in;
        pointer-events: none;
        display: flex;
        user-select: none;
        
        img {
            width: 30px;
            height: auto;
            user-select: none;
        }

        h2 {
            color: white;
            margin: auto 0;
            user-select: none;
        }
    }

    @keyframes clicker-button-item-fadeout {
        from {
            opacity: 1;
        }
        
        to {
            opacity: 0;
        }
    }
</style>