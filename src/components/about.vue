<template>
  <div class="about">


    <div class="container">

<!-- left side -->
    <div class="left">
      <img src="@/assets/profile-pic1.png" width='300'>
      <div class="website">
        <a class="aaa" href="https://qiita.com/key4_0121" target="_blank">Qiita</a>
        <a class="aaa" href="https://github.com/key40121" target="_blank">Github</a>
        <a class="aaa" href="https://www.facebook.com/taichi.ichisawa/" target="_blank">Facebook</a>
      </div>
      </div>

    <div class="right">
      <div class="content"  v-for="(about, index) in abouts":key="index">
        <h3 class="key">{{ about.name }}</h3>
        <p class="value">{{ about.text }}</p>
        <p class="value">{{ about.text2 }}</p>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        abouts : [
        {
        name: '・Name',
        text: 'Taichi Ichisawa',
      },
      {
        name: '・Education',
        text: `2019-Now
        Tokyo Institute of Technology
          Dept. of Materials Science and Engineering`,
        text2: `2015-2019
        Yokohama National University
          Dept. of Mechanical Engineering and Materials Science`
      },
      {
        name: '・Skills and Languages',
        text: 'TOEIC 975(L490 R485), 基本情報技術者'
      }
      ]
    }
  }
}
</script>

<style scoped>


h1.class {
  border-bottom: thin;
}


.container {
  display: grid;
  padding:0;
  margin-top: 50px;
  gap: 10px;
  grid-template-columns: 2fr 1fr;
  text-align: center;
}

.website {
  margin-top: 20px;
}


h3{
  text-align: left;
  font-size: 24px;
}

p{
  text-align: center;
}

p.value{
  white-space: pre;
  text-align: left;
  padding-left: 20px;
}

a.aaa {
  text-decoration: none;
  color: black;
  font-size: 24px;
}
a.aaa:hover{
  color: Blue;
  font-size: bold;
}

@media(max-width: 1000px){
  .container {
    grid-template-columns: 1fr;
    float: none;
  }
}



</style>
