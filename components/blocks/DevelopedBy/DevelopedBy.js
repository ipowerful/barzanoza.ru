export default {
  data () {
    return {
      url: 'https://redgarnet.ru'
    }
  },
  mounted () {
    console.log('\n %c Magic is created by RedGarnet %c ' + this.url + '\n', 'color: #fff; background: #cc3814; padding:5px;', 'background: #fff; padding:5px;')
  }
}
