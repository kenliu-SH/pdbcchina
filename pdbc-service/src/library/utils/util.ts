import * as xml2js from "xml2js";
import * as crypto from "crypto";

export function buildXML(json) {
  var builder = new xml2js.Builder({
    // @ts-ignore
    renderOpts: { pretty: false, cdata: true },
  });
  return builder.buildObject(json);
}

export function md5(p_value) {
  return crypto.createHash("md5").update(p_value, "utf8").digest("hex");
}

export function decryptData256(encryptedData, key) {
  encryptedData = new Buffer(encryptedData, "base64");
  var iv = "";
  let decipher = crypto.createDecipheriv("aes-256-ecb", md5(key), iv);
  decipher.setAutoPadding(true);
  let decoded = decipher.update(encryptedData, "base64", "utf8");
  decoded += decipher.final("utf8");
  return decoded;
}

export async function parseXML(xmlString) {
  return new Promise((resolve, reject) => {
    var parser = new xml2js.Parser({
      trim: true,
      explicitArray: false,
      explicitRoot: false,
    });
    parser.parseString(xmlString, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export function similar(s, t, f = 3) {
  if (!s || !t) {
    return 0;
  }
  var l = s.length > t.length ? s.length : t.length;
  var n = s.length;
  var m = t.length;
  var d = [];
  f = f || 3;
  var min = function (a, b, c) {
    return a < b ? (a < c ? a : c) : b < c ? b : c;
  };
  var i, j, si, tj, cost;
  if (n === 0) return m;
  if (m === 0) return n;
  for (i = 0; i <= n; i++) {
    d[i] = [];
    d[i][0] = i;
  }
  for (j = 0; j <= m; j++) {
    d[0][j] = j;
  }
  for (i = 1; i <= n; i++) {
    si = s.charAt(i - 1);
    for (j = 1; j <= m; j++) {
      tj = t.charAt(j - 1);
      if (si === tj) {
        cost = 0;
      } else {
        cost = 1;
      }
      d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
    }
  }
  let res = 1 - d[n][m] / l;
  return res.toFixed(f);
}

/**
 * 自定义函数名：prefixZero
 * @param num： 被操作数
 * @param n： 固定的总位数
 */
export function prefixZero(num, n) {
  return (Array(n).join("0") + num).slice(-n);
}

/**
 * weekDesc
 * @param iosWeek： IOS星期 1-7 7为周日
 */
export function weekDesc(iosWeek: number) {
  return "一二三四五六日".charAt(iosWeek - 1);
}

export function isBase64(str) {
  str = str + "";
  if (str === "" || str.trim() === "") {
    return false;
  }
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
}
