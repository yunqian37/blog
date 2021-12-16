# 初始化项

npx create-react-app jira --template typescript

配置绝对路径 tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

格式化工具：

​	prettier 目前项目没有配置

​	npx mrm lint-staged



git commit提交规范：

+ build：修改项目构建系统的提交
+ ci：修改项目继续集成流程的提交
+ docs：文档更新
+ feat：新增功能
+ fix：bug修复
+ perf：性能优化
+ refactor：重构代码（即没有新增功能也没有修复bug）
+ style：不影响程序逻辑的代码修改
+ test：新增测试用例或是更新现有测试
+ revert：回滚某个更早之前的提交
+ chore：不属于以上类型的其他修改



mock配置：

JSON Server

+ npm i json-server -g
+ Json-server --watch db.json 启动server

```json
{
  "users": []
}
```

postman：http://localhost:3000/users即可请求

项目配置json-server：

+ yarn add json-server -D

+ 根目录新建文件夹 __ json_server_mock__

+ 新建db.json

+ Package.json文件配置

  ```json
  {
    ...
    "scripts": {
      ...,
      "json-server": "json-server __json_server_mock__/db.json --watch"
    },
    ...
  }
  ```

  

