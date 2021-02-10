<template>

  <div class="skills">

    <h1>skills</h1>

    <div class="container">


    <div class="content" v-for="(skill, index) in skills":key="index">
      <h2>{{ skill.key }}</h2>
      <h4>{{ skill.exp }}</h4>
      <p>{{ skill.value }}</p>
    </div>


  </div>
</div>
</template>

<script>
  export default {
    name: 'Skills',
    data () {
      return {
        skills : [
          {
            key: 'Python',
            exp: 'Django, 機械学習',
            value: `講義や研究での計算などを通じて一番使っている言語です.　
            Django，機械学習についても学んでおり，アプリ作成中です．`,
          },
          {
            key: 'C & C++',
            value: '大学の講義で扱いました．'
          },
          {
            key: 'HTML & CSS',
            exp: 'Bootstrap4',
            value:`このホームページを創りました．
            bootstrapを組み合わせました．`
          },
          {
            key: 'JavaScript',
            exp: 'Vue.js',
            value:'このホームページを創りました.　Vue.jsを使いました.'
          },
          {
            key: 'Others',
            exp: '機械工学と材料工学の実験スキル',
            value:`CAD，熱処理，引張圧縮試験
            エピタキシー法，AFM，SEM(FIB)，SEM(EBSD)`
          }

        ]
      }
    }
  }
</script>

<style scoped>

h1 {
  font-size: 50px;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  text-align: left;
  padding-left: 350px;
}

h2 {
  font-size: 30px;
  color: #AF0069;
  font-family: 'Raleway',sans-serif;
}

h4{
  font-size: 20px;
  font-family: 'M PLUS Rounded 1c';
}
div.p {
  white-space: pre;
}

.container {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px 200px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.content {
    color: black;
    border: 1px solid #E2E9ED;
    background: white;
    padding: 1em;
}

.content:hover{
  z-index: 1;
  border: 1px solid #AF0069;
  box-shadow: 0 8px 50px rgba(#000, 0.2);
  transform: scale(1.05);
  transition: box-shadow 0.2s ease,
              transform 0.2s ease,
              z-index 0s 0s ease;
  padding: 1em;
}

p{
  text-align: center;
}
</style>
