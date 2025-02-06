musicas = [
    {nome: 'Sangue', autor: 'JuVi', cor: '#d91709', imagem: 'OPD.webp', link: 'https://www.youtube.com/watch?v=uMkRnoXh2AY'},
    {nome: 'Detetives do Condomínio Azul', autor: 'Schiavoto', cor: '#99050a', imagem: 'OPNM.webp', link: 'https://www.youtube.com/watch?v=ioJ47bD0-pM'},
    {nome: 'Quarentena (Abertura)', autor:'JuVi', cor: '#803e9e', imagem: 'OPQ.webp', link: 'https://www.youtube.com/watch?v=UDVSM935dtY'},
    {nome: 'Iniciativa', autor: 'Juvi', cor:'#241c00', imagem: 'OPC.webp', link: 'https://www.youtube.com/watch?v=IWC4axoJbpw'}
]

function criarCard (musica){
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h2')
    const novoSubtitulo = document.createElement('h3')
    const novoContainer = document.createElement('div')
    const novoLink = document.createElement('a')
    const listaCards = document.getElementById('menu')

    novaImagem.src = ('./img/' + musica.imagem)
    novoTitulo.textContent = musica.nome
    novoSubtitulo.textContent = musica.autor
    novoLink.href = musica.link
    novoLink.textContent = 'Ouça aqui'

    novoContainer.appendChild(novoLink)
    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoTitulo)
    novoItem.appendChild(novoSubtitulo)
    novoItem.appendChild(novoContainer)

    novoContainer.style = `--cor-hover: ${musica.cor}`

    listaCards.appendChild(novoItem)
}

musicas.forEach(criarCard)
