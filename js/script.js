const navbar = document.querySelector('.navbar');
const locate = document.querySelector('.locate');
const map = document.querySelector('iframe')
const address = document.querySelector('.address')

const lct = [
    {
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31350.428725983307!2d-42.74378684189635!3d-10.826337664646529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x765921521a3a289%3A0xd0bc236aee3dda01!2sXique-Xique%2C%20BA%2C%2047400-000!5e0!3m2!1spt-BR!2sbr!4v1738187921711!5m2!1spt-BR!2sbr",
        name: "Xique-Xique"
    },
    {
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235480.20226882075!2d-44.00313654734533!3d-22.751343184626737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9954262aa9e747%3A0xb77f258e0b7835e1!2sSerop%C3%A9dica%20-%20RJ%2C%2023890-000!5e0!3m2!1spt-BR!2sbr!4v1738188140555!5m2!1spt-BR!2sbr",
        name: "Serocity"
    },
    {
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8116920.029253716!2d-42.17088925092562!3d-6.604621385914154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7007c9d931c86c5%3A0x1de0196a93401726!2sPernambuco!5e0!3m2!1spt-BR!2sbr!4v1738188241578!5m2!1spt-BR!2sbr",
        name: "Tilambuco"
    },
    {
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117105.12419386726!2d-47.549101946058464!3d-23.477227187511605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f54bcad87989%3A0x4a9099fb9d10cb8e!2sSorocaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1738188314139!5m2!1spt-BR!2sbr",
        name: "Sorocaba"
    }
]

navbar.innerHTML = `
<a href="index.html" class="link">
    Home
</a>
<a href="sobre.html" class="link">
    Sobre
</a>
<a href="local.html" class="link">
    Local
</a>
`
lct.forEach(l => {
    locate.innerHTML += `
        <div class="lct-map" onclick="selectLocate('${l.name}', '${l.link}')">
            ${l.name}
        </div>
    `
});

function selectLocate(name, link) {
    map.src = link;
    address.innerHTML = name;
}