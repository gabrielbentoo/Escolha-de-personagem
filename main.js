function escolherPersonagem(personagem) {
    let mensagem;
    switch (personagem) {
        case 'guerreiro' :
            mensagem = '⚔ Você escolheu o Guerreiro! Pronto para a batalha!';
            break;
        case 'mago' :
            mensagem = '🔥 Você escolheu o Mago! Prepare-se para lançar feitiços!';
            break;
        case 'arqueiro' :
            mensagem = '🏹 Você escolheu o Arqueiro! Mire com precisão!';
            break;
        default:
            mensagem = '⚠️ Escolha inválida!';
    
    }
    document.getElementById("mensagem").innerText = mensagem;
}