function render(arr) {
    const list = document.getElementById('movie-list');
    list.innerHTML = "";
    arr.forEach(m => {
        list.innerHTML += `
            <div class="card" onclick="showPopup('${m.title}', '${m.image}', '${m.link}')">
                <img src="${m.image}">
                <h3>${m.title}</h3>
            </div>`;
    });
}

function showPopup(t, i, l) {
    document.getElementById('pop-title').innerText = t;
    document.getElementById('pop-img').src = i;
    document.getElementById('pop-link').href = l;
    document.getElementById('modal').classList.add('show');
}

function closePopup() { document.getElementById('modal').classList.remove('show'); }

function filter() {
    const q = document.getElementById('search-box').value.toLowerCase();
    render(movies.filter(m => m.title.toLowerCase().includes(q)));
}

window.onload = () => {
    render(movies);
    setTimeout(() => document.getElementById('loader').style.display = 'none', 800);
};

