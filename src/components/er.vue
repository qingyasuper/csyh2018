<template>
  <div class='nav er'>
    <div class='er_body'>
      <div id="qrcode"></div>
      <img src="../assets/images/cs_er_return.png" class='cs_er_return' @click='$emit("hide")'>
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'

export default {
  name: 'er',
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    userinfo () {
      return this.$store.state.userinfo
    },
    erinfo () {
      return this.$store.state.erinfo
    }
  },
  methods: {
    ret (u) {
      let that = this
      that.$router.push({path: u})
    },
    init () {
      let that = this
      var u = 'https://h5.nyjun.com/h5/ge2018?id=' + that.erinfo
      that.qrcode(u)
    },
    qrcode (txt) {
      document.getElementById('qrcode').innerHTML = ''
      console.log(txt)
      let qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100,
        text: txt
      })
      console.log(qrcode)
    }
  }
}
</script>

<style scoped>
</style>
