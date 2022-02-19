<template>
  <div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>自建网络设施 | Self managed datacenter</CCardTitle>
          </CCardHeader>
        </CCard>
      </CCol>
      <CCol :md="6">
        <CCard class="mb-4">
          <CCardHeader>
            <CCardTitle>Shunde(Foshan) DC-10Giagbit LAN</CCardTitle>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :md="6">
                <h5>Network Devices:</h5>
                <CCardText>
                  MikroTik RB4011iGS+*2<br>
                  MikroTik CSS326-24G-2S+RM<br>
                  Huawei S1720-28GWR-4X<br>
                  Huawei MA5675M*2
                </CCardText>
              </CCol>
              <CCol :md="6">
                <h5>Network Provider:</h5>
                <CCardText>
                  <b>ChinaTelecom:</b><br>
                  AS4134(163) 200Mbps*2<br>
                  AS4809(CN2) 200Mbps<br>
                  TR069 Management Network Access<br>
                  <b>Gcable Guangdong:</b><br>
                  Hybrid-NAT 200Mbps*2
                </CCardText>
              </CCol>
              <CCol :md="12">
                <CImage src="https://s2.loli.net/2022/02/19/NoP3slnumgkFK7O.jpg" fluid/>
              </CCol>
              <CCol :md="12">
                <h6>Offer Here:</h6>
                <CCardText>
                  KVM VPS(Proxmox VE)<br>
                  LXC Container(Proxmox VE)<br>
                  Hardware Colocation<br>
                  ChinaTelecom Guangdong TR069 Management Network Access Port
                </CCardText>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :md="6">
        <CRow>
          <CCol :md="12">
            <CCard class="mb-4">
              <CCardHeader>
                <CCardTitle>Foshan DC-1Giagbit LAN</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol :md="6">
                    <h5>Network Devices:</h5>
                    <CCardText>
                      MikroTik RB760iGS<br>
                      Huawei MA5675M<br>
                    </CCardText>
                  </CCol>
                  <CCol :md="6">
                    <h5>Network Provider:</h5>
                    <CCardText>
                      <b>ChinaTelecom:</b><br>
                      AS4134(163) 200Mbps
                    </CCardText>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol :md="12">
            <CCard class="mb-4">
              <CCardHeader>
                <CCardTitle>Shenzhen DC-1Giagbit LAN</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol :md="6">
                    <h5>Network Devices:</h5>
                    <CCardText>
                      MikroTik RB4011iGS+5HacQ2HnD<br>
                      MikroTik RB4011iGS+<br>
                      Netgear GS110TP<br>
                      Huawei MA5675M<br>
                    </CCardText>
                  </CCol>
                  <CCol :md="6">
                    <h5>Network Provider:</h5>
                    <CCardText>
                      <b>ChinaTelecom:</b><br>
                      AS4134(163) 100Mbps
                    </CCardText>
                  </CCol>
                  <CCol :md="12">
                    <CImage src="https://s2.loli.net/2022/02/19/cJysUfMXwx2LdSu.png" fluid/>
                  </CCol>
                  <CCol :md="12">
                    <h6>Offer Here:</h6>
                    <CCardText>
                      ChinaTelecom Guangdong TR069 Management Network Access Port
                    </CCardText>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Datacenter',
  components: {},
  setup() {
    return {}
  },
}
</script>
