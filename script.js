var leftShowcaseEle = document.getElementById("showcase_left")
var midShowcaseEle = document.getElementById("showcase_mid")
var rightShowcaseEle = document.getElementById("showcase_right")

var list = document.querySelector(".list_contents")
var search = document.getElementById("search")

var modellingButton = document.querySelector(".modellingButton")
var pixelArtButton = document.querySelector(".pixelArtButton")

var artArr =


    [{ title: "Soul Knight", disc: "Minecraft Bedrock Enemy", img: "icons/SoulknightPreview.png", type: "model", background: true }, { title: "Crab", disc: "Minecraft Bedrock Enemy", img: "icons/KingCrabPreview.png", type: "model", link: "https://sketchfab.com/3d-models/king-crab-572519cd8ea840ebba84685bd33c4d43", background: true }, { title: "Bee", disc: "Minecraft Bedrock Enemy", img: "icons/BeePreview.png", type: "model", link: "https://sketchfab.com/3d-models/killer-bee-bd83093b6c334955ad93926d1d37d8d1", background: true }, { title: "Golem", disc: "Minecraft Bedrock Enemy", img: "https://cdn.discordapp.com/attachments/316623115750866944/1093337015954722816/Untitled5_20230405214008.png", type: "model", background: false }, { title: "Crocodile", disc: "Minecraft Bedrock Enemy", img: "https://cdn.discordapp.com/attachments/316623115750866944/1055654002827743232/Untitled50_20221222210838.png", type: "model", link: "https://sketchfab.com/3d-models/crocodile-e9c3b4df9bbf43e7b9c3f0ac78968552", background: false }, { title: "Deep Dark Enemies", disc: "Minecraft Bedrock Enemy", img: "https://cdn.discordapp.com/attachments/316623115750866944/1055216393269813338/Untitled44_20221221161202.png", type: "model", link: "https://sketchfab.com/3d-models/dark-crawler-948aa09e72994869b212702e4ea48e99", background: false }, { title: "Spider", disc: "Minecraft Bedrock Enemy", img: "https://cdn.discordapp.com/attachments/316623115750866944/1065256598278242375/brood_crawler-1.png", type: "model", link: "https://sketchfab.com/3d-models/brood-crawler-02629c94c0af47a8b7a7904045a7b388", background: false }, { title: "Droideka", disc: "Minecraft Bedrock Enemy", img: "https://cdn.discordapp.com/attachments/316623115750866944/1055267435307081828/droideka.png", type: "model", link: "https://sketchfab.com/3d-models/droideka-4c142e80cce14145afcdc003abd009fc", background: true }, { title: "Bench", disc: "Minecraft Java Furniture", img: "https://cdn.discordapp.com/attachments/316623115750866944/1059286018873893014/file_19.png", type: "model", link: "https://sketchfab.com/3d-models/bench-5ceafee671e14c6da19f4e811e22bcb3", background: false }, { title: "Dragon", disc: "Itch.io Monster Pack", img: "https://storage.ko-fi.com/cdn/useruploads/display/1463fef7-d95a-4d66-996b-eef47e0110d6_mbos2v.gif", type: "pixelart", link: "https://lilwillydesigns.itch.io/", background: true }, { title: "Spider", disc: "Itch.io Monster Pack", img: "https://storage.ko-fi.com/cdn/useruploads/display/58e6125f-419e-47c5-839b-cdf7065e37ab_aysnms.gif", type: "pixelart", link: "https://lilwillydesigns.itch.io/", background: true }, { title: "Gorilla", disc: "Itch.io Monster Pack", img: "https://storage.ko-fi.com/cdn/useruploads/display/cba1923c-5879-4e82-a0e2-54366fabedc7_behemothexample.gif", type: "pixelart", link: "https://lilwillydesigns.itch.io/", background: true }, { title: "Paragon", disc: "Itch.io Monster Pack", img: "https://storage.ko-fi.com/cdn/useruploads/display/2877a9be-5b09-4959-a224-33071ad11e42_paragonexample-export.gif", type: "pixelart", link: "https://lilwillydesigns.itch.io/", background: true }, { title: "Beholder", disc: "Itch.io Monster Pack", img: "https://storage.ko-fi.com/cdn/useruploads/display/6e88ae18-71f8-4d71-88f2-ce86a47f175b_biyf64.gif", type: "pixelart", link: "https://lilwillydesigns.itch.io/", background: true }, { title: "Slime", disc: "Itch.io Monster Pack", img: "https://storage.ko-fi.com/cdn/useruploads/display/41991e11-9aa1-450c-af3e-c21ee540a8f2_tnnue.gif", type: "pixelart", link: "https://lilwillydesigns.itch.io/", background: true }, { title: "Knight", disc: "Itch.io Monster Pack", img: "https://storage.ko-fi.com/cdn/useruploads/display/1cc3b377-fb80-4b44-b900-7effeabf8982_2qrjz.gif", type: "pixelart", link: "https://lilwillydesigns.itch.io/", background: true }, { title: "Gravestones", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/824124447052791839/1130630407935770664/2023-07-17_19.39.37.png", type: "model", background: "MC" }, { title: "Potted Plants", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/824124447052791839/1126654383485095966/2023-07-06_20.16.47.png", type: "model", background: "MC" }, { title: "Market Assets", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/824124447052791839/1124858011886817331/2023-07-01_19.39.48.png", type: "model", background: "MC" }, { title: "Market Stalls 1", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/824124447052791839/1111060646327496836/2023-05-24_19.33.15.png", type: "model", background: "MC" }, { title: "Market Stalls 2", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/824124447052791839/1111060646755320018/2023-05-24_19.33.25.png", type: "model", background: "MC" }, { title: "Ice Cream Truck", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/824124447052791839/1094026905902133348/2023-04-05_18.28.38.png", type: "model", background: "MC" }, { title: "Construction Barriers", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/1135570091774320760/1152075052959940708/2023-09-14_20.54.51.png", type: "model", background: "MC" }, { title: "Couch Variations", disc: "Java Furniture", img: "https://cdn.discordapp.com/attachments/1135570091774320760/1145084543565574285/2023-08-26_16.56.20.png", type: "model", background: "MC" }]







var pixelArtTag = true, modelsTag = true

var showcaseContent = ["BeePreview.png", "KingCrabPreview.png", "SoulknightPreview.png"]

updateList()

function updateList() {
    list.innerHTML = ""
    for (let i = 0; i < artArr.length; i++) {
        var artwork = artArr[i]

        if (artwork.type == "model" && modelsTag == true && artwork.title.toLowerCase().includes(search.value.toLowerCase())) addToList(artwork)
        if (artwork.type == "pixelart" && pixelArtTag == true && artwork.title.toLowerCase().includes(search.value.toLowerCase())) addToList(artwork)
    }
}

function addToList(artwork) {
    if (artwork.background == "MC") console.log(artwork)
    list.innerHTML += `<div class="content linkable"${artwork.link ? "content linkable" : "content"} onclick=${artwork.link ? `link('${artwork.link}')` : `link('${artwork.img}')`}>
        <div class="preview" style="background: url(${artwork.img});
            background-size: ${artwork.background == "MC" ? "cover" : "contain"};
            background-position: 50%;
            background-repeat: ${artwork.background == true ? "repeat" : "no-repeat"};">
            <div class="previewBackup"></div>
            <p class="openLink"> </p>
        </div>
        <div class="text_contents">
            <h1>${artwork.title}</h1>
            <p>${artwork.disc}</p>
            <img src=${artwork.type == 'model' ? "https://img.shields.io/badge/3D_Models-48cae4" : "https://img.shields.io/badge/Pixel_Art-48cae4"}>
        </div>
    </div>`
}

function switchTag(tag) {
    if (tag == 1) {
        pixelArtTag = !pixelArtTag
        pixelArtTag == true ? pixelArtButton.classList.add("active") : pixelArtButton.classList.remove("active")
    }
    if (tag == 2) {
        modelsTag = !modelsTag
        modelsTag == true ? modellingButton.classList.add("active") : modellingButton.classList.remove("active")
    }
    updateList()
}

function link(myLink) {
    window.open(myLink)
}











function scrollShowcaseRight() {
    var newShowcaseContent = [showcaseContent[2], showcaseContent[0], showcaseContent[1]]
    showcaseContent = newShowcaseContent

    leftShowcaseEle.style.background = `url(icons/${showcaseContent[2]})`
    leftShowcaseEle.style.backgroundSize = `cover`
    leftShowcaseEle.style.backgroundPosition = `50%`
    leftShowcaseEle.style.backgroundRepeat = `no-repeat`

    midShowcaseEle.style.background = `url(icons/${showcaseContent[0]})`
    midShowcaseEle.style.backgroundSize = `cover`
    midShowcaseEle.style.backgroundPosition = `50%`
    midShowcaseEle.style.backgroundRepeat = `no-repeat`

    rightShowcaseEle.style.background = `url(icons/${showcaseContent[1]})`
    rightShowcaseEle.style.backgroundSize = `cover`
    rightShowcaseEle.style.backgroundPosition = `50%`
    rightShowcaseEle.style.backgroundRepeat = `no-repeat`
}
function scrollShowcaseLeft() {
    var newShowcaseContent = [showcaseContent[1], showcaseContent[2], showcaseContent[0]]
    showcaseContent = newShowcaseContent

    leftShowcaseEle.style.background = `url(icons/${showcaseContent[1]})`
    leftShowcaseEle.style.backgroundSize = `cover`
    leftShowcaseEle.style.backgroundPosition = `50%`
    leftShowcaseEle.style.backgroundRepeat = `no-repeat`

    midShowcaseEle.style.background = `url(icons/${showcaseContent[2]})`
    midShowcaseEle.style.backgroundSize = `cover`
    midShowcaseEle.style.backgroundPosition = `50%`
    midShowcaseEle.style.backgroundRepeat = `no-repeat`

    rightShowcaseEle.style.background = `url(icons/${showcaseContent[0]})`
    rightShowcaseEle.style.backgroundSize = `cover`
    rightShowcaseEle.style.backgroundPosition = `50%`
    rightShowcaseEle.style.backgroundRepeat = `no-repeat`
}