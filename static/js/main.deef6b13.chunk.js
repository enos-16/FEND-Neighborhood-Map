(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e){e.exports=[{name:"Altus Cafe",street:"4325 Broadway",city:"New York",state:"NY",zip:"10033",url:"https://altus-cafe.business.site",pos:{lat:40.852379,lng:-73.93486639999999}},{name:"Tampopo Ramen",street:"1 Bennett Ave",city:"New York",state:"NY",zip:"10033",url:"http://tampoporamennyc.com",pos:{lat:40.850748,lng:-73.93627800000002}},{name:"Manolo Tapas",street:"4165 Broadway",city:"New York",state:"NY",zip:"10033",url:"http://manolotapas.net",pos:{lat:40.8472141,lng:-73.93850789999999}},{name:"Coogans",street:"4015 Broadway",city:"New York",state:"NY",zip:"10032",url:"http://www.coogans.com",pos:{lat:40.841687,lng:-73.939728}},{name:"Malecon",street:"4141 Broadway",city:"New York",state:"NY",zip:"10033",url:"http://maleconrestaurants.com",pos:{lat:40.846402,lng:-73.9386195}},{name:"Saggio",street:"827 W 181st St",city:"New York",state:"NY",zip:"10033",url:"http://www.saggionyc.com",pos:{lat:40.8514155,lng:-73.9395157}},{name:"181 Cabrini",street:"854 W 181st St",city:"New York",state:"NY",zip:"10033",url:"http://181cabrininewyork.com",pos:{lat:40.8511379,lng:-73.9399545}},{name:"Kismat Restaurant and Bar",street:"603 Fort Washington Ave",city:"New York",state:"NY",zip:"10040",url:"http://www.kismatindiannyc.com",pos:{lat:40.8553122,lng:-73.9370321}},{name:"Locksmith Bar",street:"4463 Broadway",city:"New York",state:"NY",zip:"10040",url:"https://www.locksmithbarnyc.com",pos:{lat:40.8573807,lng:-73.9325659}},{name:"La Casa Del Mofongo",street:"1447 St Nicholas Ave",city:"New York",state:"NY",zip:"10033",url:"https://www.yelp.com/biz/la-casa-del-mofongo-new-york-2",pos:{lat:40.8503954,lng:-73.9334181}},{name:"Empanadas Monumental",street:"4093 Broadway",city:"New York",state:"NY",zip:"10032",url:"https://www.yelp.com/biz/empanadas-monumental-new-york-8",pos:{lat:40.8445378,lng:-73.9391488}}]},14:function(e,t,a){e.exports=a(38)},19:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),s=a.n(r),i=(a(19),a(4)),l=a(6),c=a(5),p=a(7),m=a(10),u=a(12),w=a(8),h="1WUIYNKZCO5ABUOWXICQFFSY10JUWKFMRP3L5W2L3OOEFL3H",g="4EW4HKTMV3O4AWG1DOM4VR4ZZDVRLW0XVGPPVI42NVYC1COU",f=20180323,k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={map:null,markers:[],markerProps:[],activeMarker:null,activeMarkerProps:null,showingInfoWindow:!1},a.mapReady=function(e,t){a.setState({map:t}),a.updateMarkers(a.props.locations)},a.onMarkerClick=function(e,t,n){a.onMarkerClose();var o,r="https://api.foursquare.com/v2/venues/search?client_id=".concat(h,"&client_secret=").concat(g,"&v=").concat(f,"&radius=100&ll=").concat(e.position.lat,",").concat(e.position.lng),s=new Headers,i=new Request(r,{method:"GET",headers:s});fetch(i).then(function(e){return e.json()}).then(function(n){var r=a.getBusinessInfo(e,n);if((o=Object(m.a)({},e,{foursquare:r[0]})).foursquare){var s="https://api.foursquare.com/v2/venues/".concat(r[0].id,"/photos?client_id=").concat(h,"&client_secret=").concat(g,"&v=").concat(f);fetch(s).then(function(e){return e.json()}).then(function(e){o=Object(m.a)({},o,{images:e.response.photos}),a.state.activeMarker&&a.setState({showingInfoWindow:!0,activeMarker:t,activeMarkerProps:o})})}else a.setState({showingInfoWindow:!0,activeMarker:t,activeMarkerProps:o})}),a.setState({activeMarkerProps:e,activeMarker:t,showingInfoWindow:!0})},a.getBusinessInfo=function(e,t){return t.response.venues.filter(function(t){return t.name.includes(e.name)||e.name.includes(t.name)})},a.onMarkerClose=function(){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null,activeMarkerProps:null})},a.updateMarkers=function(e){if(e){a.state.markers.forEach(function(e){return e.setMap(null)});var t=[],n=e.map(function(e,n){var o={key:n,index:n,name:e.name,position:e.pos,url:e.url};t.push(o);var r=a.props.google.maps.Animation.DROP,s=new a.props.google.maps.Marker({position:e.pos,map:a.state.map,animation:r});return s.addListener("click",function(){a.onMarkerClick(o,s,null)}),s});a.setState({markers:n,markerProps:t})}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={lat:this.props.lat,lng:this.props.lng},t=this.state.activeMarkerProps;return o.a.createElement(w.Map,{role:"application","aria-label":"map",onReady:this.mapReady,google:this.props.google,zoom:this.props.zoom,styles:["width: 100%","height: 100%"],initialCenter:e,onClick:this.onMarkerClose},o.a.createElement(w.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onMarkerClose},o.a.createElement("div",null,o.a.createElement("h4",null,t&&t.name),t&&t.url?o.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},"See Site"):"",t&&t.images?o.a.createElement("div",null,o.a.createElement("img",{alt:t.name+" food picture",src:t.images.items[0].prefix+"100x100"+t.images.items[0].suffix}),o.a.createElement("p",null,"Image from Foursquare")):"")))}}]),t}(n.Component),d=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyCV3zAwq168vlzJtoIzFUA7Om3SXyPKUYA"})(k),v=a(13),y=(a(36),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={lat:40.8488511,lng:-73.9383702,zoom:15,all:v},a.render=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Favorite Washington Heights Restaurants")),o.a.createElement(d,{lat:a.state.lat,lng:a.state.lng,zoom:a.state.zoom,locations:a.state.all}))},a}return Object(p.a)(t,e),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.deef6b13.chunk.js.map