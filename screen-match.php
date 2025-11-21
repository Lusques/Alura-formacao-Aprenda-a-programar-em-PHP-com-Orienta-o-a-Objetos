<?php
echo "Bem-vindo(a) ao screen match!\n";

$nomeFilme = "O poderoso chefão";
$anoLancamento = $argv[1] ?? 1972;
$somaDeNotas = 9 + 8 + 10 + 7 + 9 + 8.1;
$notaFilme = $somaDeNotas / 5;
$incluidoNoPlano = true;

echo $anoLancamento;