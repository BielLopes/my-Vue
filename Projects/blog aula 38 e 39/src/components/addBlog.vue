<template>
  <div>
    <h2>Add new Blog</h2>
    <form v-if="!submitted">
      <label>Blog Title</label>
      <input type="text" required v-model.lazy="blog.title"/>
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="Wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="Mario" v-model="blog.categories">
        <label>Chese</label>
        <input type="checkbox" value="Cheese" v-model="blog.categories">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select><br/><br/>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="previw">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}} </p>
      <p>Blog Content: </p>
      <p>
        {{blog.content}}
      </p>
      <p>Blog Categories</p>
      <p>
        <ul>
          <li v-for="category in blog.categories">
            {{category}}
          </li>
        </ul>
      </p>
      <p>Author: {{blog.author}}</p>

    </div>
  </div>
</template>

<script>
import {HTTP} from '../http-commom.js';

export default {
  data() {
    return {
      blog:{
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["The Net Ninja", "The Angular Avenger", "The Vue Vindicator"],
      submitted: false
    }
  },
  methods: {
    post: function(){
      HTTP.post('posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      })
      .then(response => {
        console.log(response)
        this.submitted = true
      })
      .catch(e => {
         console.log(e)
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0; 
}
h3{
  margin-top: 10px;
}
#checkboxes{
  display: inline-block;
  margin-right: 20px;
}
#checkboxes label{
  display: inline-block;
  margin-left: 20px;
}
</style>
