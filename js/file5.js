const number_movie = parseInt(
  prompt("Какая часть (1-8) Гарри Поттера вас интересует?"),
);

switch (number_movie) {
  case 1:
    alert(`${number_movie} часть - Филосовский камень.`);
    break;
  case 2:
    alert(`${number_movie} часть - Тайная комната.`);
    break;
  case 3:
    alert(`${number_movie} часть - Узник Азкабана.`);
    break;
  case 4:
    alert(`${number_movie} часть - Кубок огня.`);
    break;
  case 5:
    alert(`${number_movie} часть - Орден Феникса.`);
    break;
  case 6:
    alert(`${number_movie} часть - Принц полукровка.`);
    break;
  case 7:
    alert(`${number_movie} часть - Дары смерти часть 1.`);
    break;
  case 8:
    alert(`${number_movie} часть - дары смерти часть 2.`);
    break;
    default:
        alert('Таких частей я не видел, попробуйте еще.')
}
