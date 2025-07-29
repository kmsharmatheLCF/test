import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [[5, 5]];
const INITIAL_DIRECTION = 'RIGHT';

const getRandomPosition = () => [
  Math.floor(Math.random() * BOARD_SIZE),
  Math.floor(Math.random() * BOARD_SIZE),
];

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(getRandomPosition());
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    const head = snake[0];
    const newHead = [...head];

    switch (direction) {
      case 'UP': newHead[0] -= 1; break;
      case 'DOWN': newHead[0] += 1; break;
      case 'LEFT': newHead[1] -= 1; break;
      case 'RIGHT': newHead[1] += 1; break;
      default: break;
    }

    // Check collisions
    if (
      newHead[0] < 0 || newHead[1] < 0 ||
      newHead[0] >= BOARD_SIZE || newHead[1] >= BOARD_SIZE ||
      snake.some(([x, y]) => x === newHead[0] && y === newHead[1])
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(getRandomPosition());
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, gameOver, score]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
        case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
        case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
        case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(getRandomPosition());
    setGameOver(false);
    setScore(0);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Snake Game</Typography>
        <Typography variant="subtitle1">Score: {score}</Typography>

        <Box
          display="flex"
          flexDirection="column"
          border="2px solid black"
          mx="auto"
          width={BOARD_SIZE * 20}
          height={BOARD_SIZE * 20}
        >
          {Array.from({ length: BOARD_SIZE }).map((_, rowIdx) => (
            <Box key={rowIdx} display="flex" flex={1}>
              {Array.from({ length: BOARD_SIZE }).map((_, colIdx) => {
                const isSnake = snake.some(([x, y]) => x === rowIdx && y === colIdx);
                const isFood = food[0] === rowIdx && food[1] === colIdx;

                return (
                  <Box
                    key={colIdx}
                    width={20}
                    height={20}
                    bgcolor={isSnake ? 'green' : isFood ? 'red' : 'white'}
                    border="1px solid #ccc"
                  />
                );
              })}
            </Box>
          ))}
        </Box>

        {gameOver && (
          <Box mt={2}>
            <Typography color="error" variant="h6">Game Over!</Typography>
            <Button variant="contained" color="primary" onClick={resetGame} sx={{ mt: 1 }}>
              Restart
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default SnakeGame;
