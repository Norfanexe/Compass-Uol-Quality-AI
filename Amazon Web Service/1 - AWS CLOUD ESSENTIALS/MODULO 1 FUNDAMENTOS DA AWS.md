# MODULO 1: FUNDAMENTOS DA AWS

## 1 - Amazon Web Services

A Amazon Web Services (AWS) é uma plataforma de computação em nuvem que oferece uma ampla variedade de serviços para empresas de todos os tamanhos. Entre as soluções disponíveis, podemos destacar:

- **Serviços de computação** (EC2, Lambda)
- **Armazenamento** (S3, EBS, Glacier)
- **Redes** (VPC, CloudFront)
- **Banco de dados** (RDS, DynamoDB)
- **Segurança e conformidade**
- **Inteligência artificial e aprendizado de máquina**
- **Blockchain e IoT**
- **Gerenciamento de vídeo e satélites orbitais**

### 1 - Benefícios da AWS:
A AWS se destaca por sua escalabilidade, confiabilidade e flexibilidade, permitindo que empresas cresçam sem a necessidade de grandes investimentos iniciais em infraestrutura. Um dos princípios fundamentais da AWS é "pague apenas pelo que usar".

### 2 - Modelo cliente-servidor:

#### CLIENTE:
Pode ser um navegador da web ou aplicativo de desktop com o qual uma pessoa interage para fazer solicitações aos servidores de computador.  
 
#### SERVIDOR:
Pode ser serviços, como o Amazon Elastic Compute Cloud (Amazon EC2) – um tipo de servidor virtual.

No mundo real, sistemas mais avançados exigem arquiteturas mais complexas, mas essa base é fundamental para compreender como funcionam os serviços da AWS.

## 2 - Definição Funcional de Nuvem

### 1 - Entrega Sob Demanda

A entrega sob demanda significa que a AWS tem os recursos de que você precisa, exatamente quando você precisar. Você não precisa notificar antecipadamente sobre sua demanda. Por exemplo:

- Precisa de 300 servidores virtuais? Basta alguns cliques para iniciá-los.
- Necessita de 2000 terabytes de armazenamento? Apenas comece a usar o espaço, sem aviso prévio.
- Não precisa mais desses recursos? Devolva-os imediatamente e pare de pagar por eles.

Essa flexibilidade é algo inalcançável quando se gerenciam data centers próprios.

### 2 - Recursos de TI na AWS

A filosofia da AWS gira em torno da oferta de uma grande variedade de produtos porque as empresas precisam deles. Muitos elementos de TI são comuns entre diversas organizações, o que significa que não representam um diferencial competitivo.

### 3 - Exemplo: Banco de Dados MySQL

Se sua empresa usa um banco de dados MySQL, instalar esse sistema melhora sua posição no mercado? Provavelmente não. Alguns pontos a considerar:

- O motor MySQL é um software padronizado e amplamente utilizado.
- Backups também são práticas comuns.
- O que realmente diferencia sua empresa é a maneira como você estrutura os dados e os gerencia.

A AWS chama essas tarefas comuns e repetitivas de trabalho pesado indiferenciado de TI. A missão da AWS é eliminar esse trabalho, permitindo que você foque no que realmente diferencia seu negócio.

### 4 - Acessibilidade e Preços Pré-Pagos

Os recursos da AWS podem ser acessados de forma simples e segura:

- Console web seguro
- APIs programáticas
- Sem necessidade de contratos ou interação com vendedores

Os preços pré-pagos seguem a mesma lógica de eficiência aplicada à cafeteria que discutimos anteriormente:

- Uma loja não mantém funcionários 24 horas por dia se não há demanda.
- Por que pagar por ambientes de desenvolvimento no fim de semana se os desenvolvedores não estão trabalhando?

Essa abordagem reduz custos e aumenta a eficiência operacional.

### 5 - Modelos de implantação para computação em nuvem

Os três modelos de implantação de computação em nuvem são baseados em nuvem, locais e híbridos.

#### Local

Também é conhecida como implantação de nuvem privada. Nesse modelo, os recursos são implantados localmente usando ferramentas de virtualização e gerenciamento de recursos.

Características:

- Recursos usando ferramentas de virtualização e gerenciamento de recursos.

- Aumento ds utilização de recursos usando tecnologias de gerenciamento e virtualização de aplicativos.

Exemplo: você pode ter aplicativos executados em tecnologia totalmente mantida em seu data center local. Embora esse modelo seja muito parecido com a infraestrutura de TI legada, sua incorporação de tecnologias de gerenciamento e virtualização de aplicativos ajuda a aumentar a utilização de recursos.

#### Nuvem

O modelo de implantação baseado em nuvem pode migrar aplicativos existentes para a nuvem ou pode projetar e criar novos aplicativos na nuvem, podendo criar esses aplicativos em uma infraestrutura de baixo nível que exija que a equipe de TI os gerencie. Como alternativa, pode - se criá-los usando serviços de nível superior que reduzem os requisitos de gerenciamento, arquitetura e dimensionamento da infraestrutura principal.

Características:

- Execute todas as partes do aplicativo na nuvem.

- Migre aplicativos existentes para a nuvem.

- Projete e crie novos aplicativos na nuvem.

Exemplo: uma empresa pode criar um aplicativo que consiste em servidores virtuais, bancos de dados e componentes de rede totalmente baseados na nuvem.

#### Hibrida
