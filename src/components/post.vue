<template>
  <div class="posts">
    <div class="content" v-for="(post, index) in posts":key="index">
      <a class="URL" v-bind:href="`https://qiita.com/key4_0121/items/${post.url}`" target="_blank">{{ post.name }}</a>
      <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data () {
      return {
        posts : [
          {
            name: '【未経験】暇な学生が3週間で基本情報技術者受かった話【CBT方式】',
            text: '基本情報技術者試験に受かった話をまとめました．',
            url: '3f031deed576416ce274'
          },
          {
            name: 'フロントエンドの勉強のためにポートフォリオ作ってみた',
            text: 'このホームページの作成の経過をまとめました．'
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
}

.URL {
  color: rgba(9,1,95);
  text-decoration: none;
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
  border: 1px solid rgba(9,1,95);
  box-shadow: 0 8px 50px rgba(#000, 0.2);
  transform: scale(1.05);
  transition: box-shadow 0.2s ease,
              transform 0.2s ease,
              z-index 0s 0s ease;
  padding: 1em;
}

</style>
