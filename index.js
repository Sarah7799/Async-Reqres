async function getData() {
    try{
    let resp = await fetch("https://reqres.in/api/users?page=2");
    let data = await resp.json();
    createTable(data.data)
    console.log(data);
    return data;
    }
    catch(error){
        console.log(error);
    }
}

getData();



function createTable(data){
 let tBody = document.getElementById('tbody')

    data.forEach((element) => {
      let row = document.createElement('tr');
      let td1 = document.createElement("td");
      td1.innerHTML = element.id;
      let td2 = document.createElement('td');
      td2.innerHTML=element["first_name"];
      let td3 = document.createElement('td');
      td3.innerHTML = element["last_name"];
      let td4 = document.createElement('td');
      td4.innerHTML = element.avatar;
      
      row.append(td1,td2,td3,td4);
      tBody.append(row);
    });
}
