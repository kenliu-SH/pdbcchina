const inquirer = require('inquirer')
const logSymbols = require('log-symbols')
const Gbese = require('./G-BASE/main')
const Gcurd = require('./G-CURD/main')
;(async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'modelName',
      message: '请输入orm模型/模块名称',
    },
    {
      type: 'list',
      name: 'prefix',
      message: '请选择前缀',
      choices() {
        return ['web','admin']
      },
    },
    {
      type: 'list',
      name: 'pattern',
      message: '请选择构造模板',
      choices() {
        return ['base', 'curd']
      },
    },
  ])

  const { modelName, pattern, prefix } = answers

  let result
  if (pattern == 'base') {
    result = await Gbese(modelName, prefix)
  } else if (pattern == 'curd') {
    result = await Gcurd(modelName, prefix)
  }
  if (result) {
    console.log(logSymbols.success, '完成！')
  } else {
    console.log(logSymbols.error, '失败！')
  }
})()
