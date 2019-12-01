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
    // submit button click 
   $("#saveAd").click((e)=>{
       console.log(e);

       

       let state = $("#inputState").val();
       console.log(state);
       if(state == ""){
            e.preventDefault();
            $("#inputState").addClass("is-invalid");
       }else{
        $("#inputState").removeClass("is-invalid");
        // $("#inputState").addClass("is-valid");
       }
   }) ;

   let s ="";
    ads.forEach(function(x){
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