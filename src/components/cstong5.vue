<template>
  <div class='cs_tong5' ref='cstong5'>
    <div class='cs_tong5_scroll'>
      <iscroll-view class='scroll-view' ref='iscroll' :options='scrollOptions'>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>18元</span>
          <span class='cs_tong5_tit_num2'>{{a18.length}}张</span>
        </div>
        <ul v-if='a18.length>0'>
          <li v-for='(item, index) in a18' :key='index' :class='{"check":item.state===1,"stka":item.cdkey.length>10,"ka":item.state===2}'>{{item.cdkey}}</li>
          <li v-if='a18.length % 3 !== 0' v-for='n in (3 - a18.length % 3)' :key='"c" + n' class="noborder"></li>
        </ul>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>58元</span>
          <span class='cs_tong5_tit_num2'>{{a58.length}}张</span>
        </div>
        <ul v-if='a58.length>0'>
          <li v-for='(item, index) in a58' :key='index' :class='{"check":item.state===1,"stka":item.cdkey.length>10,"ka":item.state===2}'>{{item.cdkey}}</li>
          <li v-if='a58.length % 3 !== 0' v-for='n in (3 - a58.length % 3)' :key='"c" + n' class="noborder"></li>
        </ul>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>88元</span>
          <span class='cs_tong5_tit_num2'>{{a88.length}}张</span>
        </div>
        <ul v-if='a88.length>0'>
          <li v-for='(item, index) in a88' :key='index' :class='{"check":item.state===1,"stka":item.cdkey.length>10,"ka":item.state===2}'>{{item.cdkey}}</li>
          <li v-if='a88.length % 3 !== 0' v-for='n in (3 - a88.length % 3)' :key='"c" + n' class="noborder"></li>
        </ul>
        <div class='cs_tong5_tit'>
          <span class='cs_tong5_tit_num1'>188元</span>
          <span class='cs_tong5_tit_num2'>{{a188.length}}张</span>
        </div>
        <ul v-if='a188.length>0'>
          <li v-for='(item, index) in a188' :key='index' :class='{"check":item.state===1,"stka":item.cdkey.length>10,"ka":item.state===2}'>{{item.cdkey}}</li>
          <li v-if='a188.length % 3 !== 0' v-for='n in (3 - a188.length % 3)' :key='"c" + n' class="noborder"></li>
        </ul>
      </iscroll-view>
    </div>
    <div class='cs_tong5_foot'>
      <i @click='all' :class='{active:allbtn}'></i>
      <span @click='all'>全部勾选</span>
      <div class='cs_tong5_btn' @click='sure'>确认结算</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'cstong5',
  props: ['msg'],
  data () {
    return {
      scrollOptions: {
        mouseWheel: true,
        click: true,
        tap: true
      },
      a18: [],
      a58: [],
      a88: [],
      a188: [],
      allbtn: false,
      k18: 0,
      k58: 0,
      k88: 0,
      k188: 0
    }
  },
  mounted () {
  },
  computed: {
    userinfo () {
      return this.$store.state.userinfo
    },
    cdkey () {
      return this.msg
    },
    cstongdata () {
      return this.$store.state.cstongdata
    }
  },
  methods: {
    ret (u) {
      let that = this
      that.$router.push({path: u})
    },
    init () {
      let that = this
      that.a18 = []
      that.a58 = []
      that.a88 = []
      that.a188 = []
      for (var i = 0; i < that.cstongdata.length; i++) {
        if (that.cstongdata[i].type === 18) {
          that.a18.push(that.cstongdata[i])
        } else if (that.cstongdata[i].type === 58) {
          that.a58.push(that.cstongdata[i])
        } else if (that.cstongdata[i].type === 88) {
          that.a88.push(that.cstongdata[i])
        } else if (that.cstongdata[i].type === 188) {
          that.a188.push(that.cstongdata[i])
        }
      }
      setTimeout(function () {
        that.$refs.iscroll.refresh()
      }, 500)
    },
    all () {
      let that = this
      if (that.allbtn === false) {
        for (let i = 0; i < that.a18.length; i++) {
          if (that.a18[i].state === 0) {
            that.a18[i].state = 2
          }
        }
        for (let i = 0; i < that.a58.length; i++) {
          if (that.a58[i].state === 0) {
            that.a58[i].state = 2
          }
        }
        for (let i = 0; i < that.a88.length; i++) {
          if (that.a88[i].state === 0) {
            that.a88[i].state = 2
          }
        }
        for (let i = 0; i < that.a188.length; i++) {
          if (that.a188[i].state === 0) {
            that.a188[i].state = 2
          }
        }
        that.allbtn = true
      } else {
        for (let i = 0; i < that.a18.length; i++) {
          if (that.a18[i].state === 2) {
            that.a18[i].state = 0
          }
        }
        for (let i = 0; i < that.a58.length; i++) {
          if (that.a58[i].state === 2) {
            that.a58[i].state = 0
          }
        }
        for (let i = 0; i < that.a88.length; i++) {
          if (that.a88[i].state === 2) {
            that.a88[i].state = 0
          }
        }
        for (let i = 0; i < that.a188.length; i++) {
          if (that.a188[i].state === 2) {
            that.a188[i].state = 0
          }
        }
        that.allbtn = false
      }
    },
    sure () {
      let that = this
      if (that.allbtn === false) {
        return
      }
      that.$emit('loadbtn')
      let arr = []
      for (let i = 0; i < that.a18.length; i++) {
        if (that.a18[i].state === 2) {
          arr.push(that.a18[i].cdkey)
        }
      }
      for (let i = 0; i < that.a58.length; i++) {
        if (that.a58[i].state === 2) {
          arr.push(that.a58[i].cdkey)
        }
      }
      for (let i = 0; i < that.a88.length; i++) {
        if (that.a88[i].state === 2) {
          arr.push(that.a88[i].cdkey)
        }
      }
      for (let i = 0; i < that.a188.length; i++) {
        if (that.a188[i].state === 2) {
          arr.push(that.a188[i].cdkey)
        }
      }
      if (arr.length === 0) {
        that.$emit('loadbtn')
        return
      }
      that.accounts(arr, 0)
    },
    accounts (arr, start) {
      let that = this
      let str = arr.slice(start, start + 10).join(',')
      that.$jsonp(that.Url + 'accounts?data=' + str).then(function (res) {
        that.k18 += res.k['18']
        that.k58 += res.k['58']
        that.k88 += res.k['88']
        that.k188 += res.k['188']
        if (arr.length > start + 10) {
          that.accounts(arr, start + 10)
        } else {
          let data = {
            k18: that.k18,
            k58: that.k58,
            k88: that.k88,
            k188: that.k188
          }
          that.$emit('loadbtn')
          that.allbtn = false
          if (that.k18 === 0 && that.k58 === 0 && that.k88 === 0 && that.k188 === 0) {
            return
          }
          that.$emit('account', data)
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
