# 1. Estrutura do Exame

O exame CLF-C02 abrange quatro domínios principais:

| Domínio                        | Conteúdo Pontuado (%) |
| ------------------------------ | --------------------- |
| 1. Conceitos da Nuvem          | 24%                   |
| 2. Segurança e Conformidade    | 30%                   |
| 3. Tecnologia e Serviços da Nuvem | 34%               |
| 4. Cobrança, Preços e Suporte  | 12%                   |

# 2. Detalhamento dos Domínios

## Domínio 1: Conceitos da Nuvem (24%)

| Tarefa                          | Conhecimento                             | Habilidades                                      |
| ------------------------------- | ---------------------------------------- | ------------------------------------------------ |
| 1.1 Definir os benefícios da AWS| Proposta de valor da nuvem AWS            | Economia de custos, infraestrutura global, alta disponibilidade |
| 1.2 Identificar princípios de projeto da AWS | AWS Well-Architected Framework      | Pilar da Excelência Operacional, Segurança, Confiabilidade      |
| 1.3 Compreender migração para a AWS | AWS CAF, estratégias de adoção         | Redução de riscos, aumento da eficiência                          |
| 1.4 Aspectos econômicos da nuvem | Custo fixo vs. variável, licenciamento  | Dimensionamento correto, serviços gerenciados AWS                |

## Domínio 2: Segurança e Conformidade (30%)

| Tarefa                          | Conhecimento                             | Habilidades                                      |
| ------------------------------- | ---------------------------------------- | ------------------------------------------------ |
| 2.1 Modelo de Responsabilidade Compartilhada | Definição do modelo              | Identificação de responsabilidades                |
| 2.2 Governança e conformidade   | Conformidade na AWS                      | Monitoramento e auditoria com AWS Artifact e CloudTrail |
| 2.3 Gerenciamento de Acesso     | IAM, princípio de menor privilégio       | Autenticação MFA, IAM Identity Center             |
| 2.4 Recursos de segurança       | Amazon GuardDuty, AWS Shield             | Identificação de ameaças, criptografia            |

## Domínio 3: Tecnologia e Serviços da Nuvem (34%)

| Tarefa                          | Conhecimento                             | Habilidades                                      |
| ------------------------------- | ---------------------------------------- | ------------------------------------------------ |
| 3.1 Métodos de implantação      | Provisionamento, Acesso AWS              | CLI, SDKs, IaC                                   |
| 3.2 Infraestrutura Global       | Regiões AWS, Zonas de Disponibilidade    | Alta disponibilidade, redundância                |
| 3.3 Serviços Computacionais     | Amazon EC2, AWS Lambda                   | Uso adequado de instâncias                       |
| 3.4 Banco de Dados AWS          | Amazon RDS, DynamoDB                     | Modelos relacional e NoSQL                       |
| 3.5 Rede AWS                    | VPC, Route 53, Direct Connect            | Configuração de ACLs e grupos de segurança       |
| 3.6 Armazenamento AWS           | Amazon S3, EBS, EFS                      | Diferenças entre storage classes                 |
| 3.7 IA/ML e Analytics           | Amazon SageMaker, AWS Glue               | Casos de uso de IA e análise de dados            |
| 3.8 Outras categorias de serviços | AWS AppSync, AWS IoT Core               | Escolha de serviços para diferentes necessidades |

## Domínio 4: Cobrança, Preços e Suporte (12%)

| Tarefa                          | Conhecimento                             | Habilidades                                      |
| ------------------------------- | ---------------------------------------- | ------------------------------------------------ |
| 4.1 Comparar modelos de preços  | Instâncias reservadas, Spot, Savings Plans | Escolha de opções para otimização de custos    |
| 4.2 Gerenciamento de custos     | AWS Budgets, AWS Pricing Calculator      | Consolidação de cobranças, tags de custos        |
| 4.3 Suporte e Recursos AWS      | AWS Support Plans, AWS Marketplace       | Uso do AWS Trusted Advisor, AWS Health Dashboard |

## Tecnologias e conceitos que podem aparecer no exame

A lista a seguir contém tecnologias e conceitos que podem aparecer no exame. Essa lista não é completa e está sujeita a alterações. A ordem e a posição dos itens nessa lista não indicam seu peso relativo ou importância no exame.

| Categoria | Tecnologias e Conceitos |
|-----------|------------------------|
| **APIs** | APIs |
| **Computação em Nuvem** | Benefícios da migração para a nuvem AWS |
| **Frameworks e Conformidade** | AWS Cloud Adoption Framework (AWS CAF), Conformidade da AWS |
| **Computação** | Computação, Tipos de instância do Amazon EC2 (reservada, sob demanda, spot) |
| **Gerenciamento de Custos** | Gerenciamento de custos, AWS Pricing Calculator |
| **Bancos de Dados** | Bancos de dados |
| **Infraestrutura e Rede** | Infraestrutura global da AWS (Regiões AWS, Zonas de Disponibilidade), Infraestrutura como código (IaC), Serviços de rede |
| **Segurança** | Segurança, Blog de segurança da AWS, AWS Security Center, Modelo de responsabilidade compartilhada da AWS |
| **Governança e Gestão** | Gerenciamento e governança, Rede de Parceiros da AWS, Recomendações da AWS |
| **Migração e Transferência de Dados** | Migração e transferência de dados |
| **Recursos de Aprendizado** | AWS Knowledge Center, AWS re:Post, SDKs da AWS |
| **Arquitetura e Suporte** | AWS Well-Architected Framework, AWS Support Center, Planos do AWS Support |

# 3. Recursos e Produtos da AWS no Escopo

A lista a seguir contém os serviços e recursos da AWS que estão no escopo do exame.

### Analytics
| Serviços |
|----------|
| Amazon Athena |
| AWS Data Exchange |
| Amazon EMR |
| AWS Glue |
| Amazon Kinesis |
| Amazon MSK (Managed Streaming for Apache Kafka) |
| Amazon OpenSearch Service |
| Amazon QuickSight |
| Amazon Redshift |

### Integração de Aplicativos
| Serviços |
|----------|
| Amazon EventBridge |
| Amazon SNS (Simple Notification Service) |
| Amazon SQS (Simple Queue Service) |
| AWS Step Functions |

### Aplicações Empresariais
| Serviços |
|----------|
| Amazon Connect |
| Amazon SES (Simple Email Service) |

### Cloud Financial Management
| Serviços |
|----------|
| AWS Billing Conductor |
| AWS Budgets |
| AWS Relatório de Uso e Custo |
| AWS Cost Explorer |
| AWS Marketplace |

### Computação
| Serviços |
|----------|
| AWS Batch |
| Amazon EC2 |
| AWS Elastic Beanstalk |
| Amazon Lightsail |
| Zonas Locais da AWS |
| AWS Outposts |
| AWS Wavelength |

### Contêineres
| Serviços |
|----------|
| Amazon ECR (Elastic Container Registry) |
| Amazon ECS (Elastic Container Service) |
| Amazon EKS (Elastic Kubernetes Service) |

### Interação com os Clientes
| Serviços |
|----------|
| AWS Activate para Startups |
| AWS IQ |
| AWS Managed Services (AMS) |
| AWS Support |

### Banco de Dados
| Serviços |
|----------|
| Amazon Aurora |
| Amazon DynamoDB |
| Amazon MemoryDB para Redis |
| Amazon Neptune |
| Amazon RDS |

### Ferramentas do Desenvolvedor
| Serviços |
|----------|
| AWS AppConfig |
| AWS CLI |
| AWS Cloud9 |
| AWS CloudShell |
| AWS CodeArtifact |
| AWS CodeBuild |
| AWS CodeCommit |
| AWS CodeDeploy |
| AWS CodePipeline |
| AWS CodeStar |
| AWS X-Ray |

### Computação de Usuário Final
| Serviços |
|----------|
| Amazon AppStream 2.0 |
| Amazon WorkSpaces |
| Amazon WorkSpaces Web |

### Web e Dispositivos Móveis de Front-End
| Serviços |
|----------|
| AWS Amplify |
| AWS AppSync |
| AWS Device Farm |

### Internet das Coisas (IoT)
| Serviços |
|----------|
| AWS IoT Core |
| AWS IoT Greengrass |

### Machine Learning
| Serviços |
|----------|
| Amazon Comprehend |
| Amazon Kendra |
| Amazon Lex |
| Amazon Polly |
| Amazon Rekognition |
| Amazon SageMaker |
| Amazon Textract |
| Amazon Transcribe |
| Amazon Translate |

### Gerenciamento e Governança
| Serviços |
|----------|
| AWS Auto Scaling |
| AWS CloudFormation |
| AWS CloudTrail |
| Amazon CloudWatch |
| AWS Compute Optimizer |
| AWS Config |
| AWS Control Tower |
| AWS Health Dashboard |
| AWS Launch Wizard |
| AWS License Manager |
| Console de Gerenciamento da AWS |
| AWS Organizations |
| AWS Resource Groups e Tag Editor |
| AWS Service Catalog |
| AWS Systems Manager |
| AWS Trusted Advisor |
| AWS Well-Architected Tool |

### Migração e Transferência de Dados
| Serviços |
|----------|
| AWS Application Discovery Service |
| AWS Application Migration Service |
| AWS DMS (Database Migration Service) |
| AWS Migration Hub |
| AWS Schema Conversion Tool (AWS SCT) |
| Família AWS Snow |
| AWS Transfer Family |

### Redes e Entrega de Conteúdo
| Serviços |
|----------|
| Amazon API Gateway |
| Amazon CloudFront |
| AWS Direct Connect |
| AWS Global Accelerator |
| Amazon Route 53 |
| Amazon VPC |
| AWS VPN |

### Segurança, Identidade e Conformidade
| Serviços |
|----------|
| AWS Artifact |
| AWS Audit Manager |
| AWS Certificate Manager (ACM) |
| AWS CloudHSM |
| Amazon Cognito |
| Amazon Detective |
| AWS Directory Service |
| AWS Firewall Manager |
| Amazon GuardDuty |
| AWS IAM (Identity and Access Management) |
| AWS IAM Identity Center (AWS Single Sign-On) |
| Amazon Inspector |
| AWS KMS (Key Management Service) |
| Amazon Macie |
| AWS Network Firewall |
| AWS Resource Access Manager (AWS RAM) |
| AWS Secrets Manager |
| AWS Security Hub |
| AWS Shield |
| AWS WAF |

### Sem Servidor
| Serviços |
|----------|
| AWS Fargate |
| AWS Lambda |

### Armazenamento
| Serviços |
|----------|
| AWS Backup |
| Amazon EBS (Elastic Block Store) |
| Amazon EFS (Elastic File System) |
| AWS Elastic Disaster Recovery |
| Amazon FSx |
| Amazon S3 |
| Amazon S3 Glacier |
| AWS Storage Gateway |


