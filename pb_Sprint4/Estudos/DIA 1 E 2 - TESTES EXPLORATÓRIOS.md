# DIA 1 E 2 - TESTE EXPLORATÓRIOS

## CONTEÚDO

* Introdução
* Roteiros X Exploratórios
 
# Introdução

## Automatizado Vs Manual

### Testes Manuais

Relação das iterações de testes manuais entre o desenvolvimento do projeto e o esforço (tempo) utilizado para o desenvolvimento, aumentando de forma gradual, com base nos requisitos do sistema que vão aumentando:

### Testes automátizados

Relação das execuções de testes automatizados comparando com os testes manuais (azul), aumentando de forma gradual, com base nos requisitos do sistema que vão aumentando. O Esforço do automatizado no início é maior, porém, de forma gradual, começa a manter um padrão de crescimento menor, diminuindo os esforços, levando menos tempo para produção, e por consequência, tempo de entrega menor, se comparado com o teste manual.

### Automatizado Vs Manual

De forma geral, ambos são improtantes, enquanto automaticos  garante que cada roteiro de teste será realizado mediante commits futuros no projeto, enquanto os manuais garantem uma visão maior dos conhecimentos e visão de um testes ou usuário frente ao sistema e eventuais cenários inimaginavies, ao principio que podem ocorrer durante a evolução do projeto e dos testes, conforme representado nas duas primeiras representações acima.

# Roteiros X Exploratórios

## Analogia com a navegação GPS x navegação por conta própria

### Navegação com GPS (Testes Roteirizados)
Imagine que você está planejando uma viagem de carro para uma cidade que você nunca visitou antes. Você decide usar um GPS para guiá-lo. O GPS fornece um roteiro detalhado, indicando cada curva, saída e ponto de interesse ao longo do caminho. Você segue as instruções do GPS rigorosamente, sabendo exatamente onde virar e quando parar.

#### Vantagens:
- Você sabe exatamente onde está e para onde está indo.
- O GPS escolhe a rota mais rápida ou mais curta, economizando tempo.
- Menos chances de se perder, pois você tem um guia confiável.

#### Desvantagens:
- Você segue um caminho pré-determinado e pode perder oportunidades de explorar lugares interessantes fora da rota.
- Se o GPS falhar, você pode ficar desorientado.

### Navegação sem GPS (Testes Exploratórios)
Agora, imagine que você decide fazer a mesma viagem, mas sem usar um GPS. Em vez disso, você confia em mapas impressos, placas de sinalização e talvez algumas dicas de amigos. Você tem uma ideia geral de onde quer ir, mas a rota exata é flexível e pode mudar conforme você avança.

#### Vantagens:
- Você pode explorar caminhos alternativos, descobrir novos lugares e ajustar sua rota conforme necessário.
- A chance de encontrar lugares interessantes e inesperados é maior.
- Você desenvolve habilidades de navegação e se torna menos dependente de dispositivos.

#### Desvantagens:
- Sem um guia preciso, há mais chances de tomar um caminho errado.
- Pode levar mais tempo para chegar ao destino, especialmente se você se perder ou fizer desvios.

## Aplicação na Qualidade de Software (QA)

### Testes Roteirizados:
- Testes roteirizados são como seguir um GPS. Eles seguem scripts e casos de teste pré-definidos, com passos específicos e resultados esperados.
- **Exemplo**: Testar uma funcionalidade de login seguindo um roteiro que inclui inserir um nome de usuário e senha válidos, clicar no botão de login e verificar se o usuário é redirecionado para a página inicial.

### Testes Exploratórios:
- **Definição**: Testes exploratórios são como navegar sem GPS. O testador explora a aplicação livremente, sem scripts rígidos, baseando-se em sua experiência e intuição para encontrar bugs.
- **Exemplo**: Testar a mesma funcionalidade de login, mas experimentando diferentes combinações de entradas, como senhas incorretas, campos vazios, e verificando como a aplicação responde a cada cenário.

# Testes Baseados em Roteiros vs Testes Exploratórios

| Testes Baseados em Roteiros | Testes Exploratórios |
|-----------------------------|----------------------|
| Executado seguindo um roteiro: O teste é realizado conforme um roteiro pré-definido. | Executado de acordo com o propósito definido: O teste é realizado com base em um propósito específico. |
| Os passos são bem definidos: Cada passo do teste é claramente especificado. | Apenas um direcionamento inicial: Há apenas uma orientação inicial, sem passos definidos. |
| A fase de planejamento se dá na criação dos roteiros, não durante a execução do teste: O planejamento é feito antes da execução, durante a criação dos roteiros. | O planejamento se dá durante a execução do teste: O planejamento ocorre durante a execução do teste. |
| Leva o tempo necessário para executar todos os passos: O tempo de execução é o necessário para completar todos os passos do roteiro. | Possui um limite de tempo pré-determinado: O teste é realizado dentro de um tempo limite estabelecido. |
| Previne erros: O objetivo é prevenir erros seguindo os passos definidos. | Encontra erros: O objetivo é encontrar erros durante a execução. |
| Pode ser automatizado: É possível automatizar a execução dos testes. | Não pode ser automatizado (ainda): Atualmente, não é possível automatizar este tipo de teste. |
| Como resultado final, temos "Sucesso" ou "Falha": O resultado do teste é binário, indicando sucesso ou falha. | Como resultado final, temos: "Sucesso" ou "Falha", Dúvidas e observações realizadas, Mais entendimento e ideias para outras execuções. |

