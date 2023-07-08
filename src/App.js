import './App.css'
import Popup from 'reactjs-popup'
import {Component} from 'react'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    count: 0,
    isGameActive: true,
    myChoice: '',
    computerChoice: '',
    status: '',
  }

  playAgainClicked = () => {
    this.setState({
      isGameActive: true,
      myChoice: '',
      computerChoice: '',
      status: '',
    })
  }

  userHaveChosen = event => {
    const {id} = event.currentTarget
    console.log(id)
    // const number = Math.floor(Math.random() * 3)
    // console.log(number)
    // let computerChoice = null
    // if (number === 1) {
    //   computerChoice = 'ROCK'
    // } else if (number === 2) {
    //   computerChoice = 'SCISSORS'
    // } else {
    //   computerChoice = 'PAPER'
    // }
    const getRandomChoice = choicesList[Math.floor(Math.random() * 3)]
    const computerChoice = getRandomChoice.id
    console.log(computerChoice)
    const isUserWon =
      (id === 'ROCK' && computerChoice === 'SCISSORS') ||
      (id === 'SCISSORS' && computerChoice === 'PAPER') ||
      (id === 'PAPER' && computerChoice === 'ROCK')
    if (computerChoice === id) {
      this.setState(prevState => ({
        myChoice: id,
        computerChoice,
        status: 'IT IS DRAW',
        count: prevState.count,
        isGameActive: false,
      }))
    } else if (isUserWon) {
      this.setState(prevState => ({
        myChoice: id,
        computerChoice,
        status: 'YOU WON',
        count: prevState.count + 1,
        isGameActive: false,
      }))
    } else {
      this.setState(prevState => ({
        myChoice: id,
        computerChoice,
        status: 'YOU LOSE',
        count: prevState.count - 1,
        isGameActive: false,
      }))
    }
  }

  render() {
    const {count, isGameActive, myChoice, computerChoice, status} = this.state
    return (
      <div className="outerApp">
        {/* upper div */}
        <div className="first">
          <div className="firstChild1">
            <h1>Rock Paper Scissors</h1>
            <h1>Paper</h1>
            <h1>scissor</h1>
          </div>
          <div className="firstChild2">
            <p>Score</p>
            <p className="scorePara">{count}</p>
          </div>
        </div>
        {/* upper div ended */}
        {/* bottom div started */}
        {isGameActive && (
          <div className="bottomDiv">
            <div className="innerBottomDiv">
              {/* first image */}
              <div>
                <button
                  data-testid="rockButton"
                  onClick={this.userHaveChosen}
                  id={choicesList[0].id}
                  type="button"
                >
                  <img
                    alt={choicesList[0].id}
                    className="image"
                    src={choicesList[0].imageUrl}
                  />
                </button>
              </div>
              {/* second image */}
              <div>
                <button
                  onClick={this.userHaveChosen}
                  id={choicesList[1].id}
                  type="button"
                  data-testid="scissorsButton"
                >
                  <img
                    alt={choicesList[1].id}
                    className="image"
                    src={choicesList[1].imageUrl}
                  />
                </button>
              </div>
              {/* third image */}
              <div>
                <button
                  onClick={this.userHaveChosen}
                  id={choicesList[2].id}
                  type="button"
                  data-testid="paperButton"
                >
                  <img
                    alt={choicesList[2].id}
                    className="image"
                    src={choicesList[2].imageUrl}
                  />
                </button>
              </div>
              {/* fourth image */}
            </div>
          </div>
        )}
        {/* bottom div ended */}
        {/* result container */}
        {!isGameActive && (
          <div className="innerBottomDiv">
            {/* inner first */}
            <div className="resultFirst">
              <div>
                <p>YOU</p>
                <img
                  alt="your choice"
                  className="image"
                  src={
                    choicesList.filter(eachItem => eachItem.id === myChoice)[0]
                      .imageUrl
                  }
                />
              </div>
              <div>
                <p>OPPONENT</p>
                <img
                  alt="opponent choice"
                  className="image"
                  src={
                    choicesList.filter(
                      eachItem => eachItem.id === computerChoice,
                    )[0].imageUrl
                  }
                />
              </div>
            </div>
            {/* inner second */}
            <div className="resultSecond">
              <p>{status}</p>
              <button onClick={this.playAgainClicked} type="button">
                Play Again
              </button>
            </div>
            {/* inner third */}
          </div>
        )}
        {/* result container ended */}
        {/* lower div */}
        <div className="lowerDiv">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
          >
            {close => (
              <div className="popupContainer">
                <div className="innerPopup1">
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
                <div>
                  <img
                    alt="rules"
                    className="rulesImage"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
        {/* lower div ended */}
      </div>
    )
  }
}

export default App
