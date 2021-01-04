import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Player from "./Player";

function Board() {
  const [numbers, setNumbers] = useState(new Array(8));
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState({
    currentPosition: 0,
    totalLength: 6,
    val: "0",
    player: <Player />,
    playerPosition: 0,
    score: 0,
  });

  const clickHandler = () => {
    setPosition({
      ...position,
      currentPosition: (position.currentPosition + 1) % position.totalLength,
      playerPosition:
        position.currentPosition === 3
          ? (position.playerPosition + 1) % 9
          : position.playerPosition,
    });
    setNumbers(() => {
      setIndex(position.currentPosition == 3 ? (index + 1) % 9 : 0);
      numbers[index] = <Player />;
      return numbers;
    });
  };
  return (
    <div>
      <Container fluid="sm">
        <Row>
          <Col xs={3}>
            <div className="game-board">
              {Array.from({ length: 9 }, (_, i) => (
                <div key={i} className="box">
                  <p>
                    {i === position.playerPosition ? position.player : null}
                  </p>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={4}>
            <Button>Score : {position.score}</Button>
          </Col>
          <Col>
            <button className="primary" onClick={clickHandler}>
              GO
            </button>
          </Col>
          <Row>
            {Array.from({ length: position.totalLength }, (_, i) => (
              <div key={i} className="slot">
                <p>{i === position.currentPosition ? position.val : null}</p>
              </div>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Board;
