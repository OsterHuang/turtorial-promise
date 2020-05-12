<template>
  <article>
    <h1>{{ meta.name }} {{ meta.title }}</h1>
    <div class="quiz">
      依序執行increaseFirst, increaseSecond, increaseThird, increaseFirst,
      increaseSecond, increaseThird<br>
      如何解決callback地獄？<br>
      <button class="btn-try" @click="case2">Run Case 2</button>
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
    case2() {
      setTimeout(() => {
        this.increaseFirst()
        setTimeout(() => {
          this.increaseSecond()
          setTimeout(() => {
            this.increaseThird()
            setTimeout(() => {
              this.increaseFirst()
              setTimeout(() => {
                this.increaseSecond()
                setTimeout(() => {
                  this.increaseThird()
                }, 1500)
              }, 1200)
            }, 1000)
          }, 1500)
        }, 1200)
      }, 1000)
    },
    // ----
    // 不可修改以下的method
    // ----
    increaseFirst() {
      this.first += 1
      console.log('this.first: ', this.first)
    },
    increaseSecond() {
      this.second += 2
      console.log('this.second: ', this.second)
    },
    increaseThird() {
      this.third += 3
      console.log('this.third: ', this.third)
    }
  }
}
</script>
