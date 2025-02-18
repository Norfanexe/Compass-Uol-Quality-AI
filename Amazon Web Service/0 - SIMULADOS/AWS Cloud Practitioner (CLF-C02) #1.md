# 1 - Quais dos seguintes itens fazem parte dos *pilares do Well-Architected Framework*?

### Resposta Errada:
**Escalabilidade**

**Explicação**: Refere-se à capacidade do sistema de lidar com um aumento na carga de trabalho adicionando recursos de forma eficiente. Apesar de ser uma propriedade de aplicações em nuvem, não faz parte do Well-Architected Framework.

### Resposta Correta:
**Segurança**: O Pilar Segurança se concentra na proteção de informações e sistemas. Incluem confidencialidade e integridade de dados, gerenciamento de permissões de usuário e estabelecimento de controles para detectar eventos de segurança.

**Excelência Operacional**: O pilar Excelência operacional se concentra na execução e monitoramento sistemas e na melhoria contínua de processos e procedimentos. Incluem automação de alterações, reação a eventos e definição de padrões para gerenciar as operações diárias. 

# 2 - Quais dos seguintes são *princípios do pilar de confiabilidade no AWS Well-Architected Framework*?

- **Planejar limites de capacidade e testar frequentemente**: Planejar limites de capacidade e realizar testes regulares ajuda a garantir que os sistemas possam lidar com cargas variáveis, evitando falhas devido a subdimensionamento ou falta de capacidade.

- **Implementar recuperação automática para falhas**: Recuperação automática ajuda a reduzir o impacto de falhas, permitindo que sistemas detectem problemas e se restaurem sem intervenção manual, sendo um princípio fundamental do pilar de confiabilidade.

[Link para mais informações](https://aws.amazon.com/pt/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc&wa-guidance-whitepapers.sort-by=item.additionalFields.sortDate&wa-guidance-whitepapers.sort-order=desc)

# 3 - Uma empresa precisa *auditar sua infraestrutura na AWS para identificar ações manuais e não planejadas de desligamento de recursos*. Qual serviço pode ser útil para auxiliar nessa atividade?

### Resposta:
**AWS CloudTrail**: Com o AWS CloudTrail, é possível identificar ações manuais de desligamento de recursos ao registrar todas as atividades na conta AWS. Utilize o CloudTrail Event History ou exporte logs para Amazon Athena para filtrar eventos de desligamento, como `StopInstances` e `TerminateInstances`. Configure CloudWatch Alarms para monitorar e notificar sobre essas ações em tempo real.

O Amazon CloudTrail é um serviço de auditoria que registra todas as atividades da conta na AWS. Ele fornece logs detalhados que rastreiam ações realizadas por usuários, aplicativos e serviços, permitindo monitorar quem fez o quê e quando. Os logs de auditoria do CloudTrail incluem informações sobre ações de gerenciamento de recursos, acessos a serviços e modificações de configurações. Isso ajuda a atender requisitos de conformidade, detectar atividades suspeitas e investigar incidentes de segurança, oferecendo uma visão completa das operações realizadas em sua infraestrutura na nuvem.

[Link para mais informações](https://aws.amazon.com/pt/cloudtrail/)

# 4 - Um desenvolvedor precisa modificar determinadas partes do código de uma aplicação, mas no momento, não possui acesso ao seu computador e nem à sua IDE preferida. Como esse cenário pode ser contornado utilizando os serviços da AWS, permitindo que ele edite, compile e implemente o código remotamente de maneira eficiente?

### Resposta:
**Cloud9 através de um navegador de internet**: O AWS Cloud9 é um Ambiente de Desenvolvimento Integrado (IDE) fornecido pela AWS, permitindo que os desenvolvedores escrevam, executem e depurem código utilizando apenas um navegador web.

O AWS Cloud9 é um Ambiente de Desenvolvimento Integrado (IDE) fornecido pela AWS, permitindo que os desenvolvedores escrevam, executem e depurem código utilizando apenas um navegador web. Essa plataforma baseada na nuvem oferece uma experiência completa de desenvolvimento, incluindo editor de código, terminal, e recursos de depuração, facilitando o desenvolvimento de aplicativos diretamente do navegador, eliminando a necessidade de configurações locais complexas. Isso proporciona flexibilidade e mobilidade, permitindo que os desenvolvedores acessem e trabalhem em seus projetos de qualquer lugar com conexão à internet.

[Link para mais informações](https://aws.amazon.com/pt/cloud9/)

# 5 - Qual das seguintes afirmações *NÃO está relacionada ao AWS Lambda*?

### Corretas:
- **Pode ser acionado diretamente pelo AWS SNS**: Essa afirmação está correta porque ele pode ser acionado diretamente por eventos do AWS SNS, permitindo a execução de funções em resposta a mensagens publicadas.
- **Pode ser acionado diretamente pelo AWS S3**: Essa afirmação está correta porque ele pode ser acionado diretamente por eventos do AWS S3, como uploads de arquivos.
- **Processa dados sem servidor**: Essa afirmação está correta porque ele executa funções em um modelo serverless, onde a AWS gerencia toda a infraestrutura subjacente, permitindo que os desenvolvedores se concentrem apenas na lógica do código.

### Incorreta:
- **Permite o gerenciamento total dos recursos de infraestrutura**: Essa afirmação NÃO está relacionada ao Lambda, que não permite o gerenciamento total dos recursos de infraestrutura, pois esse gerenciamento é feito automaticamente pela AWS.

O AWS Lambda é um serviço gerenciado pela AWS que permite a execução de código sem a necessidade de provisionar ou gerenciar servidores, proporcionando um modelo de computação serverless. Classificado como um serviço FaaS (Function as a Service), o Lambda executa funções em resposta a eventos e escala automaticamente conforme necessário. Ele é ideal para aplicações que requerem respostas rápidas a eventos, como processamento de dados em tempo real, manipulação de arquivos ou integração com outros serviços da AWS. No entanto, o Lambda não permite o gerenciamento direto dos recursos subjacentes, como servidores ou infraestrutura, limitando o controle do usuário a aspectos específicos da execução da função. Isso simplifica a manutenção e permite que os desenvolvedores se concentrem na lógica do aplicativo, enquanto a AWS gerencia a escalabilidade, a disponibilidade e o desempenho da infraestrutura.

[Link para mais informações](https://aws.amazon.com/pt/lambda/)

# 6 - A Chief Technology Officer (CTO) de uma *rede hospitalar almeja incorporar o AWS Data Exchange em suas plataformas*. Para que *finalidade esse serviço pode ser utilizado* nesse contexto?

### Correta:
- **Para compartilhar dados de pacientes com outras organizações de saúde**: O AWS Data Exchange pode ser usado para compartilhar dados médicos e de saúde de maneira segura entre organizações de saúde, pois tem a missão de aumentar a velocidade da obtenção de valor de conjuntos de dados de terceiros na nuvem.

### Incorreta:
- **Para gerar relatórios financeiros dos custos de infraestrutura de hospitais**: Para gerar relatórios de custo deve-se utilizar o AWS Cost Explorer.
- **Para criar websites de informações médicas**: Para integrar redes computacionais, utilize o AWS VPN.

O AWS Data Exchange foi projetado para permitir que organizações descubram, acessem e compartilhem conjuntos de dados prontos para uso na nuvem. Sua função principal é facilitar a aquisição de dados de terceiros, como informações de mercado, financeiras ou de pesquisa, e disponibilizá-los de maneira segura para análises e uso posterior. O serviço oferece uma plataforma centralizada para a troca de dados, ajudando as empresas a economizar tempo na busca por fontes confiáveis de informações e a acelerar a tomada de decisões com base em dados atualizados. Além disso, o AWS Data Exchange oferece controle granular sobre o acesso aos dados e permite a integração direta com outras soluções AWS, simplificando a incorporação desses conjuntos de dados em aplicativos e processos existentes.

[Link para mais informações](https://aws.amazon.com/pt/data-exchange/?adx-cards2.sort-by=item.additionalFields.eventDate&adx-cards2.sort-order=desc)

# 7 - Uma organização busca implementar uma *estratégia de Recuperação de Desastres (DR) para suas aplicações*. Qual é a recomendação mais adequada para a *utilização do AWS RDS*?

### Resposta:
**Implementar as Read Replicas do RDS (Fazer cópias de leitura)**: Read Replicas é para escalabilidade de leitura quando existem muitas consultas no banco principal, é feita a partir do banco original, que caso seja afetado irá afetar essas replicas também, independente da Região que estiverem.

### (Marcada Incorreta):
**Implementar o RDS - Multi A-Z (Distribuir em zonas de disponibilidade diferentes)**: Multi-AZ é para aumentar a disponibilidade e resiliência dentro da mesma região, não é o recomendado para uma estratégia de DR. Se ocorrer um desastre ambiental, guerra, ou qualquer coisa que possa afetar uma Região inteira, você não terá uma estratégia de DR eficaz.

### Resposta Correta:
**Implementar o RDS - Multi Regions (Distribuir em regiões diferentes)**: Uma estratégia de Recuperação de Desastres (DR) baseada em multi-região(region) envolve a replicação de recursos críticos, como bancos de dados e aplicativos, em regiões geográficas separadas. Isso garante disponibilidade contínua, mesmo se uma região enfrentar falhas.

**Implementar uma cópia do banco numa instância EC2**: Somente copiar o banco de dados para uma instância EC2 não traz nenhum benefício para um processo de DR, se for feito na mesma Zona de Disponibilidade ou Região.

Utilizando serviços de replicação automática, como a replicação de banco de dados RDS e a sincronização de dados S3, os dados são mantidos consistentes em múltiplas regiões. Isso é crucial para um plano de recuperação de desastres (DR) eficaz, pois garante que os dados estejam disponíveis mesmo se uma região inteira enfrentar uma falha. Em caso de desastre em uma região, o tráfego pode ser redirecionado para a região ativa, minimizando a interrupção do serviço e garantindo continuidade de negócios. Implementar DR em outra região aumenta a resiliência e protege contra falhas regionais, proporcionando uma camada adicional de segurança e disponibilidade para os dados e aplicações críticas.

[Link para mais informações](https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/dr-standard-edition-amazon-rds/sites-strategies.html)

# 8 - Uma *agência de viagens online tem a necessidade de armazenar, analisar e correlacionar dados de logs de seus aplicativos*. Isso é *essencial para identificar e resolver gargalos de desempenho, bem como lidar com problemas de disponibilidade, a fim de garantir uma experiência de reserva otimizada para seus clientes*. Qual *serviço da AWS é mais indicado* para atender a essa demanda?

### Resposta Correta:
**Amazon OpenSearch**: O Amazon OpenSearch é um conjunto distribuído de pesquisa e análise de código 100% aberto usado para uma ampla variedade de casos de uso, como monitoramento de aplicações em tempo real, análise de logs e pesquisa de sites.

### Outras Opções:
**Amazon CloudSearch**: O CloudSearch oferece um serviço gerenciado de busca e localização que pode ser facilmente implementado em seu website.

**(Marcada Incorreta) Amazon EMR**: O EMR (Elastic MapReduce) é a plataforma de Big Data da AWS, projetada para processar grandes volumes de dados utilizando frameworks como Apache Hadoop, Spark e Presto.

**Amazon Athena**: O Athena é um serviço serverless que permite realizar consultas SQL diretamente em dados armazenados em buckets no S3.

O Amazon OpenSearch é um conjunto distribuído, orientado à comunidade, com licença Apache 2.0 de pesquisa e análise de código 100% aberto usado para uma ampla variedade de casos de uso, como monitoramento de aplicações em tempo real, análise de logs e pesquisa de sites. O OpenSearch fornece um sistema altamente escalável para fornecer acesso rápido e resposta a grandes volumes de dados com uma ferramenta de visualização integrada. É um pacote de pesquisa e análise de código aberto distribuído derivado do Elasticsearch. O Amazon OpenSearch Service oferece as versões mais recentes do OpenSearch, suporte para 19 versões do Elasticsearch (versões de 1.5 a 7.10), bem como recursos de visualização fornecidos pelo OpenSearch Dashboards e Kibana (versões de 1.5 a 7.10).

[Link para mais informações](https://aws.amazon.com/pt/what-is/opensearch/)

# 9 - Um *E-Commerce precisa armazenar catálogos de produtos, onde cada item possui diferentes atributos, como descrição, preço, imagens e avaliações de clientes*. Qual *serviço de banco de dados é o mais adequado* para essa finalidade?

### Outras Opções:
**Amazon RedShift**: O Amazon Redshift é um banco de dados projetado para dados estruturados e semiestruturados, otimizado para análises e finalidades de Business Intelligence (BI).

**Amazon Aurora**: O Amazon Aurora é um banco de dados relacional altamente disponível e escalável, compatível com MySQL e PostgreSQL, que requer uma implementação estruturada para garantir desempenho e confiabilidade. Ele oferece recursos avançados como replicação automática e failover rápido.

### Resposta Correta:
**Amazon DynamoDB**: É o banco de dados mais adequado para armazenar dados não estruturados, onde cada item pode ter diferentes atributos.

**Amazon EMR**: O Amazon EMR (Elastic MapReduce) é a plataforma de Big Data da AWS, projetada para processar e analisar grandes volumes de dados usando frameworks como Apache Hadoop, Spark e Presto.

O Amazon DynamoDB é um serviço de banco de dados NoSQL na AWS projetado para armazenar e recuperar dados de maneira rápida e escalável. Ele é especialmente adequado para dados semi-estruturados e não estruturados, como JSON, XML e outros formatos. DynamoDB utiliza uma estrutura de chave e valor, permitindo a criação de tabelas flexíveis onde cada item pode ter diferentes atributos. Essa flexibilidade é benéfica para aplicativos com esquemas de dados evolutivos ou variáveis, oferecendo a capacidade de lidar com dados dinâmicos, como registros de eventos ou informações de usuários, de forma eficiente e escalável. Além disso, o modelo de chave e valor permite consultas rápidas e eficientes, tornando o DynamoDB ideal para aplicações que necessitam de desempenho consistente e baixa latência.

**Nota**:

Bancos de dados estruturados: Armazenam dados em formato organizado, como tabelas com linhas e colunas, e usam SQL para manipulação. São ideais para dados que seguem um esquema fixo, como registros financeiros e informações de clientes.

Bancos de dados não estruturados: Armazenam dados sem um esquema fixo, onde cada item pode ter diferentes atributos, podendo incluir texto, imagens, vídeos e outros tipos de dados multimídia.

[Link para mais informações](https://aws.amazon.com/pt/dynamodb/)

# 10 - Uma startup está em busca de um serviço capaz de identificar os sentimentos expressos em textos digitados durante conversas entre clientes e atendentes em um chat de um e-commerce. Qual serviço da AWS pode ser utilizado para analisar esses textos e determinar os sentimentos expressos, ajudando a melhorar a experiência do cliente e a eficiência do atendimento?

Amazon Translate: O Amazon Translate é um serviço de tradução automática neural que fornece traduções de idiomas com rapidez, alta qualidade, acessíveis e personalizáveis.

*(RESPOSTA CORRETA) Amazon Comprehend*: O Amazon Comprehend utiliza machine learning e processamento de linguagem natural (NLP) para analisar textos de forma avançada. Ele pode identificar o idioma do texto, extrair frases principais, e reconhecer entidades como lugares, pessoas, marcas e eventos.

(MARCADA INCORRETA) Amazon Kendra: O Amazon Kendra é um serviço de pesquisa que habilita seus usuários a pesquisarem dados não estruturados e estruturados usando processamento de linguagem natural e algoritmos de pesquisa avançados em diversos repositórios de uma organização.

Amazon Polly: O Amazon Polly é um serviço de nuvem que converte texto em fala realista indicado para desenvolver aplicações que aumentam o envolvimento e a acessibilidade.

Explicação geral
O Amazon Comprehend utiliza machine learning e processamento de linguagem natural (NLP) para analisar textos de forma avançada. Ele pode identificar o idioma do texto, extrair frases principais, e reconhecer entidades como lugares, pessoas, marcas e eventos. Além disso, Comprehend é capaz de entender o sentimento geral do texto, determinando se a opinião expressa é positiva, negativa, neutra ou mista. Também pode identificar os tópicos principais presentes em uma biblioteca de documentos, ajudando a categorizar e resumir grandes volumes de informações. Essas capacidades permitem que as empresas extraiam insights valiosos de textos não estruturados, melhorando a compreensão dos dados e a tomada de decisões.

https://aws.amazon.com/pt/comprehend/

# 11 - Uma aplicação disponibiliza dados por meio de APIs REST para várias aplicações externas. Considerando possíveis cenários de manutenção e evolução futuras, qual serviço pode auxiliar na gestão de múltiplas versões de uma API, garantindo a compatibilidade contínua com todos os seus consumidores?

AWS Zuul: O AWS Zuul não existe. Entretanto, Zuul é um projeto open-source da Netflix, que serve como um gateway de API e roteador de tráfego.

AWS Route53: O AWS Route 53 é um serviço web de Domain Name System (DNS) na nuvem altamente disponível e escalável. Ele facilita a tradução de nomes de domínio em endereços IP e oferece funcionalidades como roteamento de tráfego, verificação de integridade e gerenciamento de domínios, garantindo desempenho e confiabilidade para aplicações na AWS.

(MARCADA INCORRETA )AWS EventBridge: O AWS EventBridge é um barramento de eventos sem servidor que torna mais fácil a criação de aplicações orientadas por eventos em escala usando eventos gerados com base em suas aplicações, aplicações integradas de software como serviço (SaaS) e serviços da AWS.

(RESPOSTA CORRETA)API Gateway: O versionamento no Amazon API Gateway permite criar versões separadas de suas APIs, permitindo evolução controlada e gerenciamento de mudanças.

Explicação geral
O Amazon API Gateway é um serviço gerenciado que facilita a criação, publicação, manutenção, monitoramento e segurança de APIs em qualquer escala. O versionamento no Amazon API Gateway permite criar versões separadas de suas APIs, proporcionando um controle detalhado sobre a evolução e o gerenciamento de mudanças. Cada versão possui um número único, permitindo que desenvolvedores apontem explicitamente para uma versão específica, mantendo a compatibilidade com aplicações existentes enquanto introduzem novas funcionalidades. As versões podem ser gerenciadas através do Console ou da API, oferecendo flexibilidade e controle sobre como as mudanças são implantadas e consumidas por diferentes clientes e sistemas. Isso garante que novas versões de APIs possam ser testadas e implementadas de forma segura e organizada, minimizando interrupções e erros.

https://aws.amazon.com/pt/api-gateway/features/