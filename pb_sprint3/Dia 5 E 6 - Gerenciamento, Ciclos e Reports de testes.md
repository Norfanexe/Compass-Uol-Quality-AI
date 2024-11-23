## 1 - Análise de Riscos em Testes de Software com PRISMA

### Introdução

A análise de riscos é uma etapa crucial no processo de testes de software, pois permite identificar e mitigar possíveis problemas que podem afetar a qualidade do produto final. A metodologia **PRISMA** (Product Risk Management) é uma abordagem sistemática para a análise de riscos, que ajuda a priorizar os testes com base nos riscos identificados.

### Objetivos da Análise de Riscos

- Identificar riscos potenciais que podem impactar o projeto de software.
- Avaliar a probabilidade e o impacto de cada risco.
- Priorizar os testes com base nos riscos identificados.
- Desenvolver estratégias para mitigar os riscos.

### Metodologia PRISMA

A metodologia PRISMA envolve as seguintes etapas:

### 1. Identificação dos Riscos

Nesta etapa, os riscos são identificados através de brainstorming, análise de documentos, entrevistas com stakeholders e revisão de projetos anteriores. Os riscos podem ser relacionados a requisitos, design, implementação, infraestrutura, entre outros.

### 2. Avaliação dos Riscos

Os riscos identificados são avaliados com base em dois critérios principais: probabilidade de ocorrência e impacto no projeto. A avaliação pode ser feita utilizando escalas qualitativas (baixa, média, alta) ou quantitativas (pontuação de 1 a 5, por exemplo).

### 3. Priorização dos Riscos

Com base na avaliação, os riscos são priorizados. Os riscos com alta probabilidade e alto impacto são considerados críticos e devem ser tratados com prioridade. A priorização ajuda a focar os esforços de teste nos aspectos mais importantes do projeto.

### 4. Planejamento dos Testes

Os testes são planejados com base na priorização dos riscos. Testes mais rigorosos e detalhados são aplicados aos componentes de maior risco. O planejamento deve incluir a definição de casos de teste, critérios de aceitação e recursos necessários.

### 5. Mitigação dos Riscos

Estratégias de mitigação são desenvolvidas para reduzir a probabilidade e/ou impacto dos riscos. Isso pode incluir a implementação de controles adicionais, mudanças no design, melhorias na infraestrutura, entre outras ações.

### 6. Monitoramento e Revisão

Os riscos e as estratégias de mitigação devem ser continuamente monitorados e revisados ao longo do projeto. Novos riscos podem surgir e os riscos existentes podem mudar de prioridade, exigindo ajustes no plano de testes.

## 2 - Testes Baseados em Riscos (Risk-Based Testing)

### Introdução

Os riscos estão presentes em diversas áreas de conhecimento, porém eles têm um significado distinto em cada contexto. No contexto de engenharia de software, os riscos podem estar relacionados diretamente ao gerenciamento do projeto como um todo ou voltados estritamente para o uso da aplicação, focando nas possíveis experiências negativas que serão percebidas pelos usuários do produto.

### Definição de Risco

Segundo a Wikipedia, **risco** é a possibilidade de algo ruim acontecer. Envolve incertezas/implicações sobre o efeito de uma atividade com relação a algo que os humanos valorizam, geralmente focando nas consequências negativas e indesejáveis.

### Testes Baseados em Riscos

A abordagem de **testes baseada em riscos** checa a probabilidade de ocorrência de falhas na aplicação, utilizando casos de teste previamente criados para prever o impacto do que foi desenvolvido nos negócios do cliente. Partes críticas da aplicação são priorizadas, onde a probabilidade de ocorrer falhas é maior e onde também deve ser investido esforço na correção de bugs críticos.

### Aplicação dos Testes Baseados em Riscos

Dependendo do contexto (tradicional ou ágil), há diferenças de como os dados são coletados, das cerimônias realizadas e dos artefatos produzidos. A seguir, será detalhada uma abordagem mais genérica da aplicação dessa técnica.

### Passo 1: Identificação dos Riscos

Para identificar os riscos, podemos realizar:

- **Reuniões de brainstorming**: Envolvendo todas as áreas participantes do projeto.
- **Histórico de falhas/Riscos já conhecidos**: Analisando falhas anteriores e queixas dos usuários.
- **Estratégia Inside Out**: Perguntando repetidamente “o que pode dar errado aqui?”.
- **Estratégia Outside In**: Baseando-se em modelos de qualidade, como a NBR ISO/IEC 9126.
- **Avaliação da complexidade da aplicação ou funcionalidade**: Considerando o nível de complexidade e acoplamento do código.

### Passo 2: Priorização dos Riscos

Após a identificação dos riscos, eles devem ser priorizados. As abordagens comumente utilizadas são:

- **Probabilidade x Impacto**: Atribuindo valores de 1 a 5 para probabilidade e impacto, multiplicando-os para obter o fator de risco.
- **Matriz de Riscos**: Utilizando palavras-chave (baixo, médio, alto) para determinar a priorização das atividades.

### Passo 3: Definir as Estratégias para a Mitigação dos Riscos

Com os riscos devidamente identificados, sabemos onde investir esforços em testes. O plano de mitigação pode englobar:

- Definir quais técnicas de testes serão utilizadas.
- Criar casos de testes específicos para cobrir os riscos encontrados.
- Priorizar a execução dos casos de testes associados aos módulos críticos.
- Realizar uma análise aprofundada dos impactos das modificações no ambiente de produção.
- Negociar o aumento do prazo para a entrega do projeto, se necessário.

### Testes Baseados em Riscos no Contexto Ágil

Em um contexto ágil, os riscos são coletados antes do planejamento da sprint, ajudando a pensar em como testar as atividades antes que as histórias sejam implementadas. Os riscos são priorizados através da relação probabilidade x impacto, e os pontos críticos com alta exposição são tratados de alguma forma.

### Prós e Contras da Adoção dos Testes Baseados em Riscos

### Vantagens

- Itens críticos são desenvolvidos e testados primeiro, reduzindo o risco geral no projeto.
- Diretriz clara para o que deve ser testado em prazos apertados.
- Novos riscos podem ser indicados a qualquer momento, permitindo priorização contínua.
- Informações valiosas para negociações e decisões do projeto.

### Desvantagens

- Partes do sistema podem não ser testadas intencionalmente.
- Valores atribuídos aos riscos podem ser subjetivos.
- Pode aumentar a carga de documentação.

### Riscos x Incertezas

Segundo **Frank Knight**, riscos são cenários que podem ser medidos quantitativamente, geralmente usando a probabilidade. Incertezas são situações que não são quantificáveis ou medidas com as ferramentas disponíveis. A ideia é transformar todos os níveis de incerteza em algo sabido e mensurável.

## 3 - MATRIZ DE RISCO

### Introdução

A **Matriz de Riscos**, também conhecida como Matriz de Probabilidade e Impacto, é uma ferramenta de gerenciamento de riscos que permite identificar visualmente quais riscos devem receber mais atenção. Ela é aplicada na etapa de avaliação de riscos, após a identificação dos mesmos. A matriz facilita a visualização das informações sobre os riscos, ajudando na tomada de decisões e na implementação de medidas preventivas.

### Estrutura da Matriz de Riscos

A matriz é composta por duas dimensões: **probabilidade** e **impacto**. A classificação do risco é feita avaliando o impacto versus a probabilidade, resultando em uma célula específica da matriz que indica o quão crítico é o risco.

### Probabilidade

A **probabilidade** mede o quão provável é a ocorrência do risco, sendo classificada em níveis como muito baixo, baixo, moderado, alto e muito alto. Esses níveis podem ser convertidos em porcentagens para facilitar o entendimento:

- **Muito baixo**: 1% a 10%
- **Baixo**: 11% a 30%
- **Moderado**: 31% a 50%
- **Alto**: 51% a 70%
- **Muito alto**: 71% a 90%

### Impacto

O **impacto** refere-se às consequências do risco caso ele ocorra, podendo ser negativo (prejuízo financeiro, perda de clientes, etc.) ou positivo (novas oportunidades de negócio, redução de taxas, etc.). O impacto também é medido em níveis:

- **Muito baixo**
- **Baixo**
- **Moderado**
- **Alto**
- **Muito alto**

### Aplicação da Matriz de Riscos

A **Matriz de Riscos** é utilizada na avaliação de qualquer risco, desde riscos organizacionais até riscos de projetos. Ela é eficaz para direcionar o trabalho em cenários com grandes quantidades de riscos identificados, ajudando a priorizar quais riscos devem ser tratados primeiro.

### Exemplo de Avaliação de Risco

Suponha que uma empresa de telemarketing tenha identificado o risco de queda das linhas telefônicas disponíveis. A probabilidade desse risco acontecer é moderada, pois ocorreu duas vezes nos últimos quatro meses. O impacto é muito alto, pois a ausência das linhas telefônicas trouxe um prejuízo significativo. Assim, a classificação do risco resultante é alta.

### Priorização dos Riscos

Os riscos são priorizados com base na sua classificação na matriz. Riscos com classificação alta (cor vermelha) devem receber maior atenção do que riscos moderados (cor amarela) ou baixos (cor verde).

### Tratamento dos Riscos

A tratativa dos riscos deve ser feita de acordo com a sua classificação na matriz. Riscos críticos devem ser tratados de imediato, enquanto riscos de menor impacto podem ser monitorados periodicamente.

