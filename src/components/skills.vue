<template>
  <div class="skills">
    <div class="content" v-for="(skill, index) in skills":key="index">
      <h3>{{ skill.key }}</h3>
      <p>{{ skill.value }}</p>
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
            value: 'アルゴリズムとデータ構造を学びました.Djangoについても学んでいます．',
          },
          {
            key: 'C,C++',
            value: '大学の講義で扱いました'
          },
          {
            key: 'HTML & CSS & JavaScript',
            value:'このホームページを創りました．Vue.jsとbootstrapを組み合わせました．'
          },
          {
            key: 'JavaScript',
            value:'aaaa'
          },
          {
            key: 'others',
            value:'機械工学と材料工学の実験スキルです．CAD，熱処理，引張圧縮試験，エピタキシー法，AFD，SEM(FIB)，SEM(EBSD)できます'
          }

        ]
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

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
