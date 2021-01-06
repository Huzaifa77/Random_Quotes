function generate(){
    fetch('https://api.quotable.io/random')
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        document.getElementById("g").innerHTML=data.tags;
        document.getElementById("quotes").innerHTML=data.content;
        document.getElementById("author").innerHTML="--"+data.author;
        
    })
    .catch(function(err){
        console.log(err);
    });
}