
    let estado= "pausado"
    const musica1= document.querySelector("#musica1")
    const musica2= document.querySelector("#musica2")
    const musica3= document.querySelector("#musica3")
    const musica4= document.querySelector("#musica4")
    const musica5= document.querySelector("#musica5")
    const musicas = []
    musicas.push(musica1)
    musicas.push(musica2)
    musicas.push(musica3)
    musicas.push(musica4)
    musicas.push(musica5)
    var indiceAtual = 0
 
    function anterior(){
        musicas[indiceAtual].pause()
        indiceAtual = indiceAtual - 1

        musicas[indiceAtual].play()
    }
    function play(){
        if(estado == "pausado"){
            //if (typeof musicas == "undefined"){
        //    inicial()
       // }
        musicas[indiceAtual].play()
       estado = "tocando"
    }
    else{
        musicas[indiceAtual].pause()
        estado="pausado"
    }
}   
    
    function proximo(){
            
            musicas[indiceAtual].pause()
            indiceAtual = indiceAtual + 1

            console.log("Musica atual: " + indiceAtual)
            musicas[indiceAtual].play()
          
    }
7