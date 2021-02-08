<template>
  <div class="container">


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
            value: 'アルゴリズムとデータ構造を学びました.　Django，機械学習についても学んでおり，アプリ作成中です．',
          },
          {
            key: 'C & C++',
            value: '大学の講義で扱いました．'
          },
          {
            key: 'HTML & CSS',
            value:'このホームページを創りました．　bootstrapを組み合わせました．'
          },
          {
            key: 'JavaScript',
            value:'このホームページを創りました.　Vue.jsを使いました'
          },
          {
            key: 'others',
            value:'機械工学と材料工学の実験スキルです．CAD，熱処理，引張圧縮試験，エピタキシー法，AFM，SEM(FIB)，SEM(EBSD)'
          }

        ]
      }
    }
  }
</script>

<style scoped>


.container {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px 200px;
  grid-gap: 30px;
  margin-bottom: 10px;
}

.content {
    color: black;
    border-radius: 5px;
    background: #55B3B1;
    border: 2px solid rgb(79,185,227);
    padding: 1em;
}

</style>
