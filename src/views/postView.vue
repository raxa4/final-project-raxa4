<template>
  <div>
<h1> {{ post.title }}</h1>
<article>{{ post.text }}</article>


  </div>
</template>

<script>
import post_data from '../data/posts.js'
export default {
name : 'postView',
data (){
    return{
      post : post_data (0)
    }
},
mounted() {
console.log (post_data)
},

}

</script>