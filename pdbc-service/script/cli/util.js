const fs = require("fs");
const {resolve} = require('path')
const logSymbols = require('log-symbols')
const firstUpperCase = (str) => {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};

const writeFile = async (modelName, dto, service, controller, _module,prefix) => {
  
  const modulesPath = resolve(`../../src/modules/${prefix}/` + modelName);
  if (!fs.existsSync(modulesPath)) {
    fs.mkdir(modulesPath, (err) => {
      // 创建失败
      if (err){
        console.log(err);
        throw err;
      } 
      // 创建成功
      console.log("文件创建成功！");
    });
  }

  await new Promise((resolve, reject) => {
    fs.writeFile(
      modulesPath + `/${modelName}.dto.ts`,
      dto,
      "utf8",
      function (error) {
        if (error) {
          console.log(error);
          console.log(logSymbols.error,"DTO写入失败");
          reject(false)
        }
        console.log(logSymbols.success,"DTO写入成功");
        resolve(true)
      }
    );
  })
  // await new Promise((resolve, reject) => {
  //   fs.writeFile(
  //     modulesPath + `/${modelName}.dao.ts`,
  //     dao,
  //     "utf8",
  //     function (error) {
  //       if (error) {
  //         console.log(error);
  //         console.log(logSymbols.error,"DAO写入失败");
  //         reject(false)
  //       }
  //       console.log(logSymbols.success,"DAO写入成功");
  //       resolve(true)
  //     }
  //   );
  // })



  await new Promise((resolve, reject) => {
    fs.writeFile(
      modulesPath + `/${modelName}.service.ts`,
      service,
      "utf8",
      function (error) {
        if (error) {
          console.log(error);
          console.log(logSymbols.error,"SERVIC写入失败");
          reject(false)
        }
        console.log(logSymbols.success,"SERVIC写入成功");
        resolve(true)
      }
    );
  })

  await new Promise((resolve, reject) => {
    fs.writeFile(
      modulesPath + `/${modelName}.controller.ts`,
      controller,
      "utf8",
      function (error) {
        if (error) {
          console.log(error);
          console.log(logSymbols.error,"CONTROLLER写入失败");
          reject(false)
        }
        console.log(logSymbols.success,"CONTROLLER写入成功");
        resolve(true)
      }
    );
  })
  await new Promise((resolve, reject) => {
    fs.writeFile(
      modulesPath + `/${modelName}.module.ts`,
      _module,
      "utf8",
      function (error) {
        if (error) {
          console.log(error);
          console.log(logSymbols.error,"MODULE写入失败");
          reject(false)
        }
        console.log(logSymbols.success,"MODULE 写入成功");
        resolve(true)
      }
    );
  })


 

};

module.exports = {
  writeFile,
  firstUpperCase,
};
