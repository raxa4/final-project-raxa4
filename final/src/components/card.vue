<template>

  <div class="card"
       style="width: 18rem;">
    <img src="../assets/logo.svg"
         class="card-img-top"
         alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p v-if="show"
         class="card-text">{{ card.text }} </p>
      <button @click="show = !show">toggle</button>
      <button @click="remove"
              class="btn btn-danger">Delete></button>

    </div>
  </div>

</template>

<script>
export default {
  name: 'card',
  props: {
    emits: ['remove'],
    card: {
      type: Object,
      Required: true,
      default: () => ({})
    },
    index: {
      type: Number,
      Required: true
    }
  },

  data() {

    return {
      show: true
    }
  },
  methods: {
    remove() {
      console.log('Index on child!', this.index)
      this.$emit('remove', this.index)
    }

  }
}
</script>
