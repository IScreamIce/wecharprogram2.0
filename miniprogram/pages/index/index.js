var v=getApp();
var k=11;

console.log("app.js value= "+v.a);
console.log("app.js value= " + v.b);
console.log("value= " + k);
v.myfunction();


Page({
  data:{
      inittext:"ni hao ",
      statei:"init: ",
      stateo: "1234",
      state:true,
      pepo:{
        name: "lisi",
        sex:"nan"
      }
  },
  onLoad(){
    console.log("Page onLoad");
  },
  onShow() {
    console.log("Page onShow");
  },
  onPullDownRefresh() {
    console.log("Page onPullDownRefresh");
  },
  onShareAppMessage(){
    return {
      title: '转发给IScream',
      path: '/index/index'
    }
  },
  clicktext:"hello word",
  x: 22,
  print(){
    console.log("print message "+this.x);
  },
  showtext(){
    //console.log(this.clicktext);
    this.setData({ inittext:"xixihaha"})
    v.myfunction();
    v.a=20;
    v.myfunction();
    this.x=109;
    this.print();
  }
})
