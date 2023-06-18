<template>
  <div :class="style">
    <h1>頑張るでぇ</h1>
  </div>
  <div v-for="name in lists[$route.params.id - 1]" :key="name">
    <div></div>
  </div>
  <div class="omiyagename" :key="name">
    {{ lists[$route.params.id - 1].name }}
  </div>
  <div class="omiyageazi" :key="azi">{{ lists[$route.params.id - 1].azi }}</div>
  <img :src="lists[$route.params.id - 1].src" />
</template>

<script>
export default {
  name: "TestdetailApp",
  data: function () {
    return {
      lists: [
        {
          name: "出来たんかって！うわおおおお",
          azi: "まぁまぁ",
          src: "https://we-love-osaka.jp/wp/wp-content/uploads/2022/09/osaka-takoyaki.jpg",
        },
        {
          name: "korehakorekaradakara",
          azi: "おいしい",
          src: "data:image/jpeg;base64,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",
        },
      ],
    }
  },
}
</script>

<style>
.omiyagename {
  font-size: 1cm;
}
.omiyageazi {
  color: blue;
}
</style>
