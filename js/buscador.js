document.addEventListener("keyup" , e =>{

    if(e.target.matches("#buscador")){

      document.querySelectorAll(".card1").forEach(busca =>{
        busca.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?busca.classList.remove("filtro")
        :busca.classList.add("filtro")
      })

    }


    console.log(e.target.value)
})