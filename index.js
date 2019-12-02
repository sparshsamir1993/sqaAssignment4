$(document).ready(function(){

    let ads = [
        {
            name: "James Bond",
            email: "jame007@bond.com",
            carModel: "Aston Masrtin",
            yearBought: "2019",
            city: "Toronto",
            province: "ON",
            price: "7500000"
        },
        {
            name: "Alladin",
            email: "king@persia.com",
            carModel: "Flying Rug",
            yearBought: "1019",
            city: "Kingdom Capital",
            province: "SK",
            price: "909500000"
        },
        {
            name: "ET",
            email: "alient@somewhere.com",
            carModel: "UFO",
            yearBought: "4019",
            city: "Toronto",
            province: "ON",
            price: "95900000"
        }
    ];
    let adsToIterate = localStorage.getItem("ads") ? JSON.parse(localStorage.getItem("ads")) : ads;
    // submit button click 
   $("#saveAd").click((e)=>{
       console.log(e);

       
        // e.preventDefault();
       let state = $("#inputState").val();
       let name = $("#inputName").val();
       let email = $("#inputEmail").val();
       let carModel = $("#inputModel").val();
       let yearBought = $("#inputBoughtYear").val();
       let city = $("#inputCity").val();
       let price = $("#inputZip").val();
       let province= state;
       console.log(state);
    //    debugger;
       if(state == "" || city == "" || email == "" || carModel =="" || yearBought == "" || price ==""){
            
            // $("#inputState").addClass("is-invalid");
            alert("Cheeck if all the fields are filled");
            e.preventDefault();
            e.stopPropagation();

       }
       else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || email == ""){
        $("#inputEmail").addClass("is-invalid");
        e.preventDefault();
        e.stopPropagation();
       }
       else if(isNaN(yearBought) || yearBought > 2019){
        $("#inputBoughtYear").addClass("is-invalid");
        e.preventDefault();
        e.stopPropagation();
       }
       else if(isNaN(price)){
        $("#inputZip").addClass("is-invalid");
        e.preventDefault();
        e.stopPropagation();
       }
       else{
        removeInvalids();
        // $("#inputState").addClass("is-valid");

        let obj = {
            name,
            email,
            carModel,
            yearBought,
            city,
            province,
            price
        };
        adsToIterate.push(obj);
        localStorage.setItem("ads", JSON.stringify(adsToIterate) );
        // debugger;
        window.location.href = "index.html" ;
       }
   }) ;

   let s ="";
//    debugger;
   adsToIterate.forEach(function(x){
        let singleRow = `<tr>
                            <th scope="row">${x.name}</th>
                            <td>${x.email}</td>
                            <td>${x.carModel}</td>
                            <td>${x.yearBought}</td>
                            <td>${x.city}</td>
                            <td>${x.province}</td>
                            <td>$&nbsp;${x.price}</td>
                        </tr>`;
        s+=singleRow;
    });
    
    $(".toBePop").html(s);
});

function removeInvalids(){
     $("#inputState").removeClass("is-invalid");
     $("#inputName").removeClass("is-invalid");
    $("#inputEmail").removeClass("is-invalid");
    $("#inputModel").removeClass("is-invalid");
    $("#inputBoughtYear").removeClass("is-invalid");
     $("#inputCity").removeClass("is-invalid");
    $("#inputZip").removeClass("is-invalid");
}