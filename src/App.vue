<template>
  <div id="app" class="promise-exams">
    <div id="nav">
      <div class="nav-left" :class="{ expanded: isExpanded }">
        <div v-for="(cht, idx) in allChapter" :key="idx" class="link">
          <router-link :to="{ name: cht.name }" @click="isExpanded = false">
            {{ cht.name }}- {{ cht.title }}
          </router-link>
        </div>
      </div>
      <button class="nav-right" @click="isExpanded = !isExpanded">
        展開
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { allChapter } from '@/router/exams'

export default {
  name: 'App',
  data() {
    return { allChapter, isExpanded: false }
  }
}
</script>

<style lang="sass">
div
  box-sizing: border-box

.promise-exams
  .quiz
    color: #444
    padding: 16px
    margin-top: 24px
    border: 1px solid #888

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  display: flex
  padding: 20px

  .nav-left
    flex: 1
    height: 80px
    padding-left: 30px
    text-align: left
    overflow-y: scroll
    &.expanded
      height: 100%
  .nav-right
    border: 1px solid #666
    &:hover
      cursor: pointer

  .link
    display: block
    line-height: 30px
    a
      font-weight: bold
      color: #2c3e50

    &::after
      content: ' | '

    .router-link-exact-active
      color: #42b983

article
  .btn-try
    padding: 8px
    border: 2px solid #777
    border-radius: 12px
    margin-top: 6px
</style>
