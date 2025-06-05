<template>
  <div>
    <img class="w-100"
         :src="$api + post.picture"
         alt="Post image">
    <h1>{{ post.title }}</h1>
    <p>Posted: {{ post.datePosted }}</p>
    <article>{{ post.text }}</article>


  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'postView',
  data() {
    return {
      post: {}
    }
  },
  mounted() {
    console.log('mounted!');
    this.getPost()
  },
  methods: {
    getPost() {
      console.log('getting by id', this.$route.params.id)
      axios.get(this.$api + '/post/' + this.$route.params.id)
        .then(res => {
          this.post = res.data
        }).catch(err => {
          this.$router.push('/not-found')

        })
    }
  },
}

</script>