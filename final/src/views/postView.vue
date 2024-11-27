<template>
  <div>
    <img class="w-100"
         :src="'/src/assets/post-images/' + post.picture"
         alt="Post image">
    <h1>{{ post.title }}</h1>
    <p>Posted: {{ post.datePosted }}</p>
    <article>{{ post.text }}</article>


  </div>
</template>

<script>
import { getPost } from '@/data/posts';

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
      try {
        console.log('getting by id', this.$route.params.id)
        this.post = getPost(this.$route.params.id);
      } catch (err) {
        console.error(err);
        this.$router.push('/not-found');
      }
    },
  }
}
</script>