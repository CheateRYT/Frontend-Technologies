$(document).ready(function () {
  $(".node").click(function () {
    var technology = $(this).data("tech");
    var description;

    switch (technology) {
      case "HTML":
        description =
          "стандартный язык разметки для создания веб-страниц и веб-приложений.";
        break;
      case "CSS":
        description =
          "язык таблиц стилей, используемый для оформления документов, написанных на HTML.";
        break;
      case "JavaScript":
        description =
          "язык программирования, который позволяет создавать интерактивные веб-страницы.";
        break;
      case "React":
        description =
          "JavaScript библиотека для создания пользовательских интерфейсов.";
        break;
      case "Angular":
        description = "фреймворк для разработки одностраничных приложений.";
        break;
      case "Vue.js":
        description =
          "прогрессивный фреймворк JavaScript для создания пользовательских интерфейсов.";
        break;
      case "Sass":
        description =
          "препроцессор CSS, который добавляет множество возможностей к обычному CSS.";
        break;
      case "Bootstrap":
        description =
          "фреймворк CSS и JavaScript для разработки адаптивных и красивых веб-приложений.";
        break;
      case "TypeScript":
        description =
          "язык программирования, который является надстройкой над JavaScript и добавляет статическую типизацию.";
        break;
      case "Webpack":
        description =
          "инструмент сборки модулей JavaScript и других файлов для веб-приложений.";
        break;
      case "Babel":
        description =
          "Babel - транспилятор JavaScript. Для запуска установите Babel через npm и используйте команду:<br><code>npx babel script.js --out-file script-compiled.js</code>";
        break;
      case "jQuery":
        description =
          "jQuery - библиотека JavaScript. Пример использования:<br><code>$(document).ready(function() {<br>  // ваш код здесь<br>});</code>";
        break;
      case "GraphQL":
        description =
          "GraphQL - язык запросов для API. Пример запроса:<br><code>query {<br>  user(id: 1) {<br>    name<br>  }<br>}</code>";
        break;
      case "REST API":
        description =
          "REST API - архитектурный стиль для построения веб-сервисов. Пример запроса:<br><code>GET /users</code>";
        break;
      case "Git":
        description =
          "система контроля версий, используемая для отслеживания изменений в коде.";
        break;
      case "NPM":
        description = "менеджер пакетов для языка JavaScript.";
        break;
      case "Responsive Design":
        description =
          "подход к разработке веб-сайтов, который обеспечивает корректное отображение на различных устройствах.";
        break;
      case "AJAX":
        description =
          "AJAX - технология для обмена данными между браузером и сервером без перезагрузки страницы. Пример использования:<br><code>$.ajax({<br>  url: 'data.json',<br>  success: function(data) {<br>    console.log(data);<br>  }<br>});</code>";
        break;
      case "JSON":
        description = "формат передачи данных, основанный на JavaScript.";
        break;
      case "ES6":
        description =
          "шестая версия стандарта ECMAScript, добавляющая множество новых возможностей в JavaScript.";
        break;
      case "D3.js":
        description =
          "D3.js - библиотека JavaScript для визуализации данных. Пример создания графика:<br><code>var svg = d3.select('body').append('svg');<br>svg.append('circle').attr('r', 40);</code>";
        break;
      case "Web Accessibility":
        description =
          "концепция, обеспечивающая доступность веб-ресурсов для людей с ограниченными возможностями.";
        break;
      case "Unit Testing":
        description =
          "Unit Testing - процесс проверки отдельных модулей программы на корректность работы. Пример с использованием Jest:<br><code>test('adds 1 + 2 to equal 3', () => {<br>  expect(sum(1, 2)).toBe(3);<br>});</code>";
        break;
      case "CSS Frameworks":
        description =
          "набор готовых стилей и компонентов для ускорения разработки веб-приложений.";
        break;
      case "Node.js":
        description =
          "среда выполнения JavaScript, позволяющая запускать код на сервере.";
        break;
      case "Express.js":
        description =
          "Express.js - веб-фреймворк для Node.js. Пример запуска сервера:<br><code>const express = require('express');<br>const app = express();<br>app.get('/', (req, res) => {<br>  res.send('Hello World!');<br>});<br>app.listen(3000, () => console.log('Server running on port 3000'));</code>";
        break;
      case "MongoDB":
        description = "документоориентированная база данных.";
        break;
      case "SQL":
        description =
          "язык структурированных запросов для работы с реляционными базами данных.";
        break;
      case "Firebase":
        description =
          "платформа от Google для разработки мобильных и веб-приложений.";
        break;
      case "Jest":
        description = "фреймворк для тестирования JavaScript кода.";
        break;
      case "Gulp":
        description =
          "Gulp - инструмент для автоматизации задач в разработке веб-приложений. Пример создания задачи:<br><code>gulp.task('default', function() {<br>  // ваша задача здесь<br>});</code>";
        break;
      case "Grunt":
        description =
          "Grunt - инструмент для автоматизации задач в разработке веб-приложений. Пример создания задачи:<br><code>grunt.registerTask('default', ['task1', 'task2']);</code>";
        break;
      case "Heroku":
        description =
          "Heroku - облачная платформа для развертывания и хостинга веб-приложений. Пример деплоя:<br><code>git push heroku master</code>";
        break;
      case "AWS":
        description =
          "облачный сервис от Amazon, предоставляющий различные услуги для разработки и хостинга приложений.";
        break;
      case "Docker":
        description =
          "платформа для разработки, доставки и запуска приложений в контейнерах.";
        break;
      case "Kubernetes":
        description =
          "Kubernetes - система управления контейнерами для автоматизации развертывания, масштабирования и управления приложениями. Пример создания деплоя:<br><code>kubectl apply -f deployment.yaml</code>";
        break;
      case "CI/CD":
        description =
          "CI/CD - непрерывная интеграция и непрерывная доставка. Пример настройки CI/CD с Jenkins:<br><code>pipeline {<br>  agent any<br>  stages {<br>    stage('Build') {<br>      steps {<br>        // ваша команда сборки здесь<br>      }<br>    }<br>    stage('Deploy') {<br>      steps {<br>        // ваша команда деплоя здесь<br>      }<br>    }<br>  }<br>}</code>";
        break;
      case "Agile Methodologies":
        description =
          "Agile Methodologies - гибкие методологии разработки программного обеспечения. Пример использования Scrum:<br><code>Product Backlog -> Sprint Planning -> Daily Standup -> Sprint Review -> Sprint Retrospective</code>";
        break;
      default:
        description = "Описание для выбранной технологии отсутствует.";
    }
    alert("Вы выбрали технологию: " + technology + "\n\n" + description);
  });
});
