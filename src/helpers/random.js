export const getRandomDimension = () => {
  //?esta funcion debe retonar un numero de 1 al 126 que representa una dimension
  return Math.floor(Math.random() * 126) + 1;
};
