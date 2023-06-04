<template>
  <h1>Vue クイズ</h1>
  <div class="app">
    <h2>Q. {{ quiztitle }}</h2>
    <img
      class="quiz-image"
      src="https://via.placeholder.com/300x300"
      alt="クイズタイトル"
    />
    <div class="container">
      <button>
        {{ select1 }}
      </button>
      <button>
        {{ select2 }}
      </button>
      <button>
        {{ select3 }}
      </button>
    </div>
    <div>{{ kotae }}</div>
  </div>
  <div v-on:click="getChatgptAPI">次の問題</div>
</template>

<script>
import { openai } from "../openai"

export default {
  data() {
    return {
      quizees: [],
      quiztitle: "クイズ",
      prompt:
        "3択クイズを一問、json形式で生成してください。[{question:問題文,answer:答え,choice1:,choice2:,choice3:}]のように答えてください.",
      select1: "",
      select2: "",
      select3: "",
      kotae: "",
    }
  },
  methods: {
    getChatgptAPI: async function () {
      console.log("生成中")
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: this.prompt }],
      })

      const answer = response.data.choices[0].message.content
      console.log(answer)
      console.log(response.data)
      answer.trim()
      const quizees = JSON.parse(answer)
      console.log(quizees)
      this.quiztitle = quizees[0].question
      this.select1 = quizees[0].choice1
      this.select2 = quizees[0].choice2
      this.select3 = quizees[0].choice3
      this.kotae = quizees[0].answer
    },
  },
}
</script>

<style>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.quiz-image {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.container {
  display: flex;
  height: 2em;
  width: 300px;
  padding: 1em;
  justify-content: space-around;
}
</style>
