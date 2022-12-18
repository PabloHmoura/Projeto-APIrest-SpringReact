# Projeto-APIrest-SpringReact


<h2>Para conseguir utilizar o projeto no Localhost, siga os passos a seguir;</h2>

Instale o FrameWork SpringToolsSuite (STS) para abrir o código do back-end </br>
Instale o VS Code para verificar o código do front-end </br><br>

-Abra um terminal no git bash dentro da pasta "front-end" e digite os comandos a seguir;</br><br>

    yarn           
    yarn add react-datepicker@4.8.0 @types/react-datepicker@4.4.2        
    
Agora para a parte de back-end; <br> <br>

Você precisará criar uma conta na TWILLIO e cadastrar o seu número de Telefone para conseguir receber as mensagens da API.<br>

Dentro do STS configure as variáveis de ambiente de acordo com a sua conta da TWILLIO<br><br>
    Definir variáveis de ambiente:<br>
    
    TWILIO_SID <br>
    TWILIO_KEY<br>
    TWILIO_PHONE_FROM<br>
    TWILIO_PHONE_TO<br><br><br>
    
    
Agora novamente dentro do terminal do git bash do front-end, insira os seguintes comandos para instalar as dependências;<br><br>

    yarn add axios@0.27.2
    yarn add react-toastify@9.0.5

Para começar a utilizar o projeto, basta entrar no STS e rodar o programa.
Para conferir se o projeto está funcionando, você pode testar o link (http://localhost:8080/sales?minDate=2022-01-01&maxDate=2022-03-31) dentro do postman utilizando o método GET.
Isso deverá retornar os dados do banco de acordo com as datas especificadas (Lembrando que os dados foram inseridos manualmente dentro do STS).<br>

Se você configurou as variáveis de ambiente corretamente, basta rodar o link a seguir no postman utilizando o método GET(http://localhost:8080/sales/40/notification). Isso deverá encaminhar o SMS com os dados da
venda para o telefone que foi cadastrado na TWILLIO.<br><br>


Agora dentro do terminal do front-end novamente, digite o comando a seguir;<br><br>

    yarn dev
    
Isso irá te retornar o link para visualizar o site na web dentro do localhost. Após isso o projeto deve funcionar completamente.<br><br>


Para garantir que o projeto funcione, siga as instruções do site abaixo para configurar as variáveis de ambiente do JAVA dentro da sua máquina.<br>
JDK Version 17<br>
https://medium.com/beelabacademy/configurando-vari%C3%A1veis-de-ambiente-java-home-e-maven-home-no-windows-e-unix-d9461f783c26



    
   

