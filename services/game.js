import games from 'games'

class Game{
  constructor(){
    // console.log(games)
  }

  getSuggestion(options){
    return games.filter((game) => {
      console.log(options)

      if(game.players.min > options.players){
        return false
      }

      if(game.players.max < options.players){
        return false
      }

      return true
    })
  }
}

export default Game
