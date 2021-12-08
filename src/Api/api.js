import React from "react"
import axios from "axios"

const url= "https://sandboxmc.gateway.linkapi.com.br/v1/links"

function Api(setDados){
    axios.get(url).then(response=>{
        const dados= response.data   
        setDados(dados)
        
    }).catch(error=>console.log(error))
   
}
export{Api}
Api()