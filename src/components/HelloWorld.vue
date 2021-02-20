<template>

    <div class="top-wrapper" :style="cssProps">

    <div class="container">

    <div class="hello">

      <h1>Welcome to My Website</h1>
      <h2>by Taichi Ichisawa</h2>
    </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/sf2.jpg')})`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}

.top-wrapper {
  padding: 400px 0 400px 0;
  /*background-image: url('~@/assets/sf2.jpg');*/
  /*background-image: url("/image/sf2.jpg"); */
  background-size: cover;
  color: white;
  text-align: center;
  opacity: 0.8;
}

h1 {
  font-size: 72px;
  font-weight: bold;
  color:  white;
  opacity: 0.9;
}

h2{
  font-size: 36px;
  font-weight: bold;
  color: white;
  opacity: 0.9;
}

@media(max-width: 1000px){
  .top-wrapper {
    padding: 350px 0 250px 0;
  }
  h1{
    font-size: 32px;
  }
  h2{
    font-size: 24px;
  }
}

@media(max-width: 670px){

  .top-wrapper {
    padding: 250px 0 250px 0;
  }
  h1{
    font-size: 24px;
  }
  h2{
    font-size: 12px;
  }
}

</style>
