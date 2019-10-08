<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <div class="single-blog" v-for="blog in blogs">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
   
  </div>
</template>

<script>
import {HTTP} from '../http-commom.js';

export default {
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    
  },
  created() {
    HTTP.get('posts')
    .then(response => {
      console.log(response)
      this.blogs = response.data.slice(0,10)

    })   
  },
  /*
  Register filters and directives locally
  filters: {
    'to-uppercase':value => {
      return value.toUpperCase()
    },
    ou tb:
    toUppercase(value){
      return value.toUpperCase()
    },
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#"+Math.random().toString(2,8);
      }
    }
  }
  */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
