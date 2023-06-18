<template>
  <div>
    <h2>テストページ1</h2>
    <button @click="test1">test1</button>
    <button @click="test2">test2</button>
  </div>
</template>

<script>
export default {
  methods: {
    test1: function () {
      this.$router.push({
        name: "Testdetail",
        params: { id: 1 },
      })
    },
    test2: function () {
      this.$router.push({
        name: "Testdetail",
        params: { id: 2 },
      })
    },
  },
}
</script>
