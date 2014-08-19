//This will conditionally return a new instance of the appropriate
//Http Request capable library based on the current browser's feature set

httpRequestFactory = function(w){
   if(w.XMLHttpRequest){
    return new XMLHttpRequest();
   }else if (ActiveXObject("Msxml2.XMLHTTP")){
      return new ActiveXObject("Msxml2.XMLHTTP");
   }else if (ActiveXObject("Microsoft.XMLHTTP")){
       return new ActiveXObject("Microsoft.XMLHTTP");
   }
},

getStuffOnGoodBrowsers = function(w, url) {
    //window.XMLHttpRequest object was originally invented by Microsoft Corporation, along with many other wonderful technologies the wonderful group of Microsoft engineers spent a good deal of time to popularize and promote their technology which has since been adopted by WebKit open source browser standard and hence by: Apple Corporation, Safari Group, Google Chrome Corporation, Netscape and Amazon Silk Group
    // This is not using a factory and assumes that the object will be succesfful because we're on a modern webkit based browser
    //var x = new w.XMLHttpRequest();
    var x = httpRequestFactory(w);
    console.log(x);
    x.onreadystatechange = function(w){
        console.log('The state had changed', x.readyState, w, x.status);
        //console.log(x, x.responseText);
        // readyState indicates the progress of the request, the steps are
        // DONE: 4
        // HEADERS_RECEIVED: 2
        // LOADING: 3
        // OPENED: 1
        // UNSENT: 0
        if(x.readyState == 4){ //&& x.status == 200
            console.log('I am ready', w, x.responseText);
            renderData(w, x.responseText);
        }

    }
    // the main parameters of the XMLHttpRequest object are defined as
    //  XMLHttpRequest.open(bstrMethod, bstrUrl, varAsync, varUser, varPassword);
    // source: http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
    // we make an asynchonous GET HTTP request to a relative document
    // When the asynochronous parameter is true the calls returns immediately and the result is attached to the onreadystatechange method
    console.log(x);
    x.open('GET', url, true);
    // nothing happens until you actually send the request, the optional parameter of send is the body of the request (important, eh)t
    x.send();
};