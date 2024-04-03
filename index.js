const container = document.querySelector('.container');
const audio = document.querySelector('.audio');

const music_arr = [
    {
        id: 1,
        img: "./img/1200x1200bf-60.jpg",
        name: "Штурмуя небеса",
        url: "./musics/Louna - Штурмуя небеса.mp3",
        artist: "Louna"
    },
    {
        id: 2,
        img: "./img/1200x1200bf-60.jpg",
        name: "Положение",
        url: "./musics/Скриптонит - Положение.mp3",
        artist: "Скриптонит"
    },
    {
        id: 3,
        img: "./img/1200x1200bf-60.jpg",
        name: "Кайфуша",
        url: "./musics/Santiz - Кайфуша.mp3",
        artist: "Santiz"
    },
    {
        id: 4,
        img: "./img/1200x1200bf-60.jpg",
        name: "Чародейка",
        url: "./musics/Эльбрус Джанмирзоев - Чародейка.mp3",
        artist: "Эльбрус Джанмирзоев"
    },
    {
        id: 5,
        img: "./img/1200x1200bf-60.jpg",
        name: "Мамасита",
        url: "./musics/Мамасита.mp3",
        artist: "Скриптонит"
    }
];

reload(music_arr, container);

function createMusicItem(item) {
    const divItem = document.createElement('div');
    const divCount = document.createElement('div');
    const buttonCount = document.createElement('button');
    const img = document.createElement('img');
    const divImg = document.createElement('div');
    const spanNameMusic = document.createElement('span');
    const buttonNameMusic = document.createElement('button');
    const pNameMusic = document.createElement('p');
    const divNameMusic = document.createElement('div');

    divItem.classList.add('item');
    divCount.classList.add('count');
    divImg.classList.add('img');
    divNameMusic.classList.add('name_music');

    buttonCount.textContent = item.id;
    img.src = item.img;
    img.alt = '';
    buttonNameMusic.textContent = item.name;
    pNameMusic.textContent = item.artist;

    spanNameMusic.appendChild(buttonNameMusic);
    divNameMusic.appendChild(spanNameMusic);
    divNameMusic.appendChild(pNameMusic);

    divCount.appendChild(buttonCount);
    divImg.appendChild(img);

    divItem.appendChild(divCount);
    divItem.appendChild(divImg);
    divItem.appendChild(divNameMusic);

    divItem.addEventListener('mouseenter', () => {
        buttonCount.textContent = "⏸";
    });

    divItem.addEventListener('mouseleave', () => {
        buttonCount.textContent = item.id;
    });

    return divItem;
}

function reload(arr, place) {
    place.innerHTML = "";

    for (const item of arr) {
        const strd = JSON.stringify(item)
        const divGlav = document.createElement('div');
        const divContainer = document.createElement('div');

        divGlav.classList.add('glav');
        divContainer.classList.add('container');

        const musicItem = createMusicItem(item);
        musicItem.addEventListener('click', () => {
            playTrack(item);
        });

        divContainer.appendChild(musicItem);
        divGlav.appendChild(divContainer);
        place.appendChild(divGlav);
    }
}

const items = container.querySelectorAll('.item')
items.forEach((item) => {
    item.onclick = () => {
        const data = JSON.parse(item.getAttribute('data-track'));
        audio.src = data.url;
        audio.play();
    };
});
