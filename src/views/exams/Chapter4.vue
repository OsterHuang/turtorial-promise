<template>
  <article>
    <h1>{{ meta.name }} {{ meta.title }}</h1>
    <div class="quiz">
      使用(async, await)來依序執 increaseFirst, increaseSecond, increaseThird <br>
      都執從結束後再執行 popupMessage<br>
      <button class="btn-try" @click="case4_0">Run Case 4-0</button>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      first: 0,
      second: 1,
      third: 2
    }
  },
  computed: {
    meta() {
      return this.$route.meta
    }
  },
  methods: {
    async case4_0() {
      this.increaseFirst()
      this.increaseSecond()
      this.increaseThird()
    },
    // ----
    // 不可修改以下的method
    // ----
    increaseFirst() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.first += 1
          console.log('this.first: ', this.first)
          resolve()
        }, 1000)
      })
    },
    increaseSecond() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.second += 2
          console.log('this.second: ', this.second)
          resolve()
        }, 2000)
      })
    },
    increaseThird() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.third += 3
          console.log('this.third: ', this.third)
          resolve()
        }, 3000)
      })
    },
    popupMessage() {
      alert('是不是執行完了啊？')
    }
  }
}
</script>
