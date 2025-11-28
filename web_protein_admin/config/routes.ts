export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/news',
  },
  {
    name: '新闻管理',
    icon: 'ReadOutlined',
    path: '/news',
    component: './News',
    access: '/news',
    children: [
      {
        name: '查看新闻',
        path: '/news:show',
        hideInMenu: true,
      },
      {
        name: '新建新闻',
        path: '/news:add',
        hideInMenu: true,
      },
      {
        name: '编辑新闻',
        path: '/news:edit',
        hideInMenu: true,
      },
      {
        name: '删除新闻',
        path: '/news:remove',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '亮点成果',
    icon: 'BulbOutlined',
    path: '/highLight',
    component: './HighLight',
    access: '/highLight',
    children: [
      {
        name: '查看亮点成果',
        path: '/highLight:show',
        hideInMenu: true,
      },
      {
        name: '新建亮点成果',
        path: '/highLight:add',
        hideInMenu: true,
      },
      {
        name: '编辑亮点成果',
        path: '/highLight:edit',
        hideInMenu: true,
      },
      {
        name: '删除亮点成果',
        path: '/highLight:remove',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '标签管理',
    icon: 'TagsOutlined',
    path: '/tags',
    component: './Tags',
    access: '/tags',
    children: [
      {
        name: '查看标签',
        path: '/tags:show',
        hideInMenu: true,
      },
      {
        name: '新建标签',
        path: '/tags:add',
        hideInMenu: true,
      },
      {
        name: '编辑标签',
        path: '/tags:edit',
        hideInMenu: true,
      },
      {
        name: '删除标签',
        path: '/tags:remove',
        hideInMenu: true,
      },
    ],
  },
  {
    name: 'Banner管理',
    icon: 'PictureOutlined',
    path: '/banner',
    component: './Banner',
    access: '/banner',
    children: [
      {
        name: '查看Banner',
        path: '/banner:show',
        hideInMenu: true,
      },
      {
        name: '新建Banner',
        path: '/banner:add',
        hideInMenu: true,
      },
      {
        name: '编辑Banner',
        path: '/banner:edit',
        hideInMenu: true,
      },
      {
        name: '删除Banner',
        path: '/banner:remove',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '用户管理',
    icon: 'TeamOutlined',
    path: '/userList',
    component: './User',
    access: '/userList',
  },
  {
    name: '账号管理',
    icon: 'UserSwitchOutlined',
    path: '/account',
    access: '/account',
    routes: [
      {
        name: '账号列表',
        path: '/account/list',
        component: './Account/List',
        access: '/account/list',
        children: [
          {
            name: '查看账号',
            path: '/account/list:show',
            hideInMenu: true,
          },
          {
            name: '新建账号',
            path: '/account/list:add',
            hideInMenu: true,
          },
          {
            name: '编辑账号',
            path: '/account/list:edit',
            hideInMenu: true,
          },
          {
            name: '删除账号',
            path: '/account/list:remove',
            hideInMenu: true,
          },
        ],
      },
      {
        name: '角色管理',
        path: '/account/role',
        component: './Account/Role',
        access: '/account/role',
        children: [
          {
            name: '查看角色',
            path: '/account/role:show',
            hideInMenu: true,
          },
          {
            name: '新建角色',
            path: '/account/role:add',
            hideInMenu: true,
          },
          {
            name: '编辑角色',
            path: '/account/role:edit',
            hideInMenu: true,
          },
          {
            name: '删除角色',
            path: '/account/role:remove',
            hideInMenu: true,
          },
        ],
      },
      {
        name: '访问码管理',
        path: '/account/access-code',
        component: './Account/AccessCode',
        access: '/account/access-code',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '系统设置',
    icon: 'SettingOutlined',
    path: '/system-settings',
    access: '/system-settings',
    routes: [
      {
        name: '顶部导航栏管理',
        path: '/system-settings/navigation-bar',
        component: './Navigation',
        access: '/system-settings/navigation-bar',
        children: [
          {
            name: '查看导航栏',
            path: '/system-settings/navigation-bar:show',
            hideInMenu: true,
          },
          {
            name: '新建导航栏主项',
            path: '/system-settings/navigation-bar:add',
            hideInMenu: true,
          },
          {
            name: '编辑导航栏主项',
            path: '/system-settings/navigation-bar:edit',
            hideInMenu: true,
          },
          {
            name: '删除导航栏主项',
            path: '/system-settings/navigation-bar:remove',
            hideInMenu: true,
          },
          {
            name: '新建导航栏子项',
            path: '/system-settings/navigation-bar:addSub',
            hideInMenu: true,
          },
          {
            name: '编辑导航栏子项',
            path: '/system-settings/navigation-bar:editSub',
            hideInMenu: true,
          },
          {
            name: '删除导航栏子项',
            path: '/system-settings/navigation-bar:removeSub',
            hideInMenu: true,
          },
        ],
      },
      {
        name: '菜单栏管理',
        path: '/system-settings/menu-bar',
        component: './MenuBar',
        access: '/system-settings/menu-bar',
        children: [
          {
            name: '查看菜单栏',
            path: '/system-settings/menu-bar:show',
            hideInMenu: true,
          },
          {
            name: '新建菜单栏主项',
            path: '/system-settings/menu-bar:add',
            hideInMenu: true,
          },
          {
            name: '编辑菜单栏主项',
            path: '/system-settings/menu-bar:edit',
            hideInMenu: true,
          },
          {
            name: '删除菜单栏主项',
            path: '/system-settings/menu-bar:remove',
            hideInMenu: true,
          },
          {
            name: '新建菜单栏子项',
            path: '/system-settings/menu-bar:addSub',
            hideInMenu: true,
          },
          {
            name: '编辑菜单栏子项',
            path: '/system-settings/menu-bar:editSub',
            hideInMenu: true,
          },
          {
            name: '删除菜单栏子项',
            path: '/system-settings/menu-bar:removeSub',
            hideInMenu: true,
          },
        ],
      },
      {
        name: '页尾管理',
        path: '/system-settings/footer',
        component: './Footer',
        access: '/system-settings/footer',
        children: [
          {
            name: '查看页尾',
            path: '/system-settings/footer:show',
            hideInMenu: true,
          },
          {
            name: '新建页尾主项',
            path: '/system-settings/footer:add',
            hideInMenu: true,
          },
          {
            name: '编辑页尾主项',
            path: '/system-settings/footer:edit',
            hideInMenu: true,
          },
          {
            name: '删除页尾主项',
            path: '/system-settings/footer:remove',
            hideInMenu: true,
          },
          {
            name: '新建页尾子项',
            path: '/system-settings/footer:addSub',
            hideInMenu: true,
          },
          {
            name: '编辑页尾子项',
            path: '/system-settings/footer:editSub',
            hideInMenu: true,
          },
          {
            name: '删除页尾子项',
            path: '/system-settings/footer:removeSub',
            hideInMenu: true,
          },
        ],
      },
      {
        name: '主题管理',
        path: '/system-settings/theme',
        component: './Theme',
        access: '/system-settings/theme',
      },
      {
        name: '页面配置',
        path: '/system-settings/settings',
        component: './SystemConfig',
        access: '/system-settings/settings',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '系统日志',
    path: '/logs',
    icon: 'FileSearchOutlined',
    component: './LogsList',
    access: '/logs',
  },
  {
    component: './404',
  },
];
