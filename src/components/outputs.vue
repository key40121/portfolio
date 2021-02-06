<template>
  <div v-if="currentSlide === 0" class="picture0"></div>
  <div v-else-if="currentSlide === 1" class="picture1"></div>
  <div v-else-if="currentSlide === 2" class="picture2"></div>

</template>

<script>
  export default {
    name: 'Output',
    data () {
      return {
        currentSlide: 0,
      };

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

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

.picture0 {
  width: 1000px;
  height: 5000px;
  background-color: black;
}

.picture1 {
  width: 1000px;
  height: 5000px;
  background-color: red;
}

.picture2 {
  width: 1000px;
  height: 5000px;
  background-color: green;
}

</style>
