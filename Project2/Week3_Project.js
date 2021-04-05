
        // ------ First Fetch API Data ------

        let buttonA = document.getElementById("button")
        //button.addEventListener("click",giveQuote() )

        buttonA.addEventListener("click",  function startMo(){
                function giveQuote(){

                        fetch("https://animechan.vercel.app/api/random")
                        .then(res => {
                        return res.json()
                        })
                        .then(data => {
                        extractInfo(data)
                        })
                } 
        
                function extractInfo(data){
                        const {anime} = data
                        const {character}=data
                        const {quote}=data

                        document.querySelector("#anime").innerHTML= anime
                        document.querySelector("#character").innerHTML= character
                        document.querySelector("#quote").innerHTML= quote
                }//end of function
                console.log("pressed")
                giveQuote()
        })
        

                
                
