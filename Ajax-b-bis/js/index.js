function loadXMLDoc(sq)
{
var url = "calendario.xml";
var xmlhttp;
var txt,x,xx,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)//200 via server 0 in locale
    {
    txt="<table border='1'><tr><th colspan='2'>Casa</th><th colspan='2'>Ospite</th></tr>";
  //La resposne è una stringa di testo console.log(xmlhttp.responseText)
 var res = xmlhttp.responseText;
 // per vederla come file XML va farsata
 parser=new DOMParser();
 x = parser.parseFromString(res,"text/xml"); 
  //A questo punto è possibile usare DOM console.log(x)
      x = x.documentElement.getElementsByTagName("partita");
    for (i=0;i<x.length;i++)
      {
      //per l'elemento corrente trovo i valori di case (sqC) e ospiti (sqO) e verifico che siano uguali al parametro richiesto (sq)
      var sqC = x[i].childNodes[3].firstChild.nodeValue;
      var sqO = x[i].childNodes[5].firstChild.nodeValue;
      if (sq == sqC || sq == sqO){
      txt=txt + "<tr>";
      xx=x[i].getElementsByTagName("casa");
        {
        try
          {
					txt=txt + "<td>" + sqC + "</td>";
          }
        catch (er)
          {
          txt=txt + "<td> </td>";
          }
        }
        xx=x[i].getElementsByTagName("ptCasa");
        {
        try
          {
          txt=txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
          }
        catch (er)
          {
          txt=txt + "<td> </td>";
          }
        }
      xx=x[i].getElementsByTagName("ospite");
        {
        try
          {
            txt=txt + "<td>" + sqO + "</td>";
          }
        catch (er)
          {
          txt=txt + "<td> </td>";
          }
        }
        xx=x[i].getElementsByTagName("ptOspite");
        {
        try
          {
          txt=txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
          }
        catch (er)
          {
          txt=txt + "<td> </td>";
          }
        }
      txt=txt + "</tr>";
      }
      }
    txt=txt + "</table>";
    document.getElementById('CaricaDati').innerHTML=txt;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}