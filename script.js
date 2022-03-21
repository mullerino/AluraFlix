var listFilmes =[];
var listSeries = [];
var listAnimes = [];
var a=0;
var f=0;
var s=0;
var limparAll, limparPname =0;
var aNames = [];
var fNames = [];
var sNames = [];
var ctrl = [];

var msgError= document.getElementById("invalid");


function Adicionar(){
    var name = document.getElementById("nom").value;
    var select = document.getElementById("select").value;
    var addPoster = document.getElementById("addUrl").value;

    if(addPoster=='' && select=="Selecione"){
        alert("Você não informou nada :(");
    }
    else if(select=="Selecione"){
        alert("Escolha uma categoria");
    }
    else if(name==""){
        alert("Você não digitou o título");
    }   
    else if(addPoster==''){
        alert("Você esqueceu de digitar o link");
    }
    else if(addPoster!=''){
        if(addPoster.endsWith("jpg") || addPoster.endsWith("png")){
            limitador();

            if(select == "Série" && listSeries.length<5){
                addSerie(addPoster,listSeries,name);
            }

            if(select == "Anime" && listAnimes.length<5){    
                console.log(name);         
                addAnime(addPoster,listAnimes,name);
            }

            if(select == "Filme" && listFilmes.length<5){
                addFilme(addPoster,listFilmes,name);
            }  
        }
        else {
           alert("Link inválido");
      }      
    }
}

function addAnime(listA,vetor,nome){
    if((limparAll==1 || limparPname==1) && (vetor[a]=="" || vetor[a]===undefined)){
        ordem();
        adcAnimeTela(listA,vetor,nome);
    }

    else if((limparAll==0 || limparPname==0) && (vetor[a]=="" || vetor[a]===undefined)){
        adcAnimeTela(listA,vetor,nome);
    } 

    else if((vetor[a]!==undefined  || vetor[a]!="") && limparPname==0){
        if(vetor[a]!==undefined){
            a++;
            if(vetor[a]!==undefined && vetor[a]!=""){
                a++;
                if(vetor[a]!==undefined && vetor[a]!=""){
                    a++;    
                }
            }
        }
        adcAnimeTela(listA,vetor,nome);
    }

    if(a<5){
        a++;
    }
    limparAll=0;
    limparPname=0;
}

function adcAnimeTela(listA,vetor,nome){
    vetor[a] = listA;
    aNames[a]= nome;
    document.getElementById("imgA"+a).src= vetor[a];
    document.getElementById("titulo"+a).innerHTML = aNames[a];
    window.scrollBy(800, 545);
}

function addFilme(listF,vetor,nome){

    if((limparAll==1 || limparPname==1) && (vetor[f]=="" || vetor[f]===undefined)){
        ordem();
        adcFilmeTela(listF,vetor,nome);
    }
    else if((limparAll==0 || limparPname==0) && (vetor[f]=="" || vetor[f]===undefined)){
        adcFilmeTela(listF,vetor,nome);
    }
    else if((vetor[f]!==undefined  || vetor[f]!="") && limparPname==0){
        if(vetor[f]!==undefined){
            f++;
            if(vetor[f]!==undefined && vetor[f]!=""){
                f++;
                if(vetor[f]!==undefined && vetor[f]!=""){
                    f++;    
                }
            }
        }
        adcFilmeTela(listF,vetor,nome);
    }
    if(f<5){
        f++;
    }
    limparAll=0;
    limparPname=0;
}

function adcFilmeTela(listF,vetor,nome){
    vetor[f]= listF; 
    fNames[f]=nome;
    document.getElementById("imgF"+f).src= vetor[f];
    document.getElementById("tituloF"+f).innerHTML = fNames[f];
    window.scrollBy(800, 1020);
}

function addSerie(listS,vetorS,nome){

    if((limparAll==1 || limparPname==1) && (vetorS[s]=="" || vetorS[s]===undefined)){
        ordem();
        adcSerieTela(listS,vetorS,nome);
    }
    else if((limparAll==0 || limparPname==0) && (vetorS[s]=="" || vetorS[s]===undefined)){
        adcSerieTela(listS,vetorS,nome);
    } 
    else if((vetorS[s]!==undefined  || vetorS[s]!="") && limparPname==0){
        if(vetorS[s]!==undefined){
            s++;
            if(vetorS[s]!==undefined && vetorS[s]!=""){
                s++;
                if(vetorS[s]!==undefined && vetorS[s]!=""){
                    s++;    
                }
            }
        }
        adcSerieTela(listS,vetorS,nome);
    }
    if(s<5){
        s++;
    }
    limparAll=0;
    limparPname=0;
}

function adcSerieTela(listS,vetorS,nome){
    vetorS[s] = listS; 
    sNames[s] = nome;
    document.getElementById("imgS"+s).src= vetorS[s];
    document.getElementById("tituloS"+s).innerHTML = sNames[s];
    window.scrollBy(800, 1520);
}


function Limpar(){
    for(let i=0; i<5;i++){
        document.getElementById("imgA"+i).src= "";
        aNames[i] = "";
        document.getElementById("titulo"+i).innerHTML = aNames[i];
        listAnimes.pop()
    }
    
    for(let i=0; i<f;i++){
        document.getElementById("imgF"+i).src= "";
        fNames[i] = "";
        document.getElementById("tituloF"+i).innerHTML = fNames[i];
        listFilmes.pop()
    }
    
    for(let i=0; i<s;i++){
        document.getElementById("imgS"+i).src= "";
        sNames[i] = "";
        document.getElementById("tituloS"+i).innerHTML = sNames[i];
        listSeries.pop()
    }

    limparAll = 1;
    a=0;
    s=0;
    f=0;

    ctrl.pop();
    ctrl.length=0;
}

function LimparComNome(){
    var title = document.getElementById("nom").value;

    for(let i=0; i<aNames.length; i++){
        if(title == aNames[i]){
            listAnimes[i] =""
            document.getElementById("imgA"+i).src= listAnimes[i];
            aNames[i] = "";
            document.getElementById("titulo"+i).innerHTML = aNames[i];
            listAnimes.splice(i,1,"");

            if(listAnimes[i+1] != "" || listAnimes[i+1]!==undefined){
            } else{
                listAnimes.length--;
            }
            a = i;
            ctrl[i]=a;
            limparPname=1;
            limparAll=1;
            window.scrollBy(800, 545);
        }
    }

    for(let i=0; i<sNames.length; i++){
        if(title == sNames[i]){
            listSeries[i] =""
            document.getElementById("imgS"+i).src= listSeries[i];
            sNames[i] = "";
            document.getElementById("tituloS"+i).innerHTML = sNames[i];
            listSeries.splice(i,1,"");

            if(listSeries[i+1] != "" || listSeries[i+1]!==undefined){
            } else{
                listSeries.length--;
            }
            s = i;
            ctrl[i]=s;
            limparPname=1;
            limparAll=1;
            window.scrollBy(800, 1520);
        }
    }

    for(let i=0; i<fNames.length; i++){
        if(title == fNames[i]){
            listFilmes[i] =""
            document.getElementById("imgF"+i).src= listFilmes[i];
            fNames[i] = "";
            document.getElementById("tituloF"+i).innerHTML = fNames[i];
            listFilmes.splice(i,1,"");

            if(listFilmes[i+1] != "" || listFilmes[i+1]!==undefined){
            } else{
                listFilmes.length--;
            }
            f = i;
            ctrl[i]=f;
            limparPname=1;
            limparAll=1;
            window.scrollBy(800, 1020);
        }
    }
}

function limitador(){
    var cnt=0;

    if(listAnimes.length>=5) {
        for(let i=0; i<listAnimes.length; i++){
            if(listAnimes[i] != "" || listAnimes[i]!==undefined){
                cnt++
            }
        }
        listAnimes.length = cnt-1;
        cnt=0;
    }
    if(a>5){
        a--;
    }

    if(listSeries.length>=5) {
        for(let i=0; i<listSeries.length; i++){
            if(listSeries[i] != "" || listSeries[i]!==undefined){
                cnt++
            }
        }
        listSeries.length = cnt-1;
        cnt=0;
    }
    if(s>5){
        s--;
    }

    if(listFilmes.length>=5) {
        for(let i=0; i<listFilmes.length; i++){
            if(listFilmes[i] != "" || listFilmes[i]!==undefined){
                cnt++
            }
        }
        listFilmes.length = cnt-1;
        cnt=0;
    }
    if(f>5){
        f--;
    }
}

function ordem(){

    for(let i=0; i<ctrl.length; i++){
        for(let j=0; j<ctrl.length; j++){
            if(ctrl[i]<ctrl[j]){
                a = ctrl[i];
            }
        }
    }
    ctrl.pop();
}