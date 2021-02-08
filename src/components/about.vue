<template>
  <div class="about">
    <h1 id="about">About me</h1>

    <div class="container">

<!-- left side -->
    <div class="left">
      <img src="@/assets/profile-pic1.png" width='300'>

    </div>

    <div class="right">
      <div class="content" v-for="i in 3" :key=i>
        <h3>{{ name }}</h3>
        <p>{{ text }}</p>
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
        name: 'I dont know what to do',
        text: 'd Id be so happy'
      }
    }
  }
</script>

<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

#about {
  top: 74px;
}

div.left {
  float: left;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
