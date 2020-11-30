function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location=document.getElementById("location").value;
    if (location.length==0){
        location='Ann Arbor'
        };
    location=location.split(" ").join("%20")

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format =document.getElementById("fahrenheit").value;
    if(document.getElementById("fahrenheit").checked){
        format =document.getElementById("fahrenheit").value;
    }
    else if(document.getElementById("celcius").checked){
        format =document.getElementById("celcius").value;
    }
    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query='https://api.openweathermap.org/data/2.5/weather?q=' +location+ '&APPID=a309f16e4d4dac22d0e438afea074ff7&units='+format;
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    let loc=document.getElementById("loc");
    let temp=document.getElementById("temp");
    let tempImg=document.getElementById('tempImg');
    // Your code here.


    $.getJSON(query,function(json){
        console.log(json)
        document.getElementById('forecast').style.display='block'
        console.log(json['main']['temp'])
        temp.innerHTML=json['main']['temp'] + ' with '+ json['weather'][0]['description']
        loc.innerHTML=json['name']
        tempImg.src='http://openweathermap.org/img/wn/'+json['weather'][0]['icon']+'@2x.png'
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
