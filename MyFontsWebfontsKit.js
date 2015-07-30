/*

 MyFonts Webfont Build ID 3053462, 2015-07-04T06:31:02-0400

 The fonts listed in this notice are subject to the End User License
 Agreement(s) entered into by the website owner. All other parties are 
 explicitly restricted from using the Licensed Webfonts(s).

 You may obtain a valid license at the URLs below.

 Webfont: TransportNewHeavy by K-Type
 URL: http://www.myfonts.com/fonts/k-type/transport-new/heavy/
 Copyright: Transport New Heavy (version 3.0)   &#x2022;    K-Type's redrawing of the UK Transport font originally designed for British road signs by Jock Kinneir and Margaret Calvert, and first published on the Preston bypass in 1958.
 Licensed pageviews: 10,000

 Webfont: TransportNewLight-Italic by K-Type
 URL: http://www.myfonts.com/fonts/k-type/transport-new/light-italic/
 Copyright: Transport New Light Italic (version 3.0)   &#x2022;    K-Type's redrawing of the UK Transport font originally designed for British road signs by Jock Kinneir and Margaret Calvert, and first published on the Preston bypass in 1958.
 Licensed pageviews: 20,000

 Webfont: TransportNewLight by K-Type
 URL: http://www.myfonts.com/fonts/k-type/transport-new/light/
 Copyright: Transport New Light (version 3.0)   &#x2022;    K-Type's redrawing of the UK Transport font originally designed for British road signs by Jock Kinneir and Margaret Calvert, and first published on the Preston bypass in 1958.
 Licensed pageviews: 0

 Webfont: TransportNewMedium-Italic by K-Type
 URL: http://www.myfonts.com/fonts/k-type/transport-new/medium-italic/
 Copyright: Transport New Medium Italic (version 3.0)   &#x2022;    K-Type's redrawing of the UK Transport font originally designed for British road signs by Jock Kinneir and Margaret Calvert, and first published on the Preston bypass in 1958.
 Licensed pageviews: 10,000

 Webfont: TransportNewMedium by K-Type
 URL: http://www.myfonts.com/fonts/k-type/transport-new/medium/
 Copyright: Transport New Medium (version 3.0)   &#x2022;    K-Type's redrawing of the UK Transport font originally designed for British road signs by Jock Kinneir and Margaret Calvert, and first published on the Preston bypass in 1958.
 Licensed pageviews: 10,000


 License: http://www.myfonts.com/viewlicense?type=web&buildid=3053462

 ? 2015 MyFonts Inc
*/
var protocol=document.location.protocol;"https:"!=protocol&&(protocol="http:");var count=document.createElement("script");count.type="text/javascript";count.async=!0;count.src=protocol+"//hello.myfonts.net/count/2e9796";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(count,s);var browserName,browserVersion,webfontType;if("undefined"==typeof woffEnabled)var woffEnabled=!0;var svgEnabled=1,woff2Enabled=0;
if("undefined"!=typeof customPath)var path=customPath;else{var scripts=document.getElementsByTagName("SCRIPT"),script=scripts[scripts.length-1].src;script.match("://")||"/"==script.charAt(0)||(script="./"+script);path=script.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")}
var wfpath=path+"/webfonts/",browsers=[{regex:"MSIE (\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:9,type:"woff"},{version:5,type:"eot"}]},{regex:"Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$3)",type:[{version:11,type:"woff"}]},{regex:"Firefox[/s](\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:3.6,type:"woff"},{version:3.5,type:"ttf"}]},{regex:"Chrome/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:36,type:"woff2"},
{version:6,type:"woff"},{version:4,type:"ttf"}]},{regex:"Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$1)",type:[{version:4.1,type:"woff"},{version:3.1,type:"svg#wf"},{version:2.2,type:"ttf"}]},{regex:"Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",unhinted:!0,type:[{version:5,type:"woff"},{version:4.2,type:"ttf"},{version:1,type:"svg#wf"}]},{regex:"Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",
versionRegex:"1.0",type:[{version:1,type:"svg#wf"}]},{regex:"Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:5.1,type:"woff"},{version:3.1,type:"ttf"}]},{regex:"Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",versionRegex:"new Number(RegExp.$3)",type:[{version:24,type:"woff2"},{version:11.1,type:"woff"},{version:10.1,type:"ttf"}]}],browLen=browsers.length,suffix="",i=0;
a:for(;i<browLen;i++){var regex=RegExp(browsers[i].regex);if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);var typeLen=browsers[i].type.length;for(j=0;j<typeLen;j++)if(browserVersion>=browsers[i].type[j].version&&(!0==browsers[i].unhinted&&(suffix="_unhinted"),webfontType=browsers[i].type[j].type,"woff"!=webfontType||woffEnabled)&&("woff2"!=webfontType||woff2Enabled)&&("svg#wf"!=webfontType||svgEnabled))break a}else webfontType="woff"}
/(Macintosh|Android)/.test(navigator.userAgent)&&"svg#wf"!=webfontType&&(suffix="_unhinted");var head=document.getElementsByTagName("head")[0],stylesheet=document.createElement("style");stylesheet.setAttribute("type","text/css");head.appendChild(stylesheet);
var fonts=[{fontFamily:"TransportNewHeavy",url:wfpath+"2E9796_0"+suffix+"_0."+webfontType},{fontFamily:"TransportNewLight-Italic",url:wfpath+"2E9796_1"+suffix+"_0."+webfontType},{fontFamily:"TransportNewLight",url:wfpath+"2E9796_2"+suffix+"_0."+webfontType},{fontFamily:"TransportNewMedium-Italic",url:wfpath+"2E9796_3"+suffix+"_0."+webfontType},{fontFamily:"TransportNewMedium",url:wfpath+"2E9796_4"+suffix+"_0."+webfontType}],len=fonts.length,data_fn;
"ttf"==webfontType?data_fn="_unhinted"==suffix?"2E9796_data_unhintedttf.css":"2E9796_datattf.css":"woff"==webfontType&&(data_fn="_unhinted"==suffix?"2E9796_data_unhintedwoff.css":"2E9796_datawoff.css");var link=document.createElement("link");link.setAttribute("rel","stylesheet");link.setAttribute("type","text/css");link.setAttribute("href",wfpath+data_fn);head.appendChild(link);
for(var css="",i=0;i<len;i++){var format="svg#wf"==webfontType?'format("svg")':"ttf"==webfontType?'format("truetype")':"eot"==webfontType?"":'format("'+webfontType+'")',css=css+("@font-face{font-family: "+fonts[i].fontFamily+";src:url("+fonts[i].url+")"+format+";");fonts[i].fontWeight&&(css+="font-weight: "+fonts[i].fontWeight+";");fonts[i].fontStyle&&(css+="font-style: "+fonts[i].fontStyle+";");css+="}"}stylesheet.styleSheet?stylesheet.styleSheet.cssText=css:stylesheet.innerHTML=css;
