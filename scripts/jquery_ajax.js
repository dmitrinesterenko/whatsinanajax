(function(w){
    el = w.document.getElementById('get');
    el.onclick = function(){
        $.ajax({
            url:'/scripts/sample_data.json'

        }).done(function(data){
            renderData(w, data);
            });
    }
    cors = w.document.getElementById('get_cross_domain');
    cors.onclick = function(){
        $.ajax({
            method: 'GET',
            url:'http://goofdogs.com:3301/scripts/sample_data_jsonp.json',
            /*dataType: "jsonp",
            jsonpCallback: "renderJsonPData"*/

        }).done(function(data){
                renderData(w, data);
            });

    }
}(window)) ,
renderJsonPData = function(data){
  renderData(window, data.content);
},

renderData = function(w, data){
    console.log(w, data);
    var p = document.createElement("p"),
        el = document.getElementById('result')
    p.innerText = data;
    // note that no parsing of the data type is being done
    el.appendChild(p);
}


