<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle v-if="typeof redirectList[path] !== 'undefined'">We are redirecting you to {{redirectList[path]['name']}} in 3s..</CCardTitle>
            <CCardTitle v-if="typeof redirectList[path] === 'undefined'">Sorry This Path Didn't Set.<a href="/">Back To Home</a></CCardTitle>
          </CCardHeader>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      path: this.$route.params.path,
      redirectList: {
        'he-dot-net-as139216':{
          'name':'He.net',
          'url':'https://bgp.he.net/as139216',
        },
        'peeringdb-as139216':{
          'name':'PeeringDB',
          'url':'https://peeringdb.com/net/20186',
        },
        'htroy-blog':{
          'name':'Htroy\'s Blog',
          'url':'https://htroy.dev',
        },
        'htroy-cloudflare-partner-panel':{
          'name':'Htroy Cloudflare Partner Panel',
          'url':'https://cf.htroy.dev',
        }
      },
    }
  },
  setup() {
    return {}
  },
  mounted: function () {
    this.onLoadPage();
  },
  methods: {
    onLoadPage: function () {
      if (typeof this.redirectList[this.path] !== 'undefined') {
        setTimeout(this.redirect, 3000);
      }
    },
    redirect:function (){
      window.open(this.redirectList[this.path]['url'],'_blank')
    }
  }
}
</script>
