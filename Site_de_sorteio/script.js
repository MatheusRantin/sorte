// script.js

// Função para abrir o modal e preencher com números
function openModal(lottery) {
    var modal = document.getElementById('numberModal');
    var numbersContainer = document.getElementById('numbersContainer');
    var modalTitle = document.getElementById('modalTitle');
    var selectedLotteryInput = document.getElementById('selectedLottery');

    // Define o título do modal e o nome da loteria selecionada
    switch (lottery) {
        case 'megaSena':
            modalTitle.textContent = 'Selecione Números para a Mega-Sena';
            break;
        case 'lotoFacil':
            modalTitle.textContent = 'Selecione Números para a Lotofácil';
            break;
        case 'quina':
            modalTitle.textContent = 'Selecione Números para a Quina';
            break;
        case 'lotomania':
            modalTitle.textContent = 'Selecione Números para a Lotomania';
            break;
        case 'timemania':
            modalTitle.textContent = 'Selecione Números para a Timemania';
            break;
        case 'duplaSena':
            modalTitle.textContent = 'Selecione Números para a Dupla Sena';
            break;
        case 'diaDeSorte':
            modalTitle.textContent = 'Selecione Números para o Dia de Sorte';
            break;
    }

    selectedLotteryInput.value = lottery;

    // Preenche o modal com botões de números
    numbersContainer.innerHTML = '';
    for (var i = 1; i <= 60; i++) {
        var button = document.createElement('button');
        button.textContent = i;
        button.className = 'number-button';
        button.onclick = function() {
            toggleNumberSelection(this);
        };
        numbersContainer.appendChild(button);
    }

    modal.style.display = 'block';
}

// Função para alternar a seleção de números
function toggleNumberSelection(button) {
    if (button.classList.contains('selected')) {
        button.classList.remove('selected');
    } else {
        button.classList.add('selected');
    }
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('numberModal');
    modal.style.display = 'none';
}

// Adiciona eventos de clique para fechar o modal
document.querySelector('.close').onclick = closeModal;
window.onclick = function(event) {
    if (event.target === document.getElementById('numberModal')) {
        closeModal();
    }
};

// Lida com o envio do formulário
document.getElementById('selectionForm').onsubmit = function(event) {
    event.preventDefault();
    var selectedLottery = document.getElementById('selectedLottery').value;
    var selectedNumbers = Array.from(document.querySelectorAll('.number-button.selected')).map(button => button.textContent);

    alert('Você selecionou os números: ' + selectedNumbers.join(', ') + ' para ' + selectedLottery);
    closeModal();
};
