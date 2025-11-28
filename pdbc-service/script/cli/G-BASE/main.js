const fs = require("fs");
const { writeFile,firstUpperCase } = require("../util");
const {
  dtoTemplate,
  daoTemplate,
  serviceTemplate,
  controllerTemplate,
  moduleTemplate,
} = require("./template");
const modelPath = "../../../src/model/";
const fieldAndtypeRe = /\w+:\s(string|number|object)/g;
const commentRe = /comment:\s"\w+[\s\S]\w+/g; //

const main = async function (moduleName,prefix) {
  let result = true
  try {
    const dto = dtoTemplate(moduleName);
    // const dao = daoTemplate(moduleName);
    const service = serviceTemplate(moduleName);
    const controller = controllerTemplate(moduleName);
    const _module = moduleTemplate(moduleName);
    //写入文件
   await writeFile(moduleName, dto, service, controller, _module,prefix);
  } catch (error) {
    console.log(err);
    result = false
  }

  return result
};
async function getModelObjs(modelName) {
  const arr = [];
  const path = modelPath + modelName + ".model.ts";
  // 获取字段名和属性列表 字段名:属性
  const fieldsAndTypes = await getReArr(path, fieldAndtypeRe);
  // 获取注释列表 comment: "项目名",
  const commens = await getReArr(path, commentRe);
  for (let index = 0; index < fieldsAndTypes.length; index++) {
    const fieldsAndTypeStr = fieldsAndTypes[index];
    const commenTypeStr = commens[index];
    const vo = {
      name: fieldsAndTypeStr.split(":")[0],
      type: firstUpperCase(fieldsAndTypeStr.split(":")[1]),
      comment: commenTypeStr.replace('comment: "', "").replace('",', ""),
    };

    arr.push(vo);
  }
  return arr;
}

// 从模型中匹配正则，返回数组结果
function getReArr(path, re) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const fields = [];
        let arr;
        while ((arr = re.exec(data)) != null) {
          fields.push(arr[0]);
        }
        resolve(fields);
      }
    });
  });
}


module.exports =  main