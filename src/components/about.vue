<template>
  <div class="about">
    <h1 id="about">About me</h1>

    <div class="container">

<!-- left side -->
    <div class="left">
      <img src="@/assets/profile-pic1.png" width='300'>


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
        name: 'Name',
        text: 'Taichi Ichisawa'
      },
      {
        name: 'Education',
        text: `2019-Now
        Tokyo Institute of Technology
          Dept. of Materials Science and Engineering`,
        text2: `2015-2019
        Yokohama National University
          Dept`
      },
      {
        name: 'Skills and Languages',
        text: 'TOEIC 975(L490 R485), 基本情報技術者'
      }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
  margin-top: 50px;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  text-align: left;
  padding-left: 350px;
}
div.output {
  text-align: center;
}

.container{
  margin-top: 80px;
}

h3.key{
  float:left;
}

p.value{
  float: right;
  padding-bottom: 30px;
  white-space: pre;
}

#about {
  top: 74px;
}

div.left {
  float: left;
  padding-left: 200px;
}

div.right{
  padding-right: 200px;
  padding-top: 30px;
  float: right;
}

h3 {
  color: black;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
