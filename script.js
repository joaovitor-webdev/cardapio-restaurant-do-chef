let pratoSelecionado;

function mostrarPrato(codigo) {
    let dadosPrato;
    switch (codigo) {
        case 1:
            dadosPrato = {
                nome: "Hambúrguer Gourmet",
                preco: 32.50,
                descricao: "Delicioso hambúrguer artesanal com carne bovina premium, queijo cheddar, alface, tomate, cebola caramelizada e molho especial da casa, servido com batatas rústicas."
            };
            break;
        case 2:
            dadosPrato = {
                nome: "Pizza Margherita",
                preco: 45.00,
                descricao: "Clássica pizza italiana com molho de tomate fresco, mussarela de búfala, manjericão e azeite extra virgem."
            };
            break;
        case 3:
            dadosPrato = {
                nome: "Salmão Grelhado",
                preco: 58.75,
                descricao: "Salmão fresco grelhado com legumes salteados e purê de batatas rústicas, regado com molho de maracujá."
            };
            break;
        case 4:
            dadosPrato = {
                nome: "Lasanha Bolonhesa",
                preco: 38.00,
                descricao: "Camadas de massa fresca, molho bolonhesa tradicional, bechamel cremoso e queijo parmesão gratinado."
            };
            break;
        case 5:
            dadosPrato = {
                nome: "Salada Caesar",
                preco: 28.50,
                descricao: "Alface americana, croutons caseiros, lascas de parmesão, peito de frango grelhado e molho Caesar tradicional. Refrescante e nutritiva."
            };
            break;
        default:
            dadosPrato = {
                nome: "Prato não encontrado",
                preco: 0,
                descricao: "Por favor, selecione um prato válido."
            };
    }
    
    pratoSelecionado = dadosPrato;
    
    let conteudo = `
        <div class="resultado-item">
            <h2>${dadosPrato.nome}</h2>
            <div class="resultado-preco">Preço: R$ ${dadosPrato.preco.toFixed(2)}</div>
            <div class="resultado-descricao">${dadosPrato.descricao}</div>
        </div>`;
        
    document.getElementById("resultado").innerHTML = conteudo;
    document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });
}

function voltarMenu() { 
pratoSelecionado = null; 
document.getElementById("resultado").innerHTML = '<p style="color: #7f8c8d; font-size: 1.2em;">Clique em uma opção acima para ver os detalhes do prato!</p>';
document.getElementById("menu").scrollIntoview({
    behavior: "smooth"
});
}

function enviarPorWhatsApp() {
    if (pratoSelecionado) {
        const mensagem = `Olá Chef, gostaria de pedir: ${pratoSelecionado.nome} - R$ ${pratoSelecionado.preco.toFixed(2)}. Descrição: ${pratoSelecionado.descricao}`;
        const whatsappURL = `https://wa.me/5581992718851?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappURL, "_blank");
    } else {
        alert("Por favor, selecione um prato primeiro!");
    }
}