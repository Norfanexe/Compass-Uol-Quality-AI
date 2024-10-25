# DIA 6 - TESTES BACK END

* 1 - Fundamentos de teste back end
* 2 - Pirâmide de testes
* 3 - Pirâmide de teste de mike Cohn

# 1 = xxxxxxxxxxxxxxxx

# 2 - Pirâmide de testes

# Pirâmide de Testes

A pirâmide de testes é basicamente definir níveis de testes e te dar um norte quanto à quantidade de testes que você deveria ter em cada um desses níveis.

## Testes de Ponta a Ponta

São testes que simulam o ambiente real, isto é, sobem a aplicação ou abrem o navegador, preenchem formulários, clicam em botões e, por fim, verificam se aconteceu o que era esperado. A diferença desse tipo de teste para um usuário real é que os testes end to end geralmente acontecem em um ambiente controlado (não o de produção) e quem executa as ações é um robô (não o usuário real). Vale lembrar que quando falamos “usuário” não estamos falando necessariamente do cliente que vai acessar sua página ou aplicação desktop: se seu software for uma API, então o usuário é quem vai consumir essa API.

Esses testes são complexos de escrever e costumam demorar um tempo considerável para rodar (afinal, interações do usuário com a aplicação são complexas e demoradas). Além disso, quando um teste de ponta a ponta falha, não é trivial inferir onde está o problema da aplicação, já que o teste é bem abrangente. Por esses motivos, geralmente são testes que cobrem apenas os fluxos principais da aplicação.

## Testes de Unidade

Os testes de unidade verificam o funcionamento da menor unidade de código testável da nossa aplicação, independente da interação dela com outras partes do nosso código.

A unidade geralmente é vista como um método público em uma classe (quando falamos em Orientação a Objetos), mas pode ser vista também como um conjunto de classes/métodos/objetos interagindo entre si. A unidade vai ser sempre definida como a menor parte testável do seu sistema.

Testes de unidade são muito legais, muito simples e muito rápidos, mas eles não são suficientes.

Podemos ter testado duas unidades que interagem entre si separadamente, usando os test doubles mencionados acima, e concluído que ambas estão funcionando como esperado. Ainda assim, é possível que as duas unidades não funcionem em conjunto.

## Testes de Integração

Para resolver esse problema, temos os testes de integração, que testam algumas unidades funcionando em conjunto. Diferente dos testes de ponta a ponta, são testes que testam funcionalidades, e não o sistema como um todo (vemos muitos desse tipo em testes de endpoints, por exemplo). As implicações disso são que testes de integração são:

- Mais complicados (de fazer e manter) e demorados que os testes de unidade, por testarem uma funcionalidade inteira (muitas vezes com persistência de dados);
- Bem mais simples (de fazer e manter) e rápidos que os testes de ponta a ponta, por testarem uma única funcionalidade de cada vez, sem precisar subir a aplicação inteira.
 
## 3 - Pirâmide de teste de mike Cohn

A pirâmide de teste de Mike Cohn é uma abordagem clássica para estruturar testes de software, composta por três camadas principais:

1. **Testes de Unidade**

2. **Testes de Serviço**

3. **Testes de Interface do Usuário (IU)**

## Análise Crítica

Embora amplamente reconhecida, a pirâmide de teste de Cohn tem suas limitações. Alguns especialistas apontam que a nomenclatura e certos aspectos conceituais podem ser enganosos. De uma perspectiva moderna, a pirâmide pode parecer simplista.

## Princípios Essenciais

Apesar das críticas, a simplicidade da pirâmide de Cohn oferece diretrizes úteis para criar um conjunto de testes eficaz. Dois princípios fundamentais são:

1. **Escreva testes com diferentes níveis de granularidade.**

2. **Quanto mais alto o nível do teste, menor deve ser a quantidade de testes.**

## Estrutura Recomendada

Para um conjunto de testes saudável, rápido e de fácil manutenção, siga a forma de pirâmide:

- **Testes de Unidade:** Muitos testes pequenos e rápidos.

- **Testes de Serviço:** Alguns testes intermediários.

- **Testes de Interface do Usuário:** Poucos testes de alto nível que testem o aplicativo de ponta a ponta.

## Considerações Adicionais

Não se apegue rigidamente aos nomes das camadas na pirâmide de Cohn. Por exemplo, o termo "teste de serviço" pode ser confuso e muitas vezes ignorado. Com frameworks modernos como React, Angular e Ember.js, os testes de IU podem ser realizados em diferentes níveis da pirâmide.

## Flexibilidade na Nomenclatura

Dada as limitações dos nomes originais, é aceitável criar novos nomes para as camadas de teste, desde que haja consistência na base de código e nas discussões da equipe.
