# MÓDULO 2 - A plataforma da AWS

## 1 - Navegação pela plataforma

Após criar sua conta, você será direcionado para o console principal, onde tudo acontece. Nesta apostila, exploraremos os principais elementos desse console e as formas de interagir com os serviços da AWS.

### Acessando a AWS

Existem três formas principais de acessar os serviços da AWS:

1. **Console Web:** Interface gráfica acessível pelo navegador.
2. **Cloud Shell:** Interface de linha de comando integrada diretamente no console.
3. **CLI (Command Line Interface):** Acesso via terminal após instalação do AWS CLI.

Embora a maioria dos iniciantes prefira o console web, a CLI é muito útil para automação de tarefas.

### Explorando o Console Web

### Elementos Principais

No topo do console, encontramos:

- **Logotipo da AWS:** Retorna à página inicial.
- **Lista de Serviços:** Organização por categorias como computação, banco de dados e segurança.
- **Barra de Pesquisa:** Permite localizar rapidamente qualquer serviço.
- **Regiões:** Escolha de onde os recursos serão provisionados (Exemplo: São Paulo, Sydney, Virgínia do Norte).
- **Configurações da Conta:** Gerenciamento de segurança, idioma e preferências.
- **Notificações:** Alertas e informações sobre eventos da conta.

### Lista de Serviços

A AWS conta com mais de 200 serviços divididos em categorias. Alguns exemplos:

- **Compute (Computação):** EC2, Lambda, Lightsail
- **Storage (Armazenamento):** S3, EBS, Glacier
- **Database (Bancos de Dados):** RDS, DynamoDB, Redshift
- **Networking & Content Delivery (Rede e CDN):** VPC, CloudFront, Route 53

Para acessar um serviço, basta clicar nele ou buscá-lo na barra de pesquisa.

### Regiões da AWS

A AWS possui data centers espalhados pelo mundo, organizados em regiões. Cada região possui um código identificador, como:

- **us-east-1 (Virgínia do Norte)**
- **sa-east-1 (São Paulo)**
- **ap-southeast-2 (Sydney)**

Cada região opera de forma independente. Para reduzir latência e custos, é recomendável escolher a região mais próxima de seus usuários.

### Personalizando o Console

A tela inicial do console AWS pode ser customizada com widgets, que fornecem informações rápidas sobre sua conta e serviços utilizados.

### Principais Widgets

- **AWS Health:** Exibe problemas e eventos de manutenção.
- **Billing Dashboard:** Mostra os custos mensais e estimativas de gastos.
- **Trusted Advisor:** Recomenda melhorias de segurança, desempenho e economia.
- **Resumo de Operações:** Lista as instâncias e serviços ativos na conta.

### Para adicionar ou remover widgets:

1. Clique em "Adicionar Widget".
2. Escolha um widget da lista.
3. Arraste para a posição desejada.

### Alterando Idioma e Configurações da Conta

Caso o console esteja em inglês e você queira alterá-lo para português:

1. Clique no seu nome no canto superior direito.
2. Selecione "Settings" (Configurações).
3. Na opção "Language", escolha "Português".
4. Clique em "Save Settings" (Salvar Configurações).


## 2 - Alerta de custo

Criar um alerta de custo na AWS é uma etapa essencial para evitar cobranças inesperadas. Muitos usuários, especialmente iniciantes, podem acabar utilizando serviços sem perceber o impacto financeiro. Nesta apostila, aprenderemos a configurar um alerta de custo de forma eficiente, garantindo um controle financeiro adequado.

### Importância do Alerta de Custo

Na AWS, tudo o que você utilizar será cobrado. Alguns usuários acabam ativando serviços em diferentes regiões e esquecem de desativá-los, o que pode gerar custos elevados. Criar um alerta de custo permite que você seja notificado por e-mail quando seus gastos atingirem um determinado valor.

Por exemplo, ao configurar um alerta para 10 dólares, se os seus gastos ultrapassarem esse valor, você receberá uma notificação e poderá tomar ações para evitar custos excessivos.

### Habilitando o Monitoramento de Custos

Antes de criar um alerta, precisamos ativar o monitoramento de billing na AWS. Siga os passos abaixo:

1. **Acesse sua conta AWS.**
2. **Clique no seu nome de usuário** no canto superior direito e selecione "Conta".
3. No menu esquerdo, clique em **"Preferências de faturamento"**.
4. Ative as opções:
   - "Receber alertas de uso do nível gratuito da AWS"
   - "Habilitar monitoramento do faturamento no CloudWatch"
5. Clique em **"Atualizar"** para salvar as alterações.

*Obs.: Uma vez habilitado, o monitoramento do faturamento no CloudWatch não pode ser desativado.*

### Criando o Alerta de Custo no CloudWatch

Agora que o monitoramento está habilitado, podemos criar um alerta de custo no CloudWatch.

### Passo 1: Acessar o CloudWatch

1. No console da AWS, procure por **CloudWatch** na barra de pesquisa e clique nele.
2. No menu esquerdo, clique em **"Alarmes"**.
3. Clique no botão **"Criar alarme"**.

### Passo 2: Definir Métrica e Condição

1. Clique em **"Selecionar métrica"**.
2. Digite **"billing"** na barra de pesquisa.
3. Escolha **"Faturamento - Carga Total Estimada"** e clique em **"Selecionar métrica"**.
4. Mantenha a configuração padrão e defina a condição:
   - Defina **"Maior que"** e insira **10** (ou outro valor desejado).
5. Clique em **"Próximo"**.

### Passo 3: Configurar Notificação

1. Escolha **"Criar novo tópico do SNS"**.
2. Insira um nome para o tópico (exemplo: **Alerta-Custo**).
3. Insira o e-mail para receber os alertas.
4. Clique em **"Criar tópico"** e depois em **"Próximo"**.

### Passo 4: Confirmar Inscrição do E-mail

1. Verifique sua caixa de entrada.
2. Se o e-mail estiver na pasta de spam, mova-o para a caixa de entrada principal.
3. Clique no link de **"Confirm Subscription"** para ativar os alertas.

### Passo 5: Finalizar o Alerta

1. Dê um nome ao alarme (exemplo: **Alerta_10USD**).
2. Revise as configurações.
3. Clique em **"Criar alarme"**.

*O status do alarme pode aparecer como "Dados Insuficientes", o que é normal nos primeiros minutos.*


## 3 - Mudanças na console
 
Antes de avançarmos neste curso, é importante destacar um ponto essencial sobre a plataforma da AWS. Como você já percebeu, estamos explorando a AWS Console e já realizamos configurações essenciais, como a criação de alertas de custo. Entretanto, a AWS está em constante evolução, o que pode afetar a interface visual da console e a localização de algumas opções.

### Mudanças na Interface da AWS

A AWS frequentemente atualiza sua interface para melhorar a experiência do usuário. Isso significa que:

- Algumas opções podem mudar de local dentro da console.
- Elementos como botões, menus e painéis podem ser reposicionados.
- A organização dos serviços pode ser alterada.
- Novos serviços e funcionalidades podem ser adicionados.

Essas mudanças podem ocorrer em diferentes serviços, como o EC2, S3, RDS, entre outros. Por exemplo, há seis meses, a seção de instâncias em execução no EC2 estava localizada de uma forma diferente. Outra mudança comum é o reposicionamento do botão "Executar Instâncias", que antes ficava no lado esquerdo e agora está à direita.

### Como Lidar com as Mudanças

- **Adapte-se às mudanças:** Mesmo que o layout seja alterado, a funcionalidade principal permanece a mesma.
- **Busque pelo recurso:** Utilize a barra de pesquisa da AWS Console para encontrar rapidamente o serviço ou configuração desejada.
- **Acompanhe a documentação oficial:** A AWS possui documentações sempre atualizadas que ajudam a compreender as mudanças na interface.
- **Mantenha-se atualizado:** A cada novo recurso ou alteração, fique atento a novidades que possam impactar o uso dos serviços.
- **Compreensão e paciência:** Caso não encontre uma opção exatamente onde foi mostrado na aula, explore a interface e tente localizar os botões e menus em outros lugares próximos.
