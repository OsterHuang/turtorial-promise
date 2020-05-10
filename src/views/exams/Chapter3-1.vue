<template>
  <article>
    <h1>{{ meta.name }} {{ meta.title }}</h1>
    <div class="quiz">
      一起increaseFirst, increaseSecond, increaseThird <br />
      當 increaseFirst出錯時，如何先向下執行 popupMessage
      <button @click="case3_1">Run Case 3-1</button>
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
    case3_1() {
      this.increaseFirst();
      this.increaseSecond();
      this.increaseThird();
    },
    // ----
    // 不可修改以下的method
    // ----
    increaseFirst() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Are you sure?"));
        }, 1000);
      });
    },
    increaseSecond() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.second += 2;
          console.log("this.second: ", this.second);
          resolve();
        }, 2000);
      });
    },
    increaseThird() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.third += 3;
          console.log("this.third: ", this.third);
          resolve();
        }, 3000);
      });
    },
    popupMessage() {
      alert("是不是出錯了啊？");
    }
  }
};
</script>
