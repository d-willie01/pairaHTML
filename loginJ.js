






const login = () => {

    
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   

    
        // Default options are marked with *
        

                fetch('https://paira-api-staging.azurewebsites.net/auth/signin', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    email,
                    password
                }),
                })
                .then((response) => response.json())
                .then((data) => {
                    if (!data.token){
                        console.log("ass");
                        console.log(data);
                        alert(data.error);
                    }
                    else{
                        console.log("hole");
                        console.log(data);
                        window.location.replace("./homeScreen.html");
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert(error)
                });


            }


    const logout = () => {

        window.location.replace("./index.html");

    }


