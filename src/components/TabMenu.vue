<template>
  <header>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </header>

</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'about', path: '/about' },
        { title: 'skills', path: '/skills' },
        { title: 'outputs', path: '/outputs' },
        { title: 'posts', path: '/post'}
      ]

    }
  }
}
</script>

<style scoped>
html, body,
ul, ol, li,
h1, h2, h3, h4, h5, h6, p, div {
  margin: 0;
  padding: 0;
}

header{
  z-index: 10;
  height: 64px;
  position: relative;
  top: 0px;
  background-color: #09015F;
  width: 100%;
  text-align: center;
  z-index: 2;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 0px 10px;
}

ol {
  margin: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 65px;
  margin-left:10px;
  margin-right:10px;
  font-size: 18px;
  position: relative;
}

li::after {
  background-color: #AF0069;
  content: "";
  width: 0;
  height: 3px;
  left: 0;
  bottom: 0;
  transition: width 0.35s ease 0s;
  position: absolute;
}

li:hover::after {
  width: 100%;
}
/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

.picture1 {
  width: 1000px;
  height: 500px;
  background-color: blue;
}
</style>
