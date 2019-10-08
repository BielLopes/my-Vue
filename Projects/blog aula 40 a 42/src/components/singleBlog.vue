<template>
  <div>
    <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
import {HTTP} from '../http-commom.js';

export default {
  data() {
    return {
      id: this.$rout.params.id,
      blog: {},
    }
  },
  created(){
    HTTP.get('/posts/' + this.id)
    .then(response => {
      console.log(response)
      this.blog = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>
