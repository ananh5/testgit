<template>
    <div id="caipxx">
        <header>
	      <div><p><span class="iconfont icon-203"></span></p></div>
	      <div>{{str}}</div>
	      <div><!--<p><span class="iconfont icon-sousuo"></span></p>--></div>  
	    </header>  
        <section>

	    </section>
    </div>
  </template>
  
  <script>
  

  export default {
    name: 'Caipxx',
    data(){
      return {
        str:"菜品详情",
      }
    },
    methods:{
	    getdata(msg){
	      this.tit=msg
	    }
	  },
    mounted() {
      this.$emit("toparent",this.str)
      
    },
        
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    	#caipxx {height: 100vh;display: flex;flex-direction: column;}
	header{height:45px;background:#222222;color:#fff;text-align: center;line-height: 45px;font-size:20px;display: flex;justify-content: space-between;overflow: hidden;}
	header>div{height:45px;width: 100px;}
	header>div:nth-of-type(1){text-align: left;padding-left: 5px;font-size: 16px;display: flex;align-items: center;text-align: center;line-height: 28px;}
	
	header>div:nth-of-type(1) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-left: 5px;text-align: center;line-height: 28px;}
	header>div:nth-of-type(1) span{font-size: 22px;color: #fff;display: block;}
	
	header>div:nth-of-type(3){text-align: right;padding-right: 5px;display: flex;align-items: center;justify-content: flex-end;text-align: center;line-height: 28px;}
	header>div:nth-of-type(3) span{font-size: 22px;color: #fff}
	header>div:nth-of-type(3) p{width: 28px;height: 28px;background: #fddb13;border-radius: 50%;margin-right: 5px}
	section{flex: 1;overflow: auto;padding: 0 10px;margin-top: 20px;}
	
	</style>
  
  