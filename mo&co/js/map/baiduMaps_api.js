
// 百度地图API功能
var map = new BMap.Map('allmap');
var poi = new BMap.Point(113.333289,23.153658);
map.centerAndZoom(poi, 15);
map.enableScrollWheelZoom();

var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '<img src="/images/maps_logo.png" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                '地址：广州市天河区林和中路63号东方宝泰广场B1层<br/> 电话：20-38096169<br/> 营业时间：周一至周日 10:00-22:00<br/> Email：www.mo-co.com' +
              '</div>';

//创建检索信息窗口对象
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    title: "Moco摩安珂(东方宝泰广场店)",      //标题
    width: 290,             //宽度
    height: 105,              //高度
    panel: "panel",         //检索结果面板
    enableAutoPan: true,     //自动平移
    searchTypes: [
        BMAPLIB_TAB_SEARCH,   //周边检索
        BMAPLIB_TAB_TO_HERE,  //到这里去
        BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
});
var marker = new BMap.Marker(poi); //创建marker对象
marker.enableDragging(); //marker可拖拽
marker.addEventListener("click", function (e) {
    searchInfoWindow.open(marker);
})
map.addOverlay(marker); //在地图中添加marker





