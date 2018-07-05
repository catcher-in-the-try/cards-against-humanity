<template>
  <div id="game-board">
    <top-header v-bind:d="d" />
    <div id="top-row">
      <div class="row">
        <div class="col-lg-6 cards-container">
          <card v-bind:cardinfo="d.cards.black.current" />
        </div>
        <div class="col-lg-6 cards-container">
        
        </div>
      </div>
    </div>
    <div class="bottom-row">
      <div class="row">
        <div class="col-lg-12 cards-container">
          <card v-for="cardinfo in d.cards.white" v-bind:cardinfo="cardinfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './Card';
  import TopHeader from './TopHeader';

  export default {
    components: { Card, TopHeader },
    name: 'GameScreen',
    data() {
      return {
        d: {
          cards: {
            count: {
              black: 89,
              white: 161,
            },
            black: {
              current: {
                color: 'black',
                id: '123481-1312',
                text: 'I drink to forget ___________.',
                pick: 1,
              },
              next: {
                color: 'black',
                id: '423481-1345',
                text: `________________. That's how I want to die.`,
                pick: 1,
              },
            },
            white: [
              {
                color: 'white',
                id: 'abcdef-1',
                text: 'Invading Poland.',
              },
              {
                color: 'white',
                id: 'abcdef-2',
                text: 'Cybernetic enhancements.',
              },
              {
                color: 'white',
                id: 'abcdef-3',
                text: 'Civilian casualties.',
              },
              {
                color: 'white',
                id: 'abcdef-4',
                text: 'Jobs',
              },
              {
                color: 'white',
                id: 'abcdef-5',
                text: 'The female orgasm.',
              },
              {
                color: 'white',
                id: 'abcdef-6',
                text: 'Bitches.',
              },
              {
                color: 'white',
                id: 'abcdef-7',
                text: 'The Boy Scouts of America.',
              },
              {
                color: 'white',
                id: 'abcdef-8',
                text: 'Auschwitz.',
              },
              {
                color: 'white',
                id: 'abcdef-9',
                text: 'Finger painting.',
              },
              {
                color: 'white',
                id: 'abcdef-10',
                text: 'The Jews.',
              },
            ],
          },
          game: {
            status: 'playing',
          },
          user: {
            name: 'Anton',
            cc: '4090-1319-4135-9810',
            kink: 'Elderly Japanese men.',
            score: '18',
          },
        },
      };
    },
  };
</script>

<style scoped>
.cards-container {
  
}
</style>
