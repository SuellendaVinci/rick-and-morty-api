# Sobre a API

Esta API permite consultar de informações sobre a série Rick and Morty. É possível consultar informações sobre os personagens, os locais e os episódios da série.

# Rodar a API

Para rodar a aplicação basta abrir o terminal na pasta do projeto e digitar:

```
npm run start
```

<h2>Requisições REST</h2>

URL base rodando localmente:

```
http://localhost:3000
```

<h4>Pegar informações dos personagens</h4>

É possível fazer a requisição de todos personagens assim:

```sh

GET http://localhost:3000/characters
```

Aí obtemos a seguinte resposta, por exemplo:

```sh
{
	"info": {
		"count": 309,
		"pages": 16,
		"next": "https://rickandmortyapi.com/api/character/?page=2&status=alive&gender=male",
		"prev": null
	},
	"results": [
		{
			"id": 1,
			"name": "Rick Sanchez",
			"status": "Alive",
			"species": "Human",
			"type": "",
			"gender": "Male",
			"origin": {
				"name": "Earth (C-137)",
				"url": "https://rickandmortyapi.com/api/location/1"
			},
			"location": {
				"name": "Citadel of Ricks",
				"url": "https://rickandmortyapi.com/api/location/3"
			}
            ...
        }
        ...
    ]
}
```

Podemos também adicionar filtros na requisição. Os filtros são os seguintes:

```
page: para selecionar a página (são 20 personagens por página)
name: para filtrar por nome
status: para por status (alive, dead ou unknown)
species: para filtrar por espécie
gender para filtrar por gênero (female, male, genderless ou unknown)
```

Exemplo de requisição de personagens com filtros:

```sh

GET http://localhost:3000/characters/?page=1&status=alive&gender=male
```

Resposta:

```sh
{
	"info": {
		"count": 309,
		"pages": 16,
		"next": "https://rickandmortyapi.com/api/character/?page=2&status=alive&gender=male",
		"prev": null
	},
	"results": [
		{
			"id": 1,
			"name": "Rick Sanchez",
			"status": "Alive",
			"species": "Human",
			"type": "",
			"gender": "Male",
			"origin": {
				"name": "Earth (C-137)",
				"url": "https://rickandmortyapi.com/api/location/1"
			},
			"location": {
				"name": "Citadel of Ricks",
				"url": "https://rickandmortyapi.com/api/location/3"
			}
            ...
        }
        ...
        ]
        ...
}
```

<h4>Requisição de personagem por id</h4>

Podemos fazer a requisição de personagem por id da seguinte forma:

```sh

GET http://localhost:3000/characters/1
```

Resposta:

```sh
{
	"id": 1,
	"name": "Rick Sanchez",
	"status": "Alive",
	"species": "Human",
	"type": "",
	"gender": "Male",
	"origin": {
		"name": "Earth (C-137)",
		"url": "https://rickandmortyapi.com/api/location/1"
	},
	"location": {
		"name": "Citadel of Ricks",
		"url": "https://rickandmortyapi.com/api/location/3"
	},
	"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	...
}
```

Caso o personagem não seja encontrado é retornado um erro 404 com a seguinte mensagem:

```sh
{
	"message": "Personagem não encontrado!"
}
```

<h4>Requisição para salvar dados em JSON de um personagem em dado um id</h4>

Através da seguinte requisição conseguimos salvar os dados de um personagem em um arquivo JSON no servidor:

```sh
GET http://localhost:3000/characters-save-by-id/1
```

Então é retornada a seguinte resposta com status 200 em caso de sucesso

```sh
{
	"message": "Personagem foram salvo com sucesso!"
}
```

Em caso de erro é retornada a seguinte resposta:

```sh
{
	"message": "Personagem não encontrado!"
}
```

<h4>Requisição para salvar os dados de todos os personagens em JSON</h4>

Ao fazer a requisição abaixo, conseguimos salvar todos dados dos personagens no arquivo rick-and-morty-all-characters.json

```sh
GET http://localhost:3000/characters-save-all
```

Resposta:

```sh
{
	"message": "Todos os dados dos personagens foram salvos com sucesso!"
}
```

<h4>Requisição para selecionar os personagens por origem</h4>

Nessa requisição devemos utilizar o seguinte filtro:

```
page: para selecionar a página
limit: para selecionar o limite de personagens por página (por padrão são 20)
origin: local de origem do personagem
```

Podemos selecionar os personagens por origem utilizando, por exemplo, a seguinte requisição que nesse caso está procurando personagens da Terra:

```sh
GET http://localhost:3000/characters-by-origin/?page=2&limit=5&origin=earth
```

Resposta:

```sh
{
	"page": "2",
	"limit": "5",
	"results": [
		{
			"id": 9,
			"name": "Agency Director",
			"status": "Dead",
			"species": "Human",
			"type": "",
			"gender": "Male",
			"origin": {
				"name": "Earth (Replacement Dimension)",
				"url": "https://rickandmortyapi.com/api/location/20"
			},
			"location": {
				"name": "Earth (Replacement Dimension)",
				"url": "https://rickandmortyapi.com/api/location/20"
			},
			"image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
			"episode": [
				"https://rickandmortyapi.com/api/episode/24"
			],
			"url": "https://rickandmortyapi.com/api/character/9",
			"created": "2017-11-04T20:06:54.976Z"
		},
		{
			"id": 11,
			"name": "Albert Einstein",
			"status": "Dead",
			"species": "Human",
			"type": "",
			"gender": "Male",
			"origin": {
				"name": "Earth (C-137)",
				"url": "https://rickandmortyapi.com/api/location/1"
			},
			"location": {
				"name": "Earth (Replacement Dimension)",
				"url": "https://rickandmortyapi.com/api/location/20"
			},
			"image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
			"episode": [
				"https://rickandmortyapi.com/api/episode/12"
			],
			"url": "https://rickandmortyapi.com/api/character/11",
			"created": "2017-11-04T20:20:20.965Z"
		},
		{
			"id": 12,
			"name": "Alexander",
			"status": "Dead",
			"species": "Human",
			"type": "",
			"gender": "Male",
			"origin": {
				"name": "Earth (C-137)",
				"url": "https://rickandmortyapi.com/api/location/1"
			},
			"location": {
				"name": "Anatomy Park",
				"url": "https://rickandmortyapi.com/api/location/5"
			},
			"image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
			"episode": [
				"https://rickandmortyapi.com/api/episode/3"
			],
			"url": "https://rickandmortyapi.com/api/character/12",
			"created": "2017-11-04T20:32:33.144Z"
		},
		{
			"id": 17,
			"name": "Annie",
			"status": "Alive",
			"species": "Human",
			"type": "",
			"gender": "Female",
			"origin": {
				"name": "Earth (C-137)",
				"url": "https://rickandmortyapi.com/api/location/1"
			},
			"location": {
				"name": "Anatomy Park",
				"url": "https://rickandmortyapi.com/api/location/5"
			},
			"image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
			"episode": [
				"https://rickandmortyapi.com/api/episode/3"
			],
			"url": "https://rickandmortyapi.com/api/character/17",
			"created": "2017-11-04T22:21:24.481Z"
		},
		{
			"id": 25,
			"name": "Armothy",
			"status": "Dead",
			"species": "unknown",
			"type": "Self-aware arm",
			"gender": "Male",
			"origin": {
				"name": "Post-Apocalyptic Earth",
				"url": "https://rickandmortyapi.com/api/location/8"
			},
			"location": {
				"name": "Post-Apocalyptic Earth",
				"url": "https://rickandmortyapi.com/api/location/8"
			},
			"image": "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
			"episode": [
				"https://rickandmortyapi.com/api/episode/23"
			],
			"url": "https://rickandmortyapi.com/api/character/25",
			"created": "2017-11-05T08:54:29.343Z"
		}
	]
}
```

Caso o origin não seja passado como parâmetro é retornado o seguinte erro com status 404:

```sh
{
	"message": "Não foi informada a origem do personagem!"
}
```

<h4>Requisição para retornar as localizações</h4>

Essa requisição das localizações permite os seguintes filtros:

```
page: para escolher a página (cada página tem até 20 locais)
type: o tipo do local (pode ser microverso, planeta, cluster, etc...)
```

A seguir temos um exemplo de requisição de localização:

```sh
GET http://localhost:3000/locations/?page=1&type=Microverse
```

Resposta:

```sh
{
	"info": {
		"count": 3,
		"pages": 1,
		"next": null,
		"prev": null
	},
	"results": [
		{
			"id": 5,
			"name": "Anatomy Park",
			"type": "Microverse",
			"dimension": "Dimension C-137",
			"residents": [
				"https://rickandmortyapi.com/api/character/12",
				"https://rickandmortyapi.com/api/character/17",
				"https://rickandmortyapi.com/api/character/96",
				"https://rickandmortyapi.com/api/character/97",
				"https://rickandmortyapi.com/api/character/98",
				"https://rickandmortyapi.com/api/character/99",
				"https://rickandmortyapi.com/api/character/100",
				"https://rickandmortyapi.com/api/character/101",
				"https://rickandmortyapi.com/api/character/108",
				"https://rickandmortyapi.com/api/character/268",
				"https://rickandmortyapi.com/api/character/300"
			],
			"url": "https://rickandmortyapi.com/api/location/5",
			"created": "2017-11-10T13:08:46.060Z"
		},
        ...
    ]
    ...
}
```

<h4>Requisição para retornar os episódios da série</h4>

Esta requisição possui os seguintes filtros:

```
page: escolher a página de exibição dos resultados (cada página exibe 20 episódios)
episode: filtro para selecionar o episódio escolhido
```

A seguir temos um exemplo de requisição:

```sh
GET http://localhost:3000/episodes/?page=1&episode=S01E01
```

Resposta:

```sh
{
	"info": {
		"count": 1,
		"pages": 1,
		"next": null,
		"prev": null
	},
	"results": [
		{
			"id": 1,
			"name": "Pilot",
			"air_date": "December 2, 2013",
			"episode": "S01E01",
			"characters": [
				"https://rickandmortyapi.com/api/character/1",
				"https://rickandmortyapi.com/api/character/2",
				"https://rickandmortyapi.com/api/character/35",
				"https://rickandmortyapi.com/api/character/38",
				"https://rickandmortyapi.com/api/character/62",
				"https://rickandmortyapi.com/api/character/92",
				"https://rickandmortyapi.com/api/character/127",
				"https://rickandmortyapi.com/api/character/144",
				"https://rickandmortyapi.com/api/character/158",
				"https://rickandmortyapi.com/api/character/175",
				"https://rickandmortyapi.com/api/character/179",
				"https://rickandmortyapi.com/api/character/181",
				"https://rickandmortyapi.com/api/character/239",
				"https://rickandmortyapi.com/api/character/249",
				"https://rickandmortyapi.com/api/character/271",
				"https://rickandmortyapi.com/api/character/338",
				"https://rickandmortyapi.com/api/character/394",
				"https://rickandmortyapi.com/api/character/395",
				"https://rickandmortyapi.com/api/character/435"
			],
			"url": "https://rickandmortyapi.com/api/episode/1",
			"created": "2017-11-10T12:56:33.798Z"
		}
	]
}
```

Caso o episódio não seja encontrado, é retornado um erro na resposta com status 404:

```sh
{
	"message": "Episódio não encontrado!"
}
```
