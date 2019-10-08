<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div class="single-blog" v-for="blog in blogs">
      <h2>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
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
