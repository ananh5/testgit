import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from "../components/search.vue"
import Xican from "../components/xican.vue"
import Djpuzi_cai from "../components/djpuzi_cai.vue"
import Djpuzi_yhq from "../components/djpuzi_yhq.vue"
import Ddxinxi from "../components/ddxinxi.vue"
import Caipxx from "../components/caipxx.vue"
import Lisddxinx from "../components/lisddxinx.vue"
import Lisddxinx from "../components/lisddxinx.vue"

Vue.use(Router)



//路由页面
export default new Router({
  routes: [
   {
      path:"/lisddxinx",
      component:Lisddxinx
    },

    {
      path:"/search",
      component:Search
    },
    {
      path:"/xican",
      component:Xican
    },
    {
      path:"/djpuzi_cai",
      component:Djpuzi_cai
    },
    {
      path:"/djpuzi_yhq",
      component:Djpuzi_yhq
    },
     {
      path:"/ddxinx",
      component:Ddxinxi
    },
    {
      path:"/caipxx",
      component:Caipxx
    },
   

    {
      path:"/",
      redirect:"/search"
    }
  ]
})

