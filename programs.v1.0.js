const programs = [
    { id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', image: 'https://via.placeholder.com/300x200' },
];

function generateProgramCards() {
    const programList = document.getElementById('program-list');

    programs.forEach(program => {
        const card = document.createElement('div');
        card.classList.add('program-card');
        card.innerHTML = `
            <img src="${program.image}" alt="${program.name}">
            <h3>${program.name}</h3>
            <p>${program.description.substring(0, 100)}...</p>
        `;
        card.onclick = () => openModal(program);
        programList.appendChild(card);
    });
}

function openModal(program) {
    document.getElementById('modal-title').textContent = program.name;
    document.getElementById('modal-description').textContent = program.description;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.querySelector('.close-btn').addEventListener('click', closeModal);

document.addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
});

generateProgramCards();
