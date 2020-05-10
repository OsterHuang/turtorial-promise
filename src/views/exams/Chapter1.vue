<template>
  <article>
    <h1>{{ meta.name }} {{ meta.title }}</h1>
    <div class="quiz">
      讓second執行結束後，才執行third。<br />increaseSecond 與
      increaseThird不可在同一個區塊block內{}執行。<br />
      <button @click="case1">Run Case 1</button>
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
    };
  },
  computed: {
    meta() {
      return this.$route.meta;
    }
  },
  methods: {
    case1() {
      this.increaseFirst();

      setTimeout(() => {
        this.increaseSecond();
      }, 1500);

      this.increaseThird();
    },
    // ----
    // 不可修改以下的method
    // ----
    increaseFirst() {
      this.first += 1;
      console.log("this.first: ", this.first);
    },
    increaseSecond() {
      this.second += 2;
      console.log("this.second: ", this.second);
    },
    increaseThird() {
      this.third += 3;
      console.log("this.third: ", this.third);
    }
  }
};
</script>
