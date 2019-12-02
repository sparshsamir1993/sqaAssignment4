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

       
        e.preventDefault();
       let state = $("#inputState").val();
       console.log(state);
       if(state == ""){
            e.preventDefault();
            $("#inputState").addClass("is-invalid");
       }else{
        $("#inputState").removeClass("is-invalid");
        // $("#inputState").addClass("is-valid");
        let name = $("#inputName").val();
        let email = $("#inputEmail").val();
        let carModel = $("#inputModel").val();
        let yearBought = $("#inputBoughtYear").val();
        let city = $("#inputCity").val();
        let price = $("#inputZip").val();
        let province= state;
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