<template>
  <div>
    <div class="wrapper">
      <div class="container row">
        <card v-for="(c, i) in cards"
              class="4"
              :card="c"
              :index="i"
              @remove="removeCard"></card>
      </div>
    </div>
  </div>

  <div>
    <h3>kartice</h3>
  </div>
</template>

<script>
import card from '../components/card.vue';
export default {
  name: 'cardView',
  components: {
    card
  },

  data() {
    return {
      cards: [
        {
          title: 'naslov 1',
          text: 'texs,text,text',
        },
        {
          title: 'naslov 2',
          text: 'texs,text,text',
        },
        {
          title: 'naslov 3',
          text: 'texs,text,text',
        }
      ]
    }
  },

  methods: {
    removeCard(index) {
      this.cards.splice(index, 1)
    }

  }
}

</script>