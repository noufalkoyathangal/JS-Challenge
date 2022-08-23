function positive(array) {
  return array.filter(function (item) {
    // Retornar todos os itens que forem falsos
    return item >= 0;
  });
}

array = [1, 0, 4, -2, 5, -8];
console.log(positive(array));
