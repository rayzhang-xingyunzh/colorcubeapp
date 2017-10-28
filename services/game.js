import games from 'games'

class Game{
  constructor(){
    // console.log(games)
    this.DURATION_ALLOWED_DIFF = 10
    this.hotGameIds = [32,4,10,3]
  }

  getHotGames(){
    return games.filter((game) => {
      return this.hotGameIds.indexOf(game.id) > -1
    })
  }

  getGameById(id){
    return games.filter((game) => {
      return id == game.id
    })[0]
  }

  getSuggestion(options){
    let fitGames = games.filter((game) => {
      console.log(options)

      if(game.players.min > options.players){
        return false
      }

      if(game.players.max < options.players){
        return false
      }

      if (Math.abs(game.duration - options.duration) > this.DURATION_ALLOWED_DIFF) {
        return false
      }

      return options.tags.every((tag)=>{
        return game.tags.indexOf(tag) > -1
      })
    })

    if(fitGames.length > 3){
      fitGames = fitGames.sort(()=>{
        return 0.5 - Math.random()
      }).slice(1,3)
    }
    return fitGames
  }

  random(range,quantity){

  }
}

export default Game
