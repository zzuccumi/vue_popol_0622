<template>
  <div class="hello">    
    <ul>
      <li class="post" v-for="post in postlist" :key=post>
        <div class="title">
          {{ post.title }} 
        </div>
        <div class="content">
          {{ post.content }} 
        </div>
        <div class="lower">
          <div>...by {{ post.creator }} </div>
          <div>on {{ post.publish_date.split('T')[0] }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script scoped>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    postlist(){            
      return this.$store.state.posts;
    },    
  },
  created(){
      this.$store.dispatch('onLoad');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  text-align: center;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  width: 800px;
}
.post {
  /* display: inline-block; */
  margin: 10px 10px;  
  border: 1px solid #42b983;
  border-radius: 15px;
  padding: 8px;
}

.post .title{
  text-align: left;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size:larger;
  font-weight: 900;
  color:#222;
}
.post .content{
  text-align: left;
  font-size:small;
  padding: 5px;
  height: 80px;
  color:#999;
}
.post .lower{
  text-align: right;
  color:grey;
  font-size:small
}
a {
  color: #42b983;
}
</style>