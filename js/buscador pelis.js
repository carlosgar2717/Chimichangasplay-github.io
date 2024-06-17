document.addEventListener("keyup" , e =>{

  if(e.target.matches("#Buscador-pelis")){

    document.querySelectorAll(".cartas").forEach(busca =>{
      busca.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ?busca.classList.remove("filtro")
      :busca.classList.add("filtro")
    })

  }


  console.log(e.target.value)
})