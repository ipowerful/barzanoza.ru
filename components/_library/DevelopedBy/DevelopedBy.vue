<template>
  <div class="redgarnet">
    <span class="redgarnet__title">Создание сайта</span>
    <a class="redgarnet__link" :href="url" title="iPowerful" target="_blank">iPowerful</a>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: 'https://ipowerful.design'
  }),
  mounted () {
    console.log('\n %c Magic is created by iPowerful %c ' + this.url + '\n', 'color: #fff; background: #00cccc; padding:5px;', 'background: #fff;')
  }
}
</script>

<style src="./DevelopedBy.scss" lang="scss"></style>
