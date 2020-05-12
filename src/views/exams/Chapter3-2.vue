<template>
  <article>
    <h1>{{ meta.name }} {{ meta.title }}</h1>
    <div class="quiz">
      一起increaseFirst, increaseSecond, increaseThird <br>
      當 increaseFirst出錯時，如何等increaseSecond, increaseThird結束後<br>
      再執行 popupMessage<br>
      <button class="btn-try" @click="case3_2">Run Case 3-2</button>
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
    case3_2() {
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
          reject('Are you sure?')
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
