/* 
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

let menorValor = 0,
    maiorValor = 0,
    somaValores = 0,
    numDiasComFaturamento = 0,
    supFaturamento = 0;

fetch('dados.json')
  .then(response => response.json())
  .then(data => {

    const apenasFaturamento = data.filter(item => item.valor > 0);

    for (const dia of data) {
        if(dia.valor > 0) {
            somaValores += dia.valor;
        }
    }

    menorValor = Math.min(...apenasFaturamento.map(item => item.valor));    
    maiorValor = Math.max(...apenasFaturamento.map(item => item.valor));

    numDiasComFaturamento = apenasFaturamento.length;
    
    let mediaMensal = somaValores / numDiasComFaturamento;

    for (const dia of apenasFaturamento) {
        if(dia.valor > mediaMensal) {
            supFaturamento++;
        }
    }

    console.log('Menor valor de faturamento: ' + menorValor);
    console.log('Maior valor de faturamento: ' + maiorValor);
    console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ' + supFaturamento);

  });