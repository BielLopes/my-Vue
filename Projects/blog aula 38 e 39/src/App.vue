<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlog from './components/listBlog.vue'

export default {
  components:{
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blog': listBlog,
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold'
  }
</style>
