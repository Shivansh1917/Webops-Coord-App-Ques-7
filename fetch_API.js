import fetch from "node-fetch";
function myFunc(data) {
    let comp=[];
    for (let i = 0; i < data.length; i++) {
        comp.push(data[i].Company);
    }
    comp.sort();  
    console.log("The data in ascending order is: ");
    console.log("Sl No. \t Company");
    for (let j = 0; j < data.length; j++) {
        //console.log("<p\>",j+1, "\t", comp[j],"</p\><br>");
        console.log("\<tr\> \n \<td\>",j+1,"\</td\> \n","\<td\>",comp[j],"\</td\> \n \</tr\>",)
    }

}
    
    fetch('https://retoolapi.dev/PNAOH1/data')
        .then(information => information.json())
        .then( data=> myFunc(data));