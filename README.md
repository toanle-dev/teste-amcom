# Tarefas para Desenvolvimento de Páginas de Consulta de CPF

## Tarefa 1: Criação da página de consulta de CPF (Tela 1)

1. **Criar o formulário de entrada de CPF:**
   - Criar um campo de texto para o CPF, com validação de formato (formato do CPF).
   - Adicionar um botão de "Consultar".

2. **Implementar a lógica de consulta de CPF:**
   - Criar uma função que valida o CPF inserido pelo usuário.
   - Verificar se o CPF é válido (simulação de consulta ou integração com serviço de backend).

3. **Exibir mensagens de erro ou sucesso:**
   - Se o CPF for inválido, exibir uma mensagem de erro na tela (ex: "CPF inválido").
   - Se o CPF for válido, redirecionar para a "Tela 2".

4. **Estilizar a interface de acordo com o modelo fornecido:**
   - Seguir o modelo visual para garantir que a interface esteja de acordo com o esperado.

## Tarefa 2: Criação da página de exibição de dados do cooperado (Tela 2)

1. **Criar a estrutura da Tela 2:**
   - Criar a página que será exibida após o redirecionamento, onde os dados do cooperado serão carregados.

2. **Carregar os dados do cooperado:**
   - Simular a carga de dados do cooperado para um CPF válido (pode ser feito com dados mockados ou integração com backend).
   - Exibir informações relevantes (nome, dados pessoais, etc.).

3. **Validar e tratar erros de dados:**
   - Implementar tratamento de erros para garantir que, se algo der errado ao carregar os dados, uma mensagem adequada seja exibida.

4. **Estilizar a Tela 2 de acordo com o modelo fornecido:**
   - Garantir que a tela siga o layout e estilo definidos no modelo fornecido.

## Tarefa 3: Navegação entre as telas

1. **Redirecionar para a Tela 2:**
   - Implementar o redirecionamento de Tela 1 para Tela 2 após a validação de CPF.

2. **Retornar à Tela 1:**
   - Se necessário, implementar um botão ou ação que permita voltar para a Tela 1 para realizar outra consulta de CPF.

## Tarefa 4: Testes

1. **Testar validação de CPF:**
   - Garantir que o sistema valide corretamente o CPF inserido.

2. **Testar redirecionamento e carregamento de dados:**
   - Verificar se, ao inserir um CPF válido, a Tela 2 é carregada corretamente com os dados do cooperado.

3. **Testar mensagens de erro:**
   - Validar se a mensagem de erro aparece quando o CPF é inválido.
"""