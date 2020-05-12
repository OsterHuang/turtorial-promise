<template>
  <article>
    <h1>{{ meta.name }} {{ meta.title }}</h1>
    <div class="quiz">
      依序執行increaseFirst, increaseSecond, increaseThird <br>
      當 increaseFirst出錯時，就不執行increaseSecond, increaseThird，<br>
      出錯時執行 popupMessage<br>
      <button class="btn-try" @click="case3_3">Run Case 3-3</button>
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
    case3_3() {
      // TODO 修改這邊讓其流程可以跟命題一樣
      // this.increaseFirst()
      //   .then(() => {
      //     return this.increaseSecond()
      //   })
      //   .then(() => {
      //     return this.increaseThird()
      //   })
      //   .then(() => {
      //     this.popupMessage()
      //   })

      this.increaseFirst()
        .then(() => {
          return this.increaseSecond()
        })
        .then(() => {
          return this.increaseThird()
        })
        .then(() => {
          this.popupMessage()
        })
        .catch(e => {
          console.warn(e)
        })
        .finally(() => {
          console.info('真的結束啦')
        })
    },
    // ----
    // 不可修改以下的method
    // ----
    increaseFirst() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('this.first: I am error.....')
          reject('Are you sure?')
        }, 1000)
      })
    },
    increaseSecond() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.second += 2
          console.log('this.second: ', this.second)
          resolve()
        }, 2000)
      })
    },
    increaseThird() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.third += 3
          console.log('this.third: ', this.third)
          resolve()
        }, 3000)
      })
    },
    popupMessage() {
      alert('發生錯誤了嗎？')
    }
  }
}
</script>
