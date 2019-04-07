<template>
  <div id="app">
    <header>
      <span>Dust By Toon</span>
    </header>
    <main>
      <Dust />
    </main>
  </div>
</template>

<script>
import Dust from './components/Dust'
export default {
  name: 'app',
  components: {
    Dust
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ff6600;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #F08080;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  text-align: center;
}
</style>
