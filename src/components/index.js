import zzHeader from './zzHeader.vue'
import zzFooter from './zzFooter.vue'

const components = [
  zzHeader,
  zzFooter
]
const install = (Vue) => {
  if (install.installed) {
    return
  }
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}
