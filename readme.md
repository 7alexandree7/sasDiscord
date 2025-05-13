***import readline***
Serve para deixar com que o usuário consigo digitar no terminal, precisamos disso como exemplo para que ele escreva seu token
***import fetch from "node-fetch***
Blibioteca para fazer requisições HTTP, como se fosse o fetch do navegador, mas no nodejs
-------------------------------------------------------------------------------------------------------------------------------------------------------------------


readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
}) 

`=> Server para criar a interface no terminal`
`=> Input significa a entrada do teclado do usuário`
`=> Output significa a saida padrão do terminal`



