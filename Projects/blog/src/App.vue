<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  components:{
    'add-blog': addBlog
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
