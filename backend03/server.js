const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars.githubusercontent.com/u/62852058?s=400&u=57a368dd33ae5d64b793878ec234cafbf379d311&v=4",
        name: "mayuri Arakaki",
        role: "Aluna - Rocketseat",
        description: 'Estudante em desenvolvimento de Front-end, dedicada em aprender sobre o universo da programação. Aluna da <a href="https://rocketseat.com.br " target="_blank ">Rocketseat</a>',
        links: [
            {name:"Linkedin", url:"https://www.linkedin.com/in/mayuri-arakaki-63ba4613a/ "},
            {name:"Github", url:"https://github.com/Arakaki-code"},

        ]
    }

    return res.render("about", { about: about })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video ) {
        return video.id == id
    })

        if (!video) {
            return res.send("video not found")
       }

        return res.render("video", { item: video})
})

server.listen(5000, function() {
    console.log("server is running")
}) 