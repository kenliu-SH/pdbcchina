/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: any } | undefined) {
  const { currentUser } = initialState ?? {};
  const { role } = currentUser || {};
  const { power } = role || {};
  if (!power || power?.length === 0) return {};
  return {
    '/news':
      power.includes('/news:show') ||
      power.includes('/news:add') ||
      power.includes('/news:edit') ||
      power.includes('/news:remove'),
    '/news:show': power.includes('/news:show'),
    '/news:add': power.includes('/news:add'),
    '/news:edit': power.includes('/news:edit'),
    '/news:remove': power.includes('/news:remove'),
    '/highLight':
      power.includes('/highLight:show') ||
      power.includes('/highLight:add') ||
      power.includes('/highLight:edit') ||
      power.includes('/highLight:remove'),
    '/highLight:show': power.includes('/highLight:show'),
    '/highLight:add': power.includes('/highLight:add'),
    '/highLight:edit': power.includes('/highLight:edit'),
    '/highLight:remove': power.includes('/highLight:remove'),
    '/tags':
      power.includes('/tags:show') ||
      power.includes('/tags:add') ||
      power.includes('/tags:edit') ||
      power.includes('/tags:remove'),
    '/tags:show': power.includes('/tags:show'),
    '/tags:add': power.includes('/tags:add'),
    '/tags:edit': power.includes('/tags:edit'),
    '/tags:remove': power.includes('/tags:remove'),
    '/banner':
      power.includes('/banner:show') ||
      power.includes('/banner:add') ||
      power.includes('/banner:edit') ||
      power.includes('/banner:remove'),
    '/banner:show': power.includes('/banner:show'),
    '/banner:add': power.includes('/banner:add'),
    '/banner:edit': power.includes('/banner:edit'),
    '/banner:remove': power.includes('/banner:remove'),
    '/userList': power.includes('/userList'),
    '/account':
      power.includes('/account/list:show') ||
      power.includes('/account/list:add') ||
      power.includes('/account/list:edit') ||
      power.includes('/account/list:remove') ||
      power.includes('/account/role:show') ||
      power.includes('/account/role:add') ||
      power.includes('/account/role:edit') ||
      power.includes('/account/role:remove') ||
      power.includes('/account/access-code'),
    '/account/list':
      power.includes('/account/list:show') ||
      power.includes('/account/list:add') ||
      power.includes('/account/list:edit') ||
      power.includes('/account/list:remove'),
    '/account/list:show': power.includes('/account/list:show'),
    '/account/list:add': power.includes('/account/list:add'),
    '/account/list:edit': power.includes('/account/list:edit'),
    '/account/list:remove': power.includes('/account/list:remove'),
    '/account/role':
      power.includes('/account/role:show') ||
      power.includes('/account/role:add') ||
      power.includes('/account/role:edit') ||
      power.includes('/account/role:remove'),
    '/account/role:show': power.includes('/account/role:show'),
    '/account/role:add': power.includes('/account/role:add'),
    '/account/role:edit': power.includes('/account/role:edit'),
    '/account/role:remove': power.includes('/account/role:remove'),
    '/account/access-code': power.includes('/account/access-code'),
    '/system-settings':
      power.includes('/system-settings/navigation-bar:show') ||
      power.includes('/system-settings/navigation-bar:add') ||
      power.includes('/system-settings/navigation-bar:edit') ||
      power.includes('/system-settings/navigation-bar:remove') ||
      power.includes('/system-settings/navigation-bar:addSub') ||
      power.includes('/system-settings/navigation-bar:editSub') ||
      power.includes('/system-settings/navigation-bar:removeSub') ||
      power.includes('/system-settings/menu-bar:show') ||
      power.includes('/system-settings/menu-bar:add') ||
      power.includes('/system-settings/menu-bar:edit') ||
      power.includes('/system-settings/menu-bar:remove') ||
      power.includes('/system-settings/menu-bar:addSub') ||
      power.includes('/system-settings/menu-bar:editSub') ||
      power.includes('/system-settings/menu-bar:removeSub') ||
      power.includes('/system-settings/footer:show') ||
      power.includes('/system-settings/footer:add') ||
      power.includes('/system-settings/footer:edit') ||
      power.includes('/system-settings/footer:remove') ||
      power.includes('/system-settings/footer:addSub') ||
      power.includes('/system-settings/footer:editSub') ||
      power.includes('/system-settings/footer:removeSub') ||
      power.includes('/system-settings/theme'),
    '/system-settings/navigation-bar':
      power.includes('/system-settings/navigation-bar:show') ||
      power.includes('/system-settings/navigation-bar:add') ||
      power.includes('/system-settings/navigation-bar:edit') ||
      power.includes('/system-settings/navigation-bar:remove') ||
      power.includes('/system-settings/navigation-bar:addSub') ||
      power.includes('/system-settings/navigation-bar:editSub') ||
      power.includes('/system-settings/navigation-bar:removeSub'),
    '/system-settings/navigation-bar:show': power.includes('/system-settings/navigation-bar:show'),
    '/system-settings/navigation-bar:add': power.includes('/system-settings/navigation-bar:add'),
    '/system-settings/navigation-bar:edit': power.includes('/system-settings/navigation-bar:edit'),
    '/system-settings/navigation-bar:remove': power.includes(
      '/system-settings/navigation-bar:remove',
    ),
    '/system-settings/navigation-bar:addSub': power.includes(
      '/system-settings/navigation-bar:addSub',
    ),
    '/system-settings/navigation-bar:editSub': power.includes(
      '/system-settings/navigation-bar:editSub',
    ),
    '/system-settings/navigation-bar:removeSub': power.includes(
      '/system-settings/footer:removeSub',
    ),
    '/system-settings/menu-bar':
      power.includes('/system-settings/menu-bar:show') ||
      power.includes('/system-settings/menu-bar:add') ||
      power.includes('/system-settings/menu-bar:edit') ||
      power.includes('/system-settings/menu-bar:remove') ||
      power.includes('/system-settings/menu-bar:addSub') ||
      power.includes('/system-settings/menu-bar:editSub') ||
      power.includes('/system-settings/menu-bar:removeSub'),
    '/system-settings/menu-bar:show': power.includes('/system-settings/menu-bar:show'),
    '/system-settings/menu-bar:add': power.includes('/system-settings/menu-bar:add'),
    '/system-settings/menu-bar:edit': power.includes('/system-settings/menu-bar:edit'),
    '/system-settings/menu-bar:remove': power.includes('/system-settings/menu-bar:remove'),
    '/system-settings/menu-bar:addSub': power.includes('/system-settings/menu-bar:addSub'),
    '/system-settings/menu-bar:editSub': power.includes('/system-settings/menu-bar:editSub'),
    '/system-settings/menu-bar:removeSub': power.includes('/system-settings/footer:removeSub'),
    '/system-settings/footer':
      power.includes('/system-settings/footer:show') ||
      power.includes('/system-settings/footer:add') ||
      power.includes('/system-settings/footer:edit') ||
      power.includes('/system-settings/footer:remove') ||
      power.includes('/system-settings/footer:addSub') ||
      power.includes('/system-settings/footer:editSub') ||
      power.includes('/system-settings/footer:removeSub') ||
      power.includes('/system-settings/settings'),
    '/system-settings/footer:show': power.includes('/system-settings/footer:show'),
    '/system-settings/footer:add': power.includes('/system-settings/footer:add'),
    '/system-settings/footer:edit': power.includes('/system-settings/footer:edit'),
    '/system-settings/footer:remove': power.includes('/system-settings/footer:remove'),
    '/system-settings/footer:addSub': power.includes('/system-settings/footer:addSub'),
    '/system-settings/footer:editSub': power.includes('/system-settings/footer:editSub'),
    '/system-settings/footer:removeSub': power.includes('/system-settings/footer:removeSub'),
    '/system-settings/theme': power.includes('/system-settings/theme'),
    '/system-settings/settings': power.includes('/system-settings/settings'),
    '/logs': power.includes('/logs'),
  };
}
