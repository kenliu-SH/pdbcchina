export function convertToAbsoluteUrl(relativeUrl: any) {
  if (!relativeUrl) return relativeUrl;
  // 检查当前页面的协议
  const currentProtocol = window.location.protocol;
  // 如果相对地址以"www"开头，则添加协议并返回
  if (relativeUrl.startsWith('www.')) {
    return currentProtocol + '//' + relativeUrl;
  }
  // 如果相对地址已经是绝对地址，则直接返回
  if (relativeUrl.startsWith('http://') || relativeUrl.startsWith('https://')) {
    return relativeUrl;
  }
  // 否则，将相对地址添加到当前页面的地址并返回
  const currentHostname = window.location.hostname;
  const currentPathname = window.location.pathname;
  return (
    currentProtocol + '//' + currentHostname + currentPathname + relativeUrl
  );
}
