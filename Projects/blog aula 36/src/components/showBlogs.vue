<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <br/>
    <input type="text" v-model="search" placeholder="Search Blogs"/>
    <br/>
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog">
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
      blogs: [],
      search: ""
    }
  },
  methods: {
    
  },
  computed: {
    filteredBlogs: function(){
      return this.blogs.filter((blog) =>{
        return blog.title.match(this.search)
      })
    }
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
