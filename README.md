# Projeto de Conclusão < Let's Dev >

<br>
## :white_check_mark: Projeto:

#### Aplicação com atividades desenvolvidas durante o módulo de Front-end do Curso Let's Dev, oferecido pela Paipe.co. :rocket:

<br>
## :white_check_mark: Utilizando a Aplicação: 
#### Executar os seguintes comandos na raíz do projeto:
#### `npm install` ou `yarn install` - Instala dependências necessárias do projeto.
#### `npm start` ou `yarn start` - Compila e disponibiliza arquivos em servidor web local. 

<br>
## :white_check_mark: A Aplicação:

### **Páginas:**
#### - `Login`:
Formulário de acesso, onde o dado do input **nome** do usuário é salvo no localStorage e atualiza o [Contexto](https://pt-br.reactjs.org/docs/context.html), onde o dado é compartilhado com outras páginas da aplicação. 
<details>
	<summary>Preview Login</summary>
	<img src="https://github.com/CarlaBruckmann/formulario_versao2_LetsDev-Paipe/blob/master/previews/login.png?raw=true" alt="preview Login" width="100%"/>
</details> 
<br>

#### - `Home`:
Página de boas-vindas, com header, descrição do participante e cards de acesso à outras páginas da aplicação. <br>
Acessa dado **nome** via Contexto e exibe em tela. Disponibiliza botão para exclusão do dado no localStorage, que atualizará também o Contexto. Caso não seja encontrado registro, o botão não ficará disponível ao usuário.   

<details>
	<summary>Preview Home</summary>
	<img src="https://github.com/CarlaBruckmann/formulario_versao2_LetsDev-Paipe/blob/master/previews/home.png?raw=true" alt="preview Home" width="100%"/>
</details> 
<br>

#### - `Formulário em HTML e CSS`:
Primeiro formulário criado no módulo Front-end durante as aulas de introdução ao HTML e CSS e, posteriormente, **adaptado ao ReactTs**. <br>
[Repositório GitHub da versão HTML e CSS](https://github.com/CarlaBruckmann/formulario_versao1_LetsDev_Paipe)

<details>
	<summary>Preview Formulário HTML e CSS</summary>
	<img src="https://github.com/CarlaBruckmann/formulario_versao2_LetsDev-Paipe/blob/master/previews/formulario-basico.png?raw=true" alt="preview Formulário" width="100%"/>
</details> 
<br>

#### - `Formulário 2.0`:
Formulário funcional agora **criado em ReactTs, HTML e CSS**, com layout mais elaborado, onde os dados informados são coletados e retornam em um alert na tela.
<details>
	<summary>Preview Formulário 2.0</summary>
	<img src="https://github.com/CarlaBruckmann/formulario_versao2_LetsDev-Paipe/blob/master/previews/formulario-completo.png?raw=true" alt="preview Formulário 2.0" width="100%"/>
</details> 
<br>

#### - `Consumindo API's`:
Página de exercício **Consultando API viaCEP**, onde é possível informar um número de CEP, os valores são salvos no [Estado](https://pt-br.reactjs.org/docs/hooks-reference.html#usestate) e o resultado da pesquisa é retornado em tela.<br>
Também possuí elemento que acessa o **nome** do usuário via Contexto e retorna na tela.  
<details>
	<summary>Preview Consumindo API</summary>
	<img src="https://github.com/CarlaBruckmann/formulario_versao2_LetsDev-Paipe/blob/master/previews/consumindo-api.png?raw=true" alt="preview Consumindo API" width="100%"/>
</details> 
<br>

#### - `A PAIPE e os Paipers`:
Página de apresentação do Let's Dev e Professores dos Módulos, descrição sobre a Paipe criadora do programa e links de redes sociais.  <br>

<details>
	<summary>Preview A PAIPE e os Paipers</summary>
	<img src="https://github.com/CarlaBruckmann/formulario_versao2_LetsDev-Paipe/blob/master/previews/sobre-paipers.png?raw=true" alt="preview A PAIPE. e os Paipers" width="100%"/>
</details> 
<br>


## :white_check_mark: Tecnologias utilizadas: 
#####  `React`, `TypeScript`, `HTML`, `CSS`, `Vite`, `API`.






