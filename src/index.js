fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()).then(data =>{
        const userData = data;
        let output = ""
        userData.forEach( user => {
           output += `
              <div >
           
            <div class="border">
                <h3 class="id">ID : ${user.id}</h3>
                <div class="card">                
                    <h4>Name : ${user.name}</h4>
                    <h4>Username : ${user.username}</h4>
                    <p>Email : ${user.email}</p>
                    <p>Phone :${user.phone}</p>
                    <p>Address :
                        <div class="address">
                        <p>street :${user.address.street}</p>
                        <p>suite : ${user.address.suite}</p>
                        <p>city  : ${user.address.city}</p>
                        <p>zipcode : ${user.address.zipcode}</p>
                        </div>
                        </p>
                    <p>company :
                        <div class="company">
                            <p>bs : ${user.company.bs} </p>
                            <p>CatchPhrase : ${user.company.catchPhrase}</p>
                            <p>Name : ${user.company.name}</p>
                        </div>
                    </p>
                    <p>Website : ${user.website}</p>
            </div>

            </div>
        </div>`
        });
        document.getElementById('containers').innerHTML = output
      }) .catch(error => console.error('Gagal Mendapatkan Data',error))
      console.log(variabel)