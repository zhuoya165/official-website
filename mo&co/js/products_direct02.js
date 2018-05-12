
// JavaScript Document
pc.ready(function(){
pc.addEvent(document.body, 'click', function(e){
thisObj = document.all?event.srcElement:e.target;
do{
if(thisObj.className.indexOf("ks-inTxt")>=0){ return};
if(thisObj.className.indexOf("ks-inBtn")>=0){ return};
if(thisObj.tagName.toUpperCase() == "BODY"|| thisObj.tagName.toUpperCase() == 'HTML'){document.getElementById('formKs').className=' ';return;};
thisObj = thisObj.parentNode;
}while(thisObj.parentNode);
});
//设备判断给杂志不同链接
if(document.getElementById("JappStore")){
var ua = navigator.userAgent.toLowerCase()
if(ua.indexOf("android") > -1 || ua.indexOf("iphone") > -1 || ua.indexOf("ipod")>-1){
document.getElementById("JappStore").href = "http://itunes.apple.com/cn/app/jia-ju-za-zhi/id543134887?mt=8" 
}else{
document.getElementById("JappStore").href = "http://itunes.apple.com/cn/app/jia-ju-za-zhi/id502464124?mt=8"     
} 
}
});
window.sliderA01 = new pc.tab({
target: pc.getElems('#sliderA01 .sliderA-con .cBox'),
control: pc.getElems('#sliderA01 .sliderA-tab span'),
effect: 'slide',
autoPlay: true,
merge:true,
stay:4000,
onchange:function(i){
var tag2;
if(this.curPage>=0){
tag2=this.curPage%16;
}else{
tag2=0;
}
var nli = this.target[tag2];
if(!nli.todo){
nli.id = 'nid-sliderA01'+tag2;
var sliderA01 = Lazy.create({
lazyId:nli.id,
trueSrc:'#src1',
unNeedListen:true
});
Lazy.init(sliderA01);
nli.todo=true;
}
}
});
new pc.tab({
target:pc.getElems('#switchA01 .switchA-con .contentdiv'),
control:pc.getElems('#switchA01 .switchA-tab .doc'),
onchange:function(){
var nli = this.target[this.curPage];
if(!nli.todo){
nli.id = 'nid-switchA01'+this.curPage;
var switchA01 = Lazy.create({
lazyId:nli.id,
trueSrc:'#src1',
unNeedListen:true
});
Lazy.init(switchA01);
nli.todo=true;
}
}
});
new pc.tab({
target:pc.getElems('#switchB01 .switchB-con .switchBCon'),
control:pc.getElems('#switchB01 .switchB-tab .doc'),
link:true,
onchange:function(){
var nli = this.target[this.curPage];
if(!nli.todo){
nli.id = 'nid-switchB01'+this.curPage;
var switchB01 = Lazy.create({
lazyId:nli.id,
trueSrc:'#src2',
unNeedListen:true
});
Lazy.init(switchB01);
nli.todo=true;
}
}
});
new pc.tab({
target:pc.getElems('#switchB02 .switchB-con .switchBCon'),
control:pc.getElems('#switchB02 .switchB-tab .doc'),
link:true,
autoPlay: true,
stay:4000
})
new pc.directionHover({
elements: pc.getElems('.zxProCon'),
hoverSelector: '.zxProConHov'
});
new pc.directionHover({
elements: pc.getElems('.brandsRecomm .dirHover'),
hoverSelector: '.brandsRecomm .dirHoverCon'
});
new pc.tab({
target:pc.getElems('#jmZhuanqu .dCon'),
control:pc.getElems('#jmZhuanqu .mZqTab .doc'),
link:true
});
new pc.tab({
target:pc.getElems('#jmProcuct .mpro-con .contentdiv'),
control:pc.getElems('#jmProcuct .mpro-tab .doc'),
link:true
});
new pc.tab({
target:pc.getElems('#switchF01 .switchF-box'),
control:pc.getElems('#switchF01 .switchF-tab .doc'),
link:true,
effect: 'slide' ,
direction: 'x',
merge:true
});
new pc.tab({
target:pc.getElems('#switchC01 .switchC-con .contentdiv'),
control:pc.getElems('#switchC01 .switchC-tab .doc'),
link:true,
onchange:function(){
var nli = this.target[this.curPage];
if(!nli.todo){
nli.id = 'nid-switchC01'+this.curPage;
var switchC01 = Lazy.create({
lazyId:nli.id,
trueSrc:'#src1',
unNeedListen:true
});
Lazy.init(switchC01);
nli.todo=true;
}
}
});
new pc.tab({
target:pc.getElems('#sliderA03 .sliderA-con .contentdiv'),
control:pc.getElems('#sliderA03 .sliderA-tab .doc'),
autoPlay:true,
stay:4000
});
function fn_a(){
var myDate = new Date(),d=myDate.getDay();
if(d==0){d==1}
if(d==6){d==1}
new pc.tab({
target:pc.getElems('#switch-f-1 .switch-f-box'),
control:pc.getElems('#switch-f-1 .switch-f-tab .tab'),
link : true,
playTo:(d-1)
});
}
fn_a();
new pc.tab({
target:pc.getElems('#group-slider .contentdiv'),
control:pc.getElems('#group-paginate-slider .toc'),
autoPlay:true,
stay:3500
});
new pc.tab({
target:pc.getElems('#groupSwitchA1 .contentdiv'),
control:pc.getElems('#groupSwitchA1 .groupSwitchTab .doc'),
link : true
});
new pc.tab({
target:pc.getElems('#groupSwitchA2 .contentdiv'),
control:pc.getElems('#groupSwitchA2 .groupSwitchTab .doc')
});
new pc.tab({
target:pc.getElems('.friend .switchD-con .contentdiv'),
control:pc.getElems('#switchD01 .switchD-tab .doc'),
link:true
});
new pc.tab.scroll({
target: pc.getElems('#groupPro li'),
control:  false,
autoPlay : true,
stay : 3500,
width : 988
});
new pc.tab({
target:pc.getElems('#switchA02 .switchA-con .contentdiv'),
control:pc.getElems('#switchA02 .switchA-tab .doc')
});
new pc.tab({
target: pc.getElems('#sliderA04 .sliderA-con .sliderA-box'),
control: pc.getElems('#sliderA04 .sliderA-tab .tab'),
effect: 'slide',
autoPlay: true
});
