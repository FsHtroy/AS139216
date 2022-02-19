<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>关于AS139216 | About AS139216</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CCardText>河童爆炸试验网（Htroy Research Network，AS139216）由 Htroy 运营。目前仅支持IPV6。</CCardText>
            <CCardText>Htroy Research Network,AS139216 is operated by Htroy.This network only supports IPv6.</CCardText>
            <CCardText>目前已接入PoP点 | PoP List:<br>
              中国香港(Hongkong, China)🇭🇰<br>
              中国(Mainland, China)🇨🇳 深圳Shenzhen/佛山Foshan/浙江Zhejiang/上海Shanghai/广州Guangzhou/北京Beijing/南京Nanjing/成都Chengdu<br>
              日本(Japan)🇯🇵 东京Tokyo<br>
              美国(US)🇺🇸  美国西部US West<br>
              新加坡(Singapore)🇸🇬<br>
              德国(Germany)🇩🇪
            </CCardText>
            <CCardText>
              Tips:<br>
              我没有💰，所以在中国大陆仅部署了网络设施，并无对接任何的上游。这仅意味着你可以在这些地域就近接入我的网络。<br>
              I'm poooooooooor.So I have deployed network devices in Mainland,China but didn't connect to any upstream.<br>
              It means you can only connect to AS139216 nearby.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <CCardText>
              关于Htroy | About Htroy<br>
              24岁<del>，是学生</del>， 中国大陆某互联网公司在职
            </CCardText>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>赞助&支持 | Sponsor</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CCardText>特别鸣谢:</CCardText>
            <CCardText>ZX | Dr.Cai | Martian | AntMan | Archeb | Soha | Haima | Tutu Green | TWD2 | Evsioon </CCardText>
            <CCardText>我赞助我自己</CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},
  setup() {
    return {}
  },
}
</script>
