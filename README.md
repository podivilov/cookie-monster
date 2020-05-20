# Cookie Monster
Уведомление об использовании кук, которое не раздражает посетителей вашего веб-сайта

# Установка

1. Загрузите директорию `cookie-monster` в корень вашего веб-сайта
2. Замените значение `example.com` в файл `cookie-monster/assets/js/cookie-monster.js` на адрес вашей страницы, которая будет отображаться, если пользователь отключит куки
3. Замените значение `example.com` в файле `cookie-monster/disallow/index.html` на адрес вашего сайта
4. Замените значение `example.com` в файле `cookie-monster/oops/index.html` на адрес вашего сайта
5. Замените значение `example.com` в файле `cookie-monster/index.html` на адрес вашей странице, где содержится информация о том, как работают куки. На сайте должна быть кнопка или ссылка, которая ведёт на `адрес_вашего_сайта/cookie-monster/disallow/`, чтобы отключить куки. [Пример](https://blog.podivilov.ru/all/cookies/)

Завершите установку Cookie Monster путём добавления следующего кода на страницы, где должно отображаться уведомление об использовании кук:

```
<link rel="stylesheet" href="example.com/cookie-monster/assets/css/cookie-monster.css" media="screen" />
<div class="cookie-monster"><a href="example.com/cookie-monster/"><img class="cookie-monster" src="example.com/cookie-monster/assets/img/cookie-monster.png"></img></a></div>
<script src="example.com/cookie-monster/assets/js/cookie-monster.js"></script>
```

Не забудьте также заменить `example.com` на адрес вашего веб-сайта
