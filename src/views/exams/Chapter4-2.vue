<template>
  <article>
    <h1>{{ meta.name }} {{ meta.title }}</h1>
    <div class="quiz">
      使用(async, await)來同時執從 increaseFirst, increaseSecond, increaseThird <br>
      若發生錯誤則直接執行，先等其他執行結束後再執行 popupMessage<br>
      <button class="btn-try" @click="case4_2">Run Case 4-2</button><br>
      <br>
      <b>再回頭看4-1</b>
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
    async case4_2() {
      this.increaseFirst()
      this.increaseSecond()
      this.increaseThird()
    },
    // ----
    // 不可修改以下的method
    // ----
    async increaseFirst() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('this.first: ', this.first)
          reject('Something wrong while increasing the first')
        }, 1000)
        // setTimeout(() => {
        //   this.first += 1
        //   console.log('this.first: ', this.first)
        //   resolve()
        // }, 1000)
      })
    },
    async increaseSecond() {
      await new Promise(resolve => {
        setTimeout(() => {
          this.second += 2
          console.log('this.second: ', this.second)
          resolve()
        }, 2000)
      })
    },
    async increaseThird() {
      await new Promise(resolve => {
        setTimeout(() => {
          this.third += 3
          console.log('this.third: ', this.third)
          resolve()
        }, 3000)
      })
    },
    popupMessage() {
      alert('曾經發生錯誤啦~~~')
    }
  }
}
</script>
