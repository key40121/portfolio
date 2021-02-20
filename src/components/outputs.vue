<template>
  <div class="posts">
    <div class="content" v-for="(post, index) in outputs":key="index">
      <a class="URL" v-bind:href="`${post.url}`" target="_blank">{{ post.name }}</a>
      <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Output',
    data () {
      return {
        outputs : [
          {
            name: 'Portfolio',
            text: 'Vue.jsを用いて作成しました',
            url: 'https://key40121.github.io/portfolio/#/'
          }
      ]}
    }
  }
</script>

<style scoped>

.posts{
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 300px;
  width: 80%;
  font-family: 'Hanalei', sans-serif;
}

.URL {
  color: #55B3B1;
  text-decoration: none;
  font-size: 24px;
}

.content {
    color: black;
    border: 1px solid #E2E9ED;
    background: white;
    padding: 1em;
    margin-top: 50px;
    margin-bottom: 50px;
}

.content:hover{
  z-index: 1;
  border: 1px solid #55B3B1;
  box-shadow: 0 8px 50px rgba(#000, 0.2);
  transform: scale(1.05);
  transition: box-shadow 0.2s ease,
              transform 0.2s ease,
              z-index 0s 0s ease;
  padding: 1em;
}

@media(max-width: 1000px){
  .container {
    grid-template-columns: 1fr;
    float: none;
  }
}

</style>
