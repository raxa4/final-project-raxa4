<template>

  <header>
    

    <div class="wrapper">
     <div class="container row">
      <card v-for="c in cards" 
      class="4" :card="(c,i)"
      :index="i"
       @remove="removeCard" ></card>
     </div>

      
    </div>
  </header>
    <div>
<h3>home page</h3>
</div>
</template>

<script>
import card from '../components/card.vue';
export default {
name : 'homeView',



  components : {
card
 
  },
  data (){
    return{
      cards : [ 
  {
 title : 'naslov 1',
  text : 'texs,text,text',
},
{
  title : 'naslov 2',
  text : 'texs,text,text',
},
{
  title : 'naslov 3',
  text : 'texs,text,text',
}
]
    }
  },
  methods: {
removeCard(){
this.cards.splice (index,1)
}

  }
}


</script>