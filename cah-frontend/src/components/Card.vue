<template>
  <div class="cah-card" v-bind:class="['cah-card-' + cardinfo.color]">
    <div class="cah-card-text">{{ cardinfo.text }}</div>
    <div class="cah-card-footer">
      <div class="cah-card-logo-wrapper">
        <img class="cah-card-logo" /> Cards against humanity
      </div>
      <div class="cah-card-pick-n" v-if="cardinfo.pick > 1">Pick {{ cardinfo.pick }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
      cardinfo: {
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

<style>
.cah-card {
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  width: 40vw;
  max-width: 245px;
  min-height: 345px;
  border-radius: 6px;
  margin: 15px;
  font-weight: bold;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  position: relative;
}

.cah-card-black {
  background: black;
  color: white;
}

.cah-card-white {
  background: white;
  color: black;
  border: 1px solid #333;
}

.cah-card-footer {
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
}

.cah-card-logo-wrapper {
  font-size: 10px;
  display: inline-block;
}

.cah-card-pick-n {
  display: inline-block;
  position: absolute;
  right: 0;
}
</style>
