const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.get("/albums", (req, res) => {
    res.json(
        [
            {
                "type": "album",
                "name": "DESGENERADOS MIXTAPE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                        },
                        "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                        "id": "2wkoKEfS6dXwThbyTnZWFU",
                        "name": "Mau y Ricky",
                        "type": "artist",
                        "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273f52277a8253b4e136f7672f3",
                "id": "0YcR2HiDBoW60Alu3CZu2R",
                "tracks": [
                    {
                        "trackName": "No Es Normal (con Jay Wheeler)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/79ff6dde5d3f9c3847b749b6185188d536540005?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+Jay+Wheeler+-+No+es+Normal+(Official+Video).mp3",
                        "uri": "spotify:track:7Bav9vC5ctdkMythpKostV",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2cPqdH7XMvwaBJEVjheH8g"
                                },
                                "href": "https://api.spotify.com/v1/artists/2cPqdH7XMvwaBJEVjheH8g",
                                "id": "2cPqdH7XMvwaBJEVjheH8g",
                                "name": "Jay Wheeler",
                                "type": "artist",
                                "uri": "spotify:artist:2cPqdH7XMvwaBJEVjheH8g"
                            }
                        ],
                        "id": "7Bav9vC5ctdkMythpKostV"
                    },
                    {
                        "trackName": "Salvaje (con Justin Quiles)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/76d89d918eda0d0c245f5b2b5520d5c16642050b?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+Justin+Quiles+-+Salvaje+(Official+Lyric+Video).mp3",
                        "uri": "spotify:track:6E7pz6npdhV2noiFqp0v3l",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/14zUHaJZo1mnYtn6IBRaRP"
                                },
                                "href": "https://api.spotify.com/v1/artists/14zUHaJZo1mnYtn6IBRaRP",
                                "id": "14zUHaJZo1mnYtn6IBRaRP",
                                "name": "Justin Quiles",
                                "type": "artist",
                                "uri": "spotify:artist:14zUHaJZo1mnYtn6IBRaRP"
                            }
                        ],
                        "id": "6E7pz6npdhV2noiFqp0v3l"
                    },
                    {
                        "trackName": "Ex (con La Joaqui)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/38c7bab9e5e5bb91292348910e26d2b821d0d652?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+La+Joaqui+-+EX+(Official+Video).mp3",
                        "uri": "spotify:track:4aHc6XvgDFIdey7Y7D8lH4",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/60XHOAhvEBiV6BGBOv8ClM"
                                },
                                "href": "https://api.spotify.com/v1/artists/60XHOAhvEBiV6BGBOv8ClM",
                                "id": "60XHOAhvEBiV6BGBOv8ClM",
                                "name": "La Joaqui",
                                "type": "artist",
                                "uri": "spotify:artist:60XHOAhvEBiV6BGBOv8ClM"
                            }
                        ],
                        "id": "4aHc6XvgDFIdey7Y7D8lH4"
                    },
                    {
                        "trackName": "Antisociales (con Zion & Lennox)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9113b596e87f8663fc40f2cd04240fb064c09e70?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+Zion+%26+Lennox+-+Antisociales+(Official+Lyric+Video).mp3",
                        "uri": "spotify:track:09SO3jDWXokqnfXmmGZame",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/21451j1KhjAiaYKflxBjr1"
                                },
                                "href": "https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1",
                                "id": "21451j1KhjAiaYKflxBjr1",
                                "name": "Zion & Lennox",
                                "type": "artist",
                                "uri": "spotify:artist:21451j1KhjAiaYKflxBjr1"
                            }
                        ],
                        "id": "09SO3jDWXokqnfXmmGZame"
                    },
                    {
                        "trackName": "Manos Frías (con Reik, Beéle)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4609f126fc76f53c25eb98c6d3e81c577d09a100?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+Reik%2C+Bee%CC%81le+-+Manos+Fri%CC%81as+(Official+Video).mp3",
                        "uri": "spotify:track:7jT78cTeShKDIJID0auIgG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0vR2qb8m9WHeZ5ByCbimq2"
                                },
                                "href": "https://api.spotify.com/v1/artists/0vR2qb8m9WHeZ5ByCbimq2",
                                "id": "0vR2qb8m9WHeZ5ByCbimq2",
                                "name": "Reik",
                                "type": "artist",
                                "uri": "spotify:artist:0vR2qb8m9WHeZ5ByCbimq2"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7a0XAaPaK2aDSqa8p3QnC7"
                                },
                                "href": "https://api.spotify.com/v1/artists/7a0XAaPaK2aDSqa8p3QnC7",
                                "id": "7a0XAaPaK2aDSqa8p3QnC7",
                                "name": "Beéle",
                                "type": "artist",
                                "uri": "spotify:artist:7a0XAaPaK2aDSqa8p3QnC7"
                            }
                        ],
                        "id": "7jT78cTeShKDIJID0auIgG"
                    },
                    {
                        "trackName": "Amigos (con Andry Kiddos)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e1cf8b702e347f669e9a4e7709310cd98722de31?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+Andry+Kiddos+-+Amigos+(Official+Lyric+Video).mp3",
                        "uri": "spotify:track:5w7KnO18gZntBOxIiubPOa",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3mXFyGsGwiXIybo2Sr4EG2"
                                },
                                "href": "https://api.spotify.com/v1/artists/3mXFyGsGwiXIybo2Sr4EG2",
                                "id": "3mXFyGsGwiXIybo2Sr4EG2",
                                "name": "Andry Kiddos",
                                "type": "artist",
                                "uri": "spotify:artist:3mXFyGsGwiXIybo2Sr4EG2"
                            }
                        ],
                        "id": "5w7KnO18gZntBOxIiubPOa"
                    },
                    {
                        "trackName": "Miami",
                        "trackPreview": "https://p.scdn.co/mp3-preview/42ae8741ecee7da4ba9a40b7ddd801db70297427?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky++Miami+(Official+Video).mp3",
                        "uri": "spotify:track:7g403qSRotCCt01wrDqW0s",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            }
                        ],
                        "id": "7g403qSRotCCt01wrDqW0s"
                    },
                    {
                        "trackName": "Vivir Sin Ti (con CNCO)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5e4501062a84816b172b959c030427112352997c?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+CNCO+-+Vivir+Sin+Ti+(Official+Lyric+Video).mp3",
                        "uri": "spotify:track:4zKgBYhLafD8xszGCAiThg",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0eecdvMrqBftK0M1VKhaF4"
                                },
                                "href": "https://api.spotify.com/v1/artists/0eecdvMrqBftK0M1VKhaF4",
                                "id": "0eecdvMrqBftK0M1VKhaF4",
                                "name": "CNCO",
                                "type": "artist",
                                "uri": "spotify:artist:0eecdvMrqBftK0M1VKhaF4"
                            }
                        ],
                        "id": "4zKgBYhLafD8xszGCAiThg"
                    },
                    {
                        "trackName": "Que Dios Me Perdone (con Dalex)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a7b6e9d0421bbeafea853a2eaac6e3a7063abf25?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+Dalex+-+Que+Dios+Me+Perdone+(Official+Lyric+Video).mp3",
                        "uri": "spotify:track:38LNZa90iY7bkM7EFoYa1L",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0KPX4Ucy9dk82uj4GpKesn"
                                },
                                "href": "https://api.spotify.com/v1/artists/0KPX4Ucy9dk82uj4GpKesn",
                                "id": "0KPX4Ucy9dk82uj4GpKesn",
                                "name": "Dalex",
                                "type": "artist",
                                "uri": "spotify:artist:0KPX4Ucy9dk82uj4GpKesn"
                            }
                        ],
                        "id": "38LNZa90iY7bkM7EFoYa1L"
                    },
                    {
                        "trackName": "Llorar y Llorar",
                        "trackPreview": "https://p.scdn.co/mp3-preview/96dd756e618fb1abf5fbec159def782f9de2d08a?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Mau+y+Ricky%2C+Carin+Leon+-+Llorar+y+Llorar+(Official+Video).mp3",
                        "uri": "spotify:track:1fYgDRGx3IUSMRLvQuezGn",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wkoKEfS6dXwThbyTnZWFU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wkoKEfS6dXwThbyTnZWFU",
                                "id": "2wkoKEfS6dXwThbyTnZWFU",
                                "name": "Mau y Ricky",
                                "type": "artist",
                                "uri": "spotify:artist:2wkoKEfS6dXwThbyTnZWFU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/66ihevNkSYNzRAl44dx6jJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/66ihevNkSYNzRAl44dx6jJ",
                                "id": "66ihevNkSYNzRAl44dx6jJ",
                                "name": "Carin Leon",
                                "type": "artist",
                                "uri": "spotify:artist:66ihevNkSYNzRAl44dx6jJ"
                            }
                        ],
                        "id": "1fYgDRGx3IUSMRLvQuezGn"
                    }
                ]
            },
            {
                "type": "album",
                "name": "AfroLOVA' 23",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                        },
                        "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                        "id": "2IMZYfNi21MGqxopj9fWx8",
                        "name": "Rels B",
                        "type": "artist",
                        "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b2739c6291f5b78055b9ce32e567",
                "id": "4eycRqS93AqCf74BVzj6JP",
                "tracks": [
                    {
                        "trackName": "AfroLOVA'",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9c9f3d2eaf22eafff8186443a13136a9796fd1b3?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+AfroLOVA'+(Visualizer).mp3",
                        "uri": "spotify:track:6Pw74Nz0wZvGQIu3ccRUeX",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "6Pw74Nz0wZvGQIu3ccRUeX"
                    },
                    {
                        "trackName": "Un Rodeoooo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1840930b4fa7ccc31f2f0d7d6079d137fb8c4bee?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+Un+Rodeoooo+(Video+Oficial).mp3",
                        "uri": "spotify:track:1fcOwu14PSWy2JJhpGIOoL",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "1fcOwu14PSWy2JJhpGIOoL"
                    },
                    {
                        "trackName": "Sin Gato (MIAU!)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/223a453e8edd404a02382dceabc3661e3175548d?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+Sin+Gato+(MIAU!)+(Video+Oficial).mp3",
                        "uri": "spotify:track:7fHyvps8HsC8dFO3mQ3Itv",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "7fHyvps8HsC8dFO3mQ3Itv"
                    },
                    {
                        "trackName": "baby BOO",
                        "trackPreview": "https://p.scdn.co/mp3-preview/45606ea94bf660d54b40187b47da0e7f21cf662c?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+baby+BOO+(Visualizer).mp3",
                        "uri": "spotify:track:53sORGQZuCMZPbLRXf7rqU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "53sORGQZuCMZPbLRXf7rqU"
                    },
                    {
                        "trackName": "Solita y SueltAAA",
                        "trackPreview": "https://p.scdn.co/mp3-preview/bab5b7c3850693cc745761587cadfb9058c7a39c?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+Solita+y+SueltAAA+(Visualizer).mp3",
                        "uri": "spotify:track:3gtZLsncEuG3gNO4Qswhuf",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "3gtZLsncEuG3gNO4Qswhuf"
                    },
                    {
                        "trackName": "\"Un tiempo\" jajajajja",
                        "trackPreview": "https://p.scdn.co/mp3-preview/38e8861c4cc7fb26de475b5b6c98be09f70654be?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+'Un+tiempo'+jajajajja+%5Bft.+Tempoe%5D+(Visualizer).mp3",
                        "uri": "spotify:track:53vwKkkZaYCpF02FgwF67i",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1X7glgDhqNq1qn0Qv9g3K4"
                                },
                                "href": "https://api.spotify.com/v1/artists/1X7glgDhqNq1qn0Qv9g3K4",
                                "id": "1X7glgDhqNq1qn0Qv9g3K4",
                                "name": "Tempoe",
                                "type": "artist",
                                "uri": "spotify:artist:1X7glgDhqNq1qn0Qv9g3K4"
                            }
                        ],
                        "id": "53vwKkkZaYCpF02FgwF67i"
                    },
                    {
                        "trackName": "Media Pastiii",
                        "trackPreview": "https://p.scdn.co/mp3-preview/891ae330b61e66bf16d3a57d58a6e2741cd60730?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+Media+Pastiii+(Visualizer).mp3",
                        "uri": "spotify:track:00QAvytbxEUAT0xGBFLVaT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "00QAvytbxEUAT0xGBFLVaT"
                    },
                    {
                        "trackName": "No Se Si Tu No",
                        "trackPreview": "https://p.scdn.co/mp3-preview/82f15876c97debf9b3ab14accee5bca54af2b35d?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+No+Se+Si+Tu+No+(Visualizer).mp3",
                        "uri": "spotify:track:7maR1S2QTZQwauoew8XPbv",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "7maR1S2QTZQwauoew8XPbv"
                    },
                    {
                        "trackName": "SONRÍE <3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e7affc02a8645083f1d3ec7ab290c00f8f2385a1?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Rels+B+-+SONRI%CC%81E+(Visualizer).mp3",
                        "uri": "spotify:track:47sOMp1xXLBzGXOuUZPR4x",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "47sOMp1xXLBzGXOuUZPR4x"
                    }
                ]
            },
            {
                "type": "album",
                "name": "ADN (Capítulo N)",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                        },
                        "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                        "id": "3HrbmsYpKjWH1lzhad7alj",
                        "name": "Los Auténticos Decadentes",
                        "type": "artist",
                        "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273f19ff034ed3a7c37e8367ee9",
                "id": "5dsGcOBv9D6MNQWEBkFbxX",
                "tracks": [
                    {
                        "trackName": "Costumbres Argentinas",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0467ff1aa1b50a9b84b36552b22370e9810e2367?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Los+Aute%CC%81nticos+Decadentes+%26+Andre%CC%81s+Calamaro+-+Costumbres+Argentinas+(video+oficial)+%5B4K%5D.mp3",
                        "uri": "spotify:track:6VKFHAczoZPvPITINnPit4",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "6VKFHAczoZPvPITINnPit4"
                    },
                    {
                        "trackName": "La Ladrona",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ff7b95e75f74a101f9b817d4af35e691d446f9a5?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Los+Aute%CC%81nticos+Decadentes+y+Diego+Verdaguer+-+La+Ladrona+(Video+Oficial).mp3",
                        "uri": "spotify:track:740tUnEltjUj8ctuVCRi7U",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UFqwY8A3PLcx8pAkg9g5P"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UFqwY8A3PLcx8pAkg9g5P",
                                "id": "2UFqwY8A3PLcx8pAkg9g5P",
                                "name": "Diego Verdaguer",
                                "type": "artist",
                                "uri": "spotify:artist:2UFqwY8A3PLcx8pAkg9g5P"
                            }
                        ],
                        "id": "740tUnEltjUj8ctuVCRi7U"
                    },
                    {
                        "trackName": "Risa",
                        "trackPreview": "https://p.scdn.co/mp3-preview/cfb21255b843d6ae0cdd97fce6218f3dec16c420?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Risa.mp3",
                        "uri": "spotify:track:4DY7XWkXtCljaPu5t3ty0N",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            }
                        ],
                        "id": "4DY7XWkXtCljaPu5t3ty0N"
                    },
                    {
                        "trackName": "Se Me Ha Perdido Un Corazón",
                        "trackPreview": "https://p.scdn.co/mp3-preview/487de967f2dca64962fb68ec22f0b9064da66fa7?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Se+Me+Ha+Perdido+Un+Corazo%CC%81n.mp3",
                        "uri": "spotify:track:6dmb2z77AXFkV0sof7Uo0v",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/56WwKhBsxrWjpwXvJVLAjZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/56WwKhBsxrWjpwXvJVLAjZ",
                                "id": "56WwKhBsxrWjpwXvJVLAjZ",
                                "name": "Andrea Echeverri",
                                "type": "artist",
                                "uri": "spotify:artist:56WwKhBsxrWjpwXvJVLAjZ"
                            }
                        ],
                        "id": "6dmb2z77AXFkV0sof7Uo0v"
                    },
                    {
                        "trackName": "Loco Perdido",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0cb319ff61b54988d0f78fc68fad5ec1346994e0?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Loco+Perdido.mp3",
                        "uri": "spotify:track:2KO1FhFfJMqQF1q5HWZrSS",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2XVoz4hoXgQ3C2BTGxl9V2"
                                },
                                "href": "https://api.spotify.com/v1/artists/2XVoz4hoXgQ3C2BTGxl9V2",
                                "id": "2XVoz4hoXgQ3C2BTGxl9V2",
                                "name": "Juan Ingaramo",
                                "type": "artist",
                                "uri": "spotify:artist:2XVoz4hoXgQ3C2BTGxl9V2"
                            }
                        ],
                        "id": "2KO1FhFfJMqQF1q5HWZrSS"
                    },
                    {
                        "trackName": "El Negro José",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ae6fd49eb4695ab2eb1030c72c42be52bd8e7444?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/El+Negro+Jose%CC%81.mp3",
                        "uri": "spotify:track:0i3DBMtpVda2Cb0qtB9bdf",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Jo06O68y5JjVgiPbAR9Ox"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Jo06O68y5JjVgiPbAR9Ox",
                                "id": "0Jo06O68y5JjVgiPbAR9Ox",
                                "name": "Agarrate Catalina",
                                "type": "artist",
                                "uri": "spotify:artist:0Jo06O68y5JjVgiPbAR9Ox"
                            }
                        ],
                        "id": "0i3DBMtpVda2Cb0qtB9bdf"
                    },
                    {
                        "trackName": "Por Cuatro Días Locos",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b665ef84cae04a2f64506685c540475bf4351163?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Por+Cuatro+Di%CC%81as+Locos.mp3",
                        "uri": "spotify:track:3AzqUKITHW4dXblp5B87YA",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4KKXrrtxhGHmx1gZrqB2FT"
                                },
                                "href": "https://api.spotify.com/v1/artists/4KKXrrtxhGHmx1gZrqB2FT",
                                "id": "4KKXrrtxhGHmx1gZrqB2FT",
                                "name": "Pipo Cipolatti",
                                "type": "artist",
                                "uri": "spotify:artist:4KKXrrtxhGHmx1gZrqB2FT"
                            }
                        ],
                        "id": "3AzqUKITHW4dXblp5B87YA"
                    },
                    {
                        "trackName": "América",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8caa6b49f140f40a5004d4ae2ab996e62376cc6f?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Ame%CC%81rica.mp3",
                        "uri": "spotify:track:4xwUANiwIWZ2UkKxXzSSSJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HrbmsYpKjWH1lzhad7alj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HrbmsYpKjWH1lzhad7alj",
                                "id": "3HrbmsYpKjWH1lzhad7alj",
                                "name": "Los Auténticos Decadentes",
                                "type": "artist",
                                "uri": "spotify:artist:3HrbmsYpKjWH1lzhad7alj"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2fsQcmsoEVZD4EHZOzARdx"
                                },
                                "href": "https://api.spotify.com/v1/artists/2fsQcmsoEVZD4EHZOzARdx",
                                "id": "2fsQcmsoEVZD4EHZOzARdx",
                                "name": "Systema Solar",
                                "type": "artist",
                                "uri": "spotify:artist:2fsQcmsoEVZD4EHZOzARdx"
                            }
                        ],
                        "id": "4xwUANiwIWZ2UkKxXzSSSJ"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Barbie The Album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                        },
                        "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                        "id": "0LyfQWJT6nXafLPZqxe9Of",
                        "name": "Various Artists",
                        "type": "artist",
                        "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273d16ac0ec27653182d719ab36",
                "id": "0BaIaHcyBXuOWeM4Aas4EW",
                "tracks": [
                    {
                        "trackName": "Pink",
                        "trackPreview": "https://p.scdn.co/mp3-preview/865b938b57fa6e825eb40d51693be267997a8549?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/LIZZO+-+Pink+(From+Barbie+The+Album)+%5BOfficial+Audio%5D.mp3",
                        "uri": "spotify:track:2YXGbxICUdOUJe9OPlicy1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/56oDRnqbIiwx4mymNEv7dS"
                                },
                                "href": "https://api.spotify.com/v1/artists/56oDRnqbIiwx4mymNEv7dS",
                                "id": "56oDRnqbIiwx4mymNEv7dS",
                                "name": "Lizzo",
                                "type": "artist",
                                "uri": "spotify:artist:56oDRnqbIiwx4mymNEv7dS"
                            }
                        ],
                        "id": "2YXGbxICUdOUJe9OPlicy1"
                    },
                    {
                        "trackName": "Dance The Night",
                        "trackPreview": "https://p.scdn.co/mp3-preview/acaea048f50a3b30ca24b348c84a6047373baabb?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Dua+Lipa+-+Dance+The+Night+(From+Barbie+The+Album)+%5BOfficial+Music+Video%5D.mp3",
                        "uri": "spotify:track:11C4y2Yz1XbHmaQwO06s9f",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we"
                                },
                                "href": "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
                                "id": "6M2wZ9GZgrQXHCFfjv46we",
                                "name": "Dua Lipa",
                                "type": "artist",
                                "uri": "spotify:artist:6M2wZ9GZgrQXHCFfjv46we"
                            }
                        ],
                        "id": "11C4y2Yz1XbHmaQwO06s9f"
                    },
                    {
                        "trackName": "Barbie World (with Aqua)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f5dc8aac9ae8803cf86b2c9bec80bf1e52a81514?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Minaj+%26+Ice+Spice+%E2%80%93+Barbie+World+(with+Aqua)+%5BOfficial+Music+Video%5D.mp3",
                        "uri": "spotify:track:2tQG2nFEHhWsH05kFKlC4A",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"
                                },
                                "href": "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
                                "id": "0hCNtLu0JehylgoiP8L4Gh",
                                "name": "Nicki Minaj",
                                "type": "artist",
                                "uri": "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3LZZPxNDGDFVSIPqf4JuEf"
                                },
                                "href": "https://api.spotify.com/v1/artists/3LZZPxNDGDFVSIPqf4JuEf",
                                "id": "3LZZPxNDGDFVSIPqf4JuEf",
                                "name": "Ice Spice",
                                "type": "artist",
                                "uri": "spotify:artist:3LZZPxNDGDFVSIPqf4JuEf"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6kBjAFKyd0he7LiA5GQ3Gz"
                                },
                                "href": "https://api.spotify.com/v1/artists/6kBjAFKyd0he7LiA5GQ3Gz",
                                "id": "6kBjAFKyd0he7LiA5GQ3Gz",
                                "name": "Aqua",
                                "type": "artist",
                                "uri": "spotify:artist:6kBjAFKyd0he7LiA5GQ3Gz"
                            }
                        ],
                        "id": "2tQG2nFEHhWsH05kFKlC4A"
                    },
                    {
                        "trackName": "Speed Drive",
                        "trackPreview": "https://p.scdn.co/mp3-preview/bd0a080a87ce594303d57981d921d65e12af6599?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Charli+XCX+-+Speed+Drive+(From+Barbie+The+Album)+%5BOfficial+Audio%5D.mp3",
                        "uri": "spotify:track:7GRv55NwkjxU2ysJLwzC9c",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5"
                                },
                                "href": "https://api.spotify.com/v1/artists/25uiPmTg16RbhZWAqwLBy5",
                                "id": "25uiPmTg16RbhZWAqwLBy5",
                                "name": "Charli XCX",
                                "type": "artist",
                                "uri": "spotify:artist:25uiPmTg16RbhZWAqwLBy5"
                            }
                        ],
                        "id": "7GRv55NwkjxU2ysJLwzC9c"
                    },
                    {
                        "trackName": "WATATI (feat. Aldo Ranks)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/02901e122d9f625b87b0264f99f551ca6023fe13?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/KAROL+G+-+WATATI+(feat.+Aldo+Ranks)+(From+Barbie+The+Album)+%5BOfficial+Music+Video%5D.mp3",
                        "uri": "spotify:track:5Pt5PdAOOXLdYiXAIl68K6",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla"
                                },
                                "href": "https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla",
                                "id": "790FomKkXshlbRYZFtlgla",
                                "name": "KAROL G",
                                "type": "artist",
                                "uri": "spotify:artist:790FomKkXshlbRYZFtlgla"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0lsEtpjLWn4S7KBra82VG3"
                                },
                                "href": "https://api.spotify.com/v1/artists/0lsEtpjLWn4S7KBra82VG3",
                                "id": "0lsEtpjLWn4S7KBra82VG3",
                                "name": "Aldo Ranks",
                                "type": "artist",
                                "uri": "spotify:artist:0lsEtpjLWn4S7KBra82VG3"
                            }
                        ],
                        "id": "5Pt5PdAOOXLdYiXAIl68K6"
                    },
                    {
                        "trackName": "Man I Am",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d5e46c28ddb0e05d7ef989aee9150f9bd805d33e?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Sam+Smith+-+Man+I+Am+(From+Barbie+The+Album)+%5BOfficial+Lyric+Video%5D.mp3",
                        "uri": "spotify:track:28NzgzNmoHRsFKihGxpmmV",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
                                },
                                "href": "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
                                "id": "2wY79sveU1sp5g7SokKOiI",
                                "name": "Sam Smith",
                                "type": "artist",
                                "uri": "spotify:artist:2wY79sveU1sp5g7SokKOiI"
                            }
                        ],
                        "id": "28NzgzNmoHRsFKihGxpmmV"
                    },
                    {
                        "trackName": "Journey To The Real World",
                        "trackPreview": "https://p.scdn.co/mp3-preview/96b99a0587fae607b13d667a818fc95f148039d3?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Tame+Impala+-+Journey+To+The+Real+World+(From+Barbie+The+Album)+%5BOfficial+Audio%5D.mp3",
                        "uri": "spotify:track:43evTNhnbi70nlOVZ8Q5sK",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
                                },
                                "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
                                "id": "5INjqkS1o8h1imAzPqGZBb",
                                "name": "Tame Impala",
                                "type": "artist",
                                "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
                            }
                        ],
                        "id": "43evTNhnbi70nlOVZ8Q5sK"
                    },
                    {
                        "trackName": "I’m Just Ken",
                        "trackPreview": "https://p.scdn.co/mp3-preview/595d7b0d2f3b9a5f00567dcb9403d22290595d89?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Ryan+Gosling+-+I'm+Just+Ken+(From+Barbie+The+Album)+%5BOfficial+Audio%5D.mp3",
                        "uri": "spotify:track:3zXIvb4nZ3cTdT8CsbTy3U",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6kXm2YCtdUOpRYNKeKhfue"
                                },
                                "href": "https://api.spotify.com/v1/artists/6kXm2YCtdUOpRYNKeKhfue",
                                "id": "6kXm2YCtdUOpRYNKeKhfue",
                                "name": "Ryan Gosling",
                                "type": "artist",
                                "uri": "spotify:artist:6kXm2YCtdUOpRYNKeKhfue"
                            }
                        ],
                        "id": "3zXIvb4nZ3cTdT8CsbTy3U"
                    },
                    {
                        "trackName": "Hey Blondie",
                        "trackPreview": "https://p.scdn.co/mp3-preview/676841754fc65043fb464ed19f3c3b2edc007a4b?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Dominic+Fike+-++Hey+Blondie+(From+Barbie+The+Album)+%5BOfficial+Audio%5D.mp3",
                        "uri": "spotify:track:0hABacr1yTSleOlPKpIWBb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6USv9qhCn6zfxlBQIYJ9qs"
                                },
                                "href": "https://api.spotify.com/v1/artists/6USv9qhCn6zfxlBQIYJ9qs",
                                "id": "6USv9qhCn6zfxlBQIYJ9qs",
                                "name": "Dominic Fike",
                                "type": "artist",
                                "uri": "spotify:artist:6USv9qhCn6zfxlBQIYJ9qs"
                            }
                        ],
                        "id": "0hABacr1yTSleOlPKpIWBb"
                    },
                    {
                        "trackName": "Home",
                        "trackPreview": "https://p.scdn.co/mp3-preview/49b6b3c80417e94c4423cb523568a56464385464?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/HAIM+-+Home+(From+Barbie+The+Album)+%5BOfficial+Audio%5D.mp3",
                        "uri": "spotify:track:6Tv4vYGT0mjnqkHdRpyxbg",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4Ui2kfOqGujY81UcPrb5KE"
                                },
                                "href": "https://api.spotify.com/v1/artists/4Ui2kfOqGujY81UcPrb5KE",
                                "id": "4Ui2kfOqGujY81UcPrb5KE",
                                "name": "HAIM",
                                "type": "artist",
                                "uri": "spotify:artist:4Ui2kfOqGujY81UcPrb5KE"
                            }
                        ],
                        "id": "6Tv4vYGT0mjnqkHdRpyxbg"
                    }
                ]
            },
            {
                "type": "album",
                "name": "The Ballad of Darren",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                        },
                        "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                        "id": "7MhMgCo0Bl0Kukl93PZbYS",
                        "name": "Blur",
                        "type": "artist",
                        "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b27366983a07a1871c1686df3965",
                "id": "3DQnGjOrmXmGeShaBGz7SF",
                "tracks": [
                    {
                        "trackName": "The Ballad",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+The+Ballad+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/6cd9390a13c3a095900d30cc7a5b581283e5f4fa?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7ivyAIEHgXWaRFCP3hRDNP",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "7ivyAIEHgXWaRFCP3hRDNP"
                    },
                    {
                        "trackName": "St. Charles Square",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+St+Charles+Square+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2b99b8b233ff633a874a51d16861d6f7faa6e83b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5rQzYzJ3zxkAUW9ZABopPX",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "5rQzYzJ3zxkAUW9ZABopPX"
                    },
                    {
                        "trackName": "Barbaric",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+Barbaric+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d24978654a066516833c9cf76ecc92b3b17166a0?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1vDnhuoFPLK3Vgf64yO8fG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "1vDnhuoFPLK3Vgf64yO8fG"
                    },
                    {
                        "trackName": "Russian Strings",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+Russian+Strings+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ba2f69cb7e0a0447b5a9a5c0b325ce3ba2380d24?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3tFyBzIuVV9htLOl5wHol1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "3tFyBzIuVV9htLOl5wHol1"
                    },
                    {
                        "trackName": "The Everglades (For Leonard)",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+The+Everglades+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e50e35f5ad75d260792151d82d6e88a00b45cde5?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:18CxELHfz4vuT1SMqn9jJT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "18CxELHfz4vuT1SMqn9jJT"
                    },
                    {
                        "trackName": "The Narcissist",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+The+Narcissist+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5adb4e89f3789ad5784350b471037cac95c37be3?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1sMdpcagMWiecAzBrpzwlP",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "1sMdpcagMWiecAzBrpzwlP"
                    },
                    {
                        "trackName": "Goodbye Albert",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+Goodbye+Albert+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/140bc82cf637e9611504475e51dca781e51e76b6?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1Aj60rMHNryCFEOJNNsEZ2",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "1Aj60rMHNryCFEOJNNsEZ2"
                    },
                    {
                        "trackName": "Far Away Island",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+Far+Away+Island+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/cd40d3bb29a39d07c94d942969655efbb7f9e391?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1fP2JyIqbRROizbNECUol2",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "1fP2JyIqbRROizbNECUol2"
                    },
                    {
                        "trackName": "Avalon",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+Avalon+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b56441eea6d595e64c86020c867d5ef6ae4cb3a9?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5XiwpN8XHnqGEwFplOllXb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "5XiwpN8XHnqGEwFplOllXb"
                    },
                    {
                        "trackName": "The Heights",
                        'trackFull':"https://apispotify.s3.sa-east-1.amazonaws.com/Blur+-+The+Heights+(Official+Visualiser).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0a2ce93bd6cccee3e1a1a07fab3180c70960807f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2SyFioU8y4yacXVKxHb8Fd",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7MhMgCo0Bl0Kukl93PZbYS"
                                },
                                "href": "https://api.spotify.com/v1/artists/7MhMgCo0Bl0Kukl93PZbYS",
                                "id": "7MhMgCo0Bl0Kukl93PZbYS",
                                "name": "Blur",
                                "type": "artist",
                                "uri": "spotify:artist:7MhMgCo0Bl0Kukl93PZbYS"
                            }
                        ],
                        "id": "2SyFioU8y4yacXVKxHb8Fd"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Antes de Ameri",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                        },
                        "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                        "id": "1bAftSH8umNcGZ0uyV7LMg",
                        "name": "Duki",
                        "type": "artist",
                        "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b27305f22a3797d9b3cf34e6497c",
                "id": "2A7S80QXLWlzw41LwkRYRU",
                "tracks": [
                    {
                        "trackName": "01 dE ENEro",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI%2C+Lucho+SSJ+-+01+dE+ENEro+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:5KqaqJGPWgSJKVzDfmx2Mf",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1OBizG9nrnHJkrL9NjnWYN"
                                },
                                "href": "https://api.spotify.com/v1/artists/1OBizG9nrnHJkrL9NjnWYN",
                                "id": "1OBizG9nrnHJkrL9NjnWYN",
                                "name": "Lucho SSJ",
                                "type": "artist",
                                "uri": "spotify:artist:1OBizG9nrnHJkrL9NjnWYN"
                            }
                        ],
                        "id": "5KqaqJGPWgSJKVzDfmx2Mf"
                    },
                    {
                        "trackName": "JEFES DEL SUDOESTE",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI+-+JEFES+DEL+SUDOESTE+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:1AnmoOrnlOea9GEUSnIqvR",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            }
                        ],
                        "id": "1AnmoOrnlOea9GEUSnIqvR"
                    },
                    {
                        "trackName": "RoCKSTAR 2.0",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI%2C+Jhayco+-+RoCKSTAR+2.0+(Video+Oficial).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:3XsYMEJutxpTiNXXRvodQH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6nVcHLIgY5pE2YCl8ubca1"
                                },
                                "href": "https://api.spotify.com/v1/artists/6nVcHLIgY5pE2YCl8ubca1",
                                "id": "6nVcHLIgY5pE2YCl8ubca1",
                                "name": "Jhayco",
                                "type": "artist",
                                "uri": "spotify:artist:6nVcHLIgY5pE2YCl8ubca1"
                            }
                        ],
                        "id": "3XsYMEJutxpTiNXXRvodQH"
                    },
                    {
                        "trackName": "hARAkiRI",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Duki%2C+C.R.O+-++hARAkiRi+(Video+Oficial).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:52zhKoihKm8l2mf4eVOqRs",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "52zhKoihKm8l2mf4eVOqRs"
                    },
                    {
                        "trackName": "cONTRA><Mi",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI%2C+WE%24T+DUBAI+-+cONTRA+Mi+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:0TSeUlki6qsc7YYS9vRORy",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0ThxHJx0ElqLD8h2Compyq"
                                },
                                "href": "https://api.spotify.com/v1/artists/0ThxHJx0ElqLD8h2Compyq",
                                "id": "0ThxHJx0ElqLD8h2Compyq",
                                "name": "WE$T DUBAI",
                                "type": "artist",
                                "uri": "spotify:artist:0ThxHJx0ElqLD8h2Compyq"
                            }
                        ],
                        "id": "0TSeUlki6qsc7YYS9vRORy"
                    },
                    {
                        "trackName": "CSIpher (audio latino)",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI%2C+Akapellah%2C+Neutro+Shorty%2C+Micro+TDH+-+CSIpher+(audio+latino)+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:39jHhYnMF65lncV4agV5dX",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6fMZytDgX1Q9OV6ndSugym"
                                },
                                "href": "https://api.spotify.com/v1/artists/6fMZytDgX1Q9OV6ndSugym",
                                "id": "6fMZytDgX1Q9OV6ndSugym",
                                "name": "Akapellah",
                                "type": "artist",
                                "uri": "spotify:artist:6fMZytDgX1Q9OV6ndSugym"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5wUO3A6DT4tO5UDz21kE2Y"
                                },
                                "href": "https://api.spotify.com/v1/artists/5wUO3A6DT4tO5UDz21kE2Y",
                                "id": "5wUO3A6DT4tO5UDz21kE2Y",
                                "name": "Neutro Shorty",
                                "type": "artist",
                                "uri": "spotify:artist:5wUO3A6DT4tO5UDz21kE2Y"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1aWJsBQa67l72j1VT3D6Ow"
                                },
                                "href": "https://api.spotify.com/v1/artists/1aWJsBQa67l72j1VT3D6Ow",
                                "id": "1aWJsBQa67l72j1VT3D6Ow",
                                "name": "Micro TDH",
                                "type": "artist",
                                "uri": "spotify:artist:1aWJsBQa67l72j1VT3D6Ow"
                            }
                        ],
                        "id": "39jHhYnMF65lncV4agV5dX"
                    },
                    {
                        "trackName": "GiGi",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI+-+GiGi+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:36zgRnfQ814c0ehQP5lJmC",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            }
                        ],
                        "id": "36zgRnfQ814c0ehQP5lJmC"
                    },
                    {
                        "trackName": "don't liE",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI%2C+Quevedo+-+don't+liE+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:6e46jZKoeaOCShrVJK1XzN",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52iwsT98xCoGgiGntTiR7K"
                                },
                                "href": "https://api.spotify.com/v1/artists/52iwsT98xCoGgiGntTiR7K",
                                "id": "52iwsT98xCoGgiGntTiR7K",
                                "name": "Quevedo",
                                "type": "artist",
                                "uri": "spotify:artist:52iwsT98xCoGgiGntTiR7K"
                            }
                        ],
                        "id": "6e46jZKoeaOCShrVJK1XzN"
                    },
                    {
                        "trackName": "antes de perderte (OG VERSION)",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI+-+antes+de+perderte+(OG+VERSION)+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:6exC3DNfDb9Y8wA2lhnVV8",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            }
                        ],
                        "id": "6exC3DNfDb9Y8wA2lhnVV8"
                    },
                    {
                        "trackName": "uNO dOS",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/DUKI%2C+Salastkbron+-+uNO+dOS+(Video+Lyric).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:6T2lmSzYB7V4tqYazwJITe",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3WMlRpW5JWuDI95TcEWt3r"
                                },
                                "href": "https://api.spotify.com/v1/artists/3WMlRpW5JWuDI95TcEWt3r",
                                "id": "3WMlRpW5JWuDI95TcEWt3r",
                                "name": "Salastkbron",
                                "type": "artist",
                                "uri": "spotify:artist:3WMlRpW5JWuDI95TcEWt3r"
                            }
                        ],
                        "id": "6T2lmSzYB7V4tqYazwJITe"
                    }
                ]
            },
            {
                "type": "album",
                "name": "GÉNESIS",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                        },
                        "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                        "id": "12GqGscKJx3aE4t07u7eVZ",
                        "name": "Peso Pluma",
                        "type": "artist",
                        "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273e6f540885b43d6f379360b22",
                "id": "7DOIN787fF8Jv9KFZEBcW6",
                "tracks": [
                    {
                        "trackName": "ROSA PASTEL",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Peso+Pluma%2C+Jasiel+Nu%C3%B1ez+-+Rosa+Pastel+(Video+Oficial).mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:59vyx2m4EpPk7tk2PzV075",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0T8Ix53aIN4F7aEKj4EnKy"
                                },
                                "href": "https://api.spotify.com/v1/artists/0T8Ix53aIN4F7aEKj4EnKy",
                                "id": "0T8Ix53aIN4F7aEKj4EnKy",
                                "name": "Jasiel Nuñez",
                                "type": "artist",
                                "uri": "spotify:artist:0T8Ix53aIN4F7aEKj4EnKy"
                            }
                        ],
                        "id": "59vyx2m4EpPk7tk2PzV075"
                    },
                    {
                        "trackName": "LUNA",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/LUNA+(Lyric+Video)+-+Peso+Pluma%2C+Junior+H.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:4I1OcJiqk279qLaI2OAecB",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7Gi6gjaWy3DxyilpF1a8Is"
                                },
                                "href": "https://api.spotify.com/v1/artists/7Gi6gjaWy3DxyilpF1a8Is",
                                "id": "7Gi6gjaWy3DxyilpF1a8Is",
                                "name": "Junior H",
                                "type": "artist",
                                "uri": "spotify:artist:7Gi6gjaWy3DxyilpF1a8Is"
                            }
                        ],
                        "id": "4I1OcJiqk279qLaI2OAecB"
                    },
                    {
                        "trackName": "77",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/77+(Visualizer)-+Peso+Pluma%2C+Eladio+Carri%C3%B3n.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:3exe4YcyPO5utmTZcbvQkm",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5XJDexmWFLWOkjOEjOVX3e"
                                },
                                "href": "https://api.spotify.com/v1/artists/5XJDexmWFLWOkjOEjOVX3e",
                                "id": "5XJDexmWFLWOkjOEjOVX3e",
                                "name": "Eladio Carrion",
                                "type": "artist",
                                "uri": "spotify:artist:5XJDexmWFLWOkjOEjOVX3e"
                            }
                        ],
                        "id": "3exe4YcyPO5utmTZcbvQkm"
                    },
                    {
                        "trackName": "RUBICON",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/RUBICON+(Lyric+Video)+-+Peso+Pluma.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:4Fs2x6hJPy97PcTjGECLVX",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            }
                        ],
                        "id": "4Fs2x6hJPy97PcTjGECLVX"
                    },
                    {
                        "trackName": "CARNAL",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/CARNAL+(Lyric+Video)+-+Peso+Pluma%2C+Natanael+Cano.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:3hSV42Sx3dAaYwjOPZgubn",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0elWFr7TW8piilVRYJUe4P"
                                },
                                "href": "https://api.spotify.com/v1/artists/0elWFr7TW8piilVRYJUe4P",
                                "id": "0elWFr7TW8piilVRYJUe4P",
                                "name": "Natanael Cano",
                                "type": "artist",
                                "uri": "spotify:artist:0elWFr7TW8piilVRYJUe4P"
                            }
                        ],
                        "id": "3hSV42Sx3dAaYwjOPZgubn"
                    },
                    {
                        "trackName": "GAVILÁN II",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/GAVIL%C3%81N+II+(Lyric+Video)+-+Peso+Pluma%2C+Tito+Double+P.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:5hNvpD3zyWUv1i7L1SN69P",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5eumcnUkdmGvkvcsx1WFNG"
                                },
                                "href": "https://api.spotify.com/v1/artists/5eumcnUkdmGvkvcsx1WFNG",
                                "id": "5eumcnUkdmGvkvcsx1WFNG",
                                "name": "Tito Double P",
                                "type": "artist",
                                "uri": "spotify:artist:5eumcnUkdmGvkvcsx1WFNG"
                            }
                        ],
                        "id": "5hNvpD3zyWUv1i7L1SN69P"
                    },
                    {
                        "trackName": "VVS",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/VVS+(Visualizer)+-+Peso+Pluma%2C+Peso+Pluma%2C+Edgardo+Nu%C3%B1ez%2C+Los+Dareyes+De+La+Sierra.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:2IESJGeddbtwiVr4ug0SN3",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0mA4dkNGiN4fqTBi2SLlAv"
                                },
                                "href": "https://api.spotify.com/v1/artists/0mA4dkNGiN4fqTBi2SLlAv",
                                "id": "0mA4dkNGiN4fqTBi2SLlAv",
                                "name": "Edgardo Nuñez",
                                "type": "artist",
                                "uri": "spotify:artist:0mA4dkNGiN4fqTBi2SLlAv"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1ZMJSCQw8DIefcLb1FIpY0"
                                },
                                "href": "https://api.spotify.com/v1/artists/1ZMJSCQw8DIefcLb1FIpY0",
                                "id": "1ZMJSCQw8DIefcLb1FIpY0",
                                "name": "Los Dareyes De La Sierra",
                                "type": "artist",
                                "uri": "spotify:artist:1ZMJSCQw8DIefcLb1FIpY0"
                            }
                        ],
                        "id": "2IESJGeddbtwiVr4ug0SN3"
                    },
                    {
                        "trackName": "SU CASA",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/SU+CASA+(Lyric+Video)+-+Peso+Pluma%2C+Luis+R+Conriquez.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:626vswICsSvlVh4ILUhZJ1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0pePYDrJGk8gqMRbXrLJC8"
                                },
                                "href": "https://api.spotify.com/v1/artists/0pePYDrJGk8gqMRbXrLJC8",
                                "id": "0pePYDrJGk8gqMRbXrLJC8",
                                "name": "Luis R Conriquez",
                                "type": "artist",
                                "uri": "spotify:artist:0pePYDrJGk8gqMRbXrLJC8"
                            }
                        ],
                        "id": "626vswICsSvlVh4ILUhZJ1"
                    },
                    {
                        "trackName": "LADY GAGA",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/LADY+GAGA+(Visualizer)+-+Peso+Pluma%2C+Gabito+Ballesteros%2C+Junior+H.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:0WCxpmafw3tOlUmiilGbsy",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6Sbl0NT50roqWvy746MfVf"
                                },
                                "href": "https://api.spotify.com/v1/artists/6Sbl0NT50roqWvy746MfVf",
                                "id": "6Sbl0NT50roqWvy746MfVf",
                                "name": "Gabito Ballesteros",
                                "type": "artist",
                                "uri": "spotify:artist:6Sbl0NT50roqWvy746MfVf"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7Gi6gjaWy3DxyilpF1a8Is"
                                },
                                "href": "https://api.spotify.com/v1/artists/7Gi6gjaWy3DxyilpF1a8Is",
                                "id": "7Gi6gjaWy3DxyilpF1a8Is",
                                "name": "Junior H",
                                "type": "artist",
                                "uri": "spotify:artist:7Gi6gjaWy3DxyilpF1a8Is"
                            }
                        ],
                        "id": "0WCxpmafw3tOlUmiilGbsy"
                    },
                    {
                        "trackName": "ZAPATA",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/ZAPATA+(Lyric+Video)+-+Peso+Pluma.mp3",
                        "trackPreview": null,
                        "uri": "spotify:track:2RfgqSStQTI0QbHsYxtfzr",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            }
                        ],
                        "id": "2RfgqSStQTI0QbHsYxtfzr"
                    }
                ]
            },
            {
                "type": "album",
                "name": "El Final de Las Cosas",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                        },
                        "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                        "id": "4nwFiHgPXUpo0KgR1rZSAD",
                        "name": "Barbi Recanati",
                        "type": "artist",
                        "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273bd7ef38e657682ce1c45f8f6",
                "id": "6Gh40ffCJ280FrGTdBBynv",
                "tracks": [
                    {
                        "trackName": "Caja de cristal",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-+Caja+de+Cristal+(Videolyric+oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2ec672bf42cd3e07b1ca994a4bbaf83f6bf68ee5?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3v0dpvCKT45z784aUQsp6v",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "3v0dpvCKT45z784aUQsp6v"
                    },
                    {
                        "trackName": "Lo Que Queda",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-+Lo+que+queda+(Video+Oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7bfd5fd3506c03bb64074bf8eb24575460d7158e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3QbS2pv9fAbZNg5WRIyP8p",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "3QbS2pv9fAbZNg5WRIyP8p"
                    },
                    {
                        "trackName": "Lo Hice Mío",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-++Lo+hice+mi%CC%81o+(videolyric+oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8ff4a2c84563824006c553daa05d88dea3979657?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0nw9Q9oD0pPyutdaUm0HW8",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "0nw9Q9oD0pPyutdaUm0HW8"
                    },
                    {
                        "trackName": "Para Vos",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Video+Not+Available.mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f714b1b1b525e69037a2a751d359e0679a1b86a1?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5Wn6EaftQHohX92ngGiFxM",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "5Wn6EaftQHohX92ngGiFxM"
                    },
                    {
                        "trackName": "Cosas",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-+Cosas+(videolyric+oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/aa86f90d7a9c8555c3e51dc8e93ea2e596d78c71?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6riiQKiXfkjpLehVi7nypW",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "6riiQKiXfkjpLehVi7nypW"
                    },
                    {
                        "trackName": "Arte Arte Arte",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-+Arte%2C+arte%2C+arte+(videolyric+oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/930ea69fa38e3d4c45aed9492a436a19907e4e2f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2rfxEjASx8ppSSn2aQUwQG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "2rfxEjASx8ppSSn2aQUwQG"
                    },
                    {
                        "trackName": "Fin del Mundo",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-++Fin+del+mundo+(videolyric+oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/88ce2c0b9ac53279fca6a25ec2d41c57a7b8e2ae?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7dHGMhXPRRFysGYVZv9bhM",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "7dHGMhXPRRFysGYVZv9bhM"
                    },
                    {
                        "trackName": "Esta Noche",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-+Esta+noche+(videolyric+oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b8ab8ffaf581918a48ce3dde214bdcc7348dc5ab?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0c3dufK86y9ZV18V2AlLg9",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "0c3dufK86y9ZV18V2AlLg9"
                    },
                    {
                        "trackName": "Delorean",
                        "trackFull":"https://apispotify.s3.sa-east-1.amazonaws.com/Barbi+Recanati+-++Delorean+(video+lyric+oficial).mp3",
                        "trackPreview": "https://p.scdn.co/mp3-preview/301cef78b7efe0076240688749b952f32f87c210?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0Dv4QhalWmiCbyHRz2zs4v",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4nwFiHgPXUpo0KgR1rZSAD"
                                },
                                "href": "https://api.spotify.com/v1/artists/4nwFiHgPXUpo0KgR1rZSAD",
                                "id": "4nwFiHgPXUpo0KgR1rZSAD",
                                "name": "Barbi Recanati",
                                "type": "artist",
                                "uri": "spotify:artist:4nwFiHgPXUpo0KgR1rZSAD"
                            }
                        ],
                        "id": "0Dv4QhalWmiCbyHRz2zs4v"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Mienten",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                        },
                        "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                        "id": "0Dy32zfSrQ332Bz8wsthKJ",
                        "name": "La Beriso",
                        "type": "artist",
                        "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b27331cb961da4117c90d00b0905",
                "id": "235Wl5n7jidt5DZCMobnlR",
                "tracks": [
                    {
                        "trackName": "Creyendo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a4627c56cbd2e5c799d7d2c5be56f49bffd89cb2?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5Wg0JaR3ISjSYyNAdMNgM5",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "5Wg0JaR3ISjSYyNAdMNgM5"
                    },
                    {
                        "trackName": "Reflejo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/77e6c44f2635dcbee8fc6779e95984cc595a3bfb?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5yNGAeS6FyYzWfchocNejJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "5yNGAeS6FyYzWfchocNejJ"
                    },
                    {
                        "trackName": "Cansada",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fe23467406db910f19b235c9d4f78a40e1d6dd16?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:68GYM2kcn9AeUTuJnQ5BYG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "68GYM2kcn9AeUTuJnQ5BYG"
                    },
                    {
                        "trackName": "Ratas",
                        "trackPreview": "https://p.scdn.co/mp3-preview/918495dee0d5dd8c23a5a3a62d3bb63a72215169?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5lYZ6cq6lGg3IX3iyGG9R8",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "5lYZ6cq6lGg3IX3iyGG9R8"
                    },
                    {
                        "trackName": "Mal Juego",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fa0bf884a5b2c17406015444523507022e8ab985?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6PsR9m0G1dHR3nvVxylI7J",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "6PsR9m0G1dHR3nvVxylI7J"
                    },
                    {
                        "trackName": "Cordura",
                        "trackPreview": "https://p.scdn.co/mp3-preview/677ed02859ab7e326d7fb749a798e0abd9edc69e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0lZLtasG249bQcfqmSuYgm",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "0lZLtasG249bQcfqmSuYgm"
                    },
                    {
                        "trackName": "Atorrantear",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d7fc2742f926d44b765ef0c43ee71c1f00663cf1?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5YmXEj5Bg8VumGGHtyDWm5",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "5YmXEj5Bg8VumGGHtyDWm5"
                    },
                    {
                        "trackName": "Señal",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0ccafd9197811db6fab51cc9f617471d4ef8610b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3wbNcSSX8ipuqDEvuSkL6W",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "3wbNcSSX8ipuqDEvuSkL6W"
                    },
                    {
                        "trackName": "Recordé",
                        "trackPreview": "https://p.scdn.co/mp3-preview/953f1843c3c4b34868c4b3b8c032b268f4715963?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:46XgOn8L2oj6m9n6xpDxq7",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "46XgOn8L2oj6m9n6xpDxq7"
                    },
                    {
                        "trackName": "Calles del Sol",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c021ca5908df2410d2de43a675918c684651d440?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:67HapkoNbUqZaoE4gAwmqA",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Dy32zfSrQ332Bz8wsthKJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Dy32zfSrQ332Bz8wsthKJ",
                                "id": "0Dy32zfSrQ332Bz8wsthKJ",
                                "name": "La Beriso",
                                "type": "artist",
                                "uri": "spotify:artist:0Dy32zfSrQ332Bz8wsthKJ"
                            }
                        ],
                        "id": "67HapkoNbUqZaoE4gAwmqA"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Peso Pluma: Bzrp Music Sessions, Vol. 55",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/716NhGYqD1jl2wI1Qkgq36"
                        },
                        "href": "https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36",
                        "id": "716NhGYqD1jl2wI1Qkgq36",
                        "name": "Bizarrap",
                        "type": "artist",
                        "uri": "spotify:artist:716NhGYqD1jl2wI1Qkgq36"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                        },
                        "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                        "id": "12GqGscKJx3aE4t07u7eVZ",
                        "name": "Peso Pluma",
                        "type": "artist",
                        "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b27315583045b2fdb7d7bab10e81",
                "id": "5dKPhEYBhP8j85HcxQfaw6",
                "tracks": [
                    {
                        "trackName": "Peso Pluma: Bzrp Music Sessions, Vol. 55",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9d61998a29c2e8b52a7d46885352f5507eb219e2?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5AqiaZwhmC6dIbgWrD5SzV",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/716NhGYqD1jl2wI1Qkgq36"
                                },
                                "href": "https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36",
                                "id": "716NhGYqD1jl2wI1Qkgq36",
                                "name": "Bizarrap",
                                "type": "artist",
                                "uri": "spotify:artist:716NhGYqD1jl2wI1Qkgq36"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            }
                        ],
                        "id": "5AqiaZwhmC6dIbgWrD5SzV"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Los del Espacio",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1vqR17Iv8VFdzure1TAXEq"
                        },
                        "href": "https://api.spotify.com/v1/artists/1vqR17Iv8VFdzure1TAXEq",
                        "id": "1vqR17Iv8VFdzure1TAXEq",
                        "name": "LIT killah",
                        "type": "artist",
                        "uri": "spotify:artist:1vqR17Iv8VFdzure1TAXEq"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b27352a52eac3761e2133bd0f57a",
                "id": "6DVg3IJPFr7JZDDXYcyPbU",
                "tracks": [
                    {
                        "trackName": "Los del Espacio",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5bbdd15509b10d1b62cf5aa43500255754e2096b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1Hs1uUl8o2VtDp1DABFq0O",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1vqR17Iv8VFdzure1TAXEq"
                                },
                                "href": "https://api.spotify.com/v1/artists/1vqR17Iv8VFdzure1TAXEq",
                                "id": "1vqR17Iv8VFdzure1TAXEq",
                                "name": "LIT killah",
                                "type": "artist",
                                "uri": "spotify:artist:1vqR17Iv8VFdzure1TAXEq"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5Y3MV9DZ0d87NnVm56qSY1"
                                },
                                "href": "https://api.spotify.com/v1/artists/5Y3MV9DZ0d87NnVm56qSY1",
                                "id": "5Y3MV9DZ0d87NnVm56qSY1",
                                "name": "Tiago PZK",
                                "type": "artist",
                                "uri": "spotify:artist:5Y3MV9DZ0d87NnVm56qSY1"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1DxLCyH42yaHKGK3cl5bvG"
                                },
                                "href": "https://api.spotify.com/v1/artists/1DxLCyH42yaHKGK3cl5bvG",
                                "id": "1DxLCyH42yaHKGK3cl5bvG",
                                "name": "Maria Becerra",
                                "type": "artist",
                                "uri": "spotify:artist:1DxLCyH42yaHKGK3cl5bvG"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                                "id": "1bAftSH8umNcGZ0uyV7LMg",
                                "name": "Duki",
                                "type": "artist",
                                "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0AqlFI0tz2DsEoJlKSIiT9"
                                },
                                "href": "https://api.spotify.com/v1/artists/0AqlFI0tz2DsEoJlKSIiT9",
                                "id": "0AqlFI0tz2DsEoJlKSIiT9",
                                "name": "Emilia",
                                "type": "artist",
                                "uri": "spotify:artist:0AqlFI0tz2DsEoJlKSIiT9"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3Apb2lGmGJaBmr0TTBJvIZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/3Apb2lGmGJaBmr0TTBJvIZ",
                                "id": "3Apb2lGmGJaBmr0TTBJvIZ",
                                "name": "Rusherking",
                                "type": "artist",
                                "uri": "spotify:artist:3Apb2lGmGJaBmr0TTBJvIZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2OhUNb01gLwygOizYvTm0e"
                                },
                                "href": "https://api.spotify.com/v1/artists/2OhUNb01gLwygOizYvTm0e",
                                "id": "2OhUNb01gLwygOizYvTm0e",
                                "name": "Big One",
                                "type": "artist",
                                "uri": "spotify:artist:2OhUNb01gLwygOizYvTm0e"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0dUyjgCyjfj5eMx6bX2TWf"
                                },
                                "href": "https://api.spotify.com/v1/artists/0dUyjgCyjfj5eMx6bX2TWf",
                                "id": "0dUyjgCyjfj5eMx6bX2TWf",
                                "name": "FMK",
                                "type": "artist",
                                "uri": "spotify:artist:0dUyjgCyjfj5eMx6bX2TWf"
                            }
                        ],
                        "id": "1Hs1uUl8o2VtDp1DABFq0O"
                    }
                ]
            },
            {
                "type": "album",
                "name": "EADDA9223",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                        },
                        "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                        "id": "1bZNv4q3OxYq7mmnLha7Tu",
                        "name": "Fito Paez",
                        "type": "artist",
                        "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b2736e6bb59de58d4d94d34e7c61",
                "id": "4VdWh8m5cYm3XI6dhayGIg",
                "tracks": [
                    {
                        "trackName": "El Amor Después del Amor - EADDA9223",
                        "trackPreview": "https://p.scdn.co/mp3-preview/71850441ad0f31d3f61ba58046d3fe742e77a105?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:47JxXxjwFwLLiWDAZr1l90",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            }
                        ],
                        "id": "47JxXxjwFwLLiWDAZr1l90"
                    },
                    {
                        "trackName": "Dos Días en la Vida - EADDA9223 (feat. Lali & Nicki Nicole)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/329aefa2adff1b803abce6f74b28616c9758aeea?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4oDx5VoqSQJCduO5J5A8MB",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/22P1OY4TRFRwhP0q29loQ8"
                                },
                                "href": "https://api.spotify.com/v1/artists/22P1OY4TRFRwhP0q29loQ8",
                                "id": "22P1OY4TRFRwhP0q29loQ8",
                                "name": "Lali",
                                "type": "artist",
                                "uri": "spotify:artist:22P1OY4TRFRwhP0q29loQ8"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            }
                        ],
                        "id": "4oDx5VoqSQJCduO5J5A8MB"
                    },
                    {
                        "trackName": "La Verónica - EADDA9223 (feat. NATHY PELUSO)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0d6ff0f40715e3b8dc657fb631fe6c961dfd6028?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3jlqMT67KiH9NxOOw5rUGt",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3VHAySZQPlfGlNLslzXYpN"
                                },
                                "href": "https://api.spotify.com/v1/artists/3VHAySZQPlfGlNLslzXYpN",
                                "id": "3VHAySZQPlfGlNLslzXYpN",
                                "name": "NATHY PELUSO",
                                "type": "artist",
                                "uri": "spotify:artist:3VHAySZQPlfGlNLslzXYpN"
                            }
                        ],
                        "id": "3jlqMT67KiH9NxOOw5rUGt"
                    },
                    {
                        "trackName": "Tráfico por Katmandú - EADDA9223 (feat. Elvis Costello)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/31c95e7019dc22adcd867b8e1e016de907c9cf3d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5uA7DFX95p3k7Mx4CABBI5",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2BGRfQgtzikz1pzAD0kaEn"
                                },
                                "href": "https://api.spotify.com/v1/artists/2BGRfQgtzikz1pzAD0kaEn",
                                "id": "2BGRfQgtzikz1pzAD0kaEn",
                                "name": "Elvis Costello",
                                "type": "artist",
                                "uri": "spotify:artist:2BGRfQgtzikz1pzAD0kaEn"
                            }
                        ],
                        "id": "5uA7DFX95p3k7Mx4CABBI5"
                    },
                    {
                        "trackName": "Pétalo de Sal - EADDA9223 (feat. Chico Buarque)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8041303b1f7e9f8b1957a5459a7366b5ae75883d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:10jLF2TNZkGFS6kmvvnCh9",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6tOsSffQQIXmK8TqsDck8t"
                                },
                                "href": "https://api.spotify.com/v1/artists/6tOsSffQQIXmK8TqsDck8t",
                                "id": "6tOsSffQQIXmK8TqsDck8t",
                                "name": "Chico Buarque",
                                "type": "artist",
                                "uri": "spotify:artist:6tOsSffQQIXmK8TqsDck8t"
                            }
                        ],
                        "id": "10jLF2TNZkGFS6kmvvnCh9"
                    },
                    {
                        "trackName": "Sasha, Sissi y el Círculo de Baba - EADDA9223 (feat. Mon Laferte)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9eefb2198cf2d4f221e13dc6b90b0a368f4b2e77?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0HdRf23VtIRpUdHH3mZc3L",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4boI7bJtmB1L3b1cuL75Zr"
                                },
                                "href": "https://api.spotify.com/v1/artists/4boI7bJtmB1L3b1cuL75Zr",
                                "id": "4boI7bJtmB1L3b1cuL75Zr",
                                "name": "Mon Laferte",
                                "type": "artist",
                                "uri": "spotify:artist:4boI7bJtmB1L3b1cuL75Zr"
                            }
                        ],
                        "id": "0HdRf23VtIRpUdHH3mZc3L"
                    },
                    {
                        "trackName": "Un Vestido y un Amor - EADDA9223 (feat. Marisa Monte)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5d5bb1f15381ae7fc2c9c99535a38f9de4af2f16?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1lKN3Es7T2lokUPXyS4sGV",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0rSTXALHu0EKAawPLBdODH"
                                },
                                "href": "https://api.spotify.com/v1/artists/0rSTXALHu0EKAawPLBdODH",
                                "id": "0rSTXALHu0EKAawPLBdODH",
                                "name": "Marisa Monte",
                                "type": "artist",
                                "uri": "spotify:artist:0rSTXALHu0EKAawPLBdODH"
                            }
                        ],
                        "id": "1lKN3Es7T2lokUPXyS4sGV"
                    },
                    {
                        "trackName": "Tumbas de la Gloria - EADDA9223 (feat. María Castillo de Lima)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/aea54cd2b7c890bb6e830120fefdf5e1cf5dfbff?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7GK57xRsmt90NoWrlydkhN",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6ijxxWfqtxMOpimHnJkHCe"
                                },
                                "href": "https://api.spotify.com/v1/artists/6ijxxWfqtxMOpimHnJkHCe",
                                "id": "6ijxxWfqtxMOpimHnJkHCe",
                                "name": "María Castillo de Lima",
                                "type": "artist",
                                "uri": "spotify:artist:6ijxxWfqtxMOpimHnJkHCe"
                            }
                        ],
                        "id": "7GK57xRsmt90NoWrlydkhN"
                    },
                    {
                        "trackName": "La Rueda Mágica - EADDA9223 (feat. Andrés Calamaro & Conociendo Rusia)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4876b908db005eab715726ee55c9af490c6ebfbf?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:050rSCLSxQfqh0M9y9dID7",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/79R7PUc6T6j09G8mJzNml2"
                                },
                                "href": "https://api.spotify.com/v1/artists/79R7PUc6T6j09G8mJzNml2",
                                "id": "79R7PUc6T6j09G8mJzNml2",
                                "name": "Conociendo Rusia",
                                "type": "artist",
                                "uri": "spotify:artist:79R7PUc6T6j09G8mJzNml2"
                            }
                        ],
                        "id": "050rSCLSxQfqh0M9y9dID7"
                    },
                    {
                        "trackName": "Creo - EADDA9223",
                        "trackPreview": "https://p.scdn.co/mp3-preview/48ba6bb883729a91d216fd2d4cbfeabf98c17e2e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5xJfse26NDl4cQnvcegf1G",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1bZNv4q3OxYq7mmnLha7Tu"
                                },
                                "href": "https://api.spotify.com/v1/artists/1bZNv4q3OxYq7mmnLha7Tu",
                                "id": "1bZNv4q3OxYq7mmnLha7Tu",
                                "name": "Fito Paez",
                                "type": "artist",
                                "uri": "spotify:artist:1bZNv4q3OxYq7mmnLha7Tu"
                            }
                        ],
                        "id": "5xJfse26NDl4cQnvcegf1G"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Temor",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                        },
                        "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                        "id": "4puAp107dCehraE47QXVQX",
                        "name": "C.R.O",
                        "type": "artist",
                        "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273118e200cf322230f26381fb3",
                "id": "04x545owsC3bnx17iQdnMj",
                "tracks": [
                    {
                        "trackName": "Abismo",
                        "trackPreview": null,
                        "uri": "spotify:track:0qcp5VoAsGShsuJdXev9hf",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "0qcp5VoAsGShsuJdXev9hf"
                    },
                    {
                        "trackName": "Una Opción",
                        "trackPreview": null,
                        "uri": "spotify:track:1s61liQ4rajg60c3EMUugB",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "1s61liQ4rajg60c3EMUugB"
                    },
                    {
                        "trackName": "Silencio",
                        "trackPreview": null,
                        "uri": "spotify:track:1FEipDuSRWcomxjMY4tEYt",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "1FEipDuSRWcomxjMY4tEYt"
                    },
                    {
                        "trackName": "Temor",
                        "trackPreview": null,
                        "uri": "spotify:track:0WzdhKUfEoeIP8jzrTtLSe",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "0WzdhKUfEoeIP8jzrTtLSe"
                    },
                    {
                        "trackName": "Yendo Hacia Tí",
                        "trackPreview": null,
                        "uri": "spotify:track:55JHECDH9MBGpkWtfI1MBh",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "55JHECDH9MBGpkWtfI1MBh"
                    },
                    {
                        "trackName": "Encontrándote",
                        "trackPreview": null,
                        "uri": "spotify:track:4BomFhepIWf4HTiAQrgnKJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "4BomFhepIWf4HTiAQrgnKJ"
                    },
                    {
                        "trackName": "Dame Rock",
                        "trackPreview": null,
                        "uri": "spotify:track:5idUaRJBOn7bSYjP6B7PcZ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "5idUaRJBOn7bSYjP6B7PcZ"
                    },
                    {
                        "trackName": "A Tu Manera",
                        "trackPreview": null,
                        "uri": "spotify:track:23dQ2uqLfk4z8aJUwwfnms",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4puAp107dCehraE47QXVQX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4puAp107dCehraE47QXVQX",
                                "id": "4puAp107dCehraE47QXVQX",
                                "name": "C.R.O",
                                "type": "artist",
                                "uri": "spotify:artist:4puAp107dCehraE47QXVQX"
                            }
                        ],
                        "id": "23dQ2uqLfk4z8aJUwwfnms"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Tripolar",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                        },
                        "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                        "id": "1a1v0OJC5GqtsLwzoqJm7j",
                        "name": "Usted Señalemelo",
                        "type": "artist",
                        "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273743ce331b6936cb0c8425491",
                "id": "6ud8dLSruWnM0i6qdIBHjS",
                "tracks": [
                    {
                        "trackName": "Nuevo Comienzo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8f32ffe4c551e373b35733015b49e505aab3b9e3?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6b2Dw4kSKnmWMyiBXyRX2e",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "6b2Dw4kSKnmWMyiBXyRX2e"
                    },
                    {
                        "trackName": "VOID",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2384b446e0f5b8e649b68af3eb327c5918b7a6b4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7ezLEpE3Q50zpVARzgA00f",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "7ezLEpE3Q50zpVARzgA00f"
                    },
                    {
                        "trackName": "Las Flores Sangran",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7b6a1ab4eecfb3ad002f4dfecb3c9fd0aea7d391?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5tLK2Wfj8vgyb1ErlftKYL",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "5tLK2Wfj8vgyb1ErlftKYL"
                    },
                    {
                        "trackName": "Salto al Espacio",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e82308e43f7dac129b88d2a3f895798251011b63?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3Fo2IQT0sPeM5G0ccG5eDH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "3Fo2IQT0sPeM5G0ccG5eDH"
                    },
                    {
                        "trackName": "TRAS",
                        "trackPreview": "https://p.scdn.co/mp3-preview/816b5e1b8be0a050652cf4069a381fe638c6e06d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7AnsmqpKKsxrLSp4GiXDu7",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "7AnsmqpKKsxrLSp4GiXDu7"
                    },
                    {
                        "trackName": "Melodía del Viento",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e7538b0dab36ba968c75cadccf20da608f4e9bd8?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6PBwgds4GkqwhbmfJ0kX4X",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "6PBwgds4GkqwhbmfJ0kX4X"
                    },
                    {
                        "trackName": "Sol",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c0b354b391388cfd92d8a409dae909ce2571db76?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1LcmVpTjXy7fy34m0Jyayq",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "1LcmVpTjXy7fy34m0Jyayq"
                    },
                    {
                        "trackName": "Nena, dime algo.",
                        "trackPreview": "https://p.scdn.co/mp3-preview/484c92d1a683f0b595a59658b6d024c0bb6fb78a?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3McO6jC6I8FT8wd5EJAHCA",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "3McO6jC6I8FT8wd5EJAHCA"
                    },
                    {
                        "trackName": "Cabo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/058733f13c92085c45b708f60cfda50e2f7f0d99?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4v2XByXjgBoY6PJkteQnlj",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "4v2XByXjgBoY6PJkteQnlj"
                    },
                    {
                        "trackName": "Horizonte",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5d2e4b6fe4fc8a28b5d7b9a778d99d35c71f76dd?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0duxIpbGJGmjbPvcqGgS51",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1a1v0OJC5GqtsLwzoqJm7j"
                                },
                                "href": "https://api.spotify.com/v1/artists/1a1v0OJC5GqtsLwzoqJm7j",
                                "id": "1a1v0OJC5GqtsLwzoqJm7j",
                                "name": "Usted Señalemelo",
                                "type": "artist",
                                "uri": "spotify:artist:1a1v0OJC5GqtsLwzoqJm7j"
                            }
                        ],
                        "id": "0duxIpbGJGmjbPvcqGgS51"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Razzmatazz (En directo Razzmatazz)",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                        },
                        "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                        "id": "3tAICgiSR5PfYY4B8qsoAU",
                        "name": "Andrés Calamaro",
                        "type": "artist",
                        "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273f0c28635ce6cd14ba98fa6b8",
                "id": "0lhtRV9TKRZriNswVCca9q",
                "tracks": [
                    {
                        "trackName": "Madame Razzmatazz - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/389224a1f5e23bbf3da567d88fa608577c83351a?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+++Madame+Razzmatazz+(Audio+Oficial.mp3",
                        "uri": "spotify:track:6fhJh7fsCUlfmf9bLlh5WI",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "6fhJh7fsCUlfmf9bLlh5WI"
                    },
                    {
                        "trackName": "Salud, dinero & amor - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d52083232a577f5ee4bce74adaac3bfb38197b96?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+++Salud%2C+dinero+u0026+amor+(Audio+Oficial.mp3",
                        "uri": "spotify:track:7kV1KFy9QC8TbRdq8EsgBH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "7kV1KFy9QC8TbRdq8EsgBH"
                    },
                    {
                        "trackName": "Carnaval de Brasil - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/00cb864105a33411b02bdb79f348b58c685edb7e?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+-+Carnaval+de+Brasil++(Audio+Oficial).mp3",
                        "uri": "spotify:track:5fMYQHFvZYQpDUBHB6j80H",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "5fMYQHFvZYQpDUBHB6j80H"
                    },
                    {
                        "trackName": "Más duele - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4b77cff6592372885c79d691ebc28597ce261b4d?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+++M%C3%A1s+duele+(Audio+Oficial.mp3",
                        "uri": "spotify:track:4Fhd2ASiNM3j9y03sTN43K",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "4Fhd2ASiNM3j9y03sTN43K"
                    },
                    {
                        "trackName": "El día de la mujer mundial - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2d3ef6c0b8c4066688dd67a035ac4985b4879a07?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+++El+d%C3%ADa+de+la+mujer+mundial+(Audio+Oficial.mp3",
                        "uri": "spotify:track:0L08mEl1mst2aZJjUQ34Lu",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "0L08mEl1mst2aZJjUQ34Lu"
                    },
                    {
                        "trackName": "All You Need Is Pop - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d3c8bc3393becd8e3409b0ad38d41b5c98dafbb0?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+-+All+You+Need+Is+Pop++(Audio+Oficial).mp3",
                        "uri": "spotify:track:4ny1U20om1QugD3ozqiOdV",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "4ny1U20om1QugD3ozqiOdV"
                    },
                    {
                        "trackName": "Por mirarte - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8a50ab882c6a9079c5c90ccde03835ef81b47ebf?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+-+Por+mirarte+(Audio+Oficial).mp3",
                        "uri": "spotify:track:5pVPq96QTjbzUD83BZ7vPv",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "5pVPq96QTjbzUD83BZ7vPv"
                    },
                    {
                        "trackName": "La mirada del adiós - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f951a7f7c75312d09e36875ecd7117451749fccf?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+-+La+mirada+del+adi%C3%B3s+(Audio+Oficial).mp3",
                        "uri": "spotify:track:5YbIy8ZM1zB8AUqqX2yh11",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "5YbIy8ZM1zB8AUqqX2yh11"
                    },
                    {
                        "trackName": "Mil horas - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/780a12fa47faf2df38d32cb375230cbd166b0179?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+-+Mil+horas+(Audio+Oficial).mp3",
                        "uri": "spotify:track:7FejMI9cSIns7aoFB6sKfp",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "7FejMI9cSIns7aoFB6sKfp"
                    },
                    {
                        "trackName": "Cada una de tus cosas - En directo Razzmatazz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d4f6b2bfeeacdb806bd7b52c95f955de3d732f77?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Andr%C3%A9s+Calamaro+-+Cada+una+de+tus+cosas+(Audio+Oficial).mp3",
                        "uri": "spotify:track:0vGQoXVdlrNtuej2FPZQUE",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3tAICgiSR5PfYY4B8qsoAU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3tAICgiSR5PfYY4B8qsoAU",
                                "id": "3tAICgiSR5PfYY4B8qsoAU",
                                "name": "Andrés Calamaro",
                                "type": "artist",
                                "uri": "spotify:artist:3tAICgiSR5PfYY4B8qsoAU"
                            }
                        ],
                        "id": "0vGQoXVdlrNtuej2FPZQUE"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Wandering Rebel",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                        },
                        "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                        "id": "7CKkZZW3XtnPmqlwaElmoV",
                        "name": "Juan Wauters",
                        "type": "artist",
                        "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273f93d7b73949ffc1ea42cc431",
                "id": "62UjZaiTdDtv3nbtjTxgj4",
                "tracks": [
                    {
                        "trackName": "Eloping",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d0ec3f47ef3232095ad30c6b6f2da96e768b7274?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Eloping.mp3",
                        "uri": "spotify:track:4EUqUbEFo6Or1AzJ9dpSbT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            }
                        ],
                        "id": "4EUqUbEFo6Or1AzJ9dpSbT"
                    },
                    {
                        "trackName": "Milanesa al Pan",
                        "trackPreview": "https://p.scdn.co/mp3-preview/aeadad8cfd37bf4b5abfb5d9afb152c23cf77417?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Juan+Wauters+-+Milanesa+al+Pan+(ft.+Zoe+Gotusso).mp3",
                        "uri": "spotify:track:3PBcikuq3g9eG8KOZqdulN",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3XBw8ImFEo86mEB2dYh0vS"
                                },
                                "href": "https://api.spotify.com/v1/artists/3XBw8ImFEo86mEB2dYh0vS",
                                "id": "3XBw8ImFEo86mEB2dYh0vS",
                                "name": "Zoe Gotusso",
                                "type": "artist",
                                "uri": "spotify:artist:3XBw8ImFEo86mEB2dYh0vS"
                            }
                        ],
                        "id": "3PBcikuq3g9eG8KOZqdulN"
                    },
                    {
                        "trackName": "Nube Negra",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ec1382c0e31092138e42bd4c820d16e4dada6b96?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Juan+Wauters+-+Nube+Negra+%5Bft.+Y+La+Bamba%5D+(Official+Video).mp3",
                        "uri": "spotify:track:2AYQUhGDmE3U7ron4wJ8mF",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            }
                        ],
                        "id": "2AYQUhGDmE3U7ron4wJ8mF"
                    },
                    {
                        "trackName": "Amor, Amor",
                        "trackPreview": "https://p.scdn.co/mp3-preview/235ce1969f4f44af937efc5fcb5d8403f7c3afb2?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Amor%2C+Amor.mp3",
                        "uri": "spotify:track:1IDNu4ltf0yBZ0HP9l1LLj",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            }
                        ],
                        "id": "1IDNu4ltf0yBZ0HP9l1LLj"
                    },
                    {
                        "trackName": "Modus Operandi",
                        "trackPreview": "https://p.scdn.co/mp3-preview/117fc163fd455ae33e9f10a454fceee0b3c7234f?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Juan+Wauters+-+Modus+Operandi+%5Bft.+Frankie+Cosmos%5D+(Official+Video).mp3",
                        "uri": "spotify:track:3KYtH8YrawyEIZaLADaRyu",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0x4xCoWaOFd3WsKarzaxnW"
                                },
                                "href": "https://api.spotify.com/v1/artists/0x4xCoWaOFd3WsKarzaxnW",
                                "id": "0x4xCoWaOFd3WsKarzaxnW",
                                "name": "Frankie Cosmos",
                                "type": "artist",
                                "uri": "spotify:artist:0x4xCoWaOFd3WsKarzaxnW"
                            }
                        ],
                        "id": "3KYtH8YrawyEIZaLADaRyu"
                    },
                    {
                        "trackName": "Bolero",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d35a5cfc87465302a499c58e9edd4f2a3264a290?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bolero.mp3",
                        "uri": "spotify:track:5que3EJT8MjGlkWPGdYXHL",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2RQq2T6Vn7NOmfs14540MV"
                                },
                                "href": "https://api.spotify.com/v1/artists/2RQq2T6Vn7NOmfs14540MV",
                                "id": "2RQq2T6Vn7NOmfs14540MV",
                                "name": "Super Willy K",
                                "type": "artist",
                                "uri": "spotify:artist:2RQq2T6Vn7NOmfs14540MV"
                            }
                        ],
                        "id": "5que3EJT8MjGlkWPGdYXHL"
                    },
                    {
                        "trackName": "Mensaje Codificado",
                        "trackPreview": "https://p.scdn.co/mp3-preview/aab210d2b39f5df0be7ed189ccac547a08baece2?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Juan+Wauters+-+Mensaje+Codificado+(Official+Video).mp3",
                        "uri": "spotify:track:032Ga2o8RvbkqWJuMxAME1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            }
                        ],
                        "id": "032Ga2o8RvbkqWJuMxAME1"
                    },
                    {
                        "trackName": "Millionaire",
                        "trackPreview": "https://p.scdn.co/mp3-preview/898fb7e43d7d3e57c0536435768a79a7be709e8c?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Juan+Wauters+-+Millionaire+(Official+Video).mp3",
                        "uri": "spotify:track:1kKfYZ3Mpp4sLdUZsLSHFe",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            }
                        ],
                        "id": "1kKfYZ3Mpp4sLdUZsLSHFe"
                    },
                    {
                        "trackName": "Wandering Rebel",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1831b665b25aa6354e155d624a53069925f33b80?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Wandering+Rebel.mp3",
                        "uri": "spotify:track:1n2Hb0yPyWxsw8n2nuoRT0",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7FQiZr787umw7P5dO3zqld"
                                },
                                "href": "https://api.spotify.com/v1/artists/7FQiZr787umw7P5dO3zqld",
                                "id": "7FQiZr787umw7P5dO3zqld",
                                "name": "John Carroll Kirby",
                                "type": "artist",
                                "uri": "spotify:artist:7FQiZr787umw7P5dO3zqld"
                            }
                        ],
                        "id": "1n2Hb0yPyWxsw8n2nuoRT0"
                    },
                    {
                        "trackName": "Carriage",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1afd3eb92e9e572e1f73d13dc0213ec6cade9cc1?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Carriage.mp3",
                        "uri": "spotify:track:4oxarxdqbXw6hLFXel36yH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
                                },
                                "href": "https://api.spotify.com/v1/artists/7CKkZZW3XtnPmqlwaElmoV",
                                "id": "7CKkZZW3XtnPmqlwaElmoV",
                                "name": "Juan Wauters",
                                "type": "artist",
                                "uri": "spotify:artist:7CKkZZW3XtnPmqlwaElmoV"
                            }
                        ],
                        "id": "4oxarxdqbXw6hLFXel36yH"
                    }
                ]
            },
            {
                "type": "album",
                "name": "DIAMANTE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                        },
                        "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                        "id": "345MIEXxffgO93aCGlO8el",
                        "name": "Bocho",
                        "type": "artist",
                        "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b27307f75f91ade4ce838da30214",
                "id": "0KVpNPH2JueCEJll6TbmgD",
                "tracks": [
                    {
                        "trackName": "REMEMBER",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e45cd506d32e345ed3174f9d89a07f6e925f4bbe?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+REMEMBER.mp3",
                        "uri": "spotify:track:12yP7AZBoxN9OHMlspinrY",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            }
                        ],
                        "id": "12yP7AZBoxN9OHMlspinrY"
                    },
                    {
                        "trackName": "LATINAS",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ec7fdecabab064e9ac9178638b75ba2271457d12?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+LATINAS+%5BVisualizer%5D.mp3",
                        "uri": "spotify:track:3MooXBryQ75wmfDziR1NOF",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            }
                        ],
                        "id": "3MooXBryQ75wmfDziR1NOF"
                    },
                    {
                        "trackName": "TINDER uwu",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a2dd880019ea66444d09c2be181f88fea6e96c4d?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+TINDER+uwu+(Audio).mp3",
                        "uri": "spotify:track:2EfKvf4oToDIclK4tJ8FDQ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            }
                        ],
                        "id": "2EfKvf4oToDIclK4tJ8FDQ"
                    },
                    {
                        "trackName": "AMOR INTRO",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c2187f214d3aa3e99edb620ababbf3629b5062cc?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+AMOR+INTRO+%5BVisualizer%5D.mp3",
                        "uri": "spotify:track:07ltmd3gbMm0U3e5VkRuMU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0dx2WINMSeK09AhIGEZIQo"
                                },
                                "href": "https://api.spotify.com/v1/artists/0dx2WINMSeK09AhIGEZIQo",
                                "id": "0dx2WINMSeK09AhIGEZIQo",
                                "name": "China Elphick",
                                "type": "artist",
                                "uri": "spotify:artist:0dx2WINMSeK09AhIGEZIQo"
                            }
                        ],
                        "id": "07ltmd3gbMm0U3e5VkRuMU"
                    },
                    {
                        "trackName": "AMOR",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a893b1f9c01f79c31851c2762f5cc1314fe25275?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+AMOR+(Feat.+China+Elphick)+%5BVisualizer%5D.mp3",
                        "uri": "spotify:track:5vuFXQdi6QfnbTWm1kaHiQ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0dx2WINMSeK09AhIGEZIQo"
                                },
                                "href": "https://api.spotify.com/v1/artists/0dx2WINMSeK09AhIGEZIQo",
                                "id": "0dx2WINMSeK09AhIGEZIQo",
                                "name": "China Elphick",
                                "type": "artist",
                                "uri": "spotify:artist:0dx2WINMSeK09AhIGEZIQo"
                            }
                        ],
                        "id": "5vuFXQdi6QfnbTWm1kaHiQ"
                    },
                    {
                        "trackName": "NIÑA",
                        "trackPreview": "https://p.scdn.co/mp3-preview/60ee5fc96b7415b9b498cd87e6d37fe857567a8d?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/NI%C3%91A.mp3",
                        "uri": "spotify:track:5MpNXTiJ125BJ8VctCGNhf",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            }
                        ],
                        "id": "5MpNXTiJ125BJ8VctCGNhf"
                    },
                    {
                        "trackName": "BESO",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f55b3e5bbf655bb41b7aeffc26dcba6b9ed91d9e?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+BESO++%5BVisualizer%5D.mp3",
                        "uri": "spotify:track:1fhjSrHvy1sv6r9YKGpEFx",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            }
                        ],
                        "id": "1fhjSrHvy1sv6r9YKGpEFx"
                    },
                    {
                        "trackName": "ELLA (CAE LA NOCHE)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fe629d593ab203ce9bc54c8d3f88984e0c664e7f?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+ELLA+(CAE+LA+NOCHE)+(Feat.+Sergio+Escribano++Escaparate+de+Poes%C3%ADa)+%5BVisualizer%5D.mp3",
                        "uri": "spotify:track:47BEXkblFksAYVHd0xPNEI",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/116npLgwaQ7gM9Foz4Lg7W"
                                },
                                "href": "https://api.spotify.com/v1/artists/116npLgwaQ7gM9Foz4Lg7W",
                                "id": "116npLgwaQ7gM9Foz4Lg7W",
                                "name": "Sergio Escribano",
                                "type": "artist",
                                "uri": "spotify:artist:116npLgwaQ7gM9Foz4Lg7W"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7tH4CflLKZ7jEJwsUzZL9I"
                                },
                                "href": "https://api.spotify.com/v1/artists/7tH4CflLKZ7jEJwsUzZL9I",
                                "id": "7tH4CflLKZ7jEJwsUzZL9I",
                                "name": "Escaparate de Poesía",
                                "type": "artist",
                                "uri": "spotify:artist:7tH4CflLKZ7jEJwsUzZL9I"
                            }
                        ],
                        "id": "47BEXkblFksAYVHd0xPNEI"
                    },
                    {
                        "trackName": "CIELO",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8f1c7373573344ba57c2613605c768acb6dc2dbd?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+CIELO+(Feat.+Joe+Vasconcellos)+%5BLETRA%5D.mp3",
                        "uri": "spotify:track:5efX04xn9Pxxa7Zp1zLbmI",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4sGC7K2rSpWrWudBgYPMce"
                                },
                                "href": "https://api.spotify.com/v1/artists/4sGC7K2rSpWrWudBgYPMce",
                                "id": "4sGC7K2rSpWrWudBgYPMce",
                                "name": "Joe Vasconcellos",
                                "type": "artist",
                                "uri": "spotify:artist:4sGC7K2rSpWrWudBgYPMce"
                            }
                        ],
                        "id": "5efX04xn9Pxxa7Zp1zLbmI"
                    },
                    {
                        "trackName": "10/10",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a6fde6c23e83830a5cebe0ada865a1c885874dbb?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bocho+-+1010+(Feat.+Cris+Mendeville)+%5BVisualizer%5D.mp3",
                        "uri": "spotify:track:6jApLijOMMtbDusxnzWJaJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/345MIEXxffgO93aCGlO8el"
                                },
                                "href": "https://api.spotify.com/v1/artists/345MIEXxffgO93aCGlO8el",
                                "id": "345MIEXxffgO93aCGlO8el",
                                "name": "Bocho",
                                "type": "artist",
                                "uri": "spotify:artist:345MIEXxffgO93aCGlO8el"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2gfncKNNLFWnKKN9j5WFMX"
                                },
                                "href": "https://api.spotify.com/v1/artists/2gfncKNNLFWnKKN9j5WFMX",
                                "id": "2gfncKNNLFWnKKN9j5WFMX",
                                "name": "Cris Mendeville",
                                "type": "artist",
                                "uri": "spotify:artist:2gfncKNNLFWnKKN9j5WFMX"
                            }
                        ],
                        "id": "6jApLijOMMtbDusxnzWJaJ"
                    }
                ]
            },
            {
                "type": "album",
                "name": "But Here We Are",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                        },
                        "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                        "id": "7jy3rLJdDQY21OgRLCZ9sD",
                        "name": "Foo Fighters",
                        "type": "artist",
                        "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b27384c85afa887f664fef3c5e8a",
                "id": "4wp4aWWpoYfNcspimVAnel",
                "tracks": [
                    {
                        "trackName": "Rescued",
                        "trackPreview": "https://p.scdn.co/mp3-preview/93684d00336410add38f57e71816d66949bfa9be?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+Rescued+(Lyric+Video).mp3",
                        "uri": "spotify:track:3nDstVXtr6xbCZKs5Ka2rZ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "3nDstVXtr6xbCZKs5Ka2rZ"
                    },
                    {
                        "trackName": "Under You",
                        "trackPreview": "https://p.scdn.co/mp3-preview/092c89392a011d9fd5e167538295204a8fd8ee40?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+Under+You+(From+Preparing+Music+For+Concerts).mp3",
                        "uri": "spotify:track:6vWu5uWlox5TVDPl3LvoG3",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "6vWu5uWlox5TVDPl3LvoG3"
                    },
                    {
                        "trackName": "Hearing Voices",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2442f958464c03983779b9b74dd2596f71fc5c39?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+Hearing+Voices+(Visualizer).mp3",
                        "uri": "spotify:track:4PTowPoeya2AITpeUCJLKN",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "4PTowPoeya2AITpeUCJLKN"
                    },
                    {
                        "trackName": "But Here We Are",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1007df067ffe5ef29d50fbbe1c56597dbd770791?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+But+Here+We+Are+(Lyric+Video).mp3",
                        "uri": "spotify:track:5s18NymFEHOtiUMfVr6E3H",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "5s18NymFEHOtiUMfVr6E3H"
                    },
                    {
                        "trackName": "The Glass",
                        "trackPreview": "https://p.scdn.co/mp3-preview/05f934e60cc0739d36e4a00c21e34213bdebc2d5?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+The+Glass.mp3",
                        "uri": "spotify:track:26iWAXoJRiUv9yYzxYBqSv",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "26iWAXoJRiUv9yYzxYBqSv"
                    },
                    {
                        "trackName": "Nothing At All",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2a2d885bfad725374fb1532ee9b793d8598ecb75?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+Nothing+At+All+(Lyric+Video).mp3",
                        "uri": "spotify:track:0csL34JYEsHmFBAZ1fgf8G",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "0csL34JYEsHmFBAZ1fgf8G"
                    },
                    {
                        "trackName": "Show Me How",
                        "trackPreview": "https://p.scdn.co/mp3-preview/21f827ef9a9f7d7d8a74b2fa3d2164d8d9696dc1?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+Show+Me+How.mp3",
                        "uri": "spotify:track:0ypVld5cYlBkFQqh5KR9kn",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "0ypVld5cYlBkFQqh5KR9kn"
                    },
                    {
                        "trackName": "Beyond Me",
                        "trackPreview": "https://p.scdn.co/mp3-preview/17601bdbe49ae895a1a0627cc10e6129d4197c96?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+Beyond+Me+(Lyric+Video).mp3",
                        "uri": "spotify:track:17oFMOCRu6P4WLqSSNyKPC",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "17oFMOCRu6P4WLqSSNyKPC"
                    },
                    {
                        "trackName": "The Teacher",
                        "trackPreview": "https://p.scdn.co/mp3-preview/11a340f1711fe142a735fb0ad471e8f0ec03103f?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+The+Teacher+(Lyric+Video).mp3",
                        "uri": "spotify:track:7buGBnA0vkYulQafSZnpHx",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "7buGBnA0vkYulQafSZnpHx"
                    },
                    {
                        "trackName": "Rest",
                        "trackPreview": "https://p.scdn.co/mp3-preview/205057cdb97f96aabb4ff37010b51f53a2a514c5?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Foo+Fighters+-+Rest+(Lyric+Video).mp3",
                        "uri": "spotify:track:2IgxiiF1VdAj9ZfQMTORAb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
                                },
                                "href": "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
                                "id": "7jy3rLJdDQY21OgRLCZ9sD",
                                "name": "Foo Fighters",
                                "type": "artist",
                                "uri": "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
                            }
                        ],
                        "id": "2IgxiiF1VdAj9ZfQMTORAb"
                    }
                ]
            },
            {
                "type": "album",
                "name": "Manuel García en Buenos Aires (En Vivo)",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                        },
                        "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                        "id": "4LIR7XQRqn0CyXMYSjKoTX",
                        "name": "Manuel García",
                        "type": "artist",
                        "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273119e5df0a701d058c29ed881",
                "id": "5TGHo1m6dVkGAVH4LmU1nJ",
                "tracks": [
                    {
                        "trackName": "Hablar de ti - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/6a8e227b66cdfcf6fb0a339c85cb33f46b8bd614?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Manuel+Garc%C3%ADa+-+Hablar+de+ti+y+T%C3%A9mpera+(En+vivo%2C+Buenos+Aires).mp3",
                        "uri": "spotify:track:1z4Fo5OVicvR6605X4C9yb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "1z4Fo5OVicvR6605X4C9yb"
                    },
                    {
                        "trackName": "Témpera - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/beb5ffca0fae0a39c5c918603ca684c5608a67bc?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/T%C3%A9mpera+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:0Hp0S055GmbM8fGLTDcGYY",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "0Hp0S055GmbM8fGLTDcGYY"
                    },
                    {
                        "trackName": "Bienvenida Buenos Aires (Palabras) - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e8854889b93b5f7fb6adf71e3cab29df07e1f2ea?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Bienvenida+Buenos+Aires+(Palabras)+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:3xuJch4jNeyrT7sXCU5zUA",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "3xuJch4jNeyrT7sXCU5zUA"
                    },
                    {
                        "trackName": "Pepitas - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f060eca13316dbc5679bbd40adbed49c46c786e1?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Pepitas+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:5GaZScrDoklKf1FnMUq6us",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "5GaZScrDoklKf1FnMUq6us"
                    },
                    {
                        "trackName": "Carta a Cuba (Palabras) - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9b87261006064780bdcee2e459457e3e0a405937?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Carta+a+Cuba+(Palabras)+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:5tATkY7emQyohAEXmQPJiH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "5tATkY7emQyohAEXmQPJiH"
                    },
                    {
                        "trackName": "La Nueva Canción de la Trova - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f6424e1b065498839b39ea393da7c1705ca9eaa7?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/La+Nueva+Canci%C3%B3n+de+la+Trova+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:5WiLvHFGDQB4U6iy7pScTq",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "5WiLvHFGDQB4U6iy7pScTq"
                    },
                    {
                        "trackName": "El Caminante, Pt. 1 (Poema) - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/129d3be1a93dd38c1f0bca2370990c859fc975ee?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/El+Caminante%2C+Pt.+1+(Poema)+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:451hLp4OgyvkBSiBxNWAFD",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "451hLp4OgyvkBSiBxNWAFD"
                    },
                    {
                        "trackName": "Los Colores - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/66ccc43614efc21c793777d3a39196f4e7de6ca8?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Los+Colores+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:5l7sNi1CkDiz78xJtbgqOm",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "5l7sNi1CkDiz78xJtbgqOm"
                    },
                    {
                        "trackName": "El pez nuestro de cada día (Palabras) - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4e2dea54eeddc690bec6db8df174231739a02b20?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/El+pez+nuestro+de+cada+d%C3%ADa+(Palabras)+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:4iOiduQ7japHyo6CC2GE1g",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            }
                        ],
                        "id": "4iOiduQ7japHyo6CC2GE1g"
                    },
                    {
                        "trackName": "Barcos de Cristal - En Vivo Baires",
                        "trackPreview": "https://p.scdn.co/mp3-preview/af3442ae58ad497358667e31d87b8ce9f191ad87?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Barcos+de+Cristal+(En+Vivo+Baires).mp3",
                        "uri": "spotify:track:1Wnzefopcna3j6u2ub83YQ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4LIR7XQRqn0CyXMYSjKoTX"
                                },
                                "href": "https://api.spotify.com/v1/artists/4LIR7XQRqn0CyXMYSjKoTX",
                                "id": "4LIR7XQRqn0CyXMYSjKoTX",
                                "name": "Manuel García",
                                "type": "artist",
                                "uri": "spotify:artist:4LIR7XQRqn0CyXMYSjKoTX"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1EFep6eobW4nIH2NjXfqvp"
                                },
                                "href": "https://api.spotify.com/v1/artists/1EFep6eobW4nIH2NjXfqvp",
                                "id": "1EFep6eobW4nIH2NjXfqvp",
                                "name": "Kuki González",
                                "type": "artist",
                                "uri": "spotify:artist:1EFep6eobW4nIH2NjXfqvp"
                            }
                        ],
                        "id": "1Wnzefopcna3j6u2ub83YQ"
                    }
                ]
            },
            {
                "type": "album",
                "name": "ALMA",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                        },
                        "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                        "id": "2UZIAOlrnyZmyzt1nuXr9y",
                        "name": "Nicki Nicole",
                        "type": "artist",
                        "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                    }
                ],
                "image": "https://i.scdn.co/image/ab67616d0000b273d91a54eea72c50765e2fa72b",
                "id": "0pWzIntouGCOZzQsSW6xYc",
                "tracks": [
                    {
                        "trackName": "Ya No",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5b41cfde3991f27ac987e215b6cdb504ff2799fd?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole+-+Ya+No+(Official+Video).mp3",
                        "uri": "spotify:track:04v1IMQMdemyNhfH5G2uyp",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            }
                        ],
                        "id": "04v1IMQMdemyNhfH5G2uyp"
                    },
                    {
                        "trackName": "DISPARA ***",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0fe5cef2d201537ba294245636d27b87c810f645?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole%2C+Milo+J+-+DISPARA++(Official+Video).mp3",
                        "uri": "spotify:track:6r0TaoZh1Oc1KkuL4rC1kB",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/19HM5j0ULGSmEoRcrSe5x3"
                                },
                                "href": "https://api.spotify.com/v1/artists/19HM5j0ULGSmEoRcrSe5x3",
                                "id": "19HM5j0ULGSmEoRcrSe5x3",
                                "name": "Milo j",
                                "type": "artist",
                                "uri": "spotify:artist:19HM5j0ULGSmEoRcrSe5x3"
                            }
                        ],
                        "id": "6r0TaoZh1Oc1KkuL4rC1kB"
                    },
                    {
                        "trackName": "NO voy a llorar :')",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1251fe20febfc046de983a18f817c358738f68c2?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole+-+NO+voy+a+llorar+)+(Official+Video).mp3",
                        "uri": "spotify:track:1gs7YjXiXhGKXrv50fGlQo",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            }
                        ],
                        "id": "1gs7YjXiXhGKXrv50fGlQo"
                    },
                    {
                        "trackName": "8 AM",
                        "trackPreview": "https://p.scdn.co/mp3-preview/de8a2f96bbfc4ddc752928bef1922595c7f39dad?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole%2C+Young+Miko+-+8+AM+(Official+Lyric+Video).mp3",
                        "uri": "spotify:track:5UcWUgWfR2Ir0EXSb1EpoM",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3qsKSpcV3ncke3hw52JSMB"
                                },
                                "href": "https://api.spotify.com/v1/artists/3qsKSpcV3ncke3hw52JSMB",
                                "id": "3qsKSpcV3ncke3hw52JSMB",
                                "name": "Young Miko",
                                "type": "artist",
                                "uri": "spotify:artist:3qsKSpcV3ncke3hw52JSMB"
                            }
                        ],
                        "id": "5UcWUgWfR2Ir0EXSb1EpoM"
                    },
                    {
                        "trackName": "Se va 1 llegan 2",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f08a571f850c7082ef0c2979c15cc5816e1174d9?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole+-+Se+va+1+llegan+2+(Official+Video).mp3",
                        "uri": "spotify:track:0K6DNAyidju52N6vKWNTyH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            }
                        ],
                        "id": "0K6DNAyidju52N6vKWNTyH"
                    },
                    {
                        "trackName": "Llámame",
                        "trackPreview": "https://p.scdn.co/mp3-preview/551bdb8bdc740035e082f6befa003edba96d6ad9?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole+-+Ll%C3%A1mame+(Audio).mp3",
                        "uri": "spotify:track:6LtKp0GyrIABFVaqCUXw1P",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            }
                        ],
                        "id": "6LtKp0GyrIABFVaqCUXw1P"
                    },
                    {
                        "trackName": "qué le pasa conmigo?",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ceaeef30dd191e447d98648f4a256a1ced025150?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole%2C+Rels+B+-+qu%C3%A9+le+pasa+conmigo+(Official+Video).mp3",
                        "uri": "spotify:track:0RD94y2DlYTzEePb4WuVbU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2IMZYfNi21MGqxopj9fWx8"
                                },
                                "href": "https://api.spotify.com/v1/artists/2IMZYfNi21MGqxopj9fWx8",
                                "id": "2IMZYfNi21MGqxopj9fWx8",
                                "name": "Rels B",
                                "type": "artist",
                                "uri": "spotify:artist:2IMZYfNi21MGqxopj9fWx8"
                            }
                        ],
                        "id": "0RD94y2DlYTzEePb4WuVbU"
                    },
                    {
                        "trackName": "Tuyo (Cover) - una que quise hacer",
                        "trackPreview": "https://p.scdn.co/mp3-preview/40c3af56828e10c04552de3c661b0d20914bcebb?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole++Tuyo+Cover++una+que+quise+hacer+Official+Video.mp3",
                        "uri": "spotify:track:6ZfohUIh7wzwMNHj5E6XO5",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            }
                        ],
                        "id": "6ZfohUIh7wzwMNHj5E6XO5"
                    },
                    {
                        "trackName": "CAEN LAS ESTRELLAS",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a0500bb2897fb2cc96b2184d0e41e8e7c05fc65c?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole%2C+YSY+A+-+CAEN+LAS+ESTRELLAS+(Official+Video).mp3",
                        "uri": "spotify:track:4L2v8fOruCUk2wbXC0PKHt",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2qWK8K2Jfh67UqtwY8tCW6"
                                },
                                "href": "https://api.spotify.com/v1/artists/2qWK8K2Jfh67UqtwY8tCW6",
                                "id": "2qWK8K2Jfh67UqtwY8tCW6",
                                "name": "YSY A",
                                "type": "artist",
                                "uri": "spotify:artist:2qWK8K2Jfh67UqtwY8tCW6"
                            }
                        ],
                        "id": "4L2v8fOruCUk2wbXC0PKHt"
                    },
                    {
                        "trackName": "TIENES MI ALMA",
                        "trackPreview": "https://p.scdn.co/mp3-preview/710166ba4274b67af80ab12edb5fdbc28fce2b81?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "https://apispotify.s3.sa-east-1.amazonaws.com/Nicki+Nicole+-+TIENES+MI+ALMA+(Audio).mp3",
                        "uri": "spotify:track:3vvbeFQVTNXcwgpskOpDGY",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                                "id": "2UZIAOlrnyZmyzt1nuXr9y",
                                "name": "Nicki Nicole",
                                "type": "artist",
                                "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                            }
                        ],
                        "id": "3vvbeFQVTNXcwgpskOpDGY"
                    }
                ]
            }
        ]
    )
});

app.get("/playlist", (req, res) => {
    res.json (
        [
            {
                "type": "playlist",
                "name": "Sueño Profundo",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f000000030365dc0a830912e0186f8429",
                "id": "37i9dQZF1DX7aAuYd7Jogj",
                "tracks": [
                    {
                        "trackName": "Downstream",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ed1ff01b27eab4da2e5f1ea0b72cce786978fa89?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3k5J26HJZ8tZHEGsg0s32u",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7HsoTMNjOjjMVQNVzmxCRN"
                                },
                                "href": "https://api.spotify.com/v1/artists/7HsoTMNjOjjMVQNVzmxCRN",
                                "id": "7HsoTMNjOjjMVQNVzmxCRN",
                                "name": "Pine River",
                                "type": "artist",
                                "uri": "spotify:artist:7HsoTMNjOjjMVQNVzmxCRN"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a93eb6ff3d0b1dee73236c6e",
                            "width": 640
                        },
                        "id": "3k5J26HJZ8tZHEGsg0s32u"
                    },
                    {
                        "trackName": "Outra Noite",
                        "trackPreview": "https://p.scdn.co/mp3-preview/cdf083b25daf115dd5f274f8e8a0fe6404d56afe?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2mH0B6EKz3XUy1SO77wfe5",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3LzyV3YGTAhie6tKAGAdh7"
                                },
                                "href": "https://api.spotify.com/v1/artists/3LzyV3YGTAhie6tKAGAdh7",
                                "id": "3LzyV3YGTAhie6tKAGAdh7",
                                "name": "Fleur Harmon",
                                "type": "artist",
                                "uri": "spotify:artist:3LzyV3YGTAhie6tKAGAdh7"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c38a049b9278a2432c96e2a7",
                            "width": 640
                        },
                        "id": "2mH0B6EKz3XUy1SO77wfe5"
                    },
                    {
                        "trackName": "Tillbakalutande",
                        "trackPreview": "https://p.scdn.co/mp3-preview/3c0b38fb90e3600288927489d61ce2fdabc2f573?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4oAVmszDgIihib6QBxqjEh",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3N5bWM0Opalb3v1tWy6NJn"
                                },
                                "href": "https://api.spotify.com/v1/artists/3N5bWM0Opalb3v1tWy6NJn",
                                "id": "3N5bWM0Opalb3v1tWy6NJn",
                                "name": "Eleonora Feldt",
                                "type": "artist",
                                "uri": "spotify:artist:3N5bWM0Opalb3v1tWy6NJn"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27382180a67820a58d8e99c829a",
                            "width": 640
                        },
                        "id": "4oAVmszDgIihib6QBxqjEh"
                    },
                    {
                        "trackName": "Soundness",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8cba4fb03a41fb6fb0320e1c3bd453625f82efff?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:45rdJZmlX5VNVcBEqEO89p",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0JIVfIfdmw45EoZuIWSZqa"
                                },
                                "href": "https://api.spotify.com/v1/artists/0JIVfIfdmw45EoZuIWSZqa",
                                "id": "0JIVfIfdmw45EoZuIWSZqa",
                                "name": "Sleepy Sine",
                                "type": "artist",
                                "uri": "spotify:artist:0JIVfIfdmw45EoZuIWSZqa"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e11deb846b71a43e5518e655",
                            "width": 640
                        },
                        "id": "45rdJZmlX5VNVcBEqEO89p"
                    },
                    {
                        "trackName": "Calming Quality",
                        "trackPreview": "https://p.scdn.co/mp3-preview/984f61366cb9ef1037a1b9ff6bce07232354b729?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7GJkHBbDnQ0JxgWoRWrcT9",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3IH62hlsEFxT7wDV7Sr3sj"
                                },
                                "href": "https://api.spotify.com/v1/artists/3IH62hlsEFxT7wDV7Sr3sj",
                                "id": "3IH62hlsEFxT7wDV7Sr3sj",
                                "name": "Auxelia",
                                "type": "artist",
                                "uri": "spotify:artist:3IH62hlsEFxT7wDV7Sr3sj"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2733e29eaa48276379b5de74cb5",
                            "width": 640
                        },
                        "id": "7GJkHBbDnQ0JxgWoRWrcT9"
                    },
                    {
                        "trackName": "Kupenya",
                        "trackPreview": "https://p.scdn.co/mp3-preview/209298a80b5c9b76f25e803f946ee2065bf0fb6f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:67E5gHkxme0nSKxCrWC5LJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6ERE1Moh0DyMuMUiCXE3cD"
                                },
                                "href": "https://api.spotify.com/v1/artists/6ERE1Moh0DyMuMUiCXE3cD",
                                "id": "6ERE1Moh0DyMuMUiCXE3cD",
                                "name": "Tendai Marwan",
                                "type": "artist",
                                "uri": "spotify:artist:6ERE1Moh0DyMuMUiCXE3cD"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2736756edca161dcd2fc3edb2b1",
                            "width": 640
                        },
                        "id": "67E5gHkxme0nSKxCrWC5LJ"
                    },
                    {
                        "trackName": "Oroitzapenak",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7a86fa7f203097562f7d157a79c7b751522e0f6a?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6yr16gxxdy0JLUx0dxx4DI",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5SoFygSAB3x2wUQbgqku06"
                                },
                                "href": "https://api.spotify.com/v1/artists/5SoFygSAB3x2wUQbgqku06",
                                "id": "5SoFygSAB3x2wUQbgqku06",
                                "name": "Leona Montoya",
                                "type": "artist",
                                "uri": "spotify:artist:5SoFygSAB3x2wUQbgqku06"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734128e4a6f2b4f8f3b74f962d",
                            "width": 640
                        },
                        "id": "6yr16gxxdy0JLUx0dxx4DI"
                    },
                    {
                        "trackName": "All Is Still",
                        "trackPreview": "https://p.scdn.co/mp3-preview/65ab46f9fec39f3f8da0a7ae53622aaa8a436452?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3TsffbDvNE3vlSujA6Q3zl",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0LABSw5NxTGsqlRQxlGQHD"
                                },
                                "href": "https://api.spotify.com/v1/artists/0LABSw5NxTGsqlRQxlGQHD",
                                "id": "0LABSw5NxTGsqlRQxlGQHD",
                                "name": "Sayono",
                                "type": "artist",
                                "uri": "spotify:artist:0LABSw5NxTGsqlRQxlGQHD"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27394ce9a3d0f232dda1a87bff1",
                            "width": 640
                        },
                        "id": "3TsffbDvNE3vlSujA6Q3zl"
                    },
                    {
                        "trackName": "Spiritual",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7f7c71cd34825dd854990cf110687488a3b667e6?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1aZQokBzBRVdm8d24yPi8P",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1J7K4Jr0deYSXtXoUtyp1D"
                                },
                                "href": "https://api.spotify.com/v1/artists/1J7K4Jr0deYSXtXoUtyp1D",
                                "id": "1J7K4Jr0deYSXtXoUtyp1D",
                                "name": "Sleep Cyclone",
                                "type": "artist",
                                "uri": "spotify:artist:1J7K4Jr0deYSXtXoUtyp1D"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273399f7888d8af071f73b48515",
                            "width": 640
                        },
                        "id": "1aZQokBzBRVdm8d24yPi8P"
                    },
                    {
                        "trackName": "Before The Full Moon",
                        "trackPreview": "https://p.scdn.co/mp3-preview/06e597d246a40a6a080dcf3129026db21aeab4fb?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6f9yi7FErSjPN4hWCJURLq",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6Cus1UHddFX9FPj4CoBEK4"
                                },
                                "href": "https://api.spotify.com/v1/artists/6Cus1UHddFX9FPj4CoBEK4",
                                "id": "6Cus1UHddFX9FPj4CoBEK4",
                                "name": "Isah Atkins",
                                "type": "artist",
                                "uri": "spotify:artist:6Cus1UHddFX9FPj4CoBEK4"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2739738c8b6c33590a52d4b7699",
                            "width": 640
                        },
                        "id": "6f9yi7FErSjPN4hWCJURLq"
                    },
                    {
                        "trackName": "Liquid Rainbow",
                        "trackPreview": "https://p.scdn.co/mp3-preview/41a213149e29bbc67a3d0287708a6f863e885969?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3ex8tsDC5KYifvmmoxc3il",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3OswQADkQvdWSqFtNH2YqQ"
                                },
                                "href": "https://api.spotify.com/v1/artists/3OswQADkQvdWSqFtNH2YqQ",
                                "id": "3OswQADkQvdWSqFtNH2YqQ",
                                "name": "Santana Ruiz",
                                "type": "artist",
                                "uri": "spotify:artist:3OswQADkQvdWSqFtNH2YqQ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a26a2d32f07195f04964c591",
                            "width": 640
                        },
                        "id": "3ex8tsDC5KYifvmmoxc3il"
                    },
                    {
                        "trackName": "Szeretet",
                        "trackPreview": "https://p.scdn.co/mp3-preview/6766e8f4d2e03b708eaf1d114bd6acec8a9e1d77?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2DSwyVUVFR80p19iJe1q3G",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1DSUjK31Vgu7ejMVSxhJfL"
                                },
                                "href": "https://api.spotify.com/v1/artists/1DSUjK31Vgu7ejMVSxhJfL",
                                "id": "1DSUjK31Vgu7ejMVSxhJfL",
                                "name": "Csaba Vitez",
                                "type": "artist",
                                "uri": "spotify:artist:1DSUjK31Vgu7ejMVSxhJfL"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273984a7cbd9c0ed078f9198f1c",
                            "width": 640
                        },
                        "id": "2DSwyVUVFR80p19iJe1q3G"
                    },
                    {
                        "trackName": "Promised",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e971ff292bb73109730b09eb60936359df590783?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1fSln3JhzB7Asdi83JTvPa",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3ooxJFdCXxyk6heox7EOPV"
                                },
                                "href": "https://api.spotify.com/v1/artists/3ooxJFdCXxyk6heox7EOPV",
                                "id": "3ooxJFdCXxyk6heox7EOPV",
                                "name": "Macroix",
                                "type": "artist",
                                "uri": "spotify:artist:3ooxJFdCXxyk6heox7EOPV"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2736c07bb63527d78cb480a0ea0",
                            "width": 640
                        },
                        "id": "1fSln3JhzB7Asdi83JTvPa"
                    },
                    {
                        "trackName": "After Dark Ram",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1a864c52090197090504eec0e5f67dae0e72de0d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:08CEcXp5nqHcv4d72cGJW3",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7vJXWasyMwsr0wU5akcu2x"
                                },
                                "href": "https://api.spotify.com/v1/artists/7vJXWasyMwsr0wU5akcu2x",
                                "id": "7vJXWasyMwsr0wU5akcu2x",
                                "name": "Malviti",
                                "type": "artist",
                                "uri": "spotify:artist:7vJXWasyMwsr0wU5akcu2x"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27365e5c2fca9dede90dab2e031",
                            "width": 640
                        },
                        "id": "08CEcXp5nqHcv4d72cGJW3"
                    },
                    {
                        "trackName": "Prosperum",
                        "trackPreview": "https://p.scdn.co/mp3-preview/83b7e6463c7ba056d14cd89b9b2a6301c315bd25?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1qoWYQ6l3g4b7D6eJhzkjt",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/45MwI8cnjr9zaf9BKwfoKr"
                                },
                                "href": "https://api.spotify.com/v1/artists/45MwI8cnjr9zaf9BKwfoKr",
                                "id": "45MwI8cnjr9zaf9BKwfoKr",
                                "name": "Yara Blom",
                                "type": "artist",
                                "uri": "spotify:artist:45MwI8cnjr9zaf9BKwfoKr"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273bd16253ecf2a6949db3fa534",
                            "width": 640
                        },
                        "id": "1qoWYQ6l3g4b7D6eJhzkjt"
                    },
                    {
                        "trackName": "I Believe I Can Fly",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4cccdf5541ea8cf58e3e4f672a9d388417d5967c?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6BLpFHyW0XELB7qh45o6cI",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2oQleEdjzH9yC8cfsR8e8j"
                                },
                                "href": "https://api.spotify.com/v1/artists/2oQleEdjzH9yC8cfsR8e8j",
                                "id": "2oQleEdjzH9yC8cfsR8e8j",
                                "name": "Cosmic Cloak",
                                "type": "artist",
                                "uri": "spotify:artist:2oQleEdjzH9yC8cfsR8e8j"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c928674436504a2aa33cec35",
                            "width": 640
                        },
                        "id": "6BLpFHyW0XELB7qh45o6cI"
                    },
                    {
                        "trackName": "My Safest Place To Hide",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f29c24a610eb7b7926e2a4ebbb99da6a6bbf8dce?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1NlkwVK9fM87f3MCudK3LF",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3PiRnA3K7grsa4ZQ41OGUO"
                                },
                                "href": "https://api.spotify.com/v1/artists/3PiRnA3K7grsa4ZQ41OGUO",
                                "id": "3PiRnA3K7grsa4ZQ41OGUO",
                                "name": "Tiara Greenfield",
                                "type": "artist",
                                "uri": "spotify:artist:3PiRnA3K7grsa4ZQ41OGUO"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2738135b0fcaa7b84bacd29094f",
                            "width": 640
                        },
                        "id": "1NlkwVK9fM87f3MCudK3LF"
                    },
                    {
                        "trackName": "Red Night",
                        "trackPreview": "https://p.scdn.co/mp3-preview/15061f59cd315f711f118eaf46dc86ecca1abdbe?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0lXSZCwqt14UPBeNxA45Ou",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5KKzkIqyec5NR4h5vxE0Wx"
                                },
                                "href": "https://api.spotify.com/v1/artists/5KKzkIqyec5NR4h5vxE0Wx",
                                "id": "5KKzkIqyec5NR4h5vxE0Wx",
                                "name": "Torpor Snooze",
                                "type": "artist",
                                "uri": "spotify:artist:5KKzkIqyec5NR4h5vxE0Wx"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ef20c77f5be9f3882a0fb633",
                            "width": 640
                        },
                        "id": "0lXSZCwqt14UPBeNxA45Ou"
                    },
                    {
                        "trackName": "Encore Une Fois",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a73a25c94ddf5c41c1eb514068d17c86a8b9e01f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5aB3pTdKskrxVVfoOGl4bN",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1xTG3LpQV7sTX86GrPnDEH"
                                },
                                "href": "https://api.spotify.com/v1/artists/1xTG3LpQV7sTX86GrPnDEH",
                                "id": "1xTG3LpQV7sTX86GrPnDEH",
                                "name": "Alanna Brooks",
                                "type": "artist",
                                "uri": "spotify:artist:1xTG3LpQV7sTX86GrPnDEH"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273edbe4edd0515f28b559640bf",
                            "width": 640
                        },
                        "id": "5aB3pTdKskrxVVfoOGl4bN"
                    },
                    {
                        "trackName": "In Balance",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c6cc6e845f91fae62ca6b3c778d92012bcceb768?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5ipYoy8xS7FCAZqGJl0cvg",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2hhShR3qWCC6Qu2KZrgr7N"
                                },
                                "href": "https://api.spotify.com/v1/artists/2hhShR3qWCC6Qu2KZrgr7N",
                                "id": "2hhShR3qWCC6Qu2KZrgr7N",
                                "name": "Corda Una",
                                "type": "artist",
                                "uri": "spotify:artist:2hhShR3qWCC6Qu2KZrgr7N"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731824bf91fd47b95c69d74603",
                            "width": 640
                        },
                        "id": "5ipYoy8xS7FCAZqGJl0cvg"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Bajo Las Estrellas",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f000000039487d08e6f2a2b948c757823",
                "id": "37i9dQZF1DWTmhGAhbrFb3",
                "tracks": [
                    {
                        "trackName": "Kujtimet",
                        "trackPreview": "https://p.scdn.co/mp3-preview/cc5c3a48ab3494afe637af3663910fbcca9fd7ea?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:283VpOIFxubROj0o6mHD83",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1E7RDm6USh7HGKtdVF9TZM"
                                },
                                "href": "https://api.spotify.com/v1/artists/1E7RDm6USh7HGKtdVF9TZM",
                                "id": "1E7RDm6USh7HGKtdVF9TZM",
                                "name": "Qetesia",
                                "type": "artist",
                                "uri": "spotify:artist:1E7RDm6USh7HGKtdVF9TZM"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27334635578174d6bdac7f410ef",
                            "width": 640
                        },
                        "id": "283VpOIFxubROj0o6mHD83"
                    },
                    {
                        "trackName": "Ad Infinitum",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fdb2e8f4423774ea92eb77e43480e29fb78f4e9b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1WHrCfYujnEhApstu2ppFo",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5fv48FX13ObHcPLxuxguyy"
                                },
                                "href": "https://api.spotify.com/v1/artists/5fv48FX13ObHcPLxuxguyy",
                                "id": "5fv48FX13ObHcPLxuxguyy",
                                "name": "James Matthéus",
                                "type": "artist",
                                "uri": "spotify:artist:5fv48FX13ObHcPLxuxguyy"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27311b737b9e03f04ca2def8ce7",
                            "width": 640
                        },
                        "id": "1WHrCfYujnEhApstu2ppFo"
                    },
                    {
                        "trackName": "Confianza",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7221ff0e21705e195a727beefdb8b9e45b64c5c4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5MN8kJAw4b4lgNlz1KO32M",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/15YhDrOSaJa3ZoiwykoifX"
                                },
                                "href": "https://api.spotify.com/v1/artists/15YhDrOSaJa3ZoiwykoifX",
                                "id": "15YhDrOSaJa3ZoiwykoifX",
                                "name": "Alegro Moya",
                                "type": "artist",
                                "uri": "spotify:artist:15YhDrOSaJa3ZoiwykoifX"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27326a5ed46c42d1c7683ab47d3",
                            "width": 640
                        },
                        "id": "5MN8kJAw4b4lgNlz1KO32M"
                    },
                    {
                        "trackName": "The Sky Is A Sea",
                        "trackPreview": "https://p.scdn.co/mp3-preview/bbe15da35b55f241a1e8f5a7eba9846f5ca3ad2f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5RmKyK9bzcqP7n8YbyPIo9",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2oV0NR81ygDpyfMqZoC4Wz"
                                },
                                "href": "https://api.spotify.com/v1/artists/2oV0NR81ygDpyfMqZoC4Wz",
                                "id": "2oV0NR81ygDpyfMqZoC4Wz",
                                "name": "Criollo Clouds",
                                "type": "artist",
                                "uri": "spotify:artist:2oV0NR81ygDpyfMqZoC4Wz"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27353a2487e5ca9b9ff49d50e63",
                            "width": 640
                        },
                        "id": "5RmKyK9bzcqP7n8YbyPIo9"
                    },
                    {
                        "trackName": "Wherever The Light Takes Me",
                        "trackPreview": "https://p.scdn.co/mp3-preview/46d8f623f967dfeca4052d0e194a62f2ccaab495?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0kQs60Eec9PnDAwvyS3iN1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1mhDm5AwhS5vAUIO91hHVU"
                                },
                                "href": "https://api.spotify.com/v1/artists/1mhDm5AwhS5vAUIO91hHVU",
                                "id": "1mhDm5AwhS5vAUIO91hHVU",
                                "name": "Gual Levine",
                                "type": "artist",
                                "uri": "spotify:artist:1mhDm5AwhS5vAUIO91hHVU"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273618b81f4123afe408c353aa0",
                            "width": 640
                        },
                        "id": "0kQs60Eec9PnDAwvyS3iN1"
                    },
                    {
                        "trackName": "White Star",
                        "trackPreview": "https://p.scdn.co/mp3-preview/3d6ea4f23da6b3ec741018ffda1ae5cb4a054021?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1VkdH6Zvj3OTIpuwreP3iF",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/53E9B0OiR03VSuqIqhCguq"
                                },
                                "href": "https://api.spotify.com/v1/artists/53E9B0OiR03VSuqIqhCguq",
                                "id": "53E9B0OiR03VSuqIqhCguq",
                                "name": "Tryggve Malmberg",
                                "type": "artist",
                                "uri": "spotify:artist:53E9B0OiR03VSuqIqhCguq"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c452786e087f1abd84adc8e1",
                            "width": 640
                        },
                        "id": "1VkdH6Zvj3OTIpuwreP3iF"
                    },
                    {
                        "trackName": "Once Again",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7d39d73763359273622e1f9e9d6cc017a12d129e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:30RuRqJ2qdSNgNy5lM4w6D",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0v2xcXKJMnxbrBP3d83evx"
                                },
                                "href": "https://api.spotify.com/v1/artists/0v2xcXKJMnxbrBP3d83evx",
                                "id": "0v2xcXKJMnxbrBP3d83evx",
                                "name": "Ann Windsor",
                                "type": "artist",
                                "uri": "spotify:artist:0v2xcXKJMnxbrBP3d83evx"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d8d8b6a0fcf9512683f1880f",
                            "width": 640
                        },
                        "id": "30RuRqJ2qdSNgNy5lM4w6D"
                    },
                    {
                        "trackName": "A World Above",
                        "trackPreview": "https://p.scdn.co/mp3-preview/02fc27ffe3913821a47502439a607b5bdb8ae681?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7x9bH00ovSbLyTMvsyvWNd",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7uXuTxl4VakzFuKYekOLbW"
                                },
                                "href": "https://api.spotify.com/v1/artists/7uXuTxl4VakzFuKYekOLbW",
                                "id": "7uXuTxl4VakzFuKYekOLbW",
                                "name": "Lluvia Green",
                                "type": "artist",
                                "uri": "spotify:artist:7uXuTxl4VakzFuKYekOLbW"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273374151575177d04cdd8ba552",
                            "width": 640
                        },
                        "id": "7x9bH00ovSbLyTMvsyvWNd"
                    },
                    {
                        "trackName": "Desear",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1579ef62277027e15ee6b1a75ee02daa3144de63?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4a20vranOH3ic2txQ463jc",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1G10mtuBoefYi1F0aNfa6G"
                                },
                                "href": "https://api.spotify.com/v1/artists/1G10mtuBoefYi1F0aNfa6G",
                                "id": "1G10mtuBoefYi1F0aNfa6G",
                                "name": "Julia Alvarez",
                                "type": "artist",
                                "uri": "spotify:artist:1G10mtuBoefYi1F0aNfa6G"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734aa9776c7b9e1cf3d66ac412",
                            "width": 640
                        },
                        "id": "4a20vranOH3ic2txQ463jc"
                    },
                    {
                        "trackName": "Your Are The Calm",
                        "trackPreview": "https://p.scdn.co/mp3-preview/feb731d43425892839afbcf44a54f63bc98bce09?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2APApFAWZgn1F0Efpl6jlj",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5JT8XbqZDGSHR91TqvUKi0"
                                },
                                "href": "https://api.spotify.com/v1/artists/5JT8XbqZDGSHR91TqvUKi0",
                                "id": "5JT8XbqZDGSHR91TqvUKi0",
                                "name": "Takhall",
                                "type": "artist",
                                "uri": "spotify:artist:5JT8XbqZDGSHR91TqvUKi0"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27353091ad6c6b41326739818b6",
                            "width": 640
                        },
                        "id": "2APApFAWZgn1F0Efpl6jlj"
                    },
                    {
                        "trackName": "Collectively",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1cd232e8a482c2be224a7240237b7c1061c140f1?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5sUoXvIj0QKfsGRAtU8NAk",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5lIaD8O0ZoUIS3aybgfyeO"
                                },
                                "href": "https://api.spotify.com/v1/artists/5lIaD8O0ZoUIS3aybgfyeO",
                                "id": "5lIaD8O0ZoUIS3aybgfyeO",
                                "name": "Haraldur Bergljót",
                                "type": "artist",
                                "uri": "spotify:artist:5lIaD8O0ZoUIS3aybgfyeO"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a8b0c3c6adafb74f04179f3c",
                            "width": 640
                        },
                        "id": "5sUoXvIj0QKfsGRAtU8NAk"
                    },
                    {
                        "trackName": "Words From Unknown",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5eb0bfa63a57a2ea3ccf7b1eeb0cb36f7811fd96?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:75JauC9jwEh6Ni7v6apU4h",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1J7K4Jr0deYSXtXoUtyp1D"
                                },
                                "href": "https://api.spotify.com/v1/artists/1J7K4Jr0deYSXtXoUtyp1D",
                                "id": "1J7K4Jr0deYSXtXoUtyp1D",
                                "name": "Sleep Cyclone",
                                "type": "artist",
                                "uri": "spotify:artist:1J7K4Jr0deYSXtXoUtyp1D"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273098834e561a1e21e6b34000d",
                            "width": 640
                        },
                        "id": "75JauC9jwEh6Ni7v6apU4h"
                    },
                    {
                        "trackName": "I et andet liv",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ff4d65389473df9478b823141e23073ed4fc18d3?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:48UNHWGzRfk4AOKrCJM7XJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0vPGOBFcfVsCzqsYTxubi6"
                                },
                                "href": "https://api.spotify.com/v1/artists/0vPGOBFcfVsCzqsYTxubi6",
                                "id": "0vPGOBFcfVsCzqsYTxubi6",
                                "name": "Minik Knudsen",
                                "type": "artist",
                                "uri": "spotify:artist:0vPGOBFcfVsCzqsYTxubi6"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27356194a7ec8b5275154acd90f",
                            "width": 640
                        },
                        "id": "48UNHWGzRfk4AOKrCJM7XJ"
                    },
                    {
                        "trackName": "Epiphany",
                        "trackPreview": "https://p.scdn.co/mp3-preview/37e1b931f85da15a873d73e4bfccac422c5c42f3?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7etqolbqNqTmybDTIN77pt",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5u8vwlOeUEwxaklbfP6cnG"
                                },
                                "href": "https://api.spotify.com/v1/artists/5u8vwlOeUEwxaklbfP6cnG",
                                "id": "5u8vwlOeUEwxaklbfP6cnG",
                                "name": "Aari Kumar",
                                "type": "artist",
                                "uri": "spotify:artist:5u8vwlOeUEwxaklbfP6cnG"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b7c3fb8f32c91843a4a4e1cc",
                            "width": 640
                        },
                        "id": "7etqolbqNqTmybDTIN77pt"
                    },
                    {
                        "trackName": "Joey Tribbiant",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9d77c795e4a04c1c6c8025564e6038ef9f1cd7ef?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:73ndEqAclCX2fBtBLDh2oy",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6KnknNIJOqJZzBiooVpN3R"
                                },
                                "href": "https://api.spotify.com/v1/artists/6KnknNIJOqJZzBiooVpN3R",
                                "id": "6KnknNIJOqJZzBiooVpN3R",
                                "name": "Andrei Mizi",
                                "type": "artist",
                                "uri": "spotify:artist:6KnknNIJOqJZzBiooVpN3R"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a30b7517f22e7e569e780d9d",
                            "width": 640
                        },
                        "id": "73ndEqAclCX2fBtBLDh2oy"
                    },
                    {
                        "trackName": "Colors Of Tomorrow",
                        "trackPreview": "https://p.scdn.co/mp3-preview/21b7ef2b98298ebfe60e15956950e560a5a10798?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5UkYo3mcGKkkkp9aZmPW5b",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4BekYfsPtsGwVk7Jda3NqR"
                                },
                                "href": "https://api.spotify.com/v1/artists/4BekYfsPtsGwVk7Jda3NqR",
                                "id": "4BekYfsPtsGwVk7Jda3NqR",
                                "name": "Camilento",
                                "type": "artist",
                                "uri": "spotify:artist:4BekYfsPtsGwVk7Jda3NqR"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2737bd361da7f8e8c59c84d7bd7",
                            "width": 640
                        },
                        "id": "5UkYo3mcGKkkkp9aZmPW5b"
                    },
                    {
                        "trackName": "Evermore",
                        "trackPreview": "https://p.scdn.co/mp3-preview/425abf554d3a6ed290a580506db65a2c20150c28?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5S2fFnqCM8jYc4GL6k8dWK",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5u8vwlOeUEwxaklbfP6cnG"
                                },
                                "href": "https://api.spotify.com/v1/artists/5u8vwlOeUEwxaklbfP6cnG",
                                "id": "5u8vwlOeUEwxaklbfP6cnG",
                                "name": "Aari Kumar",
                                "type": "artist",
                                "uri": "spotify:artist:5u8vwlOeUEwxaklbfP6cnG"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273387c5c50c11b2e1f6a6f56a8",
                            "width": 640
                        },
                        "id": "5S2fFnqCM8jYc4GL6k8dWK"
                    },
                    {
                        "trackName": "Reveries",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2a7574a3bf4fde8e1c9986bc2c9e532cb0375d96?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0unE46V2r2KwTpDudlVegD",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4MkWDFm702DiQ6TYCdFyh0"
                                },
                                "href": "https://api.spotify.com/v1/artists/4MkWDFm702DiQ6TYCdFyh0",
                                "id": "4MkWDFm702DiQ6TYCdFyh0",
                                "name": "Casiamty",
                                "type": "artist",
                                "uri": "spotify:artist:4MkWDFm702DiQ6TYCdFyh0"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273bc3f498bc1fcfddfbfc49668",
                            "width": 640
                        },
                        "id": "0unE46V2r2KwTpDudlVegD"
                    },
                    {
                        "trackName": "Momenti",
                        "trackPreview": "https://p.scdn.co/mp3-preview/6d2ade6985e10e0bf2a0d7a46a6ca7ed8998ba91?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5f5kXzWQutNq2FAcRNwY8I",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/033LMiTBVqCY9QjIyBTemd"
                                },
                                "href": "https://api.spotify.com/v1/artists/033LMiTBVqCY9QjIyBTemd",
                                "id": "033LMiTBVqCY9QjIyBTemd",
                                "name": "Momenti",
                                "type": "artist",
                                "uri": "spotify:artist:033LMiTBVqCY9QjIyBTemd"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b9db6cbacd2ebe65ce18c93c",
                            "width": 640
                        },
                        "id": "5f5kXzWQutNq2FAcRNwY8I"
                    },
                    {
                        "trackName": "Midway",
                        "trackPreview": "https://p.scdn.co/mp3-preview/053216d4aa90278e32780d8289335496410208a2?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2kTv2khALDAQLexccNt7Ik",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/19Ezl9iEvMupXpC5XMgZBR"
                                },
                                "href": "https://api.spotify.com/v1/artists/19Ezl9iEvMupXpC5XMgZBR",
                                "id": "19Ezl9iEvMupXpC5XMgZBR",
                                "name": "Marlowe Coleman",
                                "type": "artist",
                                "uri": "spotify:artist:19Ezl9iEvMupXpC5XMgZBR"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27377f753dc2925c12d23388137",
                            "width": 640
                        },
                        "id": "2kTv2khALDAQLexccNt7Ik"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Lluvia de Noche",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f00000003bd1118fd8abf4eb02d0ffc17",
                "id": "37i9dQZF1DWTpJIpOxN3r8",
                "tracks": [
                    {
                        "trackName": "Sleeping To Thunder",
                        "trackPreview": "https://p.scdn.co/mp3-preview/18cd1665ff577c5cfb98869c5169262a0caa17e9?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3caqSbL4x6qyteDy6H4uor",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7Az24KnLGP3r8FUttk9uXm"
                                },
                                "href": "https://api.spotify.com/v1/artists/7Az24KnLGP3r8FUttk9uXm",
                                "id": "7Az24KnLGP3r8FUttk9uXm",
                                "name": "Mahesh",
                                "type": "artist",
                                "uri": "spotify:artist:7Az24KnLGP3r8FUttk9uXm"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731d93a2ec5fff54d87e132ba6",
                            "width": 640
                        },
                        "id": "3caqSbL4x6qyteDy6H4uor"
                    },
                    {
                        "trackName": "Surrender to rain",
                        "trackPreview": "https://p.scdn.co/mp3-preview/afd6b667efbca510e1b12279d384d3720f260002?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3NX7gdrLQMqCaFniFrH0a5",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1RNXA2cIljrRol5nvV2Eoy"
                                },
                                "href": "https://api.spotify.com/v1/artists/1RNXA2cIljrRol5nvV2Eoy",
                                "id": "1RNXA2cIljrRol5nvV2Eoy",
                                "name": "Rayne",
                                "type": "artist",
                                "uri": "spotify:artist:1RNXA2cIljrRol5nvV2Eoy"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e57b629b6a7533c18a482f40",
                            "width": 640
                        },
                        "id": "3NX7gdrLQMqCaFniFrH0a5"
                    },
                    {
                        "trackName": "Oddly Comforting Rain",
                        "trackPreview": "https://p.scdn.co/mp3-preview/deb298b9da6199ac6cd026bde42d81ce5722dbdb?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5jqg4YlLGLuTg4yZCS9lh1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/37NFZB0swR3yaCGntPM9f9"
                                },
                                "href": "https://api.spotify.com/v1/artists/37NFZB0swR3yaCGntPM9f9",
                                "id": "37NFZB0swR3yaCGntPM9f9",
                                "name": "Muggy Forecast",
                                "type": "artist",
                                "uri": "spotify:artist:37NFZB0swR3yaCGntPM9f9"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2736deaf264a891fd5e4cf6b0e2",
                            "width": 640
                        },
                        "id": "5jqg4YlLGLuTg4yZCS9lh1"
                    },
                    {
                        "trackName": "Let's stay inside",
                        "trackPreview": "https://p.scdn.co/mp3-preview/cf6ff93d0b81337e1bf169e39a6511ca58adf151?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2mJj6OBy8njbz6zEp4RjX6",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3WuGmxUJ4IiTnutgB97JLp"
                                },
                                "href": "https://api.spotify.com/v1/artists/3WuGmxUJ4IiTnutgB97JLp",
                                "id": "3WuGmxUJ4IiTnutgB97JLp",
                                "name": "Pluviatica",
                                "type": "artist",
                                "uri": "spotify:artist:3WuGmxUJ4IiTnutgB97JLp"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273f18ec21b198342388c68c460",
                            "width": 640
                        },
                        "id": "2mJj6OBy8njbz6zEp4RjX6"
                    },
                    {
                        "trackName": "Stormy Dreams",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ec022e4ab68c1842114332670ae9e3bbc5e1291d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3tCznlqVJy40oV68edDA4o",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5vgyBPjmH74rsob0Ribq6f"
                                },
                                "href": "https://api.spotify.com/v1/artists/5vgyBPjmH74rsob0Ribq6f",
                                "id": "5vgyBPjmH74rsob0Ribq6f",
                                "name": "Shipibo",
                                "type": "artist",
                                "uri": "spotify:artist:5vgyBPjmH74rsob0Ribq6f"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273899a60a499125c9582e2aec8",
                            "width": 640
                        },
                        "id": "3tCznlqVJy40oV68edDA4o"
                    },
                    {
                        "trackName": "The Sky's Awake",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9a3ac8606eed8a4641e52f3a11cdef5fd8c5a64d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0GGHxdy1mw6OcS2dVAH0es",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/11662aaOqDYv2EBHSxJPJV"
                                },
                                "href": "https://api.spotify.com/v1/artists/11662aaOqDYv2EBHSxJPJV",
                                "id": "11662aaOqDYv2EBHSxJPJV",
                                "name": "Drivotra",
                                "type": "artist",
                                "uri": "spotify:artist:11662aaOqDYv2EBHSxJPJV"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ed0f350b89938bed0be68544",
                            "width": 640
                        },
                        "id": "0GGHxdy1mw6OcS2dVAH0es"
                    },
                    {
                        "trackName": "Wet Weather",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c036702c092dbbc94ba66fb36c8e17cd28e0f611?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5hf4IrzBngV1tdtDKDzt7a",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3WiLG8IMyo00LP5Yqb8yUG"
                                },
                                "href": "https://api.spotify.com/v1/artists/3WiLG8IMyo00LP5Yqb8yUG",
                                "id": "3WiLG8IMyo00LP5Yqb8yUG",
                                "name": "Electricality",
                                "type": "artist",
                                "uri": "spotify:artist:3WiLG8IMyo00LP5Yqb8yUG"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a1e317c5d8d1e48105942f63",
                            "width": 640
                        },
                        "id": "5hf4IrzBngV1tdtDKDzt7a"
                    },
                    {
                        "trackName": "Stetiger Regen",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7aa1daaef060e1d0736b1b9c2eefd16f47cedeef?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3vwZ7YcQ24GtvvuWQTRcXO",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1OcoltzN3WhJYzAoAtf0Xl"
                                },
                                "href": "https://api.spotify.com/v1/artists/1OcoltzN3WhJYzAoAtf0Xl",
                                "id": "1OcoltzN3WhJYzAoAtf0Xl",
                                "name": "Die ganze Nacht",
                                "type": "artist",
                                "uri": "spotify:artist:1OcoltzN3WhJYzAoAtf0Xl"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a1f2cd6505c6ef3bd92273bf",
                            "width": 640
                        },
                        "id": "3vwZ7YcQ24GtvvuWQTRcXO"
                    },
                    {
                        "trackName": "Stormy Nights And Days",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b02dea85a1757cfaaadc69869710012e6dfd2a6b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3yIzotqlArHD8rDU4uGLZl",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3KMNkkaZzoo0wfCzVZ3pri"
                                },
                                "href": "https://api.spotify.com/v1/artists/3KMNkkaZzoo0wfCzVZ3pri",
                                "id": "3KMNkkaZzoo0wfCzVZ3pri",
                                "name": "Empyrean",
                                "type": "artist",
                                "uri": "spotify:artist:3KMNkkaZzoo0wfCzVZ3pri"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273620521f021c8481d455d607a",
                            "width": 640
                        },
                        "id": "3yIzotqlArHD8rDU4uGLZl"
                    },
                    {
                        "trackName": "Rainy Mood",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5e53d2c290eb89597cad09e174a2710adf98c7de?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5jyrtNJBcaFkNyS4yPixkI",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HkwYBXLxmRKfWOkaknVQ7"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HkwYBXLxmRKfWOkaknVQ7",
                                "id": "3HkwYBXLxmRKfWOkaknVQ7",
                                "name": "Sleepy Mood",
                                "type": "artist",
                                "uri": "spotify:artist:3HkwYBXLxmRKfWOkaknVQ7"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ceec45d05413f26e152fb547",
                            "width": 640
                        },
                        "id": "5jyrtNJBcaFkNyS4yPixkI"
                    },
                    {
                        "trackName": "High Plains Storm",
                        "trackPreview": "https://p.scdn.co/mp3-preview/268938875d59e458b06299287173074478df4afc?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6RHckQgZL8uT0JkdV6lH3r",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3AhSKCMBK1DWhRGvem6prn"
                                },
                                "href": "https://api.spotify.com/v1/artists/3AhSKCMBK1DWhRGvem6prn",
                                "id": "3AhSKCMBK1DWhRGvem6prn",
                                "name": "Earthly Delights",
                                "type": "artist",
                                "uri": "spotify:artist:3AhSKCMBK1DWhRGvem6prn"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2736c1fc5c49f7eb9a2f86e29fd",
                            "width": 640
                        },
                        "id": "6RHckQgZL8uT0JkdV6lH3r"
                    },
                    {
                        "trackName": "Rainy Mornings",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2e59cc54f4369f6843941e898aa0d0e53d141d4e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:65i10BbqAMPSQmyc4J8TKT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2Ws74uPhxJrBWn95kKDqhq"
                                },
                                "href": "https://api.spotify.com/v1/artists/2Ws74uPhxJrBWn95kKDqhq",
                                "id": "2Ws74uPhxJrBWn95kKDqhq",
                                "name": "Forest FX Smith",
                                "type": "artist",
                                "uri": "spotify:artist:2Ws74uPhxJrBWn95kKDqhq"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e6679fc0fc1b846c7b9dbf9c",
                            "width": 640
                        },
                        "id": "65i10BbqAMPSQmyc4J8TKT"
                    },
                    {
                        "trackName": "Sleep Storm",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2fa93cc2e0451e9263c89dd65d37f4500a3d6a67?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:56sct0VNF41AwrlNZum66R",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6ouSV6Bg58MfXLmO7daZiK"
                                },
                                "href": "https://api.spotify.com/v1/artists/6ouSV6Bg58MfXLmO7daZiK",
                                "id": "6ouSV6Bg58MfXLmO7daZiK",
                                "name": "Amida Nature Sounds",
                                "type": "artist",
                                "uri": "spotify:artist:6ouSV6Bg58MfXLmO7daZiK"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27364b45ffd8069885ce750865a",
                            "width": 640
                        },
                        "id": "56sct0VNF41AwrlNZum66R"
                    },
                    {
                        "trackName": "Mystery Sky",
                        "trackPreview": "https://p.scdn.co/mp3-preview/093b37ede02b66681d0612f030008ec278ec2170?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0U9ixnjG3qdi35doySolAj",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5EWTPC3fheVTv9t74wfwPV"
                                },
                                "href": "https://api.spotify.com/v1/artists/5EWTPC3fheVTv9t74wfwPV",
                                "id": "5EWTPC3fheVTv9t74wfwPV",
                                "name": "Drop To Drop",
                                "type": "artist",
                                "uri": "spotify:artist:5EWTPC3fheVTv9t74wfwPV"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730b4e141ae6f2a81288aa62c7",
                            "width": 640
                        },
                        "id": "0U9ixnjG3qdi35doySolAj"
                    },
                    {
                        "trackName": "Pluie légère et tonnerre",
                        "trackPreview": "https://p.scdn.co/mp3-preview/53c1fcafbc2f987c18b69e208f33ceeefd8de675?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1SAvBx0Uzm0UQz6u5J85M9",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7885SjDRQfxBJ8MTfomwHz"
                                },
                                "href": "https://api.spotify.com/v1/artists/7885SjDRQfxBJ8MTfomwHz",
                                "id": "7885SjDRQfxBJ8MTfomwHz",
                                "name": "Tonerre",
                                "type": "artist",
                                "uri": "spotify:artist:7885SjDRQfxBJ8MTfomwHz"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27341c39d7a7253ed39beb5d1f5",
                            "width": 640
                        },
                        "id": "1SAvBx0Uzm0UQz6u5J85M9"
                    },
                    {
                        "trackName": "Under the Rain Clouds",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d8797c8ad60e3155dfaca24715163ea38977b293?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1MyeT7GjwylrPvcLsBSjds",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1cnvjBS4O1gaKv7LAIzFFT"
                                },
                                "href": "https://api.spotify.com/v1/artists/1cnvjBS4O1gaKv7LAIzFFT",
                                "id": "1cnvjBS4O1gaKv7LAIzFFT",
                                "name": "Natur Musikanten",
                                "type": "artist",
                                "uri": "spotify:artist:1cnvjBS4O1gaKv7LAIzFFT"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ef14913d600ded3bba561f3d",
                            "width": 640
                        },
                        "id": "1MyeT7GjwylrPvcLsBSjds"
                    },
                    {
                        "trackName": "Thunder Flow",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1c56306f01df33bd3f2c25a7a3ecddcc2a4c23c2?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1r5Ep4NrQFWD6mrGmW9jzB",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2uliIyMyLnG5zT7gV095uG"
                                },
                                "href": "https://api.spotify.com/v1/artists/2uliIyMyLnG5zT7gV095uG",
                                "id": "2uliIyMyLnG5zT7gV095uG",
                                "name": "Skyscration",
                                "type": "artist",
                                "uri": "spotify:artist:2uliIyMyLnG5zT7gV095uG"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730d50715d37467bf1670a2862",
                            "width": 640
                        },
                        "id": "1r5Ep4NrQFWD6mrGmW9jzB"
                    },
                    {
                        "trackName": "Pluie tropicale",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fcb6d7ce8772162a5c73054e05c641c1fbd95309?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3PCELNifmPZJVtvIbwxpuD",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1S5E0AilcCGAl0KnP1woIH"
                                },
                                "href": "https://api.spotify.com/v1/artists/1S5E0AilcCGAl0KnP1woIH",
                                "id": "1S5E0AilcCGAl0KnP1woIH",
                                "name": "Vædret",
                                "type": "artist",
                                "uri": "spotify:artist:1S5E0AilcCGAl0KnP1woIH"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273f45073a697e298446efd2eb6",
                            "width": 640
                        },
                        "id": "3PCELNifmPZJVtvIbwxpuD"
                    },
                    {
                        "trackName": "Garasia Rain Forest",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1fb6554d714e9e854ad47506295ba36d68c00aab?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0I42DRVbtMJr0bLEO6ZQB6",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4rwOqhIQpWyk3Tx4GbiqMw"
                                },
                                "href": "https://api.spotify.com/v1/artists/4rwOqhIQpWyk3Tx4GbiqMw",
                                "id": "4rwOqhIQpWyk3Tx4GbiqMw",
                                "name": "Literrain",
                                "type": "artist",
                                "uri": "spotify:artist:4rwOqhIQpWyk3Tx4GbiqMw"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2737fb9aca412efe9418ad010ac",
                            "width": 640
                        },
                        "id": "0I42DRVbtMJr0bLEO6ZQB6"
                    },
                    {
                        "trackName": "Dreamy Rain",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a6b51965dc335b65d651df85b50986de3380d19f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0oSU0oQ4xp3H6sMh1In9W8",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0fHeyixPnac66k5oBPclVW"
                                },
                                "href": "https://api.spotify.com/v1/artists/0fHeyixPnac66k5oBPclVW",
                                "id": "0fHeyixPnac66k5oBPclVW",
                                "name": "Rainded",
                                "type": "artist",
                                "uri": "spotify:artist:0fHeyixPnac66k5oBPclVW"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2737d876c5a3c8c1585c86512e9",
                            "width": 640
                        },
                        "id": "0oSU0oQ4xp3H6sMh1In9W8"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Meditaciones Guiadas",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f00000003aed2fb0540570b4b7d4a4894",
                "id": "37i9dQZF1DWZKyP0tcxlDn",
                "tracks": [
                    {
                        "trackName": "Amor Propio",
                        "trackPreview": "https://p.scdn.co/mp3-preview/110f96e3f525f3b69b1c03242b84050570361c74?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2XcaKY3ERGi62a8UazC4wj",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1iEKKF94iQfqYJa6JfXsmE"
                                },
                                "href": "https://api.spotify.com/v1/artists/1iEKKF94iQfqYJa6JfXsmE",
                                "id": "1iEKKF94iQfqYJa6JfXsmE",
                                "name": "Fernanda Roig",
                                "type": "artist",
                                "uri": "spotify:artist:1iEKKF94iQfqYJa6JfXsmE"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b32e43146f1128e25c27c2bd",
                            "width": 640
                        },
                        "id": "2XcaKY3ERGi62a8UazC4wj"
                    },
                    {
                        "trackName": "Meditación guiada: Alivio de la ansiedad - Pad y ondas de playa",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a8dba427e3af9ae94f238afc27321bd1a1eae69d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3AwM5kkgyHfvMO3lRYIJQZ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0YpSO5vQhOKSI0ZEyhRRCj"
                                },
                                "href": "https://api.spotify.com/v1/artists/0YpSO5vQhOKSI0ZEyhRRCj",
                                "id": "0YpSO5vQhOKSI0ZEyhRRCj",
                                "name": "Nicolas Fuentes",
                                "type": "artist",
                                "uri": "spotify:artist:0YpSO5vQhOKSI0ZEyhRRCj"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273853317cd87c131c73e959452",
                            "width": 640
                        },
                        "id": "3AwM5kkgyHfvMO3lRYIJQZ"
                    },
                    {
                        "trackName": "Meditación guiada: Reducir el estrés por la respiración - Pad",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b0cad9d05e27a7bb88d2e65e6aa8c8f93d2597cc?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1AOkl6s50A2PgqY2qMamko",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Y5yMua1XYlcPYoWzRyXHP"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Y5yMua1XYlcPYoWzRyXHP",
                                "id": "1Y5yMua1XYlcPYoWzRyXHP",
                                "name": "Teresa Muñoz",
                                "type": "artist",
                                "uri": "spotify:artist:1Y5yMua1XYlcPYoWzRyXHP"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273914c4c228e0c3fe3694f86f2",
                            "width": 640
                        },
                        "id": "1AOkl6s50A2PgqY2qMamko"
                    },
                    {
                        "trackName": "Aquel Que Yo Soy",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2ffe32fc25f87670367ac387ba769a6d4e596a89?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5y2sItm6bbX92qtV9Hrftt",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3lbH6noLPe7Pn1ryAbtBBq"
                                },
                                "href": "https://api.spotify.com/v1/artists/3lbH6noLPe7Pn1ryAbtBBq",
                                "id": "3lbH6noLPe7Pn1ryAbtBBq",
                                "name": "Brahma Kumaris",
                                "type": "artist",
                                "uri": "spotify:artist:3lbH6noLPe7Pn1ryAbtBBq"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734a5c06da332a45ea7fdfbb45",
                            "width": 640
                        },
                        "id": "5y2sItm6bbX92qtV9Hrftt"
                    },
                    {
                        "trackName": "Meditación para Dormir Mejor",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4706f7206367cfd4d98ba33661e99ec914d97eef?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4fc549rCIf4vxezixGlHdT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1iEKKF94iQfqYJa6JfXsmE"
                                },
                                "href": "https://api.spotify.com/v1/artists/1iEKKF94iQfqYJa6JfXsmE",
                                "id": "1iEKKF94iQfqYJa6JfXsmE",
                                "name": "Fernanda Roig",
                                "type": "artist",
                                "uri": "spotify:artist:1iEKKF94iQfqYJa6JfXsmE"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273eb700f0bfb43f9d65e318e9e",
                            "width": 640
                        },
                        "id": "4fc549rCIf4vxezixGlHdT"
                    },
                    {
                        "trackName": "Saltar",
                        "trackPreview": "https://p.scdn.co/mp3-preview/63c73e5ac342138e8df4c061552ed7f332efc0fa?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2y6ndb9KkibIv7jQdF3zSn",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/50UsCuKy9vTLpEhsVSmqu0"
                                },
                                "href": "https://api.spotify.com/v1/artists/50UsCuKy9vTLpEhsVSmqu0",
                                "id": "50UsCuKy9vTLpEhsVSmqu0",
                                "name": "Silvia Arazi",
                                "type": "artist",
                                "uri": "spotify:artist:50UsCuKy9vTLpEhsVSmqu0"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731307bc4a80361ad6fcc63307",
                            "width": 640
                        },
                        "id": "2y6ndb9KkibIv7jQdF3zSn"
                    },
                    {
                        "trackName": "Meditación guiada: Cómo lidiar con las emociones negativas - Pad y ondas de playa",
                        "trackPreview": "https://p.scdn.co/mp3-preview/48aa5fcef201ce0edbcfed27521dd9e7e3d49681?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5bNxCyVfNNSJSl6YNiRzKD",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0YpSO5vQhOKSI0ZEyhRRCj"
                                },
                                "href": "https://api.spotify.com/v1/artists/0YpSO5vQhOKSI0ZEyhRRCj",
                                "id": "0YpSO5vQhOKSI0ZEyhRRCj",
                                "name": "Nicolas Fuentes",
                                "type": "artist",
                                "uri": "spotify:artist:0YpSO5vQhOKSI0ZEyhRRCj"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2735083ef7fd4e18586805c6eb1",
                            "width": 640
                        },
                        "id": "5bNxCyVfNNSJSl6YNiRzKD"
                    },
                    {
                        "trackName": "Primer Paso: Elevar las Vibraciones",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ad6ea55695bf8a67eb9356c0c65595124ecef4b4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2zAXDIF5ui9YJj5u3L1mzp",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/50UsCuKy9vTLpEhsVSmqu0"
                                },
                                "href": "https://api.spotify.com/v1/artists/50UsCuKy9vTLpEhsVSmqu0",
                                "id": "50UsCuKy9vTLpEhsVSmqu0",
                                "name": "Silvia Arazi",
                                "type": "artist",
                                "uri": "spotify:artist:50UsCuKy9vTLpEhsVSmqu0"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2739233feb52be372e2f8497536",
                            "width": 640
                        },
                        "id": "2zAXDIF5ui9YJj5u3L1mzp"
                    },
                    {
                        "trackName": "Autoestima",
                        "trackPreview": "https://p.scdn.co/mp3-preview/3b802957db40efd04ac1b728bacf1988ea00f0d5?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:24J4c7uncyA8iLvuuGXJfo",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3lbH6noLPe7Pn1ryAbtBBq"
                                },
                                "href": "https://api.spotify.com/v1/artists/3lbH6noLPe7Pn1ryAbtBBq",
                                "id": "3lbH6noLPe7Pn1ryAbtBBq",
                                "name": "Brahma Kumaris",
                                "type": "artist",
                                "uri": "spotify:artist:3lbH6noLPe7Pn1ryAbtBBq"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27330563d0ff56bf852ce73101a",
                            "width": 640
                        },
                        "id": "24J4c7uncyA8iLvuuGXJfo"
                    },
                    {
                        "trackName": "Intenciones de comenzar el día",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e8b2890821f6066e5be2f45ab4394eb1e8456915?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4n7ecXMpRuJJ3TFRaE1DlU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1iEKKF94iQfqYJa6JfXsmE"
                                },
                                "href": "https://api.spotify.com/v1/artists/1iEKKF94iQfqYJa6JfXsmE",
                                "id": "1iEKKF94iQfqYJa6JfXsmE",
                                "name": "Fernanda Roig",
                                "type": "artist",
                                "uri": "spotify:artist:1iEKKF94iQfqYJa6JfXsmE"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c246a7e270a41e3d628fcd3a",
                            "width": 640
                        },
                        "id": "4n7ecXMpRuJJ3TFRaE1DlU"
                    },
                    {
                        "trackName": "Meditación guiada: Haciendo una diferencia - Pad",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8b553c6f1e9e6e466adaa6754739b11bf0bf3dfd?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0obhDEEO98yusNQ4Dmnl92",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Y5yMua1XYlcPYoWzRyXHP"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Y5yMua1XYlcPYoWzRyXHP",
                                "id": "1Y5yMua1XYlcPYoWzRyXHP",
                                "name": "Teresa Muñoz",
                                "type": "artist",
                                "uri": "spotify:artist:1Y5yMua1XYlcPYoWzRyXHP"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2732db109e11620d95c2d5e3cb8",
                            "width": 640
                        },
                        "id": "0obhDEEO98yusNQ4Dmnl92"
                    },
                    {
                        "trackName": "Meditación para calmar rápidamente el estrés",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d7019a3d3b1bb694ee0659e04804e14b446fea72?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5UOfLQdVkRMlnROo1qF2kG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2OEH6feU0Fe2siPG00qwIg"
                                },
                                "href": "https://api.spotify.com/v1/artists/2OEH6feU0Fe2siPG00qwIg",
                                "id": "2OEH6feU0Fe2siPG00qwIg",
                                "name": "Naty Franzoni",
                                "type": "artist",
                                "uri": "spotify:artist:2OEH6feU0Fe2siPG00qwIg"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27315a2d5963e1ca42ccf4eb838",
                            "width": 640
                        },
                        "id": "5UOfLQdVkRMlnROo1qF2kG"
                    },
                    {
                        "trackName": "Meditación Atención Consciente",
                        "trackPreview": null,
                        "uri": "spotify:track:1GX2xaz7wxt087fPSanoiR",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1HgoOuZod8eiyQcMPfltWt"
                                },
                                "href": "https://api.spotify.com/v1/artists/1HgoOuZod8eiyQcMPfltWt",
                                "id": "1HgoOuZod8eiyQcMPfltWt",
                                "name": "MusicoterapiaTeam",
                                "type": "artist",
                                "uri": "spotify:artist:1HgoOuZod8eiyQcMPfltWt"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5FSP2F93BC2SHVTJndw2ZW"
                                },
                                "href": "https://api.spotify.com/v1/artists/5FSP2F93BC2SHVTJndw2ZW",
                                "id": "5FSP2F93BC2SHVTJndw2ZW",
                                "name": "Sada Viveka",
                                "type": "artist",
                                "uri": "spotify:artist:5FSP2F93BC2SHVTJndw2ZW"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2732c343ad25a791b9f1f244c41",
                            "width": 640
                        },
                        "id": "1GX2xaz7wxt087fPSanoiR"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Ruido Blanco para Dormir",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f00000003ee769d076d4f71961bf37d2c",
                "id": "37i9dQZF1DXaYM2TpfSdxV",
                "tracks": [
                    {
                        "trackName": "Deep Phase Noise 1",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d5f9b79a53ef9a1a873f4205a6eae705820753dd?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5MOWBRtP53q5yNOtHaMVTh",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5qq6C4dNld3AWHbh2WaNAR"
                                },
                                "href": "https://api.spotify.com/v1/artists/5qq6C4dNld3AWHbh2WaNAR",
                                "id": "5qq6C4dNld3AWHbh2WaNAR",
                                "name": "Milli Hughes",
                                "type": "artist",
                                "uri": "spotify:artist:5qq6C4dNld3AWHbh2WaNAR"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b51822f07d7bf5bbf0e40a79",
                            "width": 640
                        },
                        "id": "5MOWBRtP53q5yNOtHaMVTh"
                    },
                    {
                        "trackName": "Every Night White Noise",
                        "trackPreview": "https://p.scdn.co/mp3-preview/650a7306344cf97f1e725c27a0baf50e5efa1e71?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5nMbf1TCIXxtgWjcCT7pzs",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6ipASreqbHk6a7aR2xo9BW"
                                },
                                "href": "https://api.spotify.com/v1/artists/6ipASreqbHk6a7aR2xo9BW",
                                "id": "6ipASreqbHk6a7aR2xo9BW",
                                "name": "The Noisy Outdoors",
                                "type": "artist",
                                "uri": "spotify:artist:6ipASreqbHk6a7aR2xo9BW"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734622c2444aa74d4dccc34072",
                            "width": 640
                        },
                        "id": "5nMbf1TCIXxtgWjcCT7pzs"
                    },
                    {
                        "trackName": "Rumore Bianco",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fc42f6aeaf6d3fa3e82d8ddd4f9b60e3ff980e14?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6FrJELq39kHa0lllsUgyS4",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0AuDQR88HtZsQXLnbq007R"
                                },
                                "href": "https://api.spotify.com/v1/artists/0AuDQR88HtZsQXLnbq007R",
                                "id": "0AuDQR88HtZsQXLnbq007R",
                                "name": "Relaxed Minds",
                                "type": "artist",
                                "uri": "spotify:artist:0AuDQR88HtZsQXLnbq007R"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730f95711275dfc2058f47fd04",
                            "width": 640
                        },
                        "id": "6FrJELq39kHa0lllsUgyS4"
                    },
                    {
                        "trackName": "Suoni Del Cielo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ed709a7c3429ef08f6fb07fb141b995115cb6e51?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1OnPfzm1vpln863WmYMgt6",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4jtz7FSoYdL5pUWD6jk6av"
                                },
                                "href": "https://api.spotify.com/v1/artists/4jtz7FSoYdL5pUWD6jk6av",
                                "id": "4jtz7FSoYdL5pUWD6jk6av",
                                "name": "Molecualar Binary",
                                "type": "artist",
                                "uri": "spotify:artist:4jtz7FSoYdL5pUWD6jk6av"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27349b761cdf43bd42a19b7e0cf",
                            "width": 640
                        },
                        "id": "1OnPfzm1vpln863WmYMgt6"
                    },
                    {
                        "trackName": "Dreams & Calmness",
                        "trackPreview": "https://p.scdn.co/mp3-preview/99dbeac21e0504639c840c46124518ea041a20a1?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:295uck3ky42Qj4rxbISGG5",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5XmANDHn1nUVL3rVyohz9t"
                                },
                                "href": "https://api.spotify.com/v1/artists/5XmANDHn1nUVL3rVyohz9t",
                                "id": "5XmANDHn1nUVL3rVyohz9t",
                                "name": "X.L.T",
                                "type": "artist",
                                "uri": "spotify:artist:5XmANDHn1nUVL3rVyohz9t"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d4a4c9d1667d1d514d217677",
                            "width": 640
                        },
                        "id": "295uck3ky42Qj4rxbISGG5"
                    },
                    {
                        "trackName": "Quantum White",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4aa6a9f8db74b4daefb3870ac7e16beb3b2d87d2?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5DqjEVkM7PA3bMaEhkrUdb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2KETNse3N25ZwsHhq2iQnt"
                                },
                                "href": "https://api.spotify.com/v1/artists/2KETNse3N25ZwsHhq2iQnt",
                                "id": "2KETNse3N25ZwsHhq2iQnt",
                                "name": "Aileron",
                                "type": "artist",
                                "uri": "spotify:artist:2KETNse3N25ZwsHhq2iQnt"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273bcac6b0b9a947446a4738848",
                            "width": 640
                        },
                        "id": "5DqjEVkM7PA3bMaEhkrUdb"
                    },
                    {
                        "trackName": "Tranquility",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a58bc42da36ca224f09d425bb71df918e2011c65?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6CbPp21JO1ZFFVkP9vism2",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0np7yt4AmDMRNvEuYgOIXm"
                                },
                                "href": "https://api.spotify.com/v1/artists/0np7yt4AmDMRNvEuYgOIXm",
                                "id": "0np7yt4AmDMRNvEuYgOIXm",
                                "name": "Somnolence",
                                "type": "artist",
                                "uri": "spotify:artist:0np7yt4AmDMRNvEuYgOIXm"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27314d728d83105e4f711718208",
                            "width": 640
                        },
                        "id": "6CbPp21JO1ZFFVkP9vism2"
                    },
                    {
                        "trackName": "Tranquil White Noise",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0dad1f3c954829efc37ca7f5059a4f476d3c4160?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2YTcBeRLoVO2MkzKpbxPVW",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7j68r0RRJ2pdn6lh6Xhxn9"
                                },
                                "href": "https://api.spotify.com/v1/artists/7j68r0RRJ2pdn6lh6Xhxn9",
                                "id": "7j68r0RRJ2pdn6lh6Xhxn9",
                                "name": "Panoramia",
                                "type": "artist",
                                "uri": "spotify:artist:7j68r0RRJ2pdn6lh6Xhxn9"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c55d28c097d4faf55a2d057b",
                            "width": 640
                        },
                        "id": "2YTcBeRLoVO2MkzKpbxPVW"
                    },
                    {
                        "trackName": "Fuori Zona",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fe1d42fb3c405e2c798784cb2a1a20553a992e9c?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7efOZRH7Zu4oCvQwZ8ppIq",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4jtz7FSoYdL5pUWD6jk6av"
                                },
                                "href": "https://api.spotify.com/v1/artists/4jtz7FSoYdL5pUWD6jk6av",
                                "id": "4jtz7FSoYdL5pUWD6jk6av",
                                "name": "Molecualar Binary",
                                "type": "artist",
                                "uri": "spotify:artist:4jtz7FSoYdL5pUWD6jk6av"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27349b761cdf43bd42a19b7e0cf",
                            "width": 640
                        },
                        "id": "7efOZRH7Zu4oCvQwZ8ppIq"
                    },
                    {
                        "trackName": "Wind Low Frequencies Part 2",
                        "trackPreview": "https://p.scdn.co/mp3-preview/89e6fcd938829cd963bbddf25396e01e40b6da8d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7xLU1kiMAeExhb6fQydrda",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3D8uKbNS9NX6q57gX9b08V"
                                },
                                "href": "https://api.spotify.com/v1/artists/3D8uKbNS9NX6q57gX9b08V",
                                "id": "3D8uKbNS9NX6q57gX9b08V",
                                "name": "Asana Ventus",
                                "type": "artist",
                                "uri": "spotify:artist:3D8uKbNS9NX6q57gX9b08V"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c01248248bb6ad6a5b1abc5b",
                            "width": 640
                        },
                        "id": "7xLU1kiMAeExhb6fQydrda"
                    },
                    {
                        "trackName": "The Dark White Noise",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0f4eb022c6c1588b3829d6878ee1c791e2545977?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0Se7OnifRxYPVsimoV1Yyb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1J9iGTlSe1UKgzNbILBnL8"
                                },
                                "href": "https://api.spotify.com/v1/artists/1J9iGTlSe1UKgzNbILBnL8",
                                "id": "1J9iGTlSe1UKgzNbILBnL8",
                                "name": "Universal Waves",
                                "type": "artist",
                                "uri": "spotify:artist:1J9iGTlSe1UKgzNbILBnL8"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c642dae5e8ce18bdd93c25c5",
                            "width": 640
                        },
                        "id": "0Se7OnifRxYPVsimoV1Yyb"
                    },
                    {
                        "trackName": "Pause The Noise",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8dbf5ef5128643b4540cf7b75bd25352abd7007e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0mDQqx2jS7Da0kok7oUiiJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5aw5WfeOV5ThlwFcfaK9JO"
                                },
                                "href": "https://api.spotify.com/v1/artists/5aw5WfeOV5ThlwFcfaK9JO",
                                "id": "5aw5WfeOV5ThlwFcfaK9JO",
                                "name": "Deep Horizon Waves",
                                "type": "artist",
                                "uri": "spotify:artist:5aw5WfeOV5ThlwFcfaK9JO"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27345517f82cf3fa0a0186cf678",
                            "width": 640
                        },
                        "id": "0mDQqx2jS7Da0kok7oUiiJ"
                    },
                    {
                        "trackName": "Calmed By Rest",
                        "trackPreview": "https://p.scdn.co/mp3-preview/00fb7a927ad3bcd26833b44aac56dfd77a0f7be4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4Enk3Ss0Mp6L8eCgL2WbEv",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1QGbGUg3knUksMO2zgHQxD"
                                },
                                "href": "https://api.spotify.com/v1/artists/1QGbGUg3knUksMO2zgHQxD",
                                "id": "1QGbGUg3knUksMO2zgHQxD",
                                "name": "StyccO",
                                "type": "artist",
                                "uri": "spotify:artist:1QGbGUg3knUksMO2zgHQxD"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27374e35661a5919d7ca1db494f",
                            "width": 640
                        },
                        "id": "4Enk3Ss0Mp6L8eCgL2WbEv"
                    },
                    {
                        "trackName": "Breathe Easy",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0b0f11ba5cbdb61d045499d228ce86954b860d10?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7LnDKGTwMoLv3XSgxOnj83",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2EHYuRVxkX0f9VsvoOSCI1"
                                },
                                "href": "https://api.spotify.com/v1/artists/2EHYuRVxkX0f9VsvoOSCI1",
                                "id": "2EHYuRVxkX0f9VsvoOSCI1",
                                "name": "High Res Lo Fi",
                                "type": "artist",
                                "uri": "spotify:artist:2EHYuRVxkX0f9VsvoOSCI1"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273256e0f17b4849cace32b47da",
                            "width": 640
                        },
                        "id": "7LnDKGTwMoLv3XSgxOnj83"
                    },
                    {
                        "trackName": "Cabin Noise Focus",
                        "trackPreview": "https://p.scdn.co/mp3-preview/33aa5346df5dcaa2bcceb1093e9b7ecc65ee0a32?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3kxUcpFquT4ZdvJC1Nyu5q",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2JPKyBvknhpjBrZx65AmM9"
                                },
                                "href": "https://api.spotify.com/v1/artists/2JPKyBvknhpjBrZx65AmM9",
                                "id": "2JPKyBvknhpjBrZx65AmM9",
                                "name": "Crafting Audio",
                                "type": "artist",
                                "uri": "spotify:artist:2JPKyBvknhpjBrZx65AmM9"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d077b533717ad342ae092596",
                            "width": 640
                        },
                        "id": "3kxUcpFquT4ZdvJC1Nyu5q"
                    },
                    {
                        "trackName": "Noise & Sleep",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5cb54421444632d68666ef27f19ac37252bc1145?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2E691vZJRMdpiiHFjd5YUi",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2i0PdFbccjRzAc6ZZPwk5O"
                                },
                                "href": "https://api.spotify.com/v1/artists/2i0PdFbccjRzAc6ZZPwk5O",
                                "id": "2i0PdFbccjRzAc6ZZPwk5O",
                                "name": "All Night Chill Makers",
                                "type": "artist",
                                "uri": "spotify:artist:2i0PdFbccjRzAc6ZZPwk5O"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27305625bb3df65ea5efbb17679",
                            "width": 640
                        },
                        "id": "2E691vZJRMdpiiHFjd5YUi"
                    },
                    {
                        "trackName": "Gentle White Noise - Seamless",
                        "trackPreview": "https://p.scdn.co/mp3-preview/59f37a1222f0c6efceed13a70b72bfc8bdefbe1d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2COPUH8f4mlt1vzZG83zqU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4pxwvJBcr1c7RBwb1sZ2pH"
                                },
                                "href": "https://api.spotify.com/v1/artists/4pxwvJBcr1c7RBwb1sZ2pH",
                                "id": "4pxwvJBcr1c7RBwb1sZ2pH",
                                "name": "Natura Ferox",
                                "type": "artist",
                                "uri": "spotify:artist:4pxwvJBcr1c7RBwb1sZ2pH"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273f863754d410abe34af3a14a2",
                            "width": 640
                        },
                        "id": "2COPUH8f4mlt1vzZG83zqU"
                    },
                    {
                        "trackName": "Ruido Profundo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4ab20f22ffacc235875fcc94f034e863bf16827b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0dZ1XVpB6DEVwCpk0kRNG4",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7IG0fEAR9mz2PBckWjAfS8"
                                },
                                "href": "https://api.spotify.com/v1/artists/7IG0fEAR9mz2PBckWjAfS8",
                                "id": "7IG0fEAR9mz2PBckWjAfS8",
                                "name": "Ardeon",
                                "type": "artist",
                                "uri": "spotify:artist:7IG0fEAR9mz2PBckWjAfS8"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2732fb0bd73192bd5095e22e863",
                            "width": 640
                        },
                        "id": "0dZ1XVpB6DEVwCpk0kRNG4"
                    },
                    {
                        "trackName": "Deep & Dark - Seamless",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7923399cd45fe34c3e04e4cb272983c44d01d1e8?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2iZAAO5JEjMvClQ2W7VmSM",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3bw6drBJri5MxagDKwjRr7"
                                },
                                "href": "https://api.spotify.com/v1/artists/3bw6drBJri5MxagDKwjRr7",
                                "id": "3bw6drBJri5MxagDKwjRr7",
                                "name": "Mentatranque",
                                "type": "artist",
                                "uri": "spotify:artist:3bw6drBJri5MxagDKwjRr7"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d1a0ab1a2ac96862fbc4490d",
                            "width": 640
                        },
                        "id": "2iZAAO5JEjMvClQ2W7VmSM"
                    },
                    {
                        "trackName": "Settle Back",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1a963ff4995d6a6fda0aa2465eb123472fd7aa86?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4CKC1yQYAr64kRHH7AW85j",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4vtg4rO9JcAzlfOvV3xNB7"
                                },
                                "href": "https://api.spotify.com/v1/artists/4vtg4rO9JcAzlfOvV3xNB7",
                                "id": "4vtg4rO9JcAzlfOvV3xNB7",
                                "name": "Fall Asleep Machine",
                                "type": "artist",
                                "uri": "spotify:artist:4vtg4rO9JcAzlfOvV3xNB7"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a258874586f2782c3cafbc12",
                            "width": 640
                        },
                        "id": "4CKC1yQYAr64kRHH7AW85j"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Calma",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f000000035ffc36370c0825c6114bd466",
                "id": "37i9dQZF1DWY5LGZYBBHHz",
                "tracks": [
                    {
                        "trackName": "Gone",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a4dbccc45db39bb971d6ef883424cddadd7be95f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:331iLszrgVOeYNl2KKn12j",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2bqAlaRiT91dCQ7KMGnP8i"
                                },
                                "href": "https://api.spotify.com/v1/artists/2bqAlaRiT91dCQ7KMGnP8i",
                                "id": "2bqAlaRiT91dCQ7KMGnP8i",
                                "name": "Gavin Luke",
                                "type": "artist",
                                "uri": "spotify:artist:2bqAlaRiT91dCQ7KMGnP8i"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273caa06907b553c465fdaa63ae",
                            "width": 640
                        },
                        "id": "331iLszrgVOeYNl2KKn12j"
                    },
                    {
                        "trackName": "The Edge of Love",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c70ca1ffda0b1691679654286c639aec838dce3b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5awyHvXpb5txqlRuqUiHAl",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6uyCGuIi7ItiVD9zVFaa4s"
                                },
                                "href": "https://api.spotify.com/v1/artists/6uyCGuIi7ItiVD9zVFaa4s",
                                "id": "6uyCGuIi7ItiVD9zVFaa4s",
                                "name": "Dawn Huntley",
                                "type": "artist",
                                "uri": "spotify:artist:6uyCGuIi7ItiVD9zVFaa4s"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734181a79fd672ed7e50f05962",
                            "width": 640
                        },
                        "id": "5awyHvXpb5txqlRuqUiHAl"
                    },
                    {
                        "trackName": "Harvesting",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5d0b468cada547c6859c21fbd7e3d63b15e4fc2c?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:42io3dxycksUzxSqysSQJR",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4kz76xioOGVZ11SWiz64WL"
                                },
                                "href": "https://api.spotify.com/v1/artists/4kz76xioOGVZ11SWiz64WL",
                                "id": "4kz76xioOGVZ11SWiz64WL",
                                "name": "Minos Gold",
                                "type": "artist",
                                "uri": "spotify:artist:4kz76xioOGVZ11SWiz64WL"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2738505f6018d6eb5ae1b439f99",
                            "width": 640
                        },
                        "id": "42io3dxycksUzxSqysSQJR"
                    },
                    {
                        "trackName": "Spring",
                        "trackPreview": "https://p.scdn.co/mp3-preview/39d0457c0a028ca09112d02f979833e9818f4a1f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1TV7QxbgPTFIZJHvu8DkeY",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/66wCtsoRnWiSmoHSvXPK5m"
                                },
                                "href": "https://api.spotify.com/v1/artists/66wCtsoRnWiSmoHSvXPK5m",
                                "id": "66wCtsoRnWiSmoHSvXPK5m",
                                "name": "Hans Wolfgang Ziegler",
                                "type": "artist",
                                "uri": "spotify:artist:66wCtsoRnWiSmoHSvXPK5m"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27375e9eb04bcccd34dd2d73b5e",
                            "width": 640
                        },
                        "id": "1TV7QxbgPTFIZJHvu8DkeY"
                    },
                    {
                        "trackName": "Schwebend",
                        "trackPreview": "https://p.scdn.co/mp3-preview/10d917264f306f67ab0c3fb571ea51f321fd7e26?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:775dmuIRQojrplsns8VKen",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2ocNI6hLYU6rqq6TT4YzNY"
                                },
                                "href": "https://api.spotify.com/v1/artists/2ocNI6hLYU6rqq6TT4YzNY",
                                "id": "2ocNI6hLYU6rqq6TT4YzNY",
                                "name": "Phillipp Vogler",
                                "type": "artist",
                                "uri": "spotify:artist:2ocNI6hLYU6rqq6TT4YzNY"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27322261bd2fea35a8b7a3fb2e0",
                            "width": 640
                        },
                        "id": "775dmuIRQojrplsns8VKen"
                    },
                    {
                        "trackName": "Nefelibata",
                        "trackPreview": "https://p.scdn.co/mp3-preview/19402500894239b4d553de7645dc95c6064b756d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:07MRGolhqppoqEWDV5aZhJ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/395oAJMtpPY7ovJ9GbFkGQ"
                                },
                                "href": "https://api.spotify.com/v1/artists/395oAJMtpPY7ovJ9GbFkGQ",
                                "id": "395oAJMtpPY7ovJ9GbFkGQ",
                                "name": "Jeanelle Bolduc",
                                "type": "artist",
                                "uri": "spotify:artist:395oAJMtpPY7ovJ9GbFkGQ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731b8b8c7b82691520f5d45b06",
                            "width": 640
                        },
                        "id": "07MRGolhqppoqEWDV5aZhJ"
                    },
                    {
                        "trackName": "At Dawn",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a9c3adb35b4ac952f9fc5856921b760a42bec888?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6sSFbKl9oQ7ToYxBeTQZvw",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6LwcYWG1molG0KW2xwnPd2"
                                },
                                "href": "https://api.spotify.com/v1/artists/6LwcYWG1molG0KW2xwnPd2",
                                "id": "6LwcYWG1molG0KW2xwnPd2",
                                "name": "Ever So Blue",
                                "type": "artist",
                                "uri": "spotify:artist:6LwcYWG1molG0KW2xwnPd2"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2735db38dfd32e2c5946390090a",
                            "width": 640
                        },
                        "id": "6sSFbKl9oQ7ToYxBeTQZvw"
                    },
                    {
                        "trackName": "Lyrebird",
                        "trackPreview": "https://p.scdn.co/mp3-preview/11894f4ec7950d620f3e5e8259ce432bff1a4081?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:72mDETn3Ba8yVewAcqnlqQ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2PeXm2l3nGWuNKDr7ATimr"
                                },
                                "href": "https://api.spotify.com/v1/artists/2PeXm2l3nGWuNKDr7ATimr",
                                "id": "2PeXm2l3nGWuNKDr7ATimr",
                                "name": "Keira Conlon",
                                "type": "artist",
                                "uri": "spotify:artist:2PeXm2l3nGWuNKDr7ATimr"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273417bb0233743d1ebea9f1958",
                            "width": 640
                        },
                        "id": "72mDETn3Ba8yVewAcqnlqQ"
                    },
                    {
                        "trackName": "Sarek",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5cbdd120c2f6ff28a402c4ff053364a08086156f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7tN9gRPc8eYR9mS5cQsV0M",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2ofMsV0f4ziG96f4ZKPzGr"
                                },
                                "href": "https://api.spotify.com/v1/artists/2ofMsV0f4ziG96f4ZKPzGr",
                                "id": "2ofMsV0f4ziG96f4ZKPzGr",
                                "name": "Laponia",
                                "type": "artist",
                                "uri": "spotify:artist:2ofMsV0f4ziG96f4ZKPzGr"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273246c39d49db2bf773a218bae",
                            "width": 640
                        },
                        "id": "7tN9gRPc8eYR9mS5cQsV0M"
                    },
                    {
                        "trackName": "Toužebný",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2ceb8b9b70774ab9b88e45442b265826f813ab53?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3I36NaLQR6zCn5Y2stUg9H",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1qalElRe3QyFhucbpFX9On"
                                },
                                "href": "https://api.spotify.com/v1/artists/1qalElRe3QyFhucbpFX9On",
                                "id": "1qalElRe3QyFhucbpFX9On",
                                "name": "Jan Kubec",
                                "type": "artist",
                                "uri": "spotify:artist:1qalElRe3QyFhucbpFX9On"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e0a8869ab191f8bddebcf4b2",
                            "width": 640
                        },
                        "id": "3I36NaLQR6zCn5Y2stUg9H"
                    },
                    {
                        "trackName": "follow me home",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a69efc84ee38650aa9c90b48ec2431d3fd1176d2?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7k539VUTniwBWMYFOgrAyf",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5bwWMpXFa16RzsnAeaxttA"
                                },
                                "href": "https://api.spotify.com/v1/artists/5bwWMpXFa16RzsnAeaxttA",
                                "id": "5bwWMpXFa16RzsnAeaxttA",
                                "name": "Jose Garcia",
                                "type": "artist",
                                "uri": "spotify:artist:5bwWMpXFa16RzsnAeaxttA"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731b662082680e95799a4788e5",
                            "width": 640
                        },
                        "id": "7k539VUTniwBWMYFOgrAyf"
                    },
                    {
                        "trackName": "Weightless Part 1",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9e4c28ae4b97d725501777f3f18bb5c74c9ab2ab?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2UZZtkoLOg7IHxeTAdPFvd",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3nZ3ed6p4CKc1McTLypr6H"
                                },
                                "href": "https://api.spotify.com/v1/artists/3nZ3ed6p4CKc1McTLypr6H",
                                "id": "3nZ3ed6p4CKc1McTLypr6H",
                                "name": "Marconi Union",
                                "type": "artist",
                                "uri": "spotify:artist:3nZ3ed6p4CKc1McTLypr6H"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2732d60677a02438991cc6b25ea",
                            "width": 640
                        },
                        "id": "2UZZtkoLOg7IHxeTAdPFvd"
                    },
                    {
                        "trackName": "Pas de deux",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b1af0d8b091039eb126a447f59a818cb31d7d124?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:2LNOrSjCSR1Ap7QOZLbJnd",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5mo25h1sQIVjZ4gIgIK2Lm"
                                },
                                "href": "https://api.spotify.com/v1/artists/5mo25h1sQIVjZ4gIgIK2Lm",
                                "id": "5mo25h1sQIVjZ4gIgIK2Lm",
                                "name": "Lucas Vendrai",
                                "type": "artist",
                                "uri": "spotify:artist:5mo25h1sQIVjZ4gIgIK2Lm"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2738f8902f873b2d979a0c66f0c",
                            "width": 640
                        },
                        "id": "2LNOrSjCSR1Ap7QOZLbJnd"
                    },
                    {
                        "trackName": "Unrequited",
                        "trackPreview": "https://p.scdn.co/mp3-preview/57775d9c887d7c4578296d76c8e5ad8ee108ef9e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:07tUhErHb7K8bdOcwyvbuK",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0TQaVw4oiRmOcP5MIIZ9wF"
                                },
                                "href": "https://api.spotify.com/v1/artists/0TQaVw4oiRmOcP5MIIZ9wF",
                                "id": "0TQaVw4oiRmOcP5MIIZ9wF",
                                "name": "Josef Passagio",
                                "type": "artist",
                                "uri": "spotify:artist:0TQaVw4oiRmOcP5MIIZ9wF"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27330bc8cd51d104da630003c98",
                            "width": 640
                        },
                        "id": "07tUhErHb7K8bdOcwyvbuK"
                    },
                    {
                        "trackName": "Evening Message",
                        "trackPreview": "https://p.scdn.co/mp3-preview/d9712f27192a86bd107876ddbf72fa7adba94680?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1KvZBw7bPWws38At1IVRbU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7ELVHaQs7k7LmWozyBJXzM"
                                },
                                "href": "https://api.spotify.com/v1/artists/7ELVHaQs7k7LmWozyBJXzM",
                                "id": "7ELVHaQs7k7LmWozyBJXzM",
                                "name": "Charlie Key",
                                "type": "artist",
                                "uri": "spotify:artist:7ELVHaQs7k7LmWozyBJXzM"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273fe3a1e11c1b1dcea803ad5db",
                            "width": 640
                        },
                        "id": "1KvZBw7bPWws38At1IVRbU"
                    },
                    {
                        "trackName": "Crépuscule",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7c6346c86131a6b28ce5b07066eaa1e2ffce8b85?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4FE9jhuatcOZZYoHdBDN8T",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5W0bcXKJ4xnO3q0ViObq0N"
                                },
                                "href": "https://api.spotify.com/v1/artists/5W0bcXKJ4xnO3q0ViObq0N",
                                "id": "5W0bcXKJ4xnO3q0ViObq0N",
                                "name": "Matilda Charpie",
                                "type": "artist",
                                "uri": "spotify:artist:5W0bcXKJ4xnO3q0ViObq0N"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273aeda8f908d0bf619ca419368",
                            "width": 640
                        },
                        "id": "4FE9jhuatcOZZYoHdBDN8T"
                    },
                    {
                        "trackName": "Chiudete Gli Occhi",
                        "trackPreview": "https://p.scdn.co/mp3-preview/815f86f69160c39619cf92404458942e01830111?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1pFCkU2BQHr0mJIj05KXSD",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/78cI0FrhBVpr9Dq0fN5BZw"
                                },
                                "href": "https://api.spotify.com/v1/artists/78cI0FrhBVpr9Dq0fN5BZw",
                                "id": "78cI0FrhBVpr9Dq0fN5BZw",
                                "name": "Artemio Li Fonti",
                                "type": "artist",
                                "uri": "spotify:artist:78cI0FrhBVpr9Dq0fN5BZw"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273db22817cf9abcd95bca58df9",
                            "width": 640
                        },
                        "id": "1pFCkU2BQHr0mJIj05KXSD"
                    },
                    {
                        "trackName": "In Bloom",
                        "trackPreview": "https://p.scdn.co/mp3-preview/1af9babf27153e5fd5b7ec8f85aadd72b3308e85?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:60nhoUdtsUq4FOwts7B2bM",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0ojIbBfm8uH68CpwcwoxGJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/0ojIbBfm8uH68CpwcwoxGJ",
                                "id": "0ojIbBfm8uH68CpwcwoxGJ",
                                "name": "Zoé de Vera",
                                "type": "artist",
                                "uri": "spotify:artist:0ojIbBfm8uH68CpwcwoxGJ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2737c57f40e4cff09c2ea095f67",
                            "width": 640
                        },
                        "id": "60nhoUdtsUq4FOwts7B2bM"
                    },
                    {
                        "trackName": "Floriscope",
                        "trackPreview": "https://p.scdn.co/mp3-preview/11077e45bf29a5ac5d39bf334ea1048bd9e9e380?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:45HRj3YdVgAOLbkSRiJ4l3",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0G4MXHhzyHUB9XexNNg2Sw"
                                },
                                "href": "https://api.spotify.com/v1/artists/0G4MXHhzyHUB9XexNNg2Sw",
                                "id": "0G4MXHhzyHUB9XexNNg2Sw",
                                "name": "Floriscope",
                                "type": "artist",
                                "uri": "spotify:artist:0G4MXHhzyHUB9XexNNg2Sw"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c4b029b15a3ff0d05d0f2f1d",
                            "width": 640
                        },
                        "id": "45HRj3YdVgAOLbkSRiJ4l3"
                    },
                    {
                        "trackName": "Paper Thin Reality",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c676e1675bd4729d206f8f6afac3aa5da6642787?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0r0wpbCoNi9ixLK7jQBL7J",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2P6DMnuFgtU6UWuxTcF5nU"
                                },
                                "href": "https://api.spotify.com/v1/artists/2P6DMnuFgtU6UWuxTcF5nU",
                                "id": "2P6DMnuFgtU6UWuxTcF5nU",
                                "name": "Ave Air",
                                "type": "artist",
                                "uri": "spotify:artist:2P6DMnuFgtU6UWuxTcF5nU"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273df629801de505ea8035e086e",
                            "width": 640
                        },
                        "id": "0r0wpbCoNi9ixLK7jQBL7J"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Antiestrés",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f000000033d0fbd4cbde03f74693ce4cc",
                "id": "37i9dQZF1DX39FzqwAhZEK",
                "tracks": [
                    {
                        "trackName": "Abrazo Sereno",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ece5af7741a6e9f1e5ca06b9391cff2517dbf867?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:24SPAIgNceYbCmdrowgkRK",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4d9BQaG3cZzT7KpDU7hj17"
                                },
                                "href": "https://api.spotify.com/v1/artists/4d9BQaG3cZzT7KpDU7hj17",
                                "id": "4d9BQaG3cZzT7KpDU7hj17",
                                "name": "Miravaldini",
                                "type": "artist",
                                "uri": "spotify:artist:4d9BQaG3cZzT7KpDU7hj17"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27380e6b1a41875063c7cad9682",
                            "width": 640
                        },
                        "id": "24SPAIgNceYbCmdrowgkRK"
                    },
                    {
                        "trackName": "Lindo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/91833625efd8ec5339885928e5c36ba822aa9e6c?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5mQiIVDbSB9kps6DDU9wZN",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01xttXNtYB50iJNkglJgXt"
                                },
                                "href": "https://api.spotify.com/v1/artists/01xttXNtYB50iJNkglJgXt",
                                "id": "01xttXNtYB50iJNkglJgXt",
                                "name": "Nicoló Lorenzo",
                                "type": "artist",
                                "uri": "spotify:artist:01xttXNtYB50iJNkglJgXt"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c01a7600bd148cd5b06d908d",
                            "width": 640
                        },
                        "id": "5mQiIVDbSB9kps6DDU9wZN"
                    },
                    {
                        "trackName": "Sclavia",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b595d47089d96d81ef55977a815d2af7cbdb0bf8?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1EWbhAgdQNwYau5DvgdEtW",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/67VSC1OWyqo4z4X9dOTYkZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/67VSC1OWyqo4z4X9dOTYkZ",
                                "id": "67VSC1OWyqo4z4X9dOTYkZ",
                                "name": "Zooids",
                                "type": "artist",
                                "uri": "spotify:artist:67VSC1OWyqo4z4X9dOTYkZ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273aefdac3508f2e26e08c4b442",
                            "width": 640
                        },
                        "id": "1EWbhAgdQNwYau5DvgdEtW"
                    },
                    {
                        "trackName": "Solmization - 528Hz",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e98e016483910df6b8523fafe6c2dd81a0cf8aed?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0PBeh1YEfaYyZEk0CvqZdl",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1yxN1A5zsJCnmAvXM41959"
                                },
                                "href": "https://api.spotify.com/v1/artists/1yxN1A5zsJCnmAvXM41959",
                                "id": "1yxN1A5zsJCnmAvXM41959",
                                "name": "Jonathan Dorjee",
                                "type": "artist",
                                "uri": "spotify:artist:1yxN1A5zsJCnmAvXM41959"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2733344c6372bff9e886c6c4ed3",
                            "width": 640
                        },
                        "id": "0PBeh1YEfaYyZEk0CvqZdl"
                    },
                    {
                        "trackName": "Connection",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8c3b284201953e551f9dc69a3b79e4c43f401248?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5BDIKKycvDRRpJGG76cg0n",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/49ouFefWiDJtR7J8fn7Zqk"
                                },
                                "href": "https://api.spotify.com/v1/artists/49ouFefWiDJtR7J8fn7Zqk",
                                "id": "49ouFefWiDJtR7J8fn7Zqk",
                                "name": "Benny Dawn",
                                "type": "artist",
                                "uri": "spotify:artist:49ouFefWiDJtR7J8fn7Zqk"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27396914bd13a8bfb8b66c4322f",
                            "width": 640
                        },
                        "id": "5BDIKKycvDRRpJGG76cg0n"
                    },
                    {
                        "trackName": "Quiet Awareness",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ca598784f0c44d05b6cf14ef71803f692e6a5d6d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:395VlKRtLopomEXtjYSDsz",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6xA4srnsCK7Br48BUr9dOZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/6xA4srnsCK7Br48BUr9dOZ",
                                "id": "6xA4srnsCK7Br48BUr9dOZ",
                                "name": "Yonah Stana",
                                "type": "artist",
                                "uri": "spotify:artist:6xA4srnsCK7Br48BUr9dOZ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27321e36b89bbba88d4b0737dfd",
                            "width": 640
                        },
                        "id": "395VlKRtLopomEXtjYSDsz"
                    },
                    {
                        "trackName": "Dysania",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f3e8a91af16e673ccdbdfbcf9199076c61a9245f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0DDAJ13i1P8PAG2uSmJxQA",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3TNlVudGOBeQObBQQIQUcu"
                                },
                                "href": "https://api.spotify.com/v1/artists/3TNlVudGOBeQObBQQIQUcu",
                                "id": "3TNlVudGOBeQObBQQIQUcu",
                                "name": "Merlin Loughty",
                                "type": "artist",
                                "uri": "spotify:artist:3TNlVudGOBeQObBQQIQUcu"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730c579aa26e4599ae373dbb5d",
                            "width": 640
                        },
                        "id": "0DDAJ13i1P8PAG2uSmJxQA"
                    },
                    {
                        "trackName": "milagro",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c48be639c94ec822f98f581d71e1303a6832e1c4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4RlPG34EWDZRfQpOFXIr5a",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0v5fZ2O6PA8HBHeiIALNx9"
                                },
                                "href": "https://api.spotify.com/v1/artists/0v5fZ2O6PA8HBHeiIALNx9",
                                "id": "0v5fZ2O6PA8HBHeiIALNx9",
                                "name": "Ezechiel Almonte",
                                "type": "artist",
                                "uri": "spotify:artist:0v5fZ2O6PA8HBHeiIALNx9"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2733556e92e7c83deab51764548",
                            "width": 640
                        },
                        "id": "4RlPG34EWDZRfQpOFXIr5a"
                    },
                    {
                        "trackName": "Spectral Vibrations",
                        "trackPreview": "https://p.scdn.co/mp3-preview/559c621fa7091cb527e71352f241cd5728f179c7?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:364Yxnly3Q1XvxWZRwFtS1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1S2SOdkafLlGG0LrdubJz8"
                                },
                                "href": "https://api.spotify.com/v1/artists/1S2SOdkafLlGG0LrdubJz8",
                                "id": "1S2SOdkafLlGG0LrdubJz8",
                                "name": "Paulo May",
                                "type": "artist",
                                "uri": "spotify:artist:1S2SOdkafLlGG0LrdubJz8"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2735e4f2f0afb4ba3a03b8b8232",
                            "width": 640
                        },
                        "id": "364Yxnly3Q1XvxWZRwFtS1"
                    },
                    {
                        "trackName": "Tomorrow",
                        "trackPreview": "https://p.scdn.co/mp3-preview/6d57525dee7a01188299c26666a9a1e1ce287ffb?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0eoulivlbUiUsqDfj4axvM",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2LQloGA6q2wNTNovie8OpO"
                                },
                                "href": "https://api.spotify.com/v1/artists/2LQloGA6q2wNTNovie8OpO",
                                "id": "2LQloGA6q2wNTNovie8OpO",
                                "name": "Lior Freudenthal",
                                "type": "artist",
                                "uri": "spotify:artist:2LQloGA6q2wNTNovie8OpO"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2739e26bdcc9aa5cac44930ace3",
                            "width": 640
                        },
                        "id": "0eoulivlbUiUsqDfj4axvM"
                    },
                    {
                        "trackName": "Last Light",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a8f71f11761335158a10784a28d4ea943a70bb11?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5Z6Xn3H7uoleoSAQZcWCGb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7tQfGq1cmYQtZwNKs6Cq8b"
                                },
                                "href": "https://api.spotify.com/v1/artists/7tQfGq1cmYQtZwNKs6Cq8b",
                                "id": "7tQfGq1cmYQtZwNKs6Cq8b",
                                "name": "Anders Schill Paulsen",
                                "type": "artist",
                                "uri": "spotify:artist:7tQfGq1cmYQtZwNKs6Cq8b"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273aa1ac8b8fd7bbe047ba0ce71",
                            "width": 640
                        },
                        "id": "5Z6Xn3H7uoleoSAQZcWCGb"
                    },
                    {
                        "trackName": "Unification",
                        "trackPreview": "https://p.scdn.co/mp3-preview/ad97824f833ebba9cdc796306fafb4a498e31d44?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5dUtiQaiCzaagfh67mBJdp",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0JIVfIfdmw45EoZuIWSZqa"
                                },
                                "href": "https://api.spotify.com/v1/artists/0JIVfIfdmw45EoZuIWSZqa",
                                "id": "0JIVfIfdmw45EoZuIWSZqa",
                                "name": "Sleepy Sine",
                                "type": "artist",
                                "uri": "spotify:artist:0JIVfIfdmw45EoZuIWSZqa"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273cd6411ac34371c8ab68b40a5",
                            "width": 640
                        },
                        "id": "5dUtiQaiCzaagfh67mBJdp"
                    },
                    {
                        "trackName": "I Stillhet",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0fccfc2ead07a7fe5a818dbf20bfd21bbbea38a4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6njvRx7CurDgY3G5TBdtkO",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7duj1Wl88dFeqsgmXdxoDW"
                                },
                                "href": "https://api.spotify.com/v1/artists/7duj1Wl88dFeqsgmXdxoDW",
                                "id": "7duj1Wl88dFeqsgmXdxoDW",
                                "name": "Mira Appelquist",
                                "type": "artist",
                                "uri": "spotify:artist:7duj1Wl88dFeqsgmXdxoDW"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730a6055573638e8446668e0f9",
                            "width": 640
                        },
                        "id": "6njvRx7CurDgY3G5TBdtkO"
                    },
                    {
                        "trackName": "Neblinoso",
                        "trackPreview": "https://p.scdn.co/mp3-preview/7b32af99c32d3c88d271336417b1bc0e5bcb7ef7?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6uZF7xC32ewhpsm36IaM5T",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/68NVLorVbyDWrMwmGpwyGP"
                                },
                                "href": "https://api.spotify.com/v1/artists/68NVLorVbyDWrMwmGpwyGP",
                                "id": "68NVLorVbyDWrMwmGpwyGP",
                                "name": "Cameron Sinosa",
                                "type": "artist",
                                "uri": "spotify:artist:68NVLorVbyDWrMwmGpwyGP"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731f6c146de2f70f7c18a54dc0",
                            "width": 640
                        },
                        "id": "6uZF7xC32ewhpsm36IaM5T"
                    },
                    {
                        "trackName": "Esoteric",
                        "trackPreview": "https://p.scdn.co/mp3-preview/3a810e581aaa49220af23aa8abe7975eaf6f2c11?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4vqWzfK3IIE0HwEbAtcUGk",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5wGpeSaToESKYtSW5Is674"
                                },
                                "href": "https://api.spotify.com/v1/artists/5wGpeSaToESKYtSW5Is674",
                                "id": "5wGpeSaToESKYtSW5Is674",
                                "name": "Sirozza",
                                "type": "artist",
                                "uri": "spotify:artist:5wGpeSaToESKYtSW5Is674"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b6bb0c1b500c91d64c656e27",
                            "width": 640
                        },
                        "id": "4vqWzfK3IIE0HwEbAtcUGk"
                    },
                    {
                        "trackName": "Sandhya",
                        "trackPreview": "https://p.scdn.co/mp3-preview/73f2b49d3fb67d95e3563de54cc3849ecfa6993c?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0oWESCZ7b4nD5TGa41pUPd",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/22nMXe6y9TxPBF0ebouNPy"
                                },
                                "href": "https://api.spotify.com/v1/artists/22nMXe6y9TxPBF0ebouNPy",
                                "id": "22nMXe6y9TxPBF0ebouNPy",
                                "name": "Dhriti Tiwari",
                                "type": "artist",
                                "uri": "spotify:artist:22nMXe6y9TxPBF0ebouNPy"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731c8939e55373b7d9a3e0f4fe",
                            "width": 640
                        },
                        "id": "0oWESCZ7b4nD5TGa41pUPd"
                    },
                    {
                        "trackName": "Unavene",
                        "trackPreview": "https://p.scdn.co/mp3-preview/0d7460200a24092081b555601a75104030dc5614?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4dZYpUveESOpInSlQLCXVQ",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7uawp9f3qhlML7nNn4vB4B"
                                },
                                "href": "https://api.spotify.com/v1/artists/7uawp9f3qhlML7nNn4vB4B",
                                "id": "7uawp9f3qhlML7nNn4vB4B",
                                "name": "Nova Kral",
                                "type": "artist",
                                "uri": "spotify:artist:7uawp9f3qhlML7nNn4vB4B"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d8c799b9de490680d9c3adaf",
                            "width": 640
                        },
                        "id": "4dZYpUveESOpInSlQLCXVQ"
                    },
                    {
                        "trackName": "Bland Minnen",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2cd5b300bf9242dd0641f1987ffc2ad08b5387c5?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1GPtXZ0BuMsaURDQQxQIR1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6YkAIhgTo3tAwl6LufTd5G"
                                },
                                "href": "https://api.spotify.com/v1/artists/6YkAIhgTo3tAwl6LufTd5G",
                                "id": "6YkAIhgTo3tAwl6LufTd5G",
                                "name": "Wenicia Lindh",
                                "type": "artist",
                                "uri": "spotify:artist:6YkAIhgTo3tAwl6LufTd5G"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27348106ecd65e4e93c2c3aec61",
                            "width": 640
                        },
                        "id": "1GPtXZ0BuMsaURDQQxQIR1"
                    },
                    {
                        "trackName": "Malox",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2e0300c6b3b785f5e393af354ca1e03b2df23674?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0faN9ArILphMbOj9v2qFfy",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6jddJe2ccbe7PUUo6QNy7K"
                                },
                                "href": "https://api.spotify.com/v1/artists/6jddJe2ccbe7PUUo6QNy7K",
                                "id": "6jddJe2ccbe7PUUo6QNy7K",
                                "name": "Dariela Tramma",
                                "type": "artist",
                                "uri": "spotify:artist:6jddJe2ccbe7PUUo6QNy7K"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27368439e0f1c973b009a64412b",
                            "width": 640
                        },
                        "id": "0faN9ArILphMbOj9v2qFfy"
                    },
                    {
                        "trackName": "Heavy Cloud",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c05685cee028ddcf2220ab4fee61a8985f613bf3?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3PnhtonoNabJjbuTxFqT2Z",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3YG7KJgAF3q7udoynLzWXU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3YG7KJgAF3q7udoynLzWXU",
                                "id": "3YG7KJgAF3q7udoynLzWXU",
                                "name": "Warren Blues",
                                "type": "artist",
                                "uri": "spotify:artist:3YG7KJgAF3q7udoynLzWXU"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b5c15c42886ebc9d79ebb9cd",
                            "width": 640
                        },
                        "id": "3PnhtonoNabJjbuTxFqT2Z"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Sonidos del Mar",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f0000000365a50634a67fb95adffa4897",
                "id": "37i9dQZF1DX6EE01mw9tEh",
                "tracks": [
                    {
                        "trackName": "Dreaming with Waves",
                        "trackPreview": "https://p.scdn.co/mp3-preview/6d2cc6db08cff08e35d04f3920a9f04540cb0038?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:50AAtRY8C26WF5zVjvXTNT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/02ucRkp1Tm4yA5ZZwfG184"
                                },
                                "href": "https://api.spotify.com/v1/artists/02ucRkp1Tm4yA5ZZwfG184",
                                "id": "02ucRkp1Tm4yA5ZZwfG184",
                                "name": "Waveseekers",
                                "type": "artist",
                                "uri": "spotify:artist:02ucRkp1Tm4yA5ZZwfG184"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27319169716239b8094cbb538f4",
                            "width": 640
                        },
                        "id": "50AAtRY8C26WF5zVjvXTNT"
                    },
                    {
                        "trackName": "Majestic Ocean",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b617106320872c3d711965f5dc40dac054462d67?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1ocx24cg3X119MilyogyCd",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5u0dE6Vw509dFP0YK5y8lc"
                                },
                                "href": "https://api.spotify.com/v1/artists/5u0dE6Vw509dFP0YK5y8lc",
                                "id": "5u0dE6Vw509dFP0YK5y8lc",
                                "name": "Epic Soundscapes",
                                "type": "artist",
                                "uri": "spotify:artist:5u0dE6Vw509dFP0YK5y8lc"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273d3cddf04c7b87ddb29c4fd98",
                            "width": 640
                        },
                        "id": "1ocx24cg3X119MilyogyCd"
                    },
                    {
                        "trackName": "Chill Waves & Wind in Leaves",
                        "trackPreview": "https://p.scdn.co/mp3-preview/3f232585e3ef7c5458f47a99c5fd147c17e577c3?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:37TdJ5EWlM9Jfw8IqiUHcm",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3nGR9SAynFBCiRqx1NiU67"
                                },
                                "href": "https://api.spotify.com/v1/artists/3nGR9SAynFBCiRqx1NiU67",
                                "id": "3nGR9SAynFBCiRqx1NiU67",
                                "name": "Pinetree Way",
                                "type": "artist",
                                "uri": "spotify:artist:3nGR9SAynFBCiRqx1NiU67"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2733bd6c1085b15ab9b83de0e88",
                            "width": 640
                        },
                        "id": "37TdJ5EWlM9Jfw8IqiUHcm"
                    },
                    {
                        "trackName": "Beach Calmness",
                        "trackPreview": "https://p.scdn.co/mp3-preview/18fedd75a318bc431fbc0b0c032ab8125a5be55f?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1PZoHdDM71mzOFW1T6H03y",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7qj3R7pI5z0H1AxH5X4oK8"
                                },
                                "href": "https://api.spotify.com/v1/artists/7qj3R7pI5z0H1AxH5X4oK8",
                                "id": "7qj3R7pI5z0H1AxH5X4oK8",
                                "name": "Streaming Waves",
                                "type": "artist",
                                "uri": "spotify:artist:7qj3R7pI5z0H1AxH5X4oK8"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273229cfba9da0701c6a77ae66e",
                            "width": 640
                        },
                        "id": "1PZoHdDM71mzOFW1T6H03y"
                    },
                    {
                        "trackName": "Crashing Ocean Waves For Sleeping",
                        "trackPreview": "https://p.scdn.co/mp3-preview/90c68611c5548459b86ed827b5839e52c54ef153?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7k8qqfazhpxA9usBYGLVEv",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6EpIxFCF1KaWrjrQ7rVzRK"
                                },
                                "href": "https://api.spotify.com/v1/artists/6EpIxFCF1KaWrjrQ7rVzRK",
                                "id": "6EpIxFCF1KaWrjrQ7rVzRK",
                                "name": "Wave Sounds For Babies (Sleep)",
                                "type": "artist",
                                "uri": "spotify:artist:6EpIxFCF1KaWrjrQ7rVzRK"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273cbbe98b392f01390a9544afe",
                            "width": 640
                        },
                        "id": "7k8qqfazhpxA9usBYGLVEv"
                    },
                    {
                        "trackName": "2AM Waves",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f077c043d2f4912d424062fe483563bedaf750f9?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5IQ6pLdPDHrfL4UPE8gJ39",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/02EkiP3hYgkSISBAS0nfjG"
                                },
                                "href": "https://api.spotify.com/v1/artists/02EkiP3hYgkSISBAS0nfjG",
                                "id": "02EkiP3hYgkSISBAS0nfjG",
                                "name": "The Nature Soundscapes",
                                "type": "artist",
                                "uri": "spotify:artist:02EkiP3hYgkSISBAS0nfjG"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273fb9a8a32b025c06e4c7e4e9c",
                            "width": 640
                        },
                        "id": "5IQ6pLdPDHrfL4UPE8gJ39"
                    },
                    {
                        "trackName": "Pacific Night Waves",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a96cd1988c4bead727b2fcb936c78b1ca9f510a4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1Xuoj9zqH1PeGMAWKLPrSH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/249TyuYTmZtXB1yC90nGGx"
                                },
                                "href": "https://api.spotify.com/v1/artists/249TyuYTmZtXB1yC90nGGx",
                                "id": "249TyuYTmZtXB1yC90nGGx",
                                "name": "Coastal Sounds",
                                "type": "artist",
                                "uri": "spotify:artist:249TyuYTmZtXB1yC90nGGx"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c0bcb04da33d36fe9e45c927",
                            "width": 640
                        },
                        "id": "1Xuoj9zqH1PeGMAWKLPrSH"
                    },
                    {
                        "trackName": "Healing Ocean Sounds",
                        "trackPreview": "https://p.scdn.co/mp3-preview/08aa80c4421ba08d4349fcebc6faa760a50efb6d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4g2u0nitKXjGmMlHEZ3mjr",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6gKlW4QncpQHg6n6eMUNxF"
                                },
                                "href": "https://api.spotify.com/v1/artists/6gKlW4QncpQHg6n6eMUNxF",
                                "id": "6gKlW4QncpQHg6n6eMUNxF",
                                "name": "In The Ocean (Sound FX)",
                                "type": "artist",
                                "uri": "spotify:artist:6gKlW4QncpQHg6n6eMUNxF"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ed0eea0320153cd08a146d62",
                            "width": 640
                        },
                        "id": "4g2u0nitKXjGmMlHEZ3mjr"
                    },
                    {
                        "trackName": "Waves Loopable",
                        "trackPreview": "https://p.scdn.co/mp3-preview/bbc9025aeeb88bce9c3fbc93194942ae0c0cbd71?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6ZaZGu92O4dOVFtSbF7FrU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2ispra7MLmLF7ZqmyaKwQp"
                                },
                                "href": "https://api.spotify.com/v1/artists/2ispra7MLmLF7ZqmyaKwQp",
                                "id": "2ispra7MLmLF7ZqmyaKwQp",
                                "name": "Sleep Tight",
                                "type": "artist",
                                "uri": "spotify:artist:2ispra7MLmLF7ZqmyaKwQp"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a621db6109d854e63418ea46",
                            "width": 640
                        },
                        "id": "6ZaZGu92O4dOVFtSbF7FrU"
                    },
                    {
                        "trackName": "Guided by the Rocks and the Rolling Sea",
                        "trackPreview": "https://p.scdn.co/mp3-preview/3c67e09342a04cff9cabf90e86358629423f938b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4wgfLLN0iLPR9mypcRIEL7",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0YpEae2jdApqtfni7YBjEB"
                                },
                                "href": "https://api.spotify.com/v1/artists/0YpEae2jdApqtfni7YBjEB",
                                "id": "0YpEae2jdApqtfni7YBjEB",
                                "name": "Naturalis",
                                "type": "artist",
                                "uri": "spotify:artist:0YpEae2jdApqtfni7YBjEB"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27367788fbea15c6e96b9cce4d2",
                            "width": 640
                        },
                        "id": "4wgfLLN0iLPR9mypcRIEL7"
                    },
                    {
                        "trackName": "Coastal Wave Sounds",
                        "trackPreview": "https://p.scdn.co/mp3-preview/32234eef9f03761b1f985f93bdd1c97dae9a473c?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0rLSuRjl29iu5YaJ66Ns5J",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/55ztZzMC6D5RAwDu4rzgPB"
                                },
                                "href": "https://api.spotify.com/v1/artists/55ztZzMC6D5RAwDu4rzgPB",
                                "id": "55ztZzMC6D5RAwDu4rzgPB",
                                "name": "When Waves Cry",
                                "type": "artist",
                                "uri": "spotify:artist:55ztZzMC6D5RAwDu4rzgPB"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2737ec946f4308fbc86ec0959af",
                            "width": 640
                        },
                        "id": "0rLSuRjl29iu5YaJ66Ns5J"
                    },
                    {
                        "trackName": "オーシャンウェーブ",
                        "trackPreview": "https://p.scdn.co/mp3-preview/38f034bf87211d1dc5943132c42c638c9f605293?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4iWk0xghJ3A4RGqqv7GDKH",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1rKyBPdiPncHwvT1pcOlT4"
                                },
                                "href": "https://api.spotify.com/v1/artists/1rKyBPdiPncHwvT1pcOlT4",
                                "id": "1rKyBPdiPncHwvT1pcOlT4",
                                "name": "自然の波",
                                "type": "artist",
                                "uri": "spotify:artist:1rKyBPdiPncHwvT1pcOlT4"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273bab3c664adcdcfe787909e91",
                            "width": 640
                        },
                        "id": "4iWk0xghJ3A4RGqqv7GDKH"
                    },
                    {
                        "trackName": "Santa Monica Beach Waves",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c3e6160f6587c1d35c9d426d86e2a7b0e4591b15?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6tk4FeBQbOTJ2DT3VB509w",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5xS7pgxPJgT5afkIppVezB"
                                },
                                "href": "https://api.spotify.com/v1/artists/5xS7pgxPJgT5afkIppVezB",
                                "id": "5xS7pgxPJgT5afkIppVezB",
                                "name": "Pacific Ocean Wave Sounds",
                                "type": "artist",
                                "uri": "spotify:artist:5xS7pgxPJgT5afkIppVezB"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273bbb62159d9dcad1f9a74d7db",
                            "width": 640
                        },
                        "id": "6tk4FeBQbOTJ2DT3VB509w"
                    },
                    {
                        "trackName": "Windy Ocean Waves",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f6715d5b1a45dbe02c72ce505a8e85871cda8cb0?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6XEEsaEjxwQx4ulaTO1SnT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0WNzUSHn04Gmm07Okzc0YC"
                                },
                                "href": "https://api.spotify.com/v1/artists/0WNzUSHn04Gmm07Okzc0YC",
                                "id": "0WNzUSHn04Gmm07Okzc0YC",
                                "name": "Coast to Coast Recordings",
                                "type": "artist",
                                "uri": "spotify:artist:0WNzUSHn04Gmm07Okzc0YC"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27330916a4f872f63a22711b127",
                            "width": 640
                        },
                        "id": "6XEEsaEjxwQx4ulaTO1SnT"
                    },
                    {
                        "trackName": "Lakeside",
                        "trackPreview": "https://p.scdn.co/mp3-preview/97f1c968399a3790b0d556a8ada76ec7ca6220a8?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:61sxx44952Sk8QvxcXYBjL",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/03eX3RX46RbMeY7FA8xF99"
                                },
                                "href": "https://api.spotify.com/v1/artists/03eX3RX46RbMeY7FA8xF99",
                                "id": "03eX3RX46RbMeY7FA8xF99",
                                "name": "NatuREM",
                                "type": "artist",
                                "uri": "spotify:artist:03eX3RX46RbMeY7FA8xF99"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273580d0f6c7beedc9c09b57654",
                            "width": 640
                        },
                        "id": "61sxx44952Sk8QvxcXYBjL"
                    },
                    {
                        "trackName": "Dreamy Waters",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2b99ab55c4f85f9a18fe99c52a6aef45f39f636e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5PLGTus8xFBbBRAJikcgJD",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5EA4MDPkAtu1hrHhgM8tWK"
                                },
                                "href": "https://api.spotify.com/v1/artists/5EA4MDPkAtu1hrHhgM8tWK",
                                "id": "5EA4MDPkAtu1hrHhgM8tWK",
                                "name": "Lave",
                                "type": "artist",
                                "uri": "spotify:artist:5EA4MDPkAtu1hrHhgM8tWK"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273454adb2d205f30d22bd99451",
                            "width": 640
                        },
                        "id": "5PLGTus8xFBbBRAJikcgJD"
                    },
                    {
                        "trackName": "Summer Ocean Waves",
                        "trackPreview": "https://p.scdn.co/mp3-preview/15d1e439e307e6411f9b7de2d1f8f866974a2cdb?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6RfkQdyd9B1Q8SFNT6Wvwn",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/28IUEhtz4D8xy7OKMXMkyK"
                                },
                                "href": "https://api.spotify.com/v1/artists/28IUEhtz4D8xy7OKMXMkyK",
                                "id": "28IUEhtz4D8xy7OKMXMkyK",
                                "name": "Ocean Sounds FX",
                                "type": "artist",
                                "uri": "spotify:artist:28IUEhtz4D8xy7OKMXMkyK"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273fd9bdaff8cd81c795cf446e2",
                            "width": 640
                        },
                        "id": "6RfkQdyd9B1Q8SFNT6Wvwn"
                    },
                    {
                        "trackName": "Sleep On The Ocean",
                        "trackPreview": "https://p.scdn.co/mp3-preview/668409eea62b1461a6c6a6ca2013d9849703e379?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6gx1y86TaoNZPTXImnw1fX",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3GZncWDyd61QW6I6bYw4u8"
                                },
                                "href": "https://api.spotify.com/v1/artists/3GZncWDyd61QW6I6bYw4u8",
                                "id": "3GZncWDyd61QW6I6bYw4u8",
                                "name": "Rivulet",
                                "type": "artist",
                                "uri": "spotify:artist:3GZncWDyd61QW6I6bYw4u8"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2732597b09567ce87037a41818c",
                            "width": 640
                        },
                        "id": "6gx1y86TaoNZPTXImnw1fX"
                    },
                    {
                        "trackName": "Dreamscape Waves (Ocean)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/75032c834b815602f6c6ca07d892a4bb50ec609e?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7pjhDlAstOqIkH2QmnblvU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5LG3LsvrCVe6h2BVrcaqc1"
                                },
                                "href": "https://api.spotify.com/v1/artists/5LG3LsvrCVe6h2BVrcaqc1",
                                "id": "5LG3LsvrCVe6h2BVrcaqc1",
                                "name": "Shorenights",
                                "type": "artist",
                                "uri": "spotify:artist:5LG3LsvrCVe6h2BVrcaqc1"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27301f98327318e9de8784860ff",
                            "width": 640
                        },
                        "id": "7pjhDlAstOqIkH2QmnblvU"
                    },
                    {
                        "trackName": "Waves In The Morning Light",
                        "trackPreview": "https://p.scdn.co/mp3-preview/fb4ec6796013b9bd892137fb0016381835ffb0dc?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3OLmiKhYJzFhVR4HfzzS4G",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6vNQJeVv5muFsw3FdX0Dmp"
                                },
                                "href": "https://api.spotify.com/v1/artists/6vNQJeVv5muFsw3FdX0Dmp",
                                "id": "6vNQJeVv5muFsw3FdX0Dmp",
                                "name": "Wildlife Sound Recordings",
                                "type": "artist",
                                "uri": "spotify:artist:6vNQJeVv5muFsw3FdX0Dmp"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27374ff800f6d1ecf36020be49a",
                            "width": 640
                        },
                        "id": "3OLmiKhYJzFhVR4HfzzS4G"
                    }
                ]
            },
            {
                "type": "playlist",
                "name": "Today's Top Hits ",
                "owner": "Soul Life",
                "image": "https://i.scdn.co/image/ab67706f00000003ed82bd90f20d6e81eb26575f",
                "id": "37i9dQZF1DXcBWIGoYBM5M",
                "tracks": [
                    {
                        "trackName": "K-POP",
                        "trackPreview": "https://p.scdn.co/mp3-preview/011ff5d71b1fad87bc1f4bed5a1abab3e0500426?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5L3ecxQnQ9qTBmnLQiwf0C",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                                "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                                "name": "Travis Scott",
                                "type": "artist",
                                "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                                },
                                "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                                "id": "4q3ewBCX7sLwd24euuV69X",
                                "name": "Bad Bunny",
                                "type": "artist",
                                "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                                "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                                "name": "The Weeknd",
                                "type": "artist",
                                "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273893489768de0c42b4d217b82",
                            "width": 640
                        },
                        "id": "5L3ecxQnQ9qTBmnLQiwf0C"
                    },
                    {
                        "trackName": "Dance The Night (From Barbie The Album)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/acaea048f50a3b30ca24b348c84a6047373baabb?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1vYXt7VSjH9JIM5oRRo7vA",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we"
                                },
                                "href": "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
                                "id": "6M2wZ9GZgrQXHCFfjv46we",
                                "name": "Dua Lipa",
                                "type": "artist",
                                "uri": "spotify:artist:6M2wZ9GZgrQXHCFfjv46we"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2737dd3ba455ee3390cb55b0192",
                            "width": 640
                        },
                        "id": "1vYXt7VSjH9JIM5oRRo7vA"
                    },
                    {
                        "trackName": "vampire",
                        "trackPreview": null,
                        "uri": "spotify:track:3k79jB4aGmMDUQzEwa46Rz",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG"
                                },
                                "href": "https://api.spotify.com/v1/artists/1McMsnEElThX1knmY4oliG",
                                "id": "1McMsnEElThX1knmY4oliG",
                                "name": "Olivia Rodrigo",
                                "type": "artist",
                                "uri": "spotify:artist:1McMsnEElThX1knmY4oliG"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731e5e75dc1d878a0007cb6525",
                            "width": 640
                        },
                        "id": "3k79jB4aGmMDUQzEwa46Rz"
                    },
                    {
                        "trackName": "Popular (with Playboi Carti & Madonna) - Music from the HBO Original Series",
                        "trackPreview": null,
                        "uri": "spotify:track:6WzRpISELf3YglGAh7TXcG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                                "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                                "name": "The Weeknd",
                                "type": "artist",
                                "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/699OTQXzgjhIYAHMy9RyPD"
                                },
                                "href": "https://api.spotify.com/v1/artists/699OTQXzgjhIYAHMy9RyPD",
                                "id": "699OTQXzgjhIYAHMy9RyPD",
                                "name": "Playboi Carti",
                                "type": "artist",
                                "uri": "spotify:artist:699OTQXzgjhIYAHMy9RyPD"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6tbjWDEIzxoDsBA1FuhfPW"
                                },
                                "href": "https://api.spotify.com/v1/artists/6tbjWDEIzxoDsBA1FuhfPW",
                                "id": "6tbjWDEIzxoDsBA1FuhfPW",
                                "name": "Madonna",
                                "type": "artist",
                                "uri": "spotify:artist:6tbjWDEIzxoDsBA1FuhfPW"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2734c8f092adc59b4bf4212389d",
                            "width": 640
                        },
                        "id": "6WzRpISELf3YglGAh7TXcG"
                    },
                    {
                        "trackName": "Barbie World (with Aqua) [From Barbie The Album]",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f654928ccaa4e6a9fb09a6eb3f208383eccc12a9?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:741UUVE2kuITl0c6zuqqbO",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"
                                },
                                "href": "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
                                "id": "0hCNtLu0JehylgoiP8L4Gh",
                                "name": "Nicki Minaj",
                                "type": "artist",
                                "uri": "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3LZZPxNDGDFVSIPqf4JuEf"
                                },
                                "href": "https://api.spotify.com/v1/artists/3LZZPxNDGDFVSIPqf4JuEf",
                                "id": "3LZZPxNDGDFVSIPqf4JuEf",
                                "name": "Ice Spice",
                                "type": "artist",
                                "uri": "spotify:artist:3LZZPxNDGDFVSIPqf4JuEf"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6kBjAFKyd0he7LiA5GQ3Gz"
                                },
                                "href": "https://api.spotify.com/v1/artists/6kBjAFKyd0he7LiA5GQ3Gz",
                                "id": "6kBjAFKyd0he7LiA5GQ3Gz",
                                "name": "Aqua",
                                "type": "artist",
                                "uri": "spotify:artist:6kBjAFKyd0he7LiA5GQ3Gz"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2737e8f938c02fac3b564931116",
                            "width": 640
                        },
                        "id": "741UUVE2kuITl0c6zuqqbO"
                    },
                    {
                        "trackName": "Super Shy",
                        "trackPreview": "https://p.scdn.co/mp3-preview/dab062e2cc708a2680ce84953a3581c5a679a230?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:5sdQOyqq2IDhvmx2lHOpwd",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
                                },
                                "href": "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                                "id": "6HvZYsbFfjnjFrWF950C9d",
                                "name": "NewJeans",
                                "type": "artist",
                                "uri": "spotify:artist:6HvZYsbFfjnjFrWF950C9d"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2733d98a0ae7c78a3a9babaf8af",
                            "width": 640
                        },
                        "id": "5sdQOyqq2IDhvmx2lHOpwd"
                    },
                    {
                        "trackName": "Cruel Summer",
                        "trackPreview": null,
                        "uri": "spotify:track:1BxfuPKGuaTgP7aM0Bbdwr",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                                },
                                "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
                                "id": "06HL4z0CvFAxyc27GXpf02",
                                "name": "Taylor Swift",
                                "type": "artist",
                                "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
                            "width": 640
                        },
                        "id": "1BxfuPKGuaTgP7aM0Bbdwr"
                    },
                    {
                        "trackName": "LALA",
                        "trackPreview": "https://p.scdn.co/mp3-preview/42772b16b4e575d1b15b0ec7f94e335539390d2d?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7ABLbnD53cQK00mhcaOUVG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W"
                                },
                                "href": "https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
                                "id": "7iK8PXO48WeuP03g8YR51W",
                                "name": "Myke Towers",
                                "type": "artist",
                                "uri": "spotify:artist:7iK8PXO48WeuP03g8YR51W"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730656d5ce813ca3cc4b677e05",
                            "width": 640
                        },
                        "id": "7ABLbnD53cQK00mhcaOUVG"
                    },
                    {
                        "trackName": "What Was I Made For? [From The Motion Picture \"Barbie\"]",
                        "trackPreview": null,
                        "uri": "spotify:track:6wf7Yu7cxBSPrRlWeSeK0Q",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
                                },
                                "href": "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
                                "id": "6qqNVTkY8uBg9cP3Jd7DAH",
                                "name": "Billie Eilish",
                                "type": "artist",
                                "uri": "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ed317ec13d3de9e01fb99c9e",
                            "width": 640
                        },
                        "id": "6wf7Yu7cxBSPrRlWeSeK0Q"
                    },
                    {
                        "trackName": "Seven (feat. Latto) (Explicit Ver.)",
                        "trackPreview": "https://p.scdn.co/mp3-preview/2f2b3f4eaf405ac3ba9792456cec93ae88942cfc?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7x9aauaA9cu6tyfpHnqDLo",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6HaGTQPmzraVmaVxvz6EUc"
                                },
                                "href": "https://api.spotify.com/v1/artists/6HaGTQPmzraVmaVxvz6EUc",
                                "id": "6HaGTQPmzraVmaVxvz6EUc",
                                "name": "Jung Kook",
                                "type": "artist",
                                "uri": "spotify:artist:6HaGTQPmzraVmaVxvz6EUc"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3MdXrJWsbVzdn6fe5JYkSQ"
                                },
                                "href": "https://api.spotify.com/v1/artists/3MdXrJWsbVzdn6fe5JYkSQ",
                                "id": "3MdXrJWsbVzdn6fe5JYkSQ",
                                "name": "Latto",
                                "type": "artist",
                                "uri": "spotify:artist:3MdXrJWsbVzdn6fe5JYkSQ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273bf5cce5a0e1ed03a626bdd74",
                            "width": 640
                        },
                        "id": "7x9aauaA9cu6tyfpHnqDLo"
                    },
                    {
                        "trackName": "WHERE SHE GOES",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b9b7e4c982b33ee23c4867f7a3025e3598c35760?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7ro0hRteUMfnOioTFI5TG1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                                },
                                "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                                "id": "4q3ewBCX7sLwd24euuV69X",
                                "name": "Bad Bunny",
                                "type": "artist",
                                "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ab5c9cd818ad6ed3e9b79cd1",
                            "width": 640
                        },
                        "id": "7ro0hRteUMfnOioTFI5TG1"
                    },
                    {
                        "trackName": "Kill Bill",
                        "trackPreview": "https://p.scdn.co/mp3-preview/4bd2dc84016f3743add7eea8b988407b1b900672?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:1Qrg8KqiBpW07V7PNxwwwL",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
                                },
                                "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
                                "id": "7tYKF4w9nC0nq9CsPZTHyP",
                                "name": "SZA",
                                "type": "artist",
                                "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5",
                            "width": 640
                        },
                        "id": "1Qrg8KqiBpW07V7PNxwwwL"
                    },
                    {
                        "trackName": "fukumean",
                        "trackPreview": "https://p.scdn.co/mp3-preview/f237ab921af697ba9b49e12fa167c2ce1a82d6b4?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4rXLjWdF2ZZpXCVTfWcshS",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2hlmm7s2ICUX0LVIhVFlZQ"
                                },
                                "href": "https://api.spotify.com/v1/artists/2hlmm7s2ICUX0LVIhVFlZQ",
                                "id": "2hlmm7s2ICUX0LVIhVFlZQ",
                                "name": "Gunna",
                                "type": "artist",
                                "uri": "spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273017d5e26552345c4b1575b6c",
                            "width": 640
                        },
                        "id": "4rXLjWdF2ZZpXCVTfWcshS"
                    },
                    {
                        "trackName": "Columbia",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e3d6df66fe67f618166a2cab858580ac8a96486a?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:6XbtvPmIpyCbjuT0e8cQtp",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52iwsT98xCoGgiGntTiR7K"
                                },
                                "href": "https://api.spotify.com/v1/artists/52iwsT98xCoGgiGntTiR7K",
                                "id": "52iwsT98xCoGgiGntTiR7K",
                                "name": "Quevedo",
                                "type": "artist",
                                "uri": "spotify:artist:52iwsT98xCoGgiGntTiR7K"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a00a817b017c6f6bf8460be9",
                            "width": 640
                        },
                        "id": "6XbtvPmIpyCbjuT0e8cQtp"
                    },
                    {
                        "trackName": "Calm Down (with Selena Gomez)",
                        "trackPreview": null,
                        "uri": "spotify:track:0WtM2NBVQNNJLh6scP13H8",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS"
                                },
                                "href": "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
                                "id": "46pWGuE3dSwY3bMMXGBvVS",
                                "name": "Rema",
                                "type": "artist",
                                "uri": "spotify:artist:46pWGuE3dSwY3bMMXGBvVS"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
                                },
                                "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
                                "id": "0C8ZW7ezQVs4URX5aX7Kqx",
                                "name": "Selena Gomez",
                                "type": "artist",
                                "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a3a7f38ea2033aa501afd4cf",
                            "width": 640
                        },
                        "id": "0WtM2NBVQNNJLh6scP13H8"
                    },
                    {
                        "trackName": "As It Was",
                        "trackPreview": "https://p.scdn.co/mp3-preview/c43dd07043b29e800c1a65b3a0102861fa3cf418?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:4LRPiXqCikLlN15c3yImP7",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3"
                                },
                                "href": "https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3",
                                "id": "6KImCVD70vtIoJWnq6nGn3",
                                "name": "Harry Styles",
                                "type": "artist",
                                "uri": "spotify:artist:6KImCVD70vtIoJWnq6nGn3"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
                            "width": 640
                        },
                        "id": "4LRPiXqCikLlN15c3yImP7"
                    },
                    {
                        "trackName": "Cupid - Twin Ver.",
                        "trackPreview": "https://p.scdn.co/mp3-preview/af5c16d4c69be9b3278e7079d5aab14aa425127b?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:7FbrGaHYVDmfr7KoLIZnQ7",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4GJ6xDCF5jaUqD6avOuQT6"
                                },
                                "href": "https://api.spotify.com/v1/artists/4GJ6xDCF5jaUqD6avOuQT6",
                                "id": "4GJ6xDCF5jaUqD6avOuQT6",
                                "name": "FIFTY FIFTY",
                                "type": "artist",
                                "uri": "spotify:artist:4GJ6xDCF5jaUqD6avOuQT6"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27337c0b3670236c067c8e8bbcb",
                            "width": 640
                        },
                        "id": "7FbrGaHYVDmfr7KoLIZnQ7"
                    },
                    {
                        "trackName": "Flowers",
                        "trackPreview": "https://p.scdn.co/mp3-preview/9fbe346e805ed219204f53324f94557ab557b6d3?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:0yLdNVWF3Srea0uzk55zFn",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6"
                                },
                                "href": "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6",
                                "id": "5YGY8feqx7naU7z4HrwZM6",
                                "name": "Miley Cyrus",
                                "type": "artist",
                                "uri": "spotify:artist:5YGY8feqx7naU7z4HrwZM6"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d",
                            "width": 640
                        },
                        "id": "0yLdNVWF3Srea0uzk55zFn"
                    },
                    {
                        "trackName": "Baby Don't Hurt Me",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a8f2e176e17e0f6298b42ef8e96118318fdd2b89?cid=0a5a810744fa4b2291120b509d465eab",
                        "uri": "spotify:track:3BKD1PwArikchz2Zrlp1qi",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai",
                                "id": "1Cs0zKBU1kc0i8ypK3B9ai",
                                "name": "David Guetta",
                                "type": "artist",
                                "uri": "spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1zNqDE7qDGCsyzJwohVaoX"
                                },
                                "href": "https://api.spotify.com/v1/artists/1zNqDE7qDGCsyzJwohVaoX",
                                "id": "1zNqDE7qDGCsyzJwohVaoX",
                                "name": "Anne-Marie",
                                "type": "artist",
                                "uri": "spotify:artist:1zNqDE7qDGCsyzJwohVaoX"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6AMd49uBDJfhf30Ak2QR5s"
                                },
                                "href": "https://api.spotify.com/v1/artists/6AMd49uBDJfhf30Ak2QR5s",
                                "id": "6AMd49uBDJfhf30Ak2QR5s",
                                "name": "Coi Leray",
                                "type": "artist",
                                "uri": "spotify:artist:6AMd49uBDJfhf30Ak2QR5s"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730b4ef75c3728599aa4104f7a",
                            "width": 640
                        },
                        "id": "3BKD1PwArikchz2Zrlp1qi"
                    },
                    {
                        "trackName": "Calling (Spider-Man: Across the Spider-Verse) (Metro Boomin & Swae Lee, NAV, feat. A Boogie Wit da Hoodie)",
                        "trackPreview": null,
                        "uri": "spotify:track:5rurggqwwudn9clMdcchxT",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
                                },
                                "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
                                "id": "0iEtIxbK0KxaSlF7G42ZOp",
                                "name": "Metro Boomin",
                                "type": "artist",
                                "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX"
                                },
                                "href": "https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX",
                                "id": "1zNqQNIdeOUZHb8zbZRFMX",
                                "name": "Swae Lee",
                                "type": "artist",
                                "uri": "spotify:artist:1zNqQNIdeOUZHb8zbZRFMX"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7rkW85dBwwrJtlHRDkJDAC"
                                },
                                "href": "https://api.spotify.com/v1/artists/7rkW85dBwwrJtlHRDkJDAC",
                                "id": "7rkW85dBwwrJtlHRDkJDAC",
                                "name": "NAV",
                                "type": "artist",
                                "uri": "spotify:artist:7rkW85dBwwrJtlHRDkJDAC"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/31W5EY0aAly4Qieq6OFu6I"
                                },
                                "href": "https://api.spotify.com/v1/artists/31W5EY0aAly4Qieq6OFu6I",
                                "id": "31W5EY0aAly4Qieq6OFu6I",
                                "name": "A Boogie Wit da Hoodie",
                                "type": "artist",
                                "uri": "spotify:artist:31W5EY0aAly4Qieq6OFu6I"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
                            "width": 640
                        },
                        "id": "5rurggqwwudn9clMdcchxT"
                    }
                ]
            },
// NUEVAS PLAYLIST **********************************
            {
                "name": "Viva Latino",
                "images": "https://i.scdn.co/image/ab67706f000000038f0a9519803ef2f01bfade07",
                "owner": "Soul Life",
                "type": "playlist",
                "tracks": [
                    {
                        "trackName": "LALA",
                        "trackPreview": "https://p.scdn.co/mp3-preview/42772b16b4e575d1b15b0ec7f94e335539390d2d?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "7ABLbnD53cQK00mhcaOUVG",
                        "uri": "spotify:track:7ABLbnD53cQK00mhcaOUVG",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W"
                                },
                                "href": "https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
                                "id": "7iK8PXO48WeuP03g8YR51W",
                                "name": "Myke Towers",
                                "type": "artist",
                                "uri": "spotify:artist:7iK8PXO48WeuP03g8YR51W"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730656d5ce813ca3cc4b677e05",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "Columbia",
                        "trackPreview": "https://p.scdn.co/mp3-preview/e3d6df66fe67f618166a2cab858580ac8a96486a?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "6XbtvPmIpyCbjuT0e8cQtp",
                        "uri": "spotify:track:6XbtvPmIpyCbjuT0e8cQtp",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52iwsT98xCoGgiGntTiR7K"
                                },
                                "href": "https://api.spotify.com/v1/artists/52iwsT98xCoGgiGntTiR7K",
                                "id": "52iwsT98xCoGgiGntTiR7K",
                                "name": "Quevedo",
                                "type": "artist",
                                "uri": "spotify:artist:52iwsT98xCoGgiGntTiR7K"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a00a817b017c6f6bf8460be9",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "WHERE SHE GOES",
                        "trackPreview": "https://p.scdn.co/mp3-preview/b9b7e4c982b33ee23c4867f7a3025e3598c35760?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "7ro0hRteUMfnOioTFI5TG1",
                        "uri": "spotify:track:7ro0hRteUMfnOioTFI5TG1",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                                },
                                "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                                "id": "4q3ewBCX7sLwd24euuV69X",
                                "name": "Bad Bunny",
                                "type": "artist",
                                "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ab5c9cd818ad6ed3e9b79cd1",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "S91",
                        "trackPreview": null,
                        "trackFull": "",
                        "id": "7EpOXgSRgnglRWr86pZfGU",
                        "uri": "spotify:track:7EpOXgSRgnglRWr86pZfGU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla"
                                },
                                "href": "https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla",
                                "id": "790FomKkXshlbRYZFtlgla",
                                "name": "KAROL G",
                                "type": "artist",
                                "uri": "spotify:artist:790FomKkXshlbRYZFtlgla"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273890cfb712167a0186918644e",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "La Bebe - Remix",
                        "trackPreview": "https://p.scdn.co/mp3-preview/57c5d5266219b32d455ed22417155bbabde7170f?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "2UW7JaomAMuX9pZrjVpHAU",
                        "uri": "spotify:track:2UW7JaomAMuX9pZrjVpHAU",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1NNRWkhwmcXRimFYSBpB1y"
                                },
                                "href": "https://api.spotify.com/v1/artists/1NNRWkhwmcXRimFYSBpB1y",
                                "id": "1NNRWkhwmcXRimFYSBpB1y",
                                "name": "Yng Lvcas",
                                "type": "artist",
                                "uri": "spotify:artist:1NNRWkhwmcXRimFYSBpB1y"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a04be3ad7c8c67f4109111a9",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "K-POP",
                        "trackPreview": "https://p.scdn.co/mp3-preview/011ff5d71b1fad87bc1f4bed5a1abab3e0500426?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "5L3ecxQnQ9qTBmnLQiwf0C",
                        "uri": "spotify:track:5L3ecxQnQ9qTBmnLQiwf0C",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                                },
                                "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                                "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                                "name": "Travis Scott",
                                "type": "artist",
                                "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                                },
                                "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                                "id": "4q3ewBCX7sLwd24euuV69X",
                                "name": "Bad Bunny",
                                "type": "artist",
                                "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                                "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                                "name": "The Weeknd",
                                "type": "artist",
                                "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273893489768de0c42b4d217b82",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "BABY HELLO",
                        "trackPreview": "https://p.scdn.co/mp3-preview/8a9ca6c81e6e6ad48758f02017456405fd7a476d?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "2SOvWt6igzXViIjIiWNWEP",
                        "uri": "spotify:track:2SOvWt6igzXViIjIiWNWEP",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1mcTU81TzQhprhouKaTkpq"
                                },
                                "href": "https://api.spotify.com/v1/artists/1mcTU81TzQhprhouKaTkpq",
                                "id": "1mcTU81TzQhprhouKaTkpq",
                                "name": "Rauw Alejandro",
                                "type": "artist",
                                "uri": "spotify:artist:1mcTU81TzQhprhouKaTkpq"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/716NhGYqD1jl2wI1Qkgq36"
                                },
                                "href": "https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36",
                                "id": "716NhGYqD1jl2wI1Qkgq36",
                                "name": "Bizarrap",
                                "type": "artist",
                                "uri": "spotify:artist:716NhGYqD1jl2wI1Qkgq36"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730ff08e0346b55268e735a4e9",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "Ella Baila Sola",
                        "trackPreview": "https://p.scdn.co/mp3-preview/5d39f3e17f1e20e2711d033001e48b8d4249b992?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "3dnP0JxCgygwQH9Gm7q7nb",
                        "uri": "spotify:track:3dnP0JxCgygwQH9Gm7q7nb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0XeEobZplHxzM9QzFQWLiR"
                                },
                                "href": "https://api.spotify.com/v1/artists/0XeEobZplHxzM9QzFQWLiR",
                                "id": "0XeEobZplHxzM9QzFQWLiR",
                                "name": "Eslabon Armado",
                                "type": "artist",
                                "uri": "spotify:artist:0XeEobZplHxzM9QzFQWLiR"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2732071a0c79802d9375a53bfef",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "TULUM",
                        "trackPreview": "https://p.scdn.co/mp3-preview/164468e67b8da8053036c68533ffa473ab680c51?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "7bPp2NmpmyhLJ7zWazAXMu",
                        "uri": "spotify:track:7bPp2NmpmyhLJ7zWazAXMu",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/12GqGscKJx3aE4t07u7eVZ"
                                },
                                "href": "https://api.spotify.com/v1/artists/12GqGscKJx3aE4t07u7eVZ",
                                "id": "12GqGscKJx3aE4t07u7eVZ",
                                "name": "Peso Pluma",
                                "type": "artist",
                                "uri": "spotify:artist:12GqGscKJx3aE4t07u7eVZ"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6XkjpgcEsYab502Vr1bBeW"
                                },
                                "href": "https://api.spotify.com/v1/artists/6XkjpgcEsYab502Vr1bBeW",
                                "id": "6XkjpgcEsYab502Vr1bBeW",
                                "name": "Grupo Frontera",
                                "type": "artist",
                                "uri": "spotify:artist:6XkjpgcEsYab502Vr1bBeW"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a8eae36188b69461a8ec6508",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "Classy 101",
                        "trackPreview": null,
                        "trackFull": "",
                        "id": "6XSqqQIy7Lm7SnwxS4NrGx",
                        "uri": "spotify:track:6XSqqQIy7Lm7SnwxS4NrGx",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2LRoIwlKmHjgvigdNGBHNo"
                                },
                                "href": "https://api.spotify.com/v1/artists/2LRoIwlKmHjgvigdNGBHNo",
                                "id": "2LRoIwlKmHjgvigdNGBHNo",
                                "name": "Feid",
                                "type": "artist",
                                "uri": "spotify:artist:2LRoIwlKmHjgvigdNGBHNo"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3qsKSpcV3ncke3hw52JSMB"
                                },
                                "href": "https://api.spotify.com/v1/artists/3qsKSpcV3ncke3hw52JSMB",
                                "id": "3qsKSpcV3ncke3hw52JSMB",
                                "name": "Young Miko",
                                "type": "artist",
                                "uri": "spotify:artist:3qsKSpcV3ncke3hw52JSMB"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27329ebee2b5fb008871fcd201a",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "MOJABI GHOST",
                        "trackPreview": "https://p.scdn.co/mp3-preview/a6d8180d52b759c3e3db9aa78e841ffc06e26c17?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "4eMKD8MRroxCqugpsxCCNb",
                        "uri": "spotify:track:4eMKD8MRroxCqugpsxCCNb",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0GM7qgcRCORpGnfcN2tCiB"
                                },
                                "href": "https://api.spotify.com/v1/artists/0GM7qgcRCORpGnfcN2tCiB",
                                "id": "0GM7qgcRCORpGnfcN2tCiB",
                                "name": "Tainy",
                                "type": "artist",
                                "uri": "spotify:artist:0GM7qgcRCORpGnfcN2tCiB"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                                },
                                "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                                "id": "4q3ewBCX7sLwd24euuV69X",
                                "name": "Bad Bunny",
                                "type": "artist",
                                "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273de7b9af78fbdda96c5a0635b",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "El Cielo",
                        "trackPreview": "https://p.scdn.co/mp3-preview/6ecfde4a8f2fee1ead220cd9e6926d605470009e?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "4PA1wK0leCjmRZlP5dQ8Lv",
                        "uri": "spotify:track:4PA1wK0leCjmRZlP5dQ8Lv",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/51XrH5fQP2oIQynuKxSWcW"
                                },
                                "href": "https://api.spotify.com/v1/artists/51XrH5fQP2oIQynuKxSWcW",
                                "id": "51XrH5fQP2oIQynuKxSWcW",
                                "name": "Sky Rompiendo",
                                "type": "artist",
                                "uri": "spotify:artist:51XrH5fQP2oIQynuKxSWcW"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2LRoIwlKmHjgvigdNGBHNo"
                                },
                                "href": "https://api.spotify.com/v1/artists/2LRoIwlKmHjgvigdNGBHNo",
                                "id": "2LRoIwlKmHjgvigdNGBHNo",
                                "name": "Feid",
                                "type": "artist",
                                "uri": "spotify:artist:2LRoIwlKmHjgvigdNGBHNo"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W"
                                },
                                "href": "https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
                                "id": "7iK8PXO48WeuP03g8YR51W",
                                "name": "Myke Towers",
                                "type": "artist",
                                "uri": "spotify:artist:7iK8PXO48WeuP03g8YR51W"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27306eccb4893fa58ae311c45ea",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "Mi Bello Angel",
                        "trackPreview": "https://p.scdn.co/mp3-preview/07854d155311327027a073aeb36f0f61cdb07096?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "1oWkcc7hQdVYPQMyQ6AFov",
                        "uri": "spotify:track:1oWkcc7hQdVYPQMyQ6AFov",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0elWFr7TW8piilVRYJUe4P"
                                },
                                "href": "https://api.spotify.com/v1/artists/0elWFr7TW8piilVRYJUe4P",
                                "id": "0elWFr7TW8piilVRYJUe4P",
                                "name": "Natanael Cano",
                                "type": "artist",
                                "uri": "spotify:artist:0elWFr7TW8piilVRYJUe4P"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273fc97e94b8aec519bff104eff",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "CORAZÓN VACÍO",
                        "trackPreview": "https://p.scdn.co/mp3-preview/15a67adb85841c362532e7cf8c01a12251084880?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "3oNnzH6hmqIGIhJ1NcHlrh",
                        "uri": "spotify:track:3oNnzH6hmqIGIhJ1NcHlrh",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1DxLCyH42yaHKGK3cl5bvG"
                                },
                                "href": "https://api.spotify.com/v1/artists/1DxLCyH42yaHKGK3cl5bvG",
                                "id": "1DxLCyH42yaHKGK3cl5bvG",
                                "name": "Maria Becerra",
                                "type": "artist",
                                "uri": "spotify:artist:1DxLCyH42yaHKGK3cl5bvG"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a3cbe5aa0bcf10eb02a8c960",
                            "width": 640
                        }
                    },
                    {
                        "trackName": "Hey Mor",
                        "trackPreview": "https://p.scdn.co/mp3-preview/cd2d2242b748408da15c2b66f47d54b3f0793ae0?cid=0a5a810744fa4b2291120b509d465eab",
                        "trackFull": "",
                        "id": "6Rpbzk2LC8xWZI93RyodAq",
                        "uri": "spotify:track:6Rpbzk2LC8xWZI93RyodAq",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"
                                },
                                "href": "https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",
                                "id": "1i8SpTcr7yvPOmcqrbnVXY",
                                "name": "Ozuna",
                                "type": "artist",
                                "uri": "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2LRoIwlKmHjgvigdNGBHNo"
                                },
                                "href": "https://api.spotify.com/v1/artists/2LRoIwlKmHjgvigdNGBHNo",
                                "id": "2LRoIwlKmHjgvigdNGBHNo",
                                "name": "Feid",
                                "type": "artist",
                                "uri": "spotify:artist:2LRoIwlKmHjgvigdNGBHNo"
                            }
                        ],
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27380f5e31c0a66b5aed16d98e3",
                            "width": 640
                        }
                    }
                ]
            },

// ***************** TRAP *****************************
{
    "name": "TRAPPERZ",
    "images": "https://i.scdn.co/image/ab67706f0000000318536499337a269a3a67a7f8",
    "owner": "Soul Life",
    "type": "playlist",
    "tracks": [
        {
            "trackName": "Pacto (feat. Luar La L)",
            "trackPreview": "https://p.scdn.co/mp3-preview/9ee69de0ba45becf11adf08e86c1c1998b8644c9?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "2whW1Q8KTOODkGDakLZa6V",
            "uri": "spotify:track:2whW1Q8KTOODkGDakLZa6V",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2cPqdH7XMvwaBJEVjheH8g"
                    },
                    "href": "https://api.spotify.com/v1/artists/2cPqdH7XMvwaBJEVjheH8g",
                    "id": "2cPqdH7XMvwaBJEVjheH8g",
                    "name": "Jay Wheeler",
                    "type": "artist",
                    "uri": "spotify:artist:2cPqdH7XMvwaBJEVjheH8g"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2YRyPiW98bpkARAS4B3OQP"
                    },
                    "href": "https://api.spotify.com/v1/artists/2YRyPiW98bpkARAS4B3OQP",
                    "id": "2YRyPiW98bpkARAS4B3OQP",
                    "name": "Dei V",
                    "type": "artist",
                    "uri": "spotify:artist:2YRyPiW98bpkARAS4B3OQP"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4CQdcx66F116k2db2Y0rjE"
                    },
                    "href": "https://api.spotify.com/v1/artists/4CQdcx66F116k2db2Y0rjE",
                    "id": "4CQdcx66F116k2db2Y0rjE",
                    "name": "Hades66",
                    "type": "artist",
                    "uri": "spotify:artist:4CQdcx66F116k2db2Y0rjE"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4axKuDPr6WKcDCyh8vueTY"
                    },
                    "href": "https://api.spotify.com/v1/artists/4axKuDPr6WKcDCyh8vueTY",
                    "id": "4axKuDPr6WKcDCyh8vueTY",
                    "name": "Luar La L",
                    "type": "artist",
                    "uri": "spotify:artist:4axKuDPr6WKcDCyh8vueTY"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27347e5d87b77548c303a50cc32",
                "width": 640
            }
        },
        {
            "trackName": "PASIEMPRE",
            "trackPreview": "https://p.scdn.co/mp3-preview/30e179be554d32e8c1af606006f9b935c662332b?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5NhLA2P7AiV3cloVmwtwLS",
            "uri": "spotify:track:5NhLA2P7AiV3cloVmwtwLS",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0GM7qgcRCORpGnfcN2tCiB"
                    },
                    "href": "https://api.spotify.com/v1/artists/0GM7qgcRCORpGnfcN2tCiB",
                    "id": "0GM7qgcRCORpGnfcN2tCiB",
                    "name": "Tainy",
                    "type": "artist",
                    "uri": "spotify:artist:0GM7qgcRCORpGnfcN2tCiB"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4SsVbpTthjScTS7U2hmr1X"
                    },
                    "href": "https://api.spotify.com/v1/artists/4SsVbpTthjScTS7U2hmr1X",
                    "id": "4SsVbpTthjScTS7U2hmr1X",
                    "name": "Arcángel",
                    "type": "artist",
                    "uri": "spotify:artist:4SsVbpTthjScTS7U2hmr1X"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6nVcHLIgY5pE2YCl8ubca1"
                    },
                    "href": "https://api.spotify.com/v1/artists/6nVcHLIgY5pE2YCl8ubca1",
                    "id": "6nVcHLIgY5pE2YCl8ubca1",
                    "name": "Jhayco",
                    "type": "artist",
                    "uri": "spotify:artist:6nVcHLIgY5pE2YCl8ubca1"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W"
                    },
                    "href": "https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
                    "id": "7iK8PXO48WeuP03g8YR51W",
                    "name": "Myke Towers",
                    "type": "artist",
                    "uri": "spotify:artist:7iK8PXO48WeuP03g8YR51W"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3E12tRURRvPfHz0hAMCFYc"
                    },
                    "href": "https://api.spotify.com/v1/artists/3E12tRURRvPfHz0hAMCFYc",
                    "id": "3E12tRURRvPfHz0hAMCFYc",
                    "name": "Omar Courtz",
                    "type": "artist",
                    "uri": "spotify:artist:3E12tRURRvPfHz0hAMCFYc"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4SQdUpG4f7UbkJG3cJ2Iyj"
                    },
                    "href": "https://api.spotify.com/v1/artists/4SQdUpG4f7UbkJG3cJ2Iyj",
                    "id": "4SQdUpG4f7UbkJG3cJ2Iyj",
                    "name": "Arca",
                    "type": "artist",
                    "uri": "spotify:artist:4SQdUpG4f7UbkJG3cJ2Iyj"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273de7b9af78fbdda96c5a0635b",
                "width": 640
            }
        },
        {
            "trackName": "RoCKSTAR 2.0",
            "trackPreview": "https://p.scdn.co/mp3-preview/43013561031f9f72bf7542461c910aa2245675bf?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "4xUtTQuVT6UBF76SPsgOsr",
            "uri": "spotify:track:4xUtTQuVT6UBF76SPsgOsr",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6nVcHLIgY5pE2YCl8ubca1"
                    },
                    "href": "https://api.spotify.com/v1/artists/6nVcHLIgY5pE2YCl8ubca1",
                    "id": "6nVcHLIgY5pE2YCl8ubca1",
                    "name": "Jhayco",
                    "type": "artist",
                    "uri": "spotify:artist:6nVcHLIgY5pE2YCl8ubca1"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735c3a89cf41a72acafa4d5781",
                "width": 640
            }
        },
        {
            "trackName": "Eladio Carrion: Bzrp Music Sessions, Vol. 40",
            "trackPreview": "https://p.scdn.co/mp3-preview/0aec41f0eb18a01ce93c2b988e42f3c3f69557c7?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "1VauUM5CBX7nkLcgafQL2B",
            "uri": "spotify:track:1VauUM5CBX7nkLcgafQL2B",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/716NhGYqD1jl2wI1Qkgq36"
                    },
                    "href": "https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36",
                    "id": "716NhGYqD1jl2wI1Qkgq36",
                    "name": "Bizarrap",
                    "type": "artist",
                    "uri": "spotify:artist:716NhGYqD1jl2wI1Qkgq36"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5XJDexmWFLWOkjOEjOVX3e"
                    },
                    "href": "https://api.spotify.com/v1/artists/5XJDexmWFLWOkjOEjOVX3e",
                    "id": "5XJDexmWFLWOkjOEjOVX3e",
                    "name": "Eladio Carrion",
                    "type": "artist",
                    "uri": "spotify:artist:5XJDexmWFLWOkjOEjOVX3e"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27370030b2894d44b3fb2a53ed8",
                "width": 640
            }
        },
        {
            "trackName": "HORA CERO",
            "trackPreview": "https://p.scdn.co/mp3-preview/aeb402c5401570b7c245cac1a0240d043ef57c71?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5elf7rWt5uFffJvluUfwon",
            "uri": "spotify:track:5elf7rWt5uFffJvluUfwon",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W"
                    },
                    "href": "https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
                    "id": "7iK8PXO48WeuP03g8YR51W",
                    "name": "Myke Towers",
                    "type": "artist",
                    "uri": "spotify:artist:7iK8PXO48WeuP03g8YR51W"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27371699c526f85fcf09dcce42a",
                "width": 640
            }
        },
        {
            "trackName": "don't liE",
            "trackPreview": "https://p.scdn.co/mp3-preview/a0960e4b13839a0ef2c2ad1616391c249225b388?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "7GpSrZ9BAnu5l5ahjRS8KC",
            "uri": "spotify:track:7GpSrZ9BAnu5l5ahjRS8KC",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/52iwsT98xCoGgiGntTiR7K"
                    },
                    "href": "https://api.spotify.com/v1/artists/52iwsT98xCoGgiGntTiR7K",
                    "id": "52iwsT98xCoGgiGntTiR7K",
                    "name": "Quevedo",
                    "type": "artist",
                    "uri": "spotify:artist:52iwsT98xCoGgiGntTiR7K"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b0573dd59ca0a000cef8a7fb",
                "width": 640
            }
        },
        {
            "trackName": "She Don't Give a Fo",
            "trackPreview": "https://p.scdn.co/mp3-preview/ce9640e59c55c495b1ba70c58c0f6943f4afd5aa?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "03a359wbiUsjN9h6yzXvmS",
            "uri": "spotify:track:03a359wbiUsjN9h6yzXvmS",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4m6ubhNsdwF4psNf3R8kwR"
                    },
                    "href": "https://api.spotify.com/v1/artists/4m6ubhNsdwF4psNf3R8kwR",
                    "id": "4m6ubhNsdwF4psNf3R8kwR",
                    "name": "KHEA",
                    "type": "artist",
                    "uri": "spotify:artist:4m6ubhNsdwF4psNf3R8kwR"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733ba92b218fbc97d244235a21",
                "width": 640
            }
        },
        {
            "trackName": "8 AM",
            "trackPreview": "https://p.scdn.co/mp3-preview/de8a2f96bbfc4ddc752928bef1922595c7f39dad?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5UcWUgWfR2Ir0EXSb1EpoM",
            "uri": "spotify:track:5UcWUgWfR2Ir0EXSb1EpoM",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2UZIAOlrnyZmyzt1nuXr9y"
                    },
                    "href": "https://api.spotify.com/v1/artists/2UZIAOlrnyZmyzt1nuXr9y",
                    "id": "2UZIAOlrnyZmyzt1nuXr9y",
                    "name": "Nicki Nicole",
                    "type": "artist",
                    "uri": "spotify:artist:2UZIAOlrnyZmyzt1nuXr9y"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3qsKSpcV3ncke3hw52JSMB"
                    },
                    "href": "https://api.spotify.com/v1/artists/3qsKSpcV3ncke3hw52JSMB",
                    "id": "3qsKSpcV3ncke3hw52JSMB",
                    "name": "Young Miko",
                    "type": "artist",
                    "uri": "spotify:artist:3qsKSpcV3ncke3hw52JSMB"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273d91a54eea72c50765e2fa72b",
                "width": 640
            }
        },
        {
            "trackName": "BOOKER T",
            "trackPreview": "https://p.scdn.co/mp3-preview/996387af6f281d065ca89ef0713dbf1565bb108a?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "26w9NTiE9NGjW1ZvIOd1So",
            "uri": "spotify:track:26w9NTiE9NGjW1ZvIOd1So",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                    },
                    "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                    "id": "4q3ewBCX7sLwd24euuV69X",
                    "name": "Bad Bunny",
                    "type": "artist",
                    "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab",
                "width": 640
            }
        },
        {
            "trackName": "Dos Mil 16",
            "trackPreview": "https://p.scdn.co/mp3-preview/a8b8174700df035406348eb14e727c645a49e15e?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "4d4ZXH4dr5bYfgErHiZCX2",
            "uri": "spotify:track:4d4ZXH4dr5bYfgErHiZCX2",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                    },
                    "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                    "id": "4q3ewBCX7sLwd24euuV69X",
                    "name": "Bad Bunny",
                    "type": "artist",
                    "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
                "width": 640
            }
        },
        {
            "trackName": "Padres",
            "trackPreview": "https://p.scdn.co/mp3-preview/55b31cbf138bf1116b43dcfaff2e52ddcd4faf37?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "0Tr5TQo7sJ36Y8VZ5yi4t3",
            "uri": "spotify:track:0Tr5TQo7sJ36Y8VZ5yi4t3",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2DywQB5g7Vvlnu4qvNmdiu"
                    },
                    "href": "https://api.spotify.com/v1/artists/2DywQB5g7Vvlnu4qvNmdiu",
                    "id": "2DywQB5g7Vvlnu4qvNmdiu",
                    "name": "Shishigang Records",
                    "type": "artist",
                    "uri": "spotify:artist:2DywQB5g7Vvlnu4qvNmdiu"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/35oGZihZclGoTVuICPXRP9"
                    },
                    "href": "https://api.spotify.com/v1/artists/35oGZihZclGoTVuICPXRP9",
                    "id": "35oGZihZclGoTVuICPXRP9",
                    "name": "Jere Klein",
                    "type": "artist",
                    "uri": "spotify:artist:35oGZihZclGoTVuICPXRP9"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0LshXUmIub6xKvOq4QmtNs"
                    },
                    "href": "https://api.spotify.com/v1/artists/0LshXUmIub6xKvOq4QmtNs",
                    "id": "0LshXUmIub6xKvOq4QmtNs",
                    "name": "ITHAN NY",
                    "type": "artist",
                    "uri": "spotify:artist:0LshXUmIub6xKvOq4QmtNs"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0QpMp8Y7jFzwCt8OZjKQdd"
                    },
                    "href": "https://api.spotify.com/v1/artists/0QpMp8Y7jFzwCt8OZjKQdd",
                    "id": "0QpMp8Y7jFzwCt8OZjKQdd",
                    "name": "Tunechikidd",
                    "type": "artist",
                    "uri": "spotify:artist:0QpMp8Y7jFzwCt8OZjKQdd"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0bcZsLQV8MCeU0ylWbw23p"
                    },
                    "href": "https://api.spotify.com/v1/artists/0bcZsLQV8MCeU0ylWbw23p",
                    "id": "0bcZsLQV8MCeU0ylWbw23p",
                    "name": "Aqua VS",
                    "type": "artist",
                    "uri": "spotify:artist:0bcZsLQV8MCeU0ylWbw23p"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2XcZshqzPKm3iZcmt73R8D"
                    },
                    "href": "https://api.spotify.com/v1/artists/2XcZshqzPKm3iZcmt73R8D",
                    "id": "2XcZshqzPKm3iZcmt73R8D",
                    "name": "Pablo Chill-E",
                    "type": "artist",
                    "uri": "spotify:artist:2XcZshqzPKm3iZcmt73R8D"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a8d3ccfea363d2fa1c9d8785",
                "width": 640
            }
        },
        {
            "trackName": "Goteo",
            "trackPreview": "https://p.scdn.co/mp3-preview/566514c812c700d990d61cb06a2ab6d8ace73a11?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "57kdZIOAaolxAjB67d2yU3",
            "uri": "spotify:track:57kdZIOAaolxAjB67d2yU3",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e1f10079298289dc8d1d42c0",
                "width": 640
            }
        },
        {
            "trackName": "GIVENCHY",
            "trackPreview": "https://p.scdn.co/mp3-preview/53c1eaa675b034a0e933a558a826756d7ddc852b?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6bTVP50bbtMtD6RGe2cUoQ",
            "uri": "spotify:track:6bTVP50bbtMtD6RGe2cUoQ",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b661d9d73921e40ae97cb5e4",
                "width": 640
            }
        },
        {
            "trackName": "120",
            "trackPreview": "https://p.scdn.co/mp3-preview/a0dfc1cfa6695688af464a7ca0cb51ddbb84b125?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "3KJ3opyV29269SXkPrc19l",
            "uri": "spotify:track:3KJ3opyV29269SXkPrc19l",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                    },
                    "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                    "id": "4q3ewBCX7sLwd24euuV69X",
                    "name": "Bad Bunny",
                    "type": "artist",
                    "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab",
                "width": 640
            }
        },
        {
            "trackName": "Rockstar",
            "trackPreview": "https://p.scdn.co/mp3-preview/19e39f2bfbacf9dcd3fc70508966f3b3efe67cec?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "3E4ZzO4ySupnYypDPXcc3D",
            "uri": "spotify:track:3E4ZzO4ySupnYypDPXcc3D",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732f405d5d63a07b98ced1521a",
                "width": 640
            }
        }
    ]
},
{
    "name": "Feelin' Myself",
    "images": "https://i.scdn.co/image/ab67706f00000003acf449c70f14b7b46b9f275a",
    "owner": "Soul Life",
    "type": "playlist",
    "tracks": [
        {
            "trackName": "Deli",
            "trackPreview": null,
            "trackFull": "",
            "id": "5JYPXqMwYc0zTODQdjMEZN",
            "uri": "spotify:track:5JYPXqMwYc0zTODQdjMEZN",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3LZZPxNDGDFVSIPqf4JuEf"
                    },
                    "href": "https://api.spotify.com/v1/artists/3LZZPxNDGDFVSIPqf4JuEf",
                    "id": "3LZZPxNDGDFVSIPqf4JuEf",
                    "name": "Ice Spice",
                    "type": "artist",
                    "uri": "spotify:artist:3LZZPxNDGDFVSIPqf4JuEf"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733a696fc544995ab8d0d6765f",
                "width": 640
            }
        },
        {
            "trackName": "Put It On Da Floor Again (feat. Cardi B)",
            "trackPreview": "https://p.scdn.co/mp3-preview/3cd934af8742a4c035cbeb9586947ea0bd229842?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6c6WmIHcHlhccEwSFBhzNa",
            "uri": "spotify:track:6c6WmIHcHlhccEwSFBhzNa",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3MdXrJWsbVzdn6fe5JYkSQ"
                    },
                    "href": "https://api.spotify.com/v1/artists/3MdXrJWsbVzdn6fe5JYkSQ",
                    "id": "3MdXrJWsbVzdn6fe5JYkSQ",
                    "name": "Latto",
                    "type": "artist",
                    "uri": "spotify:artist:3MdXrJWsbVzdn6fe5JYkSQ"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB"
                    },
                    "href": "https://api.spotify.com/v1/artists/4kYSro6naA4h99UJvo89HB",
                    "id": "4kYSro6naA4h99UJvo89HB",
                    "name": "Cardi B",
                    "type": "artist",
                    "uri": "spotify:artist:4kYSro6naA4h99UJvo89HB"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735292a8bd0723363b27dc9610",
                "width": 640
            }
        },
        {
            "trackName": "Keep Dat Nigga (Part 2) (feat. GloRilla, Kali & Big Boss Vette)",
            "trackPreview": "https://p.scdn.co/mp3-preview/cd360a10f95614fb4a8849595ab73fc695bde3ea?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "4pgeI9ohPGzSDeKE1D4dYf",
            "uri": "spotify:track:4pgeI9ohPGzSDeKE1D4dYf",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1I0tv3cE1cDIJvQpHyuCYN"
                    },
                    "href": "https://api.spotify.com/v1/artists/1I0tv3cE1cDIJvQpHyuCYN",
                    "id": "1I0tv3cE1cDIJvQpHyuCYN",
                    "name": "Icandy",
                    "type": "artist",
                    "uri": "spotify:artist:1I0tv3cE1cDIJvQpHyuCYN"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2qoQgPAilErOKCwE2Y8wOG"
                    },
                    "href": "https://api.spotify.com/v1/artists/2qoQgPAilErOKCwE2Y8wOG",
                    "id": "2qoQgPAilErOKCwE2Y8wOG",
                    "name": "GloRilla",
                    "type": "artist",
                    "uri": "spotify:artist:2qoQgPAilErOKCwE2Y8wOG"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1YRqgFNXqRyMDRr8ClS1NL"
                    },
                    "href": "https://api.spotify.com/v1/artists/1YRqgFNXqRyMDRr8ClS1NL",
                    "id": "1YRqgFNXqRyMDRr8ClS1NL",
                    "name": "Kaliii",
                    "type": "artist",
                    "uri": "spotify:artist:1YRqgFNXqRyMDRr8ClS1NL"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6fKiutMtRIcxi4zEau0BuI"
                    },
                    "href": "https://api.spotify.com/v1/artists/6fKiutMtRIcxi4zEau0BuI",
                    "id": "6fKiutMtRIcxi4zEau0BuI",
                    "name": "Big Boss Vette",
                    "type": "artist",
                    "uri": "spotify:artist:6fKiutMtRIcxi4zEau0BuI"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730ebf595ad7bff93bf02ef723",
                "width": 640
            }
        },
        {
            "trackName": "K Toven",
            "trackPreview": "https://p.scdn.co/mp3-preview/28e286df6b7512bcac28dbe8c22faf3bc6b58db7?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "0iCsRcu5mugWVlCMpD7wb1",
            "uri": "spotify:track:0iCsRcu5mugWVlCMpD7wb1",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1YRqgFNXqRyMDRr8ClS1NL"
                    },
                    "href": "https://api.spotify.com/v1/artists/1YRqgFNXqRyMDRr8ClS1NL",
                    "id": "1YRqgFNXqRyMDRr8ClS1NL",
                    "name": "Kaliii",
                    "type": "artist",
                    "uri": "spotify:artist:1YRqgFNXqRyMDRr8ClS1NL"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6GrHfxMFCXCdIhN9DrAxjK"
                    },
                    "href": "https://api.spotify.com/v1/artists/6GrHfxMFCXCdIhN9DrAxjK",
                    "id": "6GrHfxMFCXCdIhN9DrAxjK",
                    "name": "DJ Smallz 732",
                    "type": "artist",
                    "uri": "spotify:artist:6GrHfxMFCXCdIhN9DrAxjK"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e299dc67b3b988d7caca807e",
                "width": 640
            }
        },
        {
            "trackName": "Barbie World (with Aqua) [From Barbie The Album]",
            "trackPreview": "https://p.scdn.co/mp3-preview/f654928ccaa4e6a9fb09a6eb3f208383eccc12a9?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "741UUVE2kuITl0c6zuqqbO",
            "uri": "spotify:track:741UUVE2kuITl0c6zuqqbO",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"
                    },
                    "href": "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
                    "id": "0hCNtLu0JehylgoiP8L4Gh",
                    "name": "Nicki Minaj",
                    "type": "artist",
                    "uri": "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3LZZPxNDGDFVSIPqf4JuEf"
                    },
                    "href": "https://api.spotify.com/v1/artists/3LZZPxNDGDFVSIPqf4JuEf",
                    "id": "3LZZPxNDGDFVSIPqf4JuEf",
                    "name": "Ice Spice",
                    "type": "artist",
                    "uri": "spotify:artist:3LZZPxNDGDFVSIPqf4JuEf"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6kBjAFKyd0he7LiA5GQ3Gz"
                    },
                    "href": "https://api.spotify.com/v1/artists/6kBjAFKyd0he7LiA5GQ3Gz",
                    "id": "6kBjAFKyd0he7LiA5GQ3Gz",
                    "name": "Aqua",
                    "type": "artist",
                    "uri": "spotify:artist:6kBjAFKyd0he7LiA5GQ3Gz"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737e8f938c02fac3b564931116",
                "width": 640
            }
        },
        {
            "trackName": "Point Me 2 (with Cardi B)",
            "trackPreview": "https://p.scdn.co/mp3-preview/9af959176823e8d7c70828908705a306f82b4ae5?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "69ZBK01gsgWUnA55BEaAPu",
            "uri": "spotify:track:69ZBK01gsgWUnA55BEaAPu",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7oXyXDUyxRjYXWC5L5EuGy"
                    },
                    "href": "https://api.spotify.com/v1/artists/7oXyXDUyxRjYXWC5L5EuGy",
                    "id": "7oXyXDUyxRjYXWC5L5EuGy",
                    "name": "FendiDa Rappa",
                    "type": "artist",
                    "uri": "spotify:artist:7oXyXDUyxRjYXWC5L5EuGy"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB"
                    },
                    "href": "https://api.spotify.com/v1/artists/4kYSro6naA4h99UJvo89HB",
                    "id": "4kYSro6naA4h99UJvo89HB",
                    "name": "Cardi B",
                    "type": "artist",
                    "uri": "spotify:artist:4kYSro6naA4h99UJvo89HB"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730515d5f8352b7f27e2e10199",
                "width": 640
            }
        },
        {
            "trackName": "You Wish",
            "trackPreview": "https://p.scdn.co/mp3-preview/36b9293f6ed7e048176a81754c77765d7f1ac4ea?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "0aoLgGE9S9qMjIGtTgpnNd",
            "uri": "spotify:track:0aoLgGE9S9qMjIGtTgpnNd",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0CLW5934vy2XusynS1px1S"
                    },
                    "href": "https://api.spotify.com/v1/artists/0CLW5934vy2XusynS1px1S",
                    "id": "0CLW5934vy2XusynS1px1S",
                    "name": "Flyana Boss",
                    "type": "artist",
                    "uri": "spotify:artist:0CLW5934vy2XusynS1px1S"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f44bc4bd85d780bbffd6d163",
                "width": 640
            }
        },
        {
            "trackName": "Pound Town 2 (feat. Nicki Minaj & Tay Keith)",
            "trackPreview": "https://p.scdn.co/mp3-preview/1a96a92a644318e61707146ed9c05ca9b44ce299?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6IEXjer2qbXhRLFv99NQQv",
            "uri": "spotify:track:6IEXjer2qbXhRLFv99NQQv",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3DbwFQlvLxRSi2uX8mf81A"
                    },
                    "href": "https://api.spotify.com/v1/artists/3DbwFQlvLxRSi2uX8mf81A",
                    "id": "3DbwFQlvLxRSi2uX8mf81A",
                    "name": "Sexyy Red",
                    "type": "artist",
                    "uri": "spotify:artist:3DbwFQlvLxRSi2uX8mf81A"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"
                    },
                    "href": "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
                    "id": "0hCNtLu0JehylgoiP8L4Gh",
                    "name": "Nicki Minaj",
                    "type": "artist",
                    "uri": "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5xkFVS6IwwgHEAaRzXc9U3"
                    },
                    "href": "https://api.spotify.com/v1/artists/5xkFVS6IwwgHEAaRzXc9U3",
                    "id": "5xkFVS6IwwgHEAaRzXc9U3",
                    "name": "Tay Keith",
                    "type": "artist",
                    "uri": "spotify:artist:5xkFVS6IwwgHEAaRzXc9U3"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c9ed77bebc9b91ea9f3dd6ba",
                "width": 640
            }
        },
        {
            "trackName": "No Bars",
            "trackPreview": null,
            "trackFull": "",
            "id": "4aJYaQide0vBqT3ErvVKvp",
            "uri": "spotify:track:4aJYaQide0vBqT3ErvVKvp",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/37hAfseJWi0G3Scife12Il"
                    },
                    "href": "https://api.spotify.com/v1/artists/37hAfseJWi0G3Scife12Il",
                    "id": "37hAfseJWi0G3Scife12Il",
                    "name": "City Girls",
                    "type": "artist",
                    "uri": "spotify:artist:37hAfseJWi0G3Scife12Il"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/39af15p0feaAOdL9DTRj3m"
                    },
                    "href": "https://api.spotify.com/v1/artists/39af15p0feaAOdL9DTRj3m",
                    "id": "39af15p0feaAOdL9DTRj3m",
                    "name": "JT",
                    "type": "artist",
                    "uri": "spotify:artist:39af15p0feaAOdL9DTRj3m"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27343d90d4598bdb0d0e0a05903",
                "width": 640
            }
        },
        {
            "trackName": "Get It",
            "trackPreview": null,
            "trackFull": "",
            "id": "379Bq2UYx6X6NagvNjZLSX",
            "uri": "spotify:track:379Bq2UYx6X6NagvNjZLSX",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6fKiutMtRIcxi4zEau0BuI"
                    },
                    "href": "https://api.spotify.com/v1/artists/6fKiutMtRIcxi4zEau0BuI",
                    "id": "6fKiutMtRIcxi4zEau0BuI",
                    "name": "Big Boss Vette",
                    "type": "artist",
                    "uri": "spotify:artist:6fKiutMtRIcxi4zEau0BuI"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273784bb86125426b461e6e7ecb",
                "width": 640
            }
        },
        {
            "trackName": "Conceited (feat. Lola Brooke & Maiya The Don)",
            "trackPreview": "https://p.scdn.co/mp3-preview/08bdeec81492ceabb91b8f898e40c473cb6d53fc?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "53acd3PVcgGCux58YABBr5",
            "uri": "spotify:track:53acd3PVcgGCux58YABBr5",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/08PvCOlef4xdOr20jFSTPd"
                    },
                    "href": "https://api.spotify.com/v1/artists/08PvCOlef4xdOr20jFSTPd",
                    "id": "08PvCOlef4xdOr20jFSTPd",
                    "name": "Flo Milli",
                    "type": "artist",
                    "uri": "spotify:artist:08PvCOlef4xdOr20jFSTPd"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2Ggj5XNlIb4Lnbqe307FyB"
                    },
                    "href": "https://api.spotify.com/v1/artists/2Ggj5XNlIb4Lnbqe307FyB",
                    "id": "2Ggj5XNlIb4Lnbqe307FyB",
                    "name": "Lola Brooke",
                    "type": "artist",
                    "uri": "spotify:artist:2Ggj5XNlIb4Lnbqe307FyB"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6S6u5pS5ywg7rv50rhpobQ"
                    },
                    "href": "https://api.spotify.com/v1/artists/6S6u5pS5ywg7rv50rhpobQ",
                    "id": "6S6u5pS5ywg7rv50rhpobQ",
                    "name": "Maiya The Don",
                    "type": "artist",
                    "uri": "spotify:artist:6S6u5pS5ywg7rv50rhpobQ"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c39864b0a6ac36e96efda277",
                "width": 640
            }
        },
        {
            "trackName": "AMERICA HAS A PROBLEM (feat. Kendrick Lamar)",
            "trackPreview": "https://p.scdn.co/mp3-preview/0b8bf8974dd4b122e5425f039feade0ed8d15202?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6l8mgVN9Xf1hiDIFGA6CTE",
            "uri": "spotify:track:6l8mgVN9Xf1hiDIFGA6CTE",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
                    },
                    "href": "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
                    "id": "6vWDO969PvNqNYHIOW5v0m",
                    "name": "Beyoncé",
                    "type": "artist",
                    "uri": "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                    },
                    "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
                    "id": "2YZyLoL8N0Wb9xBt1NhZWg",
                    "name": "Kendrick Lamar",
                    "type": "artist",
                    "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27378643be90cd7c5ec75675855",
                "width": 640
            }
        },
        {
            "trackName": "No Angels (with Lola Brooke)",
            "trackPreview": null,
            "trackFull": "",
            "id": "41s7nEKyANNfGaxRyMyFGI",
            "uri": "spotify:track:41s7nEKyANNfGaxRyMyFGI",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6AMd49uBDJfhf30Ak2QR5s"
                    },
                    "href": "https://api.spotify.com/v1/artists/6AMd49uBDJfhf30Ak2QR5s",
                    "id": "6AMd49uBDJfhf30Ak2QR5s",
                    "name": "Coi Leray",
                    "type": "artist",
                    "uri": "spotify:artist:6AMd49uBDJfhf30Ak2QR5s"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2Ggj5XNlIb4Lnbqe307FyB"
                    },
                    "href": "https://api.spotify.com/v1/artists/2Ggj5XNlIb4Lnbqe307FyB",
                    "id": "2Ggj5XNlIb4Lnbqe307FyB",
                    "name": "Lola Brooke",
                    "type": "artist",
                    "uri": "spotify:artist:2Ggj5XNlIb4Lnbqe307FyB"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273839547a0f36b84e3107a3eb6",
                "width": 640
            }
        },
        {
            "trackName": "Na Na Na",
            "trackPreview": "https://p.scdn.co/mp3-preview/387cac54b73c9f0819dcc40e5937f6f43992f838?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6G4ICKUrsPb117ULGyrQ5N",
            "uri": "spotify:track:6G4ICKUrsPb117ULGyrQ5N",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4OVbrPbhvK46A1uXTU1u5F"
                    },
                    "href": "https://api.spotify.com/v1/artists/4OVbrPbhvK46A1uXTU1u5F",
                    "id": "4OVbrPbhvK46A1uXTU1u5F",
                    "name": "Lay Bankz",
                    "type": "artist",
                    "uri": "spotify:artist:4OVbrPbhvK46A1uXTU1u5F"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273d23d1b1a12e3abe63985a8a3",
                "width": 640
            }
        },
        {
            "trackName": "Butterfly Ku",
            "trackPreview": null,
            "trackFull": "",
            "id": "7e8ps3VqglKLsjzwMfFuxJ",
            "uri": "spotify:track:7e8ps3VqglKLsjzwMfFuxJ",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3LZZPxNDGDFVSIPqf4JuEf"
                    },
                    "href": "https://api.spotify.com/v1/artists/3LZZPxNDGDFVSIPqf4JuEf",
                    "id": "3LZZPxNDGDFVSIPqf4JuEf",
                    "name": "Ice Spice",
                    "type": "artist",
                    "uri": "spotify:artist:3LZZPxNDGDFVSIPqf4JuEf"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733a696fc544995ab8d0d6765f",
                "width": 640
            }
        }
    ]
},
{
    "name": "y2k",
    "images": "https://i.scdn.co/image/ab67706f000000037a2554d267135872e95fb0fc",
    "owner": "Soul Life",
    "type": "playlist",
    "tracks": [
        {
            "trackName": "Oops!...I Did It Again",
            "trackPreview": "https://p.scdn.co/mp3-preview/66a5cf0f69b1bb1e8930821881b71756151c5f68?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6naxalmIoLFWR0siv8dnQQ",
            "uri": "spotify:track:6naxalmIoLFWR0siv8dnQQ",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/26dSoYclwsYLMAKD3tpOr4"
                    },
                    "href": "https://api.spotify.com/v1/artists/26dSoYclwsYLMAKD3tpOr4",
                    "id": "26dSoYclwsYLMAKD3tpOr4",
                    "name": "Britney Spears",
                    "type": "artist",
                    "uri": "spotify:artist:26dSoYclwsYLMAKD3tpOr4"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732aa20611c7fb964a74ab01a6",
                "width": 640
            }
        },
        {
            "trackName": "Potential Breakup Song",
            "trackPreview": null,
            "trackFull": "",
            "id": "11dxtPJKR4E0wlSr0A0t47",
            "uri": "spotify:track:11dxtPJKR4E0wlSr0A0t47",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5wugb0kaq0J6nyQ5Xgd17i"
                    },
                    "href": "https://api.spotify.com/v1/artists/5wugb0kaq0J6nyQ5Xgd17i",
                    "id": "5wugb0kaq0J6nyQ5Xgd17i",
                    "name": "Aly & AJ",
                    "type": "artist",
                    "uri": "spotify:artist:5wugb0kaq0J6nyQ5Xgd17i"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739642e82608c68ebc941755de",
                "width": 640
            }
        },
        {
            "trackName": "Perfect Day - Chris Lord Alge Mix",
            "trackPreview": null,
            "trackFull": "",
            "id": "0frKt739Ov9vvKS3JRu5Vi",
            "uri": "spotify:track:0frKt739Ov9vvKS3JRu5Vi",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7ftZLBtMuNBXnnDFKbAblK"
                    },
                    "href": "https://api.spotify.com/v1/artists/7ftZLBtMuNBXnnDFKbAblK",
                    "id": "7ftZLBtMuNBXnnDFKbAblK",
                    "name": "Hoku",
                    "type": "artist",
                    "uri": "spotify:artist:7ftZLBtMuNBXnnDFKbAblK"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a579c825e800b17fdebf8093",
                "width": 640
            }
        },
        {
            "trackName": "Ultimate - From \"Freaky Friday\"/Soundtrack Version",
            "trackPreview": null,
            "trackFull": "",
            "id": "69Zl2MdeQE8twZdiMXJXxZ",
            "uri": "spotify:track:69Zl2MdeQE8twZdiMXJXxZ",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4vRSocKbGh7PsQrYRDVMEF"
                    },
                    "href": "https://api.spotify.com/v1/artists/4vRSocKbGh7PsQrYRDVMEF",
                    "id": "4vRSocKbGh7PsQrYRDVMEF",
                    "name": "Lindsay Lohan",
                    "type": "artist",
                    "uri": "spotify:artist:4vRSocKbGh7PsQrYRDVMEF"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735a3ee7b38c277cfbe6a3c7aa",
                "width": 640
            }
        },
        {
            "trackName": "What a Girl Wants",
            "trackPreview": "https://p.scdn.co/mp3-preview/e53424c96b8572f0680c82f90994e99ef4bc40b3?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5bGmuxShUba9maPswDnhCs",
            "uri": "spotify:track:5bGmuxShUba9maPswDnhCs",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS"
                    },
                    "href": "https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS",
                    "id": "1l7ZsJRRS8wlW3WfJfPfNS",
                    "name": "Christina Aguilera",
                    "type": "artist",
                    "uri": "spotify:artist:1l7ZsJRRS8wlW3WfJfPfNS"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f89996e214be1763b2a9e948",
                "width": 640
            }
        },
        {
            "trackName": "Without Me",
            "trackPreview": null,
            "trackFull": "",
            "id": "7lQ8MOhq6IN2w8EYcFNSUk",
            "uri": "spotify:track:7lQ8MOhq6IN2w8EYcFNSUk",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR"
                    },
                    "href": "https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR",
                    "id": "7dGJo4pcD2V6oG8kP0tJRR",
                    "name": "Eminem",
                    "type": "artist",
                    "uri": "spotify:artist:7dGJo4pcD2V6oG8kP0tJRR"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4",
                "width": 640
            }
        },
        {
            "trackName": "Stars Are Blind",
            "trackPreview": "https://p.scdn.co/mp3-preview/7e51de1d60fea33b6932a65b33baafecd61a2ec7?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "71V89tJj9CboDyzncO6ZN2",
            "uri": "spotify:track:71V89tJj9CboDyzncO6ZN2",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1vkJFCwstOoJO7yQ4lTtLK"
                    },
                    "href": "https://api.spotify.com/v1/artists/1vkJFCwstOoJO7yQ4lTtLK",
                    "id": "1vkJFCwstOoJO7yQ4lTtLK",
                    "name": "Paris Hilton",
                    "type": "artist",
                    "uri": "spotify:artist:1vkJFCwstOoJO7yQ4lTtLK"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273442533891bd8dc4c1ce79049",
                "width": 640
            }
        },
        {
            "trackName": "Hips Don't Lie (feat. Wyclef Jean)",
            "trackPreview": "https://p.scdn.co/mp3-preview/374b492571c9ba59c2c4b455ab79ee7501adab93?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "3ZFTkvIE7kyPt6Nu3PEa7V",
            "uri": "spotify:track:3ZFTkvIE7kyPt6Nu3PEa7V",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                    },
                    "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                    "id": "0EmeFodog0BfCgMzAIvKQp",
                    "name": "Shakira",
                    "type": "artist",
                    "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7aBzpmFXB4WWpPl2F7RjBe"
                    },
                    "href": "https://api.spotify.com/v1/artists/7aBzpmFXB4WWpPl2F7RjBe",
                    "id": "7aBzpmFXB4WWpPl2F7RjBe",
                    "name": "Wyclef Jean",
                    "type": "artist",
                    "uri": "spotify:artist:7aBzpmFXB4WWpPl2F7RjBe"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27327ddd747545c0d0cfe7595fa",
                "width": 640
            }
        },
        {
            "trackName": "What Dreams Are Made Of",
            "trackPreview": null,
            "trackFull": "",
            "id": "7J1S5n6Kn4wZEu6xrBT0gk",
            "uri": "spotify:track:7J1S5n6Kn4wZEu6xrBT0gk",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2S9W9aSAd7e5mp8WqWxN2h"
                    },
                    "href": "https://api.spotify.com/v1/artists/2S9W9aSAd7e5mp8WqWxN2h",
                    "id": "2S9W9aSAd7e5mp8WqWxN2h",
                    "name": "Hilary Duff",
                    "type": "artist",
                    "uri": "spotify:artist:2S9W9aSAd7e5mp8WqWxN2h"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739f64e3663701c381b8b37e4f",
                "width": 640
            }
        },
        {
            "trackName": "Us Against the World",
            "trackPreview": "https://p.scdn.co/mp3-preview/21acaf3d9b6cb8488ba0bb74ef37f15c35a9250b?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "7ID5MLSB71awNzjI7jyojG",
            "uri": "spotify:track:7ID5MLSB71awNzjI7jyojG",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6tNZHg8DS7zzXnIxp3ZTEP"
                    },
                    "href": "https://api.spotify.com/v1/artists/6tNZHg8DS7zzXnIxp3ZTEP",
                    "id": "6tNZHg8DS7zzXnIxp3ZTEP",
                    "name": "Play",
                    "type": "artist",
                    "uri": "spotify:artist:6tNZHg8DS7zzXnIxp3ZTEP"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730d3e20810daee882068cbc6b",
                "width": 640
            }
        },
        {
            "trackName": "Promiscuous",
            "trackPreview": null,
            "trackFull": "",
            "id": "2gam98EZKrF9XuOkU13ApN",
            "uri": "spotify:track:2gam98EZKrF9XuOkU13ApN",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2jw70GZXlAI8QzWeY2bgRc"
                    },
                    "href": "https://api.spotify.com/v1/artists/2jw70GZXlAI8QzWeY2bgRc",
                    "id": "2jw70GZXlAI8QzWeY2bgRc",
                    "name": "Nelly Furtado",
                    "type": "artist",
                    "uri": "spotify:artist:2jw70GZXlAI8QzWeY2bgRc"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5Y5TRrQiqgUO4S36tzjIRZ"
                    },
                    "href": "https://api.spotify.com/v1/artists/5Y5TRrQiqgUO4S36tzjIRZ",
                    "id": "5Y5TRrQiqgUO4S36tzjIRZ",
                    "name": "Timbaland",
                    "type": "artist",
                    "uri": "spotify:artist:5Y5TRrQiqgUO4S36tzjIRZ"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a6f439c8957170652f9410e2",
                "width": 640
            }
        },
        {
            "trackName": "Yeah! (feat. Lil Jon & Ludacris)",
            "trackPreview": "https://p.scdn.co/mp3-preview/1eca1cb525c2b0df2ecba52f1105f139323e09a2?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5rb9QrpfcKFHM1EUbSIurX",
            "uri": "spotify:track:5rb9QrpfcKFHM1EUbSIurX",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj"
                    },
                    "href": "https://api.spotify.com/v1/artists/23zg3TcAtWQy7J6upgbUnj",
                    "id": "23zg3TcAtWQy7J6upgbUnj",
                    "name": "Usher",
                    "type": "artist",
                    "uri": "spotify:artist:23zg3TcAtWQy7J6upgbUnj"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7sfl4Xt5KmfyDs2T3SVSMK"
                    },
                    "href": "https://api.spotify.com/v1/artists/7sfl4Xt5KmfyDs2T3SVSMK",
                    "id": "7sfl4Xt5KmfyDs2T3SVSMK",
                    "name": "Lil Jon",
                    "type": "artist",
                    "uri": "spotify:artist:7sfl4Xt5KmfyDs2T3SVSMK"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3ipn9JLAPI5GUEo4y4jcoi"
                    },
                    "href": "https://api.spotify.com/v1/artists/3ipn9JLAPI5GUEo4y4jcoi",
                    "id": "3ipn9JLAPI5GUEo4y4jcoi",
                    "name": "Ludacris",
                    "type": "artist",
                    "uri": "spotify:artist:3ipn9JLAPI5GUEo4y4jcoi"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da",
                "width": 640
            }
        },
        {
            "trackName": "Hey Ya!",
            "trackPreview": "https://p.scdn.co/mp3-preview/d24b3c4135ced9157b0ea3015a6bcc048e0c2e3a?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "2PpruBYCo4H7WOBJ7Q2EwM",
            "uri": "spotify:track:2PpruBYCo4H7WOBJ7Q2EwM",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1G9G7WwrXka3Z1r7aIDjI7"
                    },
                    "href": "https://api.spotify.com/v1/artists/1G9G7WwrXka3Z1r7aIDjI7",
                    "id": "1G9G7WwrXka3Z1r7aIDjI7",
                    "name": "Outkast",
                    "type": "artist",
                    "uri": "spotify:artist:1G9G7WwrXka3Z1r7aIDjI7"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736a6387ab37f64034cdc7b367",
                "width": 640
            }
        },
        {
            "trackName": "TiK ToK",
            "trackPreview": "https://p.scdn.co/mp3-preview/ea95bec21bd6c4979cc91f5d5528b533d879905c?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "0HPD5WQqrq7wPWR7P7Dw1i",
            "uri": "spotify:track:0HPD5WQqrq7wPWR7P7Dw1i",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX"
                    },
                    "href": "https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX",
                    "id": "6LqNN22kT3074XbTVUrhzX",
                    "name": "Kesha",
                    "type": "artist",
                    "uri": "spotify:artist:6LqNN22kT3074XbTVUrhzX"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737a6339d6ddfd579f77559b3c",
                "width": 640
            }
        },
        {
            "trackName": "I Want It That Way",
            "trackPreview": "https://p.scdn.co/mp3-preview/4eec31d974fd622ac7858affd9759f2017dd87e4?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "47BBI51FKFwOMlIiX6m8ya",
            "uri": "spotify:track:47BBI51FKFwOMlIiX6m8ya",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5rSXSAkZ67PYJSvpUpkOr7"
                    },
                    "href": "https://api.spotify.com/v1/artists/5rSXSAkZ67PYJSvpUpkOr7",
                    "id": "5rSXSAkZ67PYJSvpUpkOr7",
                    "name": "Backstreet Boys",
                    "type": "artist",
                    "uri": "spotify:artist:5rSXSAkZ67PYJSvpUpkOr7"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732160c02bc56f192df0f4986b",
                "width": 640
            }
        }
    ]
},
{
    "name": "Éxitos Argentina",
    "images": "https://i.scdn.co/image/ab67706f00000003aea6319846d211a703f19ad8",
    "owner": "Soul Life",
    "type": "playlist",
    "tracks": [
        {
            "trackName": "LALA",
            "trackPreview": "https://p.scdn.co/mp3-preview/42772b16b4e575d1b15b0ec7f94e335539390d2d?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "7ABLbnD53cQK00mhcaOUVG",
            "uri": "spotify:track:7ABLbnD53cQK00mhcaOUVG",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7iK8PXO48WeuP03g8YR51W"
                    },
                    "href": "https://api.spotify.com/v1/artists/7iK8PXO48WeuP03g8YR51W",
                    "id": "7iK8PXO48WeuP03g8YR51W",
                    "name": "Myke Towers",
                    "type": "artist",
                    "uri": "spotify:artist:7iK8PXO48WeuP03g8YR51W"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730656d5ce813ca3cc4b677e05",
                "width": 640
            }
        },
        {
            "trackName": "CORAZÓN VACÍO",
            "trackPreview": "https://p.scdn.co/mp3-preview/15a67adb85841c362532e7cf8c01a12251084880?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "3oNnzH6hmqIGIhJ1NcHlrh",
            "uri": "spotify:track:3oNnzH6hmqIGIhJ1NcHlrh",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1DxLCyH42yaHKGK3cl5bvG"
                    },
                    "href": "https://api.spotify.com/v1/artists/1DxLCyH42yaHKGK3cl5bvG",
                    "id": "1DxLCyH42yaHKGK3cl5bvG",
                    "name": "Maria Becerra",
                    "type": "artist",
                    "uri": "spotify:artist:1DxLCyH42yaHKGK3cl5bvG"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a3cbe5aa0bcf10eb02a8c960",
                "width": 640
            }
        },
        {
            "trackName": "DISCOTEKA (feat. Locura Mix)",
            "trackPreview": "https://p.scdn.co/mp3-preview/575c3860ffaccd444d3c63dfdc2d38e0e4e371e4?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5w7RsSgxxBwdVTSyQDj8Bi",
            "uri": "spotify:track:5w7RsSgxxBwdVTSyQDj8Bi",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4oZolC0sCwCAKqsNXfRlVS"
                    },
                    "href": "https://api.spotify.com/v1/artists/4oZolC0sCwCAKqsNXfRlVS",
                    "id": "4oZolC0sCwCAKqsNXfRlVS",
                    "name": "The La Planta",
                    "type": "artist",
                    "uri": "spotify:artist:4oZolC0sCwCAKqsNXfRlVS"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5TP8Ubo4jLKEi4Mw2O8fAk"
                    },
                    "href": "https://api.spotify.com/v1/artists/5TP8Ubo4jLKEi4Mw2O8fAk",
                    "id": "5TP8Ubo4jLKEi4Mw2O8fAk",
                    "name": "BM",
                    "type": "artist",
                    "uri": "spotify:artist:5TP8Ubo4jLKEi4Mw2O8fAk"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2cdoH2XFAhj0LlSo4P2fJJ"
                    },
                    "href": "https://api.spotify.com/v1/artists/2cdoH2XFAhj0LlSo4P2fJJ",
                    "id": "2cdoH2XFAhj0LlSo4P2fJJ",
                    "name": "Alejo Isakk",
                    "type": "artist",
                    "uri": "spotify:artist:2cdoH2XFAhj0LlSo4P2fJJ"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/42cc22xiuvWzjmFHSKwwwv"
                    },
                    "href": "https://api.spotify.com/v1/artists/42cc22xiuvWzjmFHSKwwwv",
                    "id": "42cc22xiuvWzjmFHSKwwwv",
                    "name": "Locura Mix",
                    "type": "artist",
                    "uri": "spotify:artist:42cc22xiuvWzjmFHSKwwwv"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736eb51112e2a1f9d520e83344",
                "width": 640
            }
        },
        {
            "trackName": "Luck Ra | Mission 15",
            "trackPreview": "https://p.scdn.co/mp3-preview/39a731b8dcf41371a6f764e3e6e4b23d821bdd4b?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6CIMoDfTsvFVGhFi3v9Izn",
            "uri": "spotify:track:6CIMoDfTsvFVGhFi3v9Izn",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6oMRQ5H3A2XA5I3RG3leni"
                    },
                    "href": "https://api.spotify.com/v1/artists/6oMRQ5H3A2XA5I3RG3leni",
                    "id": "6oMRQ5H3A2XA5I3RG3leni",
                    "name": "Alan Gomez",
                    "type": "artist",
                    "uri": "spotify:artist:6oMRQ5H3A2XA5I3RG3leni"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4kcQWQDK0u9AftVSpdrAgk"
                    },
                    "href": "https://api.spotify.com/v1/artists/4kcQWQDK0u9AftVSpdrAgk",
                    "id": "4kcQWQDK0u9AftVSpdrAgk",
                    "name": "Luck Ra",
                    "type": "artist",
                    "uri": "spotify:artist:4kcQWQDK0u9AftVSpdrAgk"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731ff540ce0b6ebd31b8c6a462",
                "width": 640
            }
        },
        {
            "trackName": "Columbia",
            "trackPreview": "https://p.scdn.co/mp3-preview/e3d6df66fe67f618166a2cab858580ac8a96486a?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6XbtvPmIpyCbjuT0e8cQtp",
            "uri": "spotify:track:6XbtvPmIpyCbjuT0e8cQtp",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/52iwsT98xCoGgiGntTiR7K"
                    },
                    "href": "https://api.spotify.com/v1/artists/52iwsT98xCoGgiGntTiR7K",
                    "id": "52iwsT98xCoGgiGntTiR7K",
                    "name": "Quevedo",
                    "type": "artist",
                    "uri": "spotify:artist:52iwsT98xCoGgiGntTiR7K"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a00a817b017c6f6bf8460be9",
                "width": 640
            }
        },
        {
            "trackName": "Me Enteré",
            "trackPreview": "https://p.scdn.co/mp3-preview/3b35fc107fae23e8d7f7fc25daa984b73138247e?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5FWQLEX0lavdxiWGBNkBQ4",
            "uri": "spotify:track:5FWQLEX0lavdxiWGBNkBQ4",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5Y3MV9DZ0d87NnVm56qSY1"
                    },
                    "href": "https://api.spotify.com/v1/artists/5Y3MV9DZ0d87NnVm56qSY1",
                    "id": "5Y3MV9DZ0d87NnVm56qSY1",
                    "name": "Tiago PZK",
                    "type": "artist",
                    "uri": "spotify:artist:5Y3MV9DZ0d87NnVm56qSY1"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7vXDAI8JwjW531ouMGbfcp"
                    },
                    "href": "https://api.spotify.com/v1/artists/7vXDAI8JwjW531ouMGbfcp",
                    "id": "7vXDAI8JwjW531ouMGbfcp",
                    "name": "TINI",
                    "type": "artist",
                    "uri": "spotify:artist:7vXDAI8JwjW531ouMGbfcp"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735d78fa55507610429ba13cb6",
                "width": 640
            }
        },
        {
            "trackName": "ASQUEROSO",
            "trackPreview": "https://p.scdn.co/mp3-preview/162e688ae1e6db7622bf15bd482abab4b91cf4d5?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "1PSlMgsJ0V7pUeumk13fbs",
            "uri": "spotify:track:1PSlMgsJ0V7pUeumk13fbs",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5Y3MV9DZ0d87NnVm56qSY1"
                    },
                    "href": "https://api.spotify.com/v1/artists/5Y3MV9DZ0d87NnVm56qSY1",
                    "id": "5Y3MV9DZ0d87NnVm56qSY1",
                    "name": "Tiago PZK",
                    "type": "artist",
                    "uri": "spotify:artist:5Y3MV9DZ0d87NnVm56qSY1"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2Yia9CwtgcrsN5kVOQ0qRA"
                    },
                    "href": "https://api.spotify.com/v1/artists/2Yia9CwtgcrsN5kVOQ0qRA",
                    "id": "2Yia9CwtgcrsN5kVOQ0qRA",
                    "name": "ZECCA",
                    "type": "artist",
                    "uri": "spotify:artist:2Yia9CwtgcrsN5kVOQ0qRA"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733d4893e9b9c84d0b28fdb7b5",
                "width": 640
            }
        },
        {
            "trackName": "Remember Me",
            "trackPreview": "https://p.scdn.co/mp3-preview/dae7809fd29c52811e4400ecfbf61766b8a209f5?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "7LknbZPcWVDMb6VLDI01MY",
            "uri": "spotify:track:7LknbZPcWVDMb6VLDI01MY",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4m6ubhNsdwF4psNf3R8kwR"
                    },
                    "href": "https://api.spotify.com/v1/artists/4m6ubhNsdwF4psNf3R8kwR",
                    "id": "4m6ubhNsdwF4psNf3R8kwR",
                    "name": "KHEA",
                    "type": "artist",
                    "uri": "spotify:artist:4m6ubhNsdwF4psNf3R8kwR"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/716NhGYqD1jl2wI1Qkgq36"
                    },
                    "href": "https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36",
                    "id": "716NhGYqD1jl2wI1Qkgq36",
                    "name": "Bizarrap",
                    "type": "artist",
                    "uri": "spotify:artist:716NhGYqD1jl2wI1Qkgq36"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273745c8239aecb6d70816e747c",
                "width": 640
            }
        },
        {
            "trackName": "Salgo a Bailar",
            "trackPreview": "https://p.scdn.co/mp3-preview/0b407a95ed1f3a608024ab2cbea0fdf04df808e8?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "7xX7bER73YZSE4m76OpMXV",
            "uri": "spotify:track:7xX7bER73YZSE4m76OpMXV",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0dUyjgCyjfj5eMx6bX2TWf"
                    },
                    "href": "https://api.spotify.com/v1/artists/0dUyjgCyjfj5eMx6bX2TWf",
                    "id": "0dUyjgCyjfj5eMx6bX2TWf",
                    "name": "FMK",
                    "type": "artist",
                    "uri": "spotify:artist:0dUyjgCyjfj5eMx6bX2TWf"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0AqlFI0tz2DsEoJlKSIiT9"
                    },
                    "href": "https://api.spotify.com/v1/artists/0AqlFI0tz2DsEoJlKSIiT9",
                    "id": "0AqlFI0tz2DsEoJlKSIiT9",
                    "name": "Emilia",
                    "type": "artist",
                    "uri": "spotify:artist:0AqlFI0tz2DsEoJlKSIiT9"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733c70172e31f35f084e1a8fae",
                "width": 640
            }
        },
        {
            "trackName": "Los del Espacio",
            "trackPreview": "https://p.scdn.co/mp3-preview/5bbdd15509b10d1b62cf5aa43500255754e2096b?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "1Hs1uUl8o2VtDp1DABFq0O",
            "uri": "spotify:track:1Hs1uUl8o2VtDp1DABFq0O",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1vqR17Iv8VFdzure1TAXEq"
                    },
                    "href": "https://api.spotify.com/v1/artists/1vqR17Iv8VFdzure1TAXEq",
                    "id": "1vqR17Iv8VFdzure1TAXEq",
                    "name": "LIT killah",
                    "type": "artist",
                    "uri": "spotify:artist:1vqR17Iv8VFdzure1TAXEq"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5Y3MV9DZ0d87NnVm56qSY1"
                    },
                    "href": "https://api.spotify.com/v1/artists/5Y3MV9DZ0d87NnVm56qSY1",
                    "id": "5Y3MV9DZ0d87NnVm56qSY1",
                    "name": "Tiago PZK",
                    "type": "artist",
                    "uri": "spotify:artist:5Y3MV9DZ0d87NnVm56qSY1"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1DxLCyH42yaHKGK3cl5bvG"
                    },
                    "href": "https://api.spotify.com/v1/artists/1DxLCyH42yaHKGK3cl5bvG",
                    "id": "1DxLCyH42yaHKGK3cl5bvG",
                    "name": "Maria Becerra",
                    "type": "artist",
                    "uri": "spotify:artist:1DxLCyH42yaHKGK3cl5bvG"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg"
                    },
                    "href": "https://api.spotify.com/v1/artists/1bAftSH8umNcGZ0uyV7LMg",
                    "id": "1bAftSH8umNcGZ0uyV7LMg",
                    "name": "Duki",
                    "type": "artist",
                    "uri": "spotify:artist:1bAftSH8umNcGZ0uyV7LMg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0AqlFI0tz2DsEoJlKSIiT9"
                    },
                    "href": "https://api.spotify.com/v1/artists/0AqlFI0tz2DsEoJlKSIiT9",
                    "id": "0AqlFI0tz2DsEoJlKSIiT9",
                    "name": "Emilia",
                    "type": "artist",
                    "uri": "spotify:artist:0AqlFI0tz2DsEoJlKSIiT9"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3Apb2lGmGJaBmr0TTBJvIZ"
                    },
                    "href": "https://api.spotify.com/v1/artists/3Apb2lGmGJaBmr0TTBJvIZ",
                    "id": "3Apb2lGmGJaBmr0TTBJvIZ",
                    "name": "Rusherking",
                    "type": "artist",
                    "uri": "spotify:artist:3Apb2lGmGJaBmr0TTBJvIZ"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2OhUNb01gLwygOizYvTm0e"
                    },
                    "href": "https://api.spotify.com/v1/artists/2OhUNb01gLwygOizYvTm0e",
                    "id": "2OhUNb01gLwygOizYvTm0e",
                    "name": "Big One",
                    "type": "artist",
                    "uri": "spotify:artist:2OhUNb01gLwygOizYvTm0e"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0dUyjgCyjfj5eMx6bX2TWf"
                    },
                    "href": "https://api.spotify.com/v1/artists/0dUyjgCyjfj5eMx6bX2TWf",
                    "id": "0dUyjgCyjfj5eMx6bX2TWf",
                    "name": "FMK",
                    "type": "artist",
                    "uri": "spotify:artist:0dUyjgCyjfj5eMx6bX2TWf"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27352a52eac3761e2133bd0f57a",
                "width": 640
            }
        },
        {
            "trackName": "Ni Una Ni Dos",
            "trackPreview": "https://p.scdn.co/mp3-preview/a7718f2e0bdad78f08cd7c9f3240ddb8374a5f32?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "0H9WU0OIXPpbOVgzzOanXb",
            "uri": "spotify:track:0H9WU0OIXPpbOVgzzOanXb",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5TP8Ubo4jLKEi4Mw2O8fAk"
                    },
                    "href": "https://api.spotify.com/v1/artists/5TP8Ubo4jLKEi4Mw2O8fAk",
                    "id": "5TP8Ubo4jLKEi4Mw2O8fAk",
                    "name": "BM",
                    "type": "artist",
                    "uri": "spotify:artist:5TP8Ubo4jLKEi4Mw2O8fAk"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732e719c605f8d5be0633611a6",
                "width": 640
            }
        },
        {
            "trackName": "Dale Mecha",
            "trackPreview": "https://p.scdn.co/mp3-preview/bf0cd37d368a25065f88d734bb4c6c2ddf1767fd?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "3WndNMJo029mMO64l9hGFm",
            "uri": "spotify:track:3WndNMJo029mMO64l9hGFm",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2IKdK6PbitvCiXt1t2bPU6"
                    },
                    "href": "https://api.spotify.com/v1/artists/2IKdK6PbitvCiXt1t2bPU6",
                    "id": "2IKdK6PbitvCiXt1t2bPU6",
                    "name": "Mesita",
                    "type": "artist",
                    "uri": "spotify:artist:2IKdK6PbitvCiXt1t2bPU6"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273419f7bb549d24a1c68bcdf93",
                "width": 640
            }
        },
        {
            "trackName": "No_se_ve.mp3",
            "trackPreview": "https://p.scdn.co/mp3-preview/3bca60d71ee79d31a0f2bf4ca4adf5c70a4c909c?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "2iIBpwP4FyQ95xgVail3yr",
            "uri": "spotify:track:2iIBpwP4FyQ95xgVail3yr",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0AqlFI0tz2DsEoJlKSIiT9"
                    },
                    "href": "https://api.spotify.com/v1/artists/0AqlFI0tz2DsEoJlKSIiT9",
                    "id": "0AqlFI0tz2DsEoJlKSIiT9",
                    "name": "Emilia",
                    "type": "artist",
                    "uri": "spotify:artist:0AqlFI0tz2DsEoJlKSIiT9"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3CDoRporvSjdzTrm99a3gi"
                    },
                    "href": "https://api.spotify.com/v1/artists/3CDoRporvSjdzTrm99a3gi",
                    "id": "3CDoRporvSjdzTrm99a3gi",
                    "name": "LUDMILLA",
                    "type": "artist",
                    "uri": "spotify:artist:3CDoRporvSjdzTrm99a3gi"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2Yia9CwtgcrsN5kVOQ0qRA"
                    },
                    "href": "https://api.spotify.com/v1/artists/2Yia9CwtgcrsN5kVOQ0qRA",
                    "id": "2Yia9CwtgcrsN5kVOQ0qRA",
                    "name": "ZECCA",
                    "type": "artist",
                    "uri": "spotify:artist:2Yia9CwtgcrsN5kVOQ0qRA"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27332630fe83750d8db0b2b2d5c",
                "width": 640
            }
        },
        {
            "trackName": "ADIÓS",
            "trackPreview": "https://p.scdn.co/mp3-preview/9f66b46a88fc763219226551c1736104328274da?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "2bNCiY24Eh4saMcc23bvUN",
            "uri": "spotify:track:2bNCiY24Eh4saMcc23bvUN",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1DxLCyH42yaHKGK3cl5bvG"
                    },
                    "href": "https://api.spotify.com/v1/artists/1DxLCyH42yaHKGK3cl5bvG",
                    "id": "1DxLCyH42yaHKGK3cl5bvG",
                    "name": "Maria Becerra",
                    "type": "artist",
                    "uri": "spotify:artist:1DxLCyH42yaHKGK3cl5bvG"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27377ec4341ebb8a0dbfe2df739",
                "width": 640
            }
        },
        {
            "trackName": "Un Finde | CROSSOVER #2",
            "trackPreview": "https://p.scdn.co/mp3-preview/38b8f2c063a896c568b9741dcd6e194be0a0376b?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "3tiJUOfAEqIrLFRQgGgdoY",
            "uri": "spotify:track:3tiJUOfAEqIrLFRQgGgdoY",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2OhUNb01gLwygOizYvTm0e"
                    },
                    "href": "https://api.spotify.com/v1/artists/2OhUNb01gLwygOizYvTm0e",
                    "id": "2OhUNb01gLwygOizYvTm0e",
                    "name": "Big One",
                    "type": "artist",
                    "uri": "spotify:artist:2OhUNb01gLwygOizYvTm0e"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0dUyjgCyjfj5eMx6bX2TWf"
                    },
                    "href": "https://api.spotify.com/v1/artists/0dUyjgCyjfj5eMx6bX2TWf",
                    "id": "0dUyjgCyjfj5eMx6bX2TWf",
                    "name": "FMK",
                    "type": "artist",
                    "uri": "spotify:artist:0dUyjgCyjfj5eMx6bX2TWf"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/06Q5VlSAku57lFzyME3HrM"
                    },
                    "href": "https://api.spotify.com/v1/artists/06Q5VlSAku57lFzyME3HrM",
                    "id": "06Q5VlSAku57lFzyME3HrM",
                    "name": "Ke Personajes",
                    "type": "artist",
                    "uri": "spotify:artist:06Q5VlSAku57lFzyME3HrM"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fc9ce77ab8fcd9eadda3acd3",
                "width": 640
            }
        }
    ]
},
{
    "name": "DOPE.",
    "images": "https://i.scdn.co/image/ab67706f000000033ffb864f5d14cae49619b022",
    "owner": "Soul Life",
    "type": "playlist",
    "tracks": [
        {
            "trackName": "Patience (feat. Don Toliver)",
            "trackPreview": "https://p.scdn.co/mp3-preview/a7a884208df125540e52dd27e27796b8f880ff55?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "2qTzVCeWC2OY28r7gHagAa",
            "uri": "spotify:track:2qTzVCeWC2OY28r7gHagAa",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"
                    },
                    "href": "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
                    "id": "4O15NlyKLIASxsJ0PrXPfz",
                    "name": "Lil Uzi Vert",
                    "type": "artist",
                    "uri": "spotify:artist:4O15NlyKLIASxsJ0PrXPfz"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs"
                    },
                    "href": "https://api.spotify.com/v1/artists/4Gso3d4CscCijv0lmajZWs",
                    "id": "4Gso3d4CscCijv0lmajZWs",
                    "name": "Don Toliver",
                    "type": "artist",
                    "uri": "spotify:artist:4Gso3d4CscCijv0lmajZWs"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fe791bf2b5500f601ad36f66",
                "width": 640
            }
        },
        {
            "trackName": "K-POP",
            "trackPreview": "https://p.scdn.co/mp3-preview/011ff5d71b1fad87bc1f4bed5a1abab3e0500426?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5L3ecxQnQ9qTBmnLQiwf0C",
            "uri": "spotify:track:5L3ecxQnQ9qTBmnLQiwf0C",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                    },
                    "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                    "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                    "name": "Travis Scott",
                    "type": "artist",
                    "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
                    },
                    "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
                    "id": "4q3ewBCX7sLwd24euuV69X",
                    "name": "Bad Bunny",
                    "type": "artist",
                    "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                    },
                    "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                    "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                    "name": "The Weeknd",
                    "type": "artist",
                    "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273893489768de0c42b4d217b82",
                "width": 640
            }
        },
        {
            "trackName": "fukumean",
            "trackPreview": "https://p.scdn.co/mp3-preview/f237ab921af697ba9b49e12fa167c2ce1a82d6b4?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "4rXLjWdF2ZZpXCVTfWcshS",
            "uri": "spotify:track:4rXLjWdF2ZZpXCVTfWcshS",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2hlmm7s2ICUX0LVIhVFlZQ"
                    },
                    "href": "https://api.spotify.com/v1/artists/2hlmm7s2ICUX0LVIhVFlZQ",
                    "id": "2hlmm7s2ICUX0LVIhVFlZQ",
                    "name": "Gunna",
                    "type": "artist",
                    "uri": "spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273017d5e26552345c4b1575b6c",
                "width": 640
            }
        },
        {
            "trackName": "Calling (Spider-Man: Across the Spider-Verse) (Metro Boomin & Swae Lee, NAV, feat. A Boogie Wit da Hoodie)",
            "trackPreview": null,
            "trackFull": "",
            "id": "5rurggqwwudn9clMdcchxT",
            "uri": "spotify:track:5rurggqwwudn9clMdcchxT",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
                    },
                    "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
                    "id": "0iEtIxbK0KxaSlF7G42ZOp",
                    "name": "Metro Boomin",
                    "type": "artist",
                    "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX"
                    },
                    "href": "https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX",
                    "id": "1zNqQNIdeOUZHb8zbZRFMX",
                    "name": "Swae Lee",
                    "type": "artist",
                    "uri": "spotify:artist:1zNqQNIdeOUZHb8zbZRFMX"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7rkW85dBwwrJtlHRDkJDAC"
                    },
                    "href": "https://api.spotify.com/v1/artists/7rkW85dBwwrJtlHRDkJDAC",
                    "id": "7rkW85dBwwrJtlHRDkJDAC",
                    "name": "NAV",
                    "type": "artist",
                    "uri": "spotify:artist:7rkW85dBwwrJtlHRDkJDAC"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/31W5EY0aAly4Qieq6OFu6I"
                    },
                    "href": "https://api.spotify.com/v1/artists/31W5EY0aAly4Qieq6OFu6I",
                    "id": "31W5EY0aAly4Qieq6OFu6I",
                    "name": "A Boogie Wit da Hoodie",
                    "type": "artist",
                    "uri": "spotify:artist:31W5EY0aAly4Qieq6OFu6I"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
                "width": 640
            }
        },
        {
            "trackName": "Passport Bros (with J. Cole)",
            "trackPreview": null,
            "trackFull": "",
            "id": "3Owi7BjAeziHBYS0gLvHTQ",
            "uri": "spotify:track:3Owi7BjAeziHBYS0gLvHTQ",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/70gP6Ry4Uo0Yx6uzPIdaiJ"
                    },
                    "href": "https://api.spotify.com/v1/artists/70gP6Ry4Uo0Yx6uzPIdaiJ",
                    "id": "70gP6Ry4Uo0Yx6uzPIdaiJ",
                    "name": "Bas",
                    "type": "artist",
                    "uri": "spotify:artist:70gP6Ry4Uo0Yx6uzPIdaiJ"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5"
                    },
                    "href": "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
                    "id": "6l3HvQ5sa6mXTsMTB19rO5",
                    "name": "J. Cole",
                    "type": "artist",
                    "uri": "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730e12283027dbc005ae3f52e5",
                "width": 640
            }
        },
        {
            "trackName": "Oh U Went (feat. Drake)",
            "trackPreview": "https://p.scdn.co/mp3-preview/e0bc5b4bd0c08137d5a0179a355baf99804e0e91?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "7qLr3HMApUbyDkUvgIvHnB",
            "uri": "spotify:track:7qLr3HMApUbyDkUvgIvHnB",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/50co4Is1HCEo8bhOyUWKpn"
                    },
                    "href": "https://api.spotify.com/v1/artists/50co4Is1HCEo8bhOyUWKpn",
                    "id": "50co4Is1HCEo8bhOyUWKpn",
                    "name": "Young Thug",
                    "type": "artist",
                    "uri": "spotify:artist:50co4Is1HCEo8bhOyUWKpn"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
                    },
                    "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
                    "id": "3TVXtAsR1Inumwj472S9r4",
                    "name": "Drake",
                    "type": "artist",
                    "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27337895eee206eabf2682e3064",
                "width": 640
            }
        },
        {
            "trackName": "Too Fast (Pull Over) (with Anderson .Paak & Latto)",
            "trackPreview": null,
            "trackFull": "",
            "id": "6vz3Fyhj6smbuYuaIZHksu",
            "uri": "spotify:track:6vz3Fyhj6smbuYuaIZHksu",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/28ExwzUQsvgJooOI0X1mr3"
                    },
                    "href": "https://api.spotify.com/v1/artists/28ExwzUQsvgJooOI0X1mr3",
                    "id": "28ExwzUQsvgJooOI0X1mr3",
                    "name": "Jay Rock",
                    "type": "artist",
                    "uri": "spotify:artist:28ExwzUQsvgJooOI0X1mr3"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa"
                    },
                    "href": "https://api.spotify.com/v1/artists/3jK9MiCrA42lLAdMGUZpwa",
                    "id": "3jK9MiCrA42lLAdMGUZpwa",
                    "name": "Anderson .Paak",
                    "type": "artist",
                    "uri": "spotify:artist:3jK9MiCrA42lLAdMGUZpwa"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3MdXrJWsbVzdn6fe5JYkSQ"
                    },
                    "href": "https://api.spotify.com/v1/artists/3MdXrJWsbVzdn6fe5JYkSQ",
                    "id": "3MdXrJWsbVzdn6fe5JYkSQ",
                    "name": "Latto",
                    "type": "artist",
                    "uri": "spotify:artist:3MdXrJWsbVzdn6fe5JYkSQ"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27347b05ea453b1f79cc8ffd42b",
                "width": 640
            }
        },
        {
            "trackName": "goosebumps",
            "trackPreview": "https://p.scdn.co/mp3-preview/5c45fee2743d39984ed2c1e2493d04a42d626f81?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "6gBFPUFcJLzWGx4lenP6h2",
            "uri": "spotify:track:6gBFPUFcJLzWGx4lenP6h2",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
                    },
                    "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
                    "id": "0Y5tJX1MQlPlqiwlOH1tJY",
                    "name": "Travis Scott",
                    "type": "artist",
                    "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce",
                "width": 640
            }
        },
        {
            "trackName": "I'm Geekin (feat. NLE Choppa & BIA) - Remix",
            "trackPreview": "https://p.scdn.co/mp3-preview/42cf7807154968a7bce62743fa68a604921e104c?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5TGkqW4UfYV1jQVLrhz4Yc",
            "uri": "spotify:track:5TGkqW4UfYV1jQVLrhz4Yc",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0WK3H9OErSn5zKOkOV5egm"
                    },
                    "href": "https://api.spotify.com/v1/artists/0WK3H9OErSn5zKOkOV5egm",
                    "id": "0WK3H9OErSn5zKOkOV5egm",
                    "name": "DDG",
                    "type": "artist",
                    "uri": "spotify:artist:0WK3H9OErSn5zKOkOV5egm"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0ErzCpIMyLcjPiwT4elrtZ"
                    },
                    "href": "https://api.spotify.com/v1/artists/0ErzCpIMyLcjPiwT4elrtZ",
                    "id": "0ErzCpIMyLcjPiwT4elrtZ",
                    "name": "NLE Choppa",
                    "type": "artist",
                    "uri": "spotify:artist:0ErzCpIMyLcjPiwT4elrtZ"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6veh5zbFpm31XsPdjBgPER"
                    },
                    "href": "https://api.spotify.com/v1/artists/6veh5zbFpm31XsPdjBgPER",
                    "id": "6veh5zbFpm31XsPdjBgPER",
                    "name": "BIA",
                    "type": "artist",
                    "uri": "spotify:artist:6veh5zbFpm31XsPdjBgPER"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735d45527dc4baddcd6c630d9a",
                "width": 640
            }
        },
        {
            "trackName": "You (feat. Ty Dolla $ign)",
            "trackPreview": "https://p.scdn.co/mp3-preview/92e8a88c663ecee19d9c724c75aa26cc1738c2b4?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "5Vt0NNEPzWCVwEkNYF2HQn",
            "uri": "spotify:track:5Vt0NNEPzWCVwEkNYF2HQn",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/137W8MRPWKqSmrBGDBFSop"
                    },
                    "href": "https://api.spotify.com/v1/artists/137W8MRPWKqSmrBGDBFSop",
                    "id": "137W8MRPWKqSmrBGDBFSop",
                    "name": "Wiz Khalifa",
                    "type": "artist",
                    "uri": "spotify:artist:137W8MRPWKqSmrBGDBFSop"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7c0XG5cIJTrrAgEC3ULPiq"
                    },
                    "href": "https://api.spotify.com/v1/artists/7c0XG5cIJTrrAgEC3ULPiq",
                    "id": "7c0XG5cIJTrrAgEC3ULPiq",
                    "name": "Ty Dolla $ign",
                    "type": "artist",
                    "uri": "spotify:artist:7c0XG5cIJTrrAgEC3ULPiq"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739537596af89b5e9c5581f851",
                "width": 640
            }
        },
        {
            "trackName": "My wrist (with Young Thug)",
            "trackPreview": null,
            "trackFull": "",
            "id": "2beD5W9IkefQ04IO39XF7w",
            "uri": "spotify:track:2beD5W9IkefQ04IO39XF7w",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3qiHUAX7zY4Qnjx8TNUzVx"
                    },
                    "href": "https://api.spotify.com/v1/artists/3qiHUAX7zY4Qnjx8TNUzVx",
                    "id": "3qiHUAX7zY4Qnjx8TNUzVx",
                    "name": "Yeat",
                    "type": "artist",
                    "uri": "spotify:artist:3qiHUAX7zY4Qnjx8TNUzVx"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/50co4Is1HCEo8bhOyUWKpn"
                    },
                    "href": "https://api.spotify.com/v1/artists/50co4Is1HCEo8bhOyUWKpn",
                    "id": "50co4Is1HCEo8bhOyUWKpn",
                    "name": "Young Thug",
                    "type": "artist",
                    "uri": "spotify:artist:50co4Is1HCEo8bhOyUWKpn"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731bb60fb52332db117f194f6e",
                "width": 640
            }
        },
        {
            "trackName": "Took My Breath Away (feat. Skye Morales)",
            "trackPreview": null,
            "trackFull": "",
            "id": "4rm5u0dOb7eVBpsB4hsP6g",
            "uri": "spotify:track:4rm5u0dOb7eVBpsB4hsP6g",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6Xgp2XMz1fhVYe7i6yNAax"
                    },
                    "href": "https://api.spotify.com/v1/artists/6Xgp2XMz1fhVYe7i6yNAax",
                    "id": "6Xgp2XMz1fhVYe7i6yNAax",
                    "name": "Trippie Redd",
                    "type": "artist",
                    "uri": "spotify:artist:6Xgp2XMz1fhVYe7i6yNAax"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7aqNn14e0HTC6IU6yuGx4p"
                    },
                    "href": "https://api.spotify.com/v1/artists/7aqNn14e0HTC6IU6yuGx4p",
                    "id": "7aqNn14e0HTC6IU6yuGx4p",
                    "name": "Skye Morales",
                    "type": "artist",
                    "uri": "spotify:artist:7aqNn14e0HTC6IU6yuGx4p"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273920135e6e28818b89b4a95dd",
                "width": 640
            }
        },
        {
            "trackName": "Cut U Off",
            "trackPreview": "https://p.scdn.co/mp3-preview/6a1d37d2a90f60a912efd6063fcc15e8266ac44e?cid=0a5a810744fa4b2291120b509d465eab",
            "trackFull": "",
            "id": "2YIIpDEKJv6OUc7u9tVT7I",
            "uri": "spotify:track:2YIIpDEKJv6OUc7u9tVT7I",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6C1ohJrd5VydigQtaGy5Wa"
                    },
                    "href": "https://api.spotify.com/v1/artists/6C1ohJrd5VydigQtaGy5Wa",
                    "id": "6C1ohJrd5VydigQtaGy5Wa",
                    "name": "Joyner Lucas",
                    "type": "artist",
                    "uri": "spotify:artist:6C1ohJrd5VydigQtaGy5Wa"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7wlFDEWiM5OoIAt8RSli8b"
                    },
                    "href": "https://api.spotify.com/v1/artists/7wlFDEWiM5OoIAt8RSli8b",
                    "id": "7wlFDEWiM5OoIAt8RSli8b",
                    "name": "YoungBoy Never Broke Again",
                    "type": "artist",
                    "uri": "spotify:artist:7wlFDEWiM5OoIAt8RSli8b"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ad779eb9f2723e9823c1b15a",
                "width": 640
            }
        },
        {
            "trackName": "Annihilate (Spider-Man: Across the Spider-Verse) (Metro Boomin & Swae Lee, Lil Wayne, Offset)",
            "trackPreview": null,
            "trackFull": "",
            "id": "39MK3d3fonIP8Mz9oHCTBB",
            "uri": "spotify:track:39MK3d3fonIP8Mz9oHCTBB",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
                    },
                    "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
                    "id": "0iEtIxbK0KxaSlF7G42ZOp",
                    "name": "Metro Boomin",
                    "type": "artist",
                    "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX"
                    },
                    "href": "https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX",
                    "id": "1zNqQNIdeOUZHb8zbZRFMX",
                    "name": "Swae Lee",
                    "type": "artist",
                    "uri": "spotify:artist:1zNqQNIdeOUZHb8zbZRFMX"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865"
                    },
                    "href": "https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865",
                    "id": "55Aa2cqylxrFIXC767Z865",
                    "name": "Lil Wayne",
                    "type": "artist",
                    "uri": "spotify:artist:55Aa2cqylxrFIXC767Z865"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4DdkRBBYG6Yk9Ka8tdJ9BW"
                    },
                    "href": "https://api.spotify.com/v1/artists/4DdkRBBYG6Yk9Ka8tdJ9BW",
                    "id": "4DdkRBBYG6Yk9Ka8tdJ9BW",
                    "name": "Offset",
                    "type": "artist",
                    "uri": "spotify:artist:4DdkRBBYG6Yk9Ka8tdJ9BW"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
                "width": 640
            }
        },
        {
            "trackName": "WDGAF (feat. G-Eazy)",
            "trackPreview": null,
            "trackFull": "",
            "id": "5E24FVNvb8mXpBAySTTr24",
            "uri": "spotify:track:5E24FVNvb8mXpBAySTTr24",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7e10JUMF7MJmmwYpnTSMI5"
                    },
                    "href": "https://api.spotify.com/v1/artists/7e10JUMF7MJmmwYpnTSMI5",
                    "id": "7e10JUMF7MJmmwYpnTSMI5",
                    "name": "Dave East",
                    "type": "artist",
                    "uri": "spotify:artist:7e10JUMF7MJmmwYpnTSMI5"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/02kJSzxNuaWGqwubyUba0Z"
                    },
                    "href": "https://api.spotify.com/v1/artists/02kJSzxNuaWGqwubyUba0Z",
                    "id": "02kJSzxNuaWGqwubyUba0Z",
                    "name": "G-Eazy",
                    "type": "artist",
                    "uri": "spotify:artist:02kJSzxNuaWGqwubyUba0Z"
                }
            ],
            "image": {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27303cc056f135c40439e10ac1d",
                "width": 640
            }
        }
    ]
}
        ]
    )
})



module.exports = app;