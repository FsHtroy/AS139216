<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>IX列表 | InternetExchange List</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :md="12">
                <CTable bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Region</CTableHeaderCell>
                      <CTableHeaderCell scope="col">IX Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Connect Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Speed</CTableHeaderCell>
                      <CTableHeaderCell scope="col">IP Address</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifHk" size="xl"/> 香港 HongKong,China</CTableHeaderCell>
                      <CTableDataCell>Aperture-IX</CTableDataCell>
                      <CTableDataCell>Physical</CTableDataCell>
                      <CTableDataCell>200Mbps</CTableDataCell>
                      <CTableDataCell>103.152.35.12<br>2406:4440::12</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifCn" size="xl"/> 上海 Shanghai,China</CTableHeaderCell>
                      <CTableDataCell>FSIX Shanghai</CTableDataCell>
                      <CTableDataCell>Tunnel(EOIP)</CTableDataCell>
                      <CTableDataCell>30Mbps</CTableDataCell>
                      <CTableDataCell>2402:e380:142:1::4</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row"><CIcon :icon="cifHk" size="xl"/> 香港 HongKong,China</CTableHeaderCell>
                      <CTableDataCell>ZXIX Hong Kong</CTableDataCell>
                      <CTableDataCell>VPN(OpenVPN)</CTableDataCell>
                      <CTableDataCell>30Mbps</CTableDataCell>
                      <CTableDataCell>2406:840:1f:1000:0:13:9216:1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
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
import { cifHk,cifDe,cifJp,cifCn } from '@coreui/icons';
export default {
  name: 'Contact',
  components: {
    CIcon,
  },
  setup() {
    return {
      cifHk,
      cifDe,
      cifJp,
      cifCn
    }
  }
}
</script>
