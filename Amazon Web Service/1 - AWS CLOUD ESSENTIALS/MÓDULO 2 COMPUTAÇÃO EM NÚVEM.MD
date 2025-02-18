# MODULO 2 - COMPUTAÇÃO EM NÚVEM

# 1 - Apostila de Estudos - Introdução ao EC2

## Amazon Elastic Compute Cloud (EC2)

Amazon Elastic Compute Cloud (EC2) é um serviço da AWS que fornece capacidade computacional segura e redimensionável na nuvem. Ele permite que empresas e desenvolvedores provisionem servidores virtuais rapidamente, sem a necessidade de investir em infraestrutura física.

## Modelo Cliente/Servidor

Para compreender melhor o EC2, podemos compará-lo ao funcionamento de uma cafeteria:

- O cliente faz um pedido ao atendente.
- O atendente processa o pedido e o entrega.

Da mesma forma, no modelo cliente/servidor, um cliente envia uma solicitação ao servidor, que processa e responde com os dados.

Esse modelo é amplamente utilizado em diversos setores, como saúde, manufatura e entretenimento.

## Vantagens do EC2

- **Flexibilidade:** É possível iniciar e interromper instâncias conforme necessário.
- **Custo-benefício:** Paga-se apenas pelo tempo de uso das instâncias em execução.
- **Rapidez:** Instâncias podem ser criadas em minutos.
- **Escalabilidade:** Possibilidade de aumentar ou diminuir a capacidade computacional conforme a demanda.

## EC2 vs. Infraestrutura Tradicional

Configurar servidores locais exige tempo e investimento:

- Compra de hardware antecipada.
- Tempo de espera para entrega e instalação.
- Manutenção constante.

Com o EC2:

- A AWS já gerencia os datacenters.
- Os servidores estão prontos para uso imediato.
- Nenhuma obrigação de manter hardware ocioso.

## Como Funciona o EC2

EC2 utiliza a tecnologia de virtualização para criar instâncias:

- **Multilocação:** Múltiplas instâncias compartilham um mesmo hardware físico, gerenciado por um hipervisor.
- **Isolamento:** Instâncias são isoladas umas das outras para garantir segurança.

## Provisionamento de Instâncias

Para criar uma instância EC2, o usuário pode escolher:

- **Sistema Operacional:** Windows ou Linux.
- **Configuração de Hardware:** Tipos de instância variados para atender diferentes necessidades.
- **Software:** Aplicativos internos, bancos de dados e pacotes corporativos.

## Dimensionamento de Instâncias

- **Vertical:** Aumentar recursos como CPU e memória.
- **Horizontal:** Adicionar mais instâncias para distribuir a carga de trabalho.

## Configuração de Rede e Segurança

O usuário pode definir:

- **Acessibilidade:** Instâncias públicas ou privadas.
- **Controle de Tráfego:** Configuração de firewall e regras de segurança.

## Passos para Utilizar o EC2

- **Executar uma instância:**
  - Escolher um modelo de configuração.
  - Selecionar tipo de instância e sistema operacional.

- **Configurar segurança:**
  - Definir regras de acesso.

- **Conectar-se à instância:**
  - Acessar via SSH (Linux) ou RDP (Windows).

- **Usar a instância:**
  - Instalar software e configurar serviços.

- **Encerrar ou interromper:**
  - Parar a instância quando não for necessária para economizar custos.
 
# 2 - Tipos de instância do Amazon EC2

Agora que aprendemos sobre as instâncias do EC2 e seu papel crucial na AWS, vamos explorar os diferentes tipos de instâncias do EC2 disponíveis. Assim como em uma cafeteria precisamos de diferentes funcionários para funções específicas, no EC2 existem diferentes tipos de instâncias otimizadas para tarefas específicas.

Cada tipo de instância pertence a uma família e é otimizado para determinadas necessidades. Elas oferecem combinações variadas de CPU, memória, armazenamento e capacidade de rede, permitindo a escolha ideal para cada aplicação.

## 1. Instâncias de Uso Geral

Essas instâncias fornecem um equilíbrio de recursos de computação, memória e rede. Elas são ideais para aplicações que não exigem otimização em uma área específica.

### Casos de uso:
- Servidores de aplicativos
- Servidores de jogos
- Back-end para aplicações empresariais
- Bancos de dados pequenos e médios

## 2. Instâncias Otimizadas para Computação

Projetadas para aplicações que necessitam de alto poder de processamento, essas instâncias oferecem CPUs de alta performance para tarefas intensivas.

### Casos de uso:
- Servidores web de alto desempenho
- Servidores de jogos dedicados
- Processamento em lote
- Modelagem científica

## 3. Instâncias Otimizadas para Memória

Essas instâncias são projetadas para aplicações que lidam com grandes volumes de dados em memória, garantindo alto desempenho.

### Casos de uso:
- Bancos de dados de alto desempenho
- Processamento em tempo real de grandes volumes de dados não estruturados
- Aplicativos de business intelligence (BI)

## 4. Instâncias de Computação Acelerada

Utilizam aceleradores de hardware (coprocessadores) para executar tarefas específicas mais rapidamente do que em CPUs tradicionais.

### Casos de uso:
- Aplicativos gráficos e de renderização
- Streaming de jogos e aplicações
- Análise e correspondência de padrões de dados

## 5. Instâncias Otimizadas para Armazenamento

Projetadas para cargas de trabalho que exigem alto desempenho na leitura e gravação de grandes volumes de dados armazenados localmente.

### Casos de uso:
- Sistemas de arquivos distribuídos
- Data warehouses
- Sistemas OLTP (Processamento de Transações Online) de alta frequência

# 3 - Definição de preço do Amazon EC2

## Introdução

O Amazon EC2 oferece várias opções de faturamento para atender diferentes necessidades de uso. A escolha do modelo de preço pode impactar significativamente os custos operacionais, permitindo maior flexibilidade e economia.

## Opções de Preço do Amazon EC2

### 1. Instâncias Sob Demanda

As instâncias sob demanda são ideais para cargas de trabalho irregulares e de curto prazo que não podem ser interrompidas. Características principais:

- Sem custos iniciais ou contratos mínimos.
- Cobrança apenas pelo tempo de uso.
- Boa opção para desenvolvimento, testes e aplicações com padrões de uso imprevisíveis.
- Para cargas de trabalho de longa duração, as instâncias reservadas oferecem maior economia.

### 2. Instâncias Reservadas

As instâncias reservadas oferecem descontos significativos para usuários que se comprometem com um período de uso de 1 ou 3 anos.

#### Tipos de Instâncias Reservadas:
- Instâncias Reservadas Padrão: Mais econômicas, ideais para cargas de trabalho previsíveis.
- Instâncias Reservadas Conversíveis: Maior flexibilidade para mudar tipo de instância, tamanho e região.

#### Opções de pagamento:
- Tudo adiantado (maior economia)
- Parcialmente adiantado
- Nenhum pagamento inicial

### 3. Planos de Economia de instância EC2 (Savings Plans)

Os Savings Plans permitem economizar até 72% em comparação às taxas sob demanda, ao se comprometer com um gasto por hora por um período de 1 ou 3 anos.

#### Vantagens:
- Flexibilidade no uso do EC2.
- Redução de custos sem comprometer-se a um tipo específico de instância.
- Aplica-se ao AWS Fargate e AWS Lambda.

### 4. Instâncias Spot

As instâncias spot permitem acesso a capacidade computacional ociosa da AWS com descontos de até 90% em relação às instâncias sob demanda.

#### Pontos importantes:
- Ideal para cargas de trabalho flexíveis, como processamento em lote.
- A AWS pode interromper a instância com aviso prévio de dois minutos.
- Não recomendadas para aplicações que exigem alta disponibilidade.

### 5. Hosts Dedicados

Os hosts dedicados são servidores físicos exclusivos para o usuário, garantindo conformidade com licenças de software e requisitos regulatórios.

#### Principais características:
- Nenhuma outra conta AWS compartilha o servidor.
- Opções de compra sob demanda ou reserva.
- Maior custo em comparação com outras opções.

# 4 - Amazon EC2, Escalabilidade e Elasticidade

## Introdução ao Amazon EC2

O Amazon Elastic Compute Cloud (EC2) é um serviço da AWS que permite a criação e gestão de instâncias de computação sob demanda. Ele possibilita a alocação dinâmica de recursos computacionais, garantindo eficiência e flexibilidade para qualquer necessidade de processamento.

## O Dilema do Data Center Local

Empresas tradicionais enfrentam desafios ao dimensionar seus data centers devido às variações na carga de trabalho. As opções geralmente são:

- **Dimensionar para o uso médio:** Pode não atender à demanda em momentos de pico.
- **Dimensionar para o pico:** Leva a desperdício de recursos em períodos de baixa demanda.

A solução da AWS permite o provisionamento dinâmico, garantindo capacidade adequada conforme a demanda varia.

## Escalabilidade e Elasticidade

- **Escalabilidade** é a capacidade de aumentar ou diminuir os recursos computacionais de forma automática ou manual para atender à demanda.
  - **Escalabilidade vertical:** Aumenta a capacidade de uma instância (exemplo: mais CPU, mais RAM).
  - **Escalabilidade horizontal:** Adiciona mais instâncias para distribuir a carga de trabalho.

A elasticidade permite que os recursos sejam adicionados ou removidos dinamicamente para otimizar o desempenho e os custos.

## Amazon EC2 Auto Scaling

O EC2 Auto Scaling é um serviço que permite o ajuste automático do número de instâncias do EC2 baseado na demanda. Benefícios incluem:

- **Alta disponibilidade:** Mantém os serviços funcionando mesmo em caso de falhas.
- **Otimização de custos:** Usa apenas os recursos necessários.
- **Escalabilidade eficiente:** Garante capacidade suficiente em momentos de pico.

## Tipos de Escalabilidade no Auto Scaling

- **Escalabilidade Dinâmica:** Responde automaticamente a alterações de demanda em tempo real.
- **Escalabilidade Preditiva:** Ajusta a capacidade com base em previsões de demanda.

## Exemplo de Configuração do Auto Scaling

Um grupo do Auto Scaling pode ser configurado com:

- **Capacidade mínima:** Número mínimo de instâncias em execução.
- **Capacidade desejada:** Quantidade ideal de instâncias para operação eficiente.
- **Capacidade máxima:** Limite máximo de instâncias para evitar desperdício.

### Exemplo de Configuração:

Se uma aplicação precisa de pelo menos uma instância para rodar, o grupo de Auto Scaling pode ser configurado assim:

- **Mínimo:** 1 instância
- **Desejado:** 2 instâncias
- **Máximo:** 4 instâncias

Isso garante que a aplicação tenha sempre a capacidade necessária sem desperdício de recursos.

## Benefícios Gerais da AWS para Escalabilidade

- **Flexibilidade:** A capacidade pode ser ajustada em minutos.
- **Confiabilidade:** Instâncias redundantes garantem alta disponibilidade.
- **Custo-efetividade:** Pagamento apenas pelo uso real dos recursos.
- **Automatização:** Uso de regras para aumentar ou reduzir capacidade automaticamente.

Com essas funcionalidades, empresas podem melhorar seu desempenho e reduzir custos operacionais, garantindo sempre a melhor experiência para os clientes.

# 5 - Direcionamento de tráfego com o Elastic Load Balancing

O balanceamento de carga é essencial para garantir que as solicitações dos clientes sejam distribuídas uniformemente entre as instâncias do Amazon EC2, evitando gargalos e melhorando a eficiência da infraestrutura. O Elastic Load Balancing (ELB) é o serviço da AWS projetado para gerenciar esse balanceamento de forma automática e escalável.

## Problema: Distribuição Desigual de Tráfego

Imagine uma cafeteria onde os clientes podem escolher entre três caixas para fazer seus pedidos. Se a maioria dos clientes se alinha em apenas uma fila, isso causa uma distribuição desigual da carga de trabalho, resultando em filas demoradas enquanto outras caixas ficam ociosas.

No ambiente da AWS, quando existem várias instâncias do EC2 executando o mesmo programa, o desafio é garantir que as solicitações sejam distribuídas igualmente entre elas. Sem um balanceador de carga, algumas instâncias podem ficar sobrecarregadas enquanto outras permanecem subutilizadas.

## Solução: Elastic Load Balancing (ELB)

O ELB atua como um anfitrião que direciona cada solicitação para a instância EC2 mais apropriada. Isso garante que nenhuma instância fique sobrecarregada enquanto outras estão ociosas.

### Benefícios do ELB:

- **Alta disponibilidade:** Funciona a nível regional, garantindo que o tráfego seja distribuído de forma eficiente.
- **Escalabilidade automática:** Ajusta-se conforme a demanda, sem necessidade de intervenção manual.
- **Otimização do desempenho:** Direciona solicitações para instâncias com menor carga.
- **Redução de custos:** Permite um uso mais eficiente dos recursos, evitando desperdício de capacidade.

## Integração com Auto Scaling

O ELB trabalha em conjunto com o Amazon EC2 Auto Scaling. Quando novas instâncias são adicionadas devido ao aumento da demanda, o ELB automaticamente as reconhece e começa a direcionar tráfego para elas. Da mesma forma, quando a demanda diminui e instâncias são removidas, o ELB redireciona o tráfego para as instâncias restantes antes do encerramento.

## Balanceamento de Carga Interno

O ELB não é útil apenas para balanceamento de carga externo (clientes acessando seu serviço), mas também para comunicação entre serviços internos. Ele pode gerenciar o tráfego entre camadas diferentes de uma aplicação, facilitando a escalabilidade e a manutenção.

## Exemplo Prático

### Período de Baixa Demanda:

- Poucos clientes acessam a cafeteria (serviço).
- Apenas algumas caixas (instâncias EC2) estão ativas.
- O ELB distribui as solicitações igualmente entre as caixas abertas.

### Período de Alta Demanda:

- O número de clientes aumenta.
- Mais caixas são abertas automaticamente (Auto Scaling adiciona instâncias EC2).
- O ELB direciona os clientes para a caixa menos ocupada, garantindo um atendimento eficiente.

# 6 - Mensagens e enfileiramento

O conceito de mensagens e filas é fundamental para arquiteturas escaláveis e confiáveis. Podemos ilustrar esse conceito com uma situação em uma cafeteria: o caixa anota o pedido e entrega diretamente ao barista. Esse método funciona, mas quando o barista está ocupado, o caixa precisa esperar. Esse problema pode ser resolvido com um buffer ou fila de pedidos.

A ideia central de mensagens e enfileiramento é armazenar mensagens temporariamente até que possam ser processadas. Isso permite desacoplar componentes do sistema, tornando a arquitetura mais resiliente.

## Acoplamento Forte vs. Acoplamento Fraco

### Acoplamento Forte

Em arquiteturas fortemente acopladas, os componentes dependem uns dos outros diretamente. Se um componente falha, outros também podem falhar. Por exemplo:

- O Aplicativo A envia mensagens diretamente para o Aplicativo B.
- Se o Aplicativo B falhar, o Aplicativo A também apresentará erros.

### Acoplamento Fraco

Em uma arquitetura fracamente acoplada, os componentes funcionam independentemente. A introdução de uma fila de mensagens permite que o Aplicativo A continue enviando mensagens mesmo que o Aplicativo B esteja temporariamente indisponível.

## Amazon SQS e Amazon SNS

### Amazon Simple Queue Service (SQS)

O Amazon SQS é um serviço de enfileiramento de mensagens que permite enviar, armazenar e receber mensagens de forma assíncrona.

#### Vantagens:
- Escalabilidade automática.
- Armazena mensagens até que possam ser processadas.
- Reduz o acoplamento entre serviços.

#### Funcionamento:
- O Aplicativo A envia mensagens para uma fila do SQS.
- As mensagens permanecem na fila até que o Aplicativo B as processe.
- O Aplicativo B recupera, processa e remove a mensagem da fila.

### Amazon Simple Notification Service (SNS)

O Amazon SNS é um serviço de notificação baseado em publicação/assinatura (pub/sub). Permite que mensagens sejam enviadas a múltiplos assinantes simultaneamente.

#### Exemplo de Uso:
- Um tópico SNS pode ser criado para enviar mensagens a diferentes assinantes, como funções AWS Lambda, e-mails ou filas SQS.
- Um cliente pode assinar apenas os tópicos que deseja receber.

## Aplicativos Monolíticos vs. Microsserviços

### Arquitetura Monolítica
- Todos os componentes estão fortemente acoplados.
- Se um componente falhar, todo o sistema pode falhar.

### Arquitetura de Microsserviços
- Cada componente é independente.
- Se um componente falhar, os outros continuam funcionando.
- Pode-se utilizar SQS e SNS para integração eficiente.

## Casos Práticos

### Exemplo 1: Sem Fila (Acoplamento Forte)
- O caixa recebe um pedido e entrega diretamente ao barista.
- Se o barista estiver ocupado, o caixa precisa esperar.

### Exemplo 2: Com Fila (Acoplamento Fraco)
- O caixa recebe um pedido e coloca na fila.
- O barista pega o pedido da fila e o processa quando estiver livre.
- O fluxo continua sem interrupção, independentemente da disponibilidade do barista.

## Resumo
- O uso de filas (SQS) desacopla os sistemas, tornando-os mais resilientes.
- O SNS permite notificações eficientes para múltiplos destinatários.
- Arquiteturas desacopladas evitam falhas em cascata e melhoram a escalabilidade.
- A implementação de SQS e SNS na AWS é essencial para construir sistemas escaláveis e confiáveis. Adotar uma abordagem baseada em microsserviços aumenta a disponibilidade e a robustez das aplicações modernas.

# 7 - Serviços de computação adicionais
 
As instâncias do EC2 (Elastic Compute Cloud) são máquinas virtuais que podem ser provisionadas rapidamente para atender às necessidades computacionais dos usuários na AWS. O EC2 é utilizado para diversos casos, desde servidores web básicos até clusters de alta performance.

## Características do EC2

- **Flexibilidade:** Permite a escolha de vários tipos de instâncias e configurações.
- **Escalabilidade:** Capacidade de aumentar ou reduzir a quantidade de instâncias conforme a demanda.
- **Responsabilidade do Usuário:** Gerenciamento das instâncias, atualizações de software, escalabilidade e disponibilidade.

## Alternativas ao EC2

Embora o EC2 seja poderoso, existem alternativas que podem reduzir a necessidade de gerenciamento direto da infraestrutura. Essas alternativas incluem serviços serverless e conteinerização.

## Computação Serverless

### Conceito de Serverless

A computação serverless permite a execução de aplicações sem a necessidade de gerenciar servidores subjacentes. A AWS cuida automaticamente do provisionamento, dimensionamento, alta disponibilidade e manutenção do ambiente.

### AWS Lambda

O AWS Lambda é um serviço serverless que executa código em resposta a eventos.

#### Como funciona o AWS Lambda?

- O usuário faz upload do código para o Lambda.
- Define um gatilho para acionar a função.
- Quando acionado, o código é executado automaticamente.
- O custo é baseado no tempo de execução e na quantidade de execuções.

### O AWS Lambda é ideal para:

- Back-end de aplicações web.
- Processamento de eventos.
- Automatisção de tarefas na nuvem.

## Computação baseada em Contêineres

### Conceito de Contêineres

Os contêineres permitem empacotar aplicações e suas dependências de forma isolada e portátil, garantindo consistência no ambiente de execução.

### Serviços de Orquestração de Contêineres

Para gerenciar contêineres em larga escala, a AWS oferece serviços de orquestração:

#### Amazon ECS (Elastic Container Service)

- Gerenciamento simplificado de contêineres.
- Suporte ao Docker.
- Integração com AWS Fargate para execução serverless de contêineres.

#### Amazon EKS (Elastic Kubernetes Service)

- Gerenciamento de Kubernetes na AWS.
- Permite executar contêineres em escala utilizando Kubernetes.
- Mantido pela comunidade open-source e integrado à AWS.

### AWS Fargate

O AWS Fargate é uma plataforma serverless para executar contêineres sem a necessidade de gerenciar instâncias do EC2.

#### Benefícios do AWS Fargate

- Sem necessidade de provisionamento de servidores.
- Escalabilidade automática.
- Redução da complexidade operacional.

## Escolhendo a Melhor Opção para seu Caso de Uso

- Precisa de controle total sobre o ambiente? Use o Amazon EC2.
- Deseja executar código sem gerenciar infraestrutura? Use o AWS Lambda.
- Precisa de um ambiente de conteinerização gerenciado? Escolha Amazon ECS ou Amazon EKS.
- Quer evitar a gestão de servidores para contêineres? Opte pelo AWS Fargate.
