/*--------------- namespace ---------------*/
export const NUser = 'NUser';
export const NHome = 'NHome';
export const NSearch = 'NSearch';
export const NNews = 'NNews';
export const NHighlights = 'NHighlights';
export const NStructure = 'NStructure';
export const NCollect = 'NCollect';
export const NSubscribe = 'NSubscribe';
export const NDownload = 'NDownload';
/*--------------- reducers ---------------*/
export const RSetState = 'RSetState';
/*--------------- effects ---------------*/
export const EPost = 'EPost'; //创建
export const EGet = 'EGet'; //获取
export const EPut = 'EPut'; //更新
export const EDelete = 'EDelete'; //删除
export const EGetOne = 'EGetOne'; //详情

//首页
export const EBaseInfo = 'EBaseInfo';
export const EHighlight = 'EHighlight';
export const ENews = 'ENews';
export const EFooter = 'EFooter';
export const EMenus = 'EMenus';
export const ENavBar = 'ENavBar';

//高级检索
export const ESuggest = 'ESuggest'; //自动完成建议
export const EQueryParams = 'EQueryParams'; //获取筛选数据
export const EAdvanced = 'EAdvanced'; //高级检索
export const EAdvancedCount = 'EAdvancedCount'; //高级检索技术
export const ERefinements = 'ERefinements'; //获取细化统计信息
export const ESubscribe = 'ESubscribe'; //订阅
export const EntryIDs = 'EntryIDs';

//新闻、亮点成果
export const EYearOpt = 'EYearOpt';
export const EIds = 'EIds';

//entry详情页
export const EntryBasicInfo = 'EntryBasicInfo'; //条目详情摘要
export const EGetExperiment = 'EGetExperiment'; //获取实验信息

//登录、注册
export const ELogin = 'ELogin';
export const ERegister = 'ERegister';
export const EBindQrcode = 'EBindQrcode';
export const EBindStatus = 'EBindStatus';
export const EWxLoginCode = 'EWxLoginCode';
export const EWxLoginStatus = 'EWxLoginStatus';
export const EVerifyEmail = 'EVerifyEmail';
export const EVerifyAccessCode = 'EVerifyAccessCode';

//收藏
export const ECollect = 'ECollect';
export const EBatchCollect = 'EBatchCollect';

//导航栏信息
export const ELayoutInfo = 'ELayoutInfo';

//建设中
export const EUnder = 'EUnder';

//文件下载
export const EOptions = 'EOptions';
