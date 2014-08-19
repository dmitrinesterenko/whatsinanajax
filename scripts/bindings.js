(function(w){
    el = w.document.getElementById('get');
    el.onclick = function(){
        getStuffOnGoodBrowsers(w, '/scripts/sample_data.json');
    }
    cors = w.document.getElementById('get_cross_domain');
    cors.onclick = function(){
        getStuffOnGoodBrowsers(w, 'http://goofdogs.com:3301/scripts/sample_data.json');
    }
}(window))

renderData = function(w, data){
    console.log(w, data);
    var p = document.createElement("p"),
        el = document.getElementById('result')
    p.innerText = data;
    // note that no parsing of the data type is being done
    el.appendChild(p);
}