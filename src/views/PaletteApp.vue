<template>
  <h1>Vue パレット!</h1>
  <div class="app">
    <div
      class="palette"
      v-on:mousemove="changeColor"
      v-on:click="pickColor"
      v-bind:style="paletteStyle"
    ></div>
    <p>rgba( {{ red }}, {{ green }}, 200, 0.5 )</p>
    <div class="colors-container">
      <div
        class="mini-palette"
        v-for="color in colors"
        :key="color"
        v-bind:style="{
          backgroundColor: `rgba(${color.red}, ${color.green}, 200, 0.5)`,
        }"
        v-on:click="showColor(color)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: 0,
      green: 0,
      colors: [],
    }
  },
  methods: {
    // マウスの位置に応じて色を変える
    changeColor(e) {
      this.red = e.offsetX
      this.green = e.offsetY
    },
    // 色を選んでミニパレットに追加する
    pickColor() {
      const newColor = {
        red: this.red,
        green: this.green,
      }
      this.colors.push(newColor)
    },
    // パレットに指定した色を表示する
    showColor(color) {
      this.red = color.red
      this.green = color.green
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`,
      }
    },
  },
}
</script>

<!-- CSS -->
<style>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.palette {
  width: 255px;
  height: 255px;
}
.mini-palette {
  min-width: 60px;
  height: 60px;
}
.colors-container {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  padding-top: 8px;
}
</style>
