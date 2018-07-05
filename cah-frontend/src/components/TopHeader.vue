<template>
  <header>
    <div id="cards-counter" v-if="d.game.status === 'playing'">
      <div id="cards-counter-black">{{ d.cards.count.black }}</div>
      <div id="cards-counter-white">{{ d.cards.count.white }}</div>
    </div>
    <div class="pull-right">
      <div class="score">{{ d.user.score }} <i class="fa fa-thumbs-up"></i></div>
      <div class="user-dropdown">
        <!-- <i class="fa fa-user-ninja"></i> -->
        {{ d.user.name }}
        <i class="fa fa-chevron-down"></i>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'TopHeader',
    props: {
      d: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {

      };
    },
  };
</script>

<style scoped>
header {
  background-color: #232323;
  font-weight: bold;
  color: white;
  padding: 8px;
  text-align: center;
}

#cards-counter {
  display: inline-block;
}

#cards-counter div {
  border-radius: 4px;
  display: inline-block;
  width: 64px;
  height: 32px;
  margin: 0 8px;
  line-height: 32px;
}

#cards-counter-black {
  background: black;
  color: white;
  box-shadow: 0 0 2px black;
}

#cards-counter-white {
  background: white;
  color: black;
  box-shadow: 0 0 2px white;
}

.score {
  display: inline-block;
  margin-right: 20px;
  line-height: 32px;
}

.user-dropdown {
  display: inline-block;
  line-height: 32px;
}
</style>
