var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var siteList = []
    if(localStorage.getItem("websites") !=null){
        siteList = JSON.parse(localStorage.getItem("websites"));
        displayData();
    }


function addSite(){
    if(  nameValidtion() ==true && urlValidtion() == true){
        sites = {
            name : siteName.value ,
            url : siteUrl.value
        }    
        siteList.push(sites);
        localStorage.setItem("websites" , JSON.stringify(siteList));
        displayData();
        clearForm();
    }
   
}

function displayData(){
    var cartona = " "
    for( var i =0 ; i < siteList.length ; i++){
        cartona += `
                <tr>
                    <td>${i}</td>
                    <td>${siteList[i].name}</td>
                    <td><button onclick = "visitUrl(${i})" class="btn btn-outline-primary"><i class="fa-solid fa-eye pe-1"></i> Visit </button></td>
                    <td><button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-1"></i> Delete </button></td>
                </tr>
        `
    }
    document.getElementById("displaySite").innerHTML = cartona ;
}

function deleteItem(index){
    siteList.splice(index ,1);
    localStorage.setItem("websites" , JSON.stringify(siteList));
    displayData();
}

function clearForm(){
    siteName.value = "";
    siteUrl.value = "";
}



function visitUrl(index){
    window. location. href=siteList[index].url;
}

function nameValidtion(){
    var test1 = siteName.value ;
    var regex =/^[a-z]{4,8}$/
regex.test(test1)
regex.test(test1)
    if( regex.test( test1 ) ==true ){
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");

        return true ;
    }
    else{
        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");

        return false;
    }
}


var urlMessae = document.getElementById("urlMessage");
function urlValidtion(){
    var test1 = siteUrl.value ;
    var regex = /^[a-z]{4,10}.com$/
    if( regex.test(test1) == true){
        siteUrl.classList.add("is-valid");
        siteUrl.classList.remove("is-invalid");
        urlMessae.classList.add("d-none")
        return true ; 

    }else{
        siteUrl.classList.add("is-invalid");
        siteUrl.classList.remove("is-valid");  
        urlMessae.classList.remove("d-none");
        return false
    }
   
}