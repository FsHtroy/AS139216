<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>Peer列表 | Peer List</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :md="8">
                <CTable bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Region</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Network Provider</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Speed</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifJp" size="xl"/> 日本 Japan</CTableHeaderCell>
                      <CTableDataCell>AS208698</CTableDataCell>
                      <CTableDataCell>Tunnel(GRE)</CTableDataCell>
                      <CTableDataCell>30Mbps</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCol>
              <CCol :md="4">
                <CCard class="mb-4">
                  <CCardHeader>
                    <CCardTitle>Peer策略 | Peer Policy</CCardTitle>
                  </CCardHeader>
                  <CCardBody>
                    <CRow>
                      <CCol :md="12">
                        <CCardText>AS139216是一个开放对等的网络。</CCardText>
                        <CCardText>AS139216 are open for peering via IX or direct connect.</CCardText>
                        <b>支持的连接方式 | Support Connect Type:</b>
                        <CCardText>物理连接 | Physical</CCardText>
                        <CCardText>Tunnel:GRE/EOIP/SIT</CCardText>
                        <CCardText>VPN:PPTP/L2TP/OpenVPN/SSTP</CCardText>
                        <CCardText><del>不支持|Not support:Zerotier</del></CCardText>
                        <b>请优先使用Mikrotik路由器支持的连接类型</b><br>
                        <b>Please use the connect type which is mikrotik router supported.</b><br>
                        <b>不支持跨境连接~</b><br>
                        <b>We are not able connect to you cross Mainland,China and international~</b><br>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { CIcon } from '@coreui/icons-vue';
import { cifHk,cifDe,cifJp } from '@coreui/icons';
export default {
  name: 'Peer',
  components: {
    CIcon,
  },
  setup() {
    return {
      cifHk,
      cifDe,
      cifJp,
    }
  }
}
</script>
