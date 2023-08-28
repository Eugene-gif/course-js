# [Template project 2023 vanilla js](https://eugene-gif.github.io/template-2023/#home)

## Описание:

### Инициализация
```
npm i (yarn)
```

### Запуск
```
npm run dev (yarn dev)
```

### Сборка для продакшена
```
npm run build (yarn build)
```


### Деплой проекта:
##### 1. Создание и настройка репозитория.
##### 2. Установка в devDependencies gh-pages:
```
npm i gh-pages --save-dev
```
##### 3. Записываем в файл package.json в блок 'scripts':
```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```  
##### 4. В vite.config.js добавляем:
```
export default defineConfig({
  base: "/name-project",
})
```
##### 5. При необходимости вызываем команду:
```
npm run deploy
```
После ввода команды проект автоматически деплоится в ветку gh-pages