/*--------------- namespace ---------------*/
export const NUser = 'NUser';
export const NNews = 'NNews';
export const NHighLight = 'NHighLight';
export const NBanner = 'NBanner';
export const NTags = 'NTags';
export const NAccount = 'NAccount';
export const NRole = 'NRole';
export const NFooter = 'NFooter';
export const NMenuBar = 'NMenuBar';
export const NNavigation = 'NNavigation';
export const NSystem = 'NSystem';
export const NOptions = 'NOptions';
/*--------------- reducers ---------------*/
export const RSetState = 'RSetState';
/*--------------- effects ---------------*/
export const EPost = 'EPost'; //创建
export const EGet = 'EGet'; //获取
export const EPut = 'EPut'; //更新
export const EDelete = 'EDelete'; //删除
export const EGetOne = 'EGetOne'; //详情

//登录
export const ELogin = 'ELogin';

//子项
export const EPostSubItem = 'EPostSubItem';
export const EPutSubItem = 'EPutSubItem';
export const EDeleteSubItem = 'EDeleteSubItem';

export const EPostItem = 'EPostItem';
export const EPutItem = 'EPutItem';

//标签
export const ESort = 'ESort';

//页面配置
export const ELogoConfig = 'ELogoConfig';
export const EditLogoConfig = 'EditLogoConfig';
export const EBuildConfig = 'EBuildConfig';
export const EditBuildConfig = 'EditBuildConfig';
