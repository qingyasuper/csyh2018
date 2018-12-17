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
      <div class='cs_tong5_btn'>确认结算</div>
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
      allbtn: false
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
          if (that.a18[i].state === 1) {
            that.a18[i].state = 2
          }
        }
        for (let i = 0; i < that.a58.length; i++) {
          if (that.a58[i].state === 1) {
            that.a58[i].state = 2
          }
        }
        for (let i = 0; i < that.a88.length; i++) {
          if (that.a88[i].state === 1) {
            that.a88[i].state = 2
          }
        }
        for (let i = 0; i < that.a188.length; i++) {
          if (that.a188[i].state === 1) {
            that.a188[i].state = 2
          }
        }
        that.allbtn = true
      } else {
        for (let i = 0; i < that.a18.length; i++) {
          if (that.a18[i].state === 2) {
            that.a18[i].state = 1
          }
        }
        for (let i = 0; i < that.a58.length; i++) {
          if (that.a58[i].state === 2) {
            that.a58[i].state = 1
          }
        }
        for (let i = 0; i < that.a88.length; i++) {
          if (that.a88[i].state === 2) {
            that.a88[i].state = 1
          }
        }
        for (let i = 0; i < that.a188.length; i++) {
          if (that.a188[i].state === 2) {
            that.a188[i].state = 1
          }
        }
        that.allbtn = false
      }
    }
  }
}
</script>

<style scoped>
</style>
