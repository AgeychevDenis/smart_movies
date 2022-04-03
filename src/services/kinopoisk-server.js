class KinopoiskService {
   _apiKey = '95888346-d31c-438f-b3b4-23ac62a27afd';
   _apiBase = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';

   getResource = async (url) => {
      let res = await fetch(url, {
         headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': this._apiKey,
         }
      });

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   }

   getAllCharacters = async () => {
      const res = await this.getResource('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1');
      return res.films.map(this._transformCharacter);
   }

   getCharacter = async (id) => {
      const res = await this.getResource(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`)
      return this._transformCharacter(res);
   }

   _transformCharacter = (res) => {
      return {
         imageUrl: res.posterUrl,
         rating: res.ratingKinopoisk,
         year: res.year,
         country: res.countries[0].country,
         time: res.filmLength,
         title: res.nameRu,
         genre: res.genres[0].genre
      }
   }
}





export default KinopoiskService;