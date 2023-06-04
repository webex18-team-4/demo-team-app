<template>
  <h1>-- Vue メモ --</h1>
  <div class="memo-list">
    <ul class="memo-list__container">
      <li class="memo" v-for="(memo, index) in memolist" v-bind:key="index">
        <div class="memo__checkbox">
          <input type="checkbox" id="index" v-model="checked" />
        </div>
        <div>{{ memo }}</div>
        <button class="memo__delete" v-on:click="deletebutton(index)">
          削除
        </button>
      </li>
    </ul>
    <div class="add-memo-field">
      <input class="add-memo-field__input" type="text" v-model="memotinput" />
      <div>{{ memotinput }}</div>
      <button class="add-memo-field__button" v-on:click="tuika">追加</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memolist: [],
      memotinput: "",
    }
  },
  methods: {
    tuika() {
      this.memolist.push(this.memotinput)
      this.memotinput = ""
    },
    deletebutton: function (index) {
      this.memolist.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.memo-list {
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 512px;
  margin-left: auto;
  margin-right: auto;
}

.memo-list__container {
  padding: 0;
}

.memo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
}

.memo:hover {
  color: white;
  background-color: #b23b61;
}

.memo__text {
  margin-left: 2rem;
  text-align: left;
}

.memo__text--done {
  text-decoration-line: line-through;
}

.memo__delete {
  margin-left: 1rem;
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.memo__delete:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}

.add-memo-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-memo-field__input {
  padding: 10px;
}
.add-memo-field__button {
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.add-memo-field__button:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}
</style>
