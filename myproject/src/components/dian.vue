<template>
    <div id="dian">
         <div id="leader" @click="tap()">
             <div><span class="iconfont icon-hot-full"></span>热门</div>
             <div><span class="iconfont icon-meishi"></span>食类</div>
             <div><span class="iconfont icon-shipin"></span>膳食</div>
             <div><span class="iconfont icon-xingzhuang"></span>周边</div>
         </div>
         <!-- 店铺活动 -->
         <div class="biaoti">
            <p><span class="iconfont icon-shouye1"></span>店铺活动</p>
            
         </div>

         <div id="yingyang">
            <div class="content">
                 <div class="zuo">
                     <div class="shang">
                       <img src="static/sha.jpg" alt="">
                     </div>
                     <p>沙县小吃</p>
                     <p><span class="iconfont icon-dizhi"></span>500m</p>
                 </div>
                 <div class="you">
                   <h3>滋补老鸭汤</h3>
                   <p>老鸭汤介绍老鸭汤介绍老鸭汤介绍老鸭汤介绍老鸭汤介绍老鸭汤介绍</p>
                   <p><span class="iconfont icon-jian1"></span> 满100减20 满50减10</p>
                   <p><span class="iconfont icon-hui1"></span> 每天前10位免费一领一碗老鸭汤</p>
                 </div>
                 <span class="iconfont icon-jian" ></span>
            </div>
 
 
         </div>
         <!-- 饭咖热铺 -->
         <div class="biaoti">
            <p><span class="iconfont icon-hot-full"></span>饭咖热铺</p>
            
         </div>
         <div id="repu">
             <div class="repucon">
                  <div class="zuo">
                      <img src="static/baozi.jpg">

                  </div>
                  <div class="you">
                    <h3>哈哈包子铺<span class="iconfont icon-xin"></span>5612</h3>
                    <p>包子简洁包子简洁包子简洁包子简洁包子简洁</p>
                    <p><span>品类多</span> <span>安静</span> <span>环境好</span></p>
                    <p>
                      <span class="iconfont icon-dizhi1">大学路航海路往东300m</span>
                      <span class="iconfont icon-qicheqianlian-">6666</span>
                      <span class="iconfont icon-qicheqianlian-">8888</span>
                    </p>
                  </div>
            </div>
         </div>
         









    </div>
</template>
  
  <script>
  export default {
    name: 'Dian',
    data(){
      return {
        str:"店家",
        msg: ""
      }
    },
    methods:{
       tap(){
         console.log("555")
       }
    },
    mounted() {
      this.$emit("toparent",this.str)
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    #dian{padding: 0 5px}
    #leader{width: 100%;height: 40px;display: flex;justify-content: space-between}
    #leader>div{width: 24%;height:40px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow: 0px 0px 5px #888888;text-align: center;line-height: 40px;font-weight: bold}
    #leader>div span{color: #fb5a5b;margin-right: 5px;font-weight: bold}

      .biaoti{height: 50px;display: flex;justify-content: space-between;align-items: center;margin: 10px 0}
      .biaoti p{width: 150px;height: 50px;}
      .biaoti p:nth-of-type(1){font-size: 20px;font-weight: bold;text-align: left;line-height: 50px}
      .biaoti p:nth-of-type(1) span{color:#fcdd13;font-size: 20px;margin-right: 10px}

      .biaoti p:nth-of-type(2){width:80px;border-radius: 20px;height:30px;text-align: center;line-height: 30px;font-weight: bold;background: #fdd90a;color: #fff;}
      .toubiao{color: #fff;font-size: 14px;line-height: 30px;text-align: center;height: 30px;background: #fe6815;margin-top: 5px;border-top-left-radius: 8px;border-top-right-radius: 8px; }

   /* 营养 */
   #yingyang{min-height: 200px;height: auto!important;margin-top: 5px;}
    #yingyang .content{position:relative;height: 180px;display: flex;justify-content: space-between;border-radius: 10px;box-shadow: 0px 5px 10px #d5d1d1;border: 1px solid #e8e6e6}
    #yingyang .zuo{width: 30%;border-radius: 10px;padding-top: 10px;padding-right: 10px;}
    #yingyang .zuo .shang{width: 100%;height: 100px;border-radius: 50%;}
    #yingyang .zuo .shang img{width: 100%;}
    #yingyang .zuo p:nth-of-type(1){width: 100%;height: 20px;margin-top: 5px;text-align: center;line-height: 30px;font-weight: bold;font-size: 14px;color: #3d3c3c;}
    #yingyang .zuo p:nth-of-type(2){width: 100%;height: 25px;margin-top: 5px;text-align: center;line-height: 30px;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding-left: 5px;font-size: 14px;color: #3d3c3c;}
   
    #yingyang .you{width: 65%;border-top-right-radius: 10px;border-bottom-right-radius: 10px;padding-top: 10px;padding-left: 15px;border-left: 1px solid #b5b3b3}
    #yingyang .you  h3{font-size: 16px;font-weight: bold}
    #yingyang .you p:nth-of-type(1){width: 100%;height: 40px;;margin-top: 15px;padding-right:15px;overflow: hidden;font-size:14px;color: #3d3c3c;}
    #yingyang .you p:nth-of-type(2){width: 100%;height: 30px;;margin-top: 5px;padding-right:5px;color: #3d3c3c;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:14px;line-height:30px}
    #yingyang .you p:nth-of-type(3){width: 100%;height: 25px;;margin-top: 10px;color: #3d3c3c;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:14px;line-height:25px}
    #yingyang .you p:nth-of-type(2) span{color: #72cc8f;font-size: 26px}
    #yingyang .you p:nth-of-type(3) span{color: #fadf06;font-size: 20px}
    #yingyang .icon-jian{position: absolute;top: 0px;right: 10px;font-size: 30px;color: #fadf06}
  /* 热铺 */
  #repu{min-height: 200px;height: auto!important;margin-top: 5px;}
  #repu .repucon{height: 110px;border-radius: 10px;display: flex;justify-content: space-between}
  #repu .repucon .zuo{width: 30%;height: 110px;background: yellow;border-radius: 10px;}
  #repu .repucon .zuo img{width: 100%;height: 110px;border-radius: 10px;}
  #repu .repucon .you{width: 68%;height: 110px;border-radius: 10px;padding: 5px;box-sizing: border-box}
  #repu .repucon .you h3{font-size: 18px;font-weight: bold;color: #6f6d6d}
  #repu .repucon .you h3 span{margin-left: 10px;color: red}
  #repu .repucon .you p:nth-of-type(1){width: 100%;font-size: 14px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color: #7e7e7e;margin:5px 0}
  #repu .repucon .you p:nth-of-type(3){margin-top: 10px;height: 20px;text-align: left;line-height: 20px}
  #repu .repucon .you p:nth-of-type(2) span{border: 1px solid red;border-radius: 5px;padding: 2px 3px;font-size: 12px;color: red}
  #repu .repucon .you p:nth-of-type(3) span{display: inline-block;font-size: 12px;width: 20%;height: 16px;color: blue;}
  #repu .repucon .you p:nth-of-type(3) span:nth-of-type(1){width: 50%;height: 16px;overflow: hidden;}
 



  </style>
  