
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','d88'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','a22'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','91e'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','bd9'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','939'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','be2'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','782'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','b32'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','9cf'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','87c'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','940'),
  exact: true,
},
{
  path: '/docs/API/v1/charts/GetChartData',
  component: ComponentCreator('/docs/API/v1/charts/GetChartData','daa'),
  exact: true,
},
{
  path: '/docs/API/v1/charts/GetChartDataByConditions',
  component: ComponentCreator('/docs/API/v1/charts/GetChartDataByConditions','e1b'),
  exact: true,
},
{
  path: '/docs/API/v1/charts/GetChartSearchConditions',
  component: ComponentCreator('/docs/API/v1/charts/GetChartSearchConditions','414'),
  exact: true,
},
{
  path: '/docs/API/v1/datastores/GetDatastoreFields',
  component: ComponentCreator('/docs/API/v1/datastores/GetDatastoreFields','471'),
  exact: true,
},
{
  path: '/docs/API/v1/groups/CreateGroup',
  component: ComponentCreator('/docs/API/v1/groups/CreateGroup','c8c'),
  exact: true,
},
{
  path: '/docs/API/v1/groups/CreateTopGroup',
  component: ComponentCreator('/docs/API/v1/groups/CreateTopGroup','592'),
  exact: true,
},
{
  path: '/docs/API/v1/groups/DeleteGroup',
  component: ComponentCreator('/docs/API/v1/groups/DeleteGroup','807'),
  exact: true,
},
{
  path: '/docs/API/v1/groups/GetGroup',
  component: ComponentCreator('/docs/API/v1/groups/GetGroup','e4f'),
  exact: true,
},
{
  path: '/docs/API/v1/groups/GetGroupTree',
  component: ComponentCreator('/docs/API/v1/groups/GetGroupTree','952'),
  exact: true,
},
{
  path: '/docs/API/v1/groups/UpdateGroup',
  component: ComponentCreator('/docs/API/v1/groups/UpdateGroup','6a0'),
  exact: true,
},
{
  path: '/docs/API/v1/item-actions/CreateItemWithItemID',
  component: ComponentCreator('/docs/API/v1/item-actions/CreateItemWithItemID','8a7'),
  exact: true,
},
{
  path: '/docs/API/v1/item-actions/CreateNewItemID',
  component: ComponentCreator('/docs/API/v1/item-actions/CreateNewItemID','67f'),
  exact: true,
},
{
  path: '/docs/API/v1/item-actions/ExecuteAction',
  component: ComponentCreator('/docs/API/v1/item-actions/ExecuteAction','3be'),
  exact: true,
},
{
  path: '/docs/API/v1/item-actions/ExecuteActionByActionID',
  component: ComponentCreator('/docs/API/v1/item-actions/ExecuteActionByActionID','75e'),
  exact: true,
},
{
  path: '/docs/API/v1/item-actions/ExecuteBulkAction',
  component: ComponentCreator('/docs/API/v1/item-actions/ExecuteBulkAction','855'),
  exact: true,
},
{
  path: '/docs/API/v1/item-actions/GetInputFields',
  component: ComponentCreator('/docs/API/v1/item-actions/GetInputFields','de8'),
  exact: true,
},
{
  path: '/docs/API/v1/item-actions/GetNewActions',
  component: ComponentCreator('/docs/API/v1/item-actions/GetNewActions','21e'),
  exact: true,
},
{
  path: '/docs/API/v1/item-files/DeleteFile',
  component: ComponentCreator('/docs/API/v1/item-files/DeleteFile','a28'),
  exact: true,
},
{
  path: '/docs/API/v1/item-files/GetFile',
  component: ComponentCreator('/docs/API/v1/item-files/GetFile','120'),
  exact: true,
},
{
  path: '/docs/API/v1/item-files/UploadFile',
  component: ComponentCreator('/docs/API/v1/item-files/UploadFile','bc5'),
  exact: true,
},
{
  path: '/docs/API/v1/item-histories/GetItemHistories',
  component: ComponentCreator('/docs/API/v1/item-histories/GetItemHistories','11b'),
  exact: true,
},
{
  path: '/docs/API/v1/item-histories/PostItemComment',
  component: ComponentCreator('/docs/API/v1/item-histories/PostItemComment','687'),
  exact: true,
},
{
  path: '/docs/API/v1/item-links/AddItemLink',
  component: ComponentCreator('/docs/API/v1/item-links/AddItemLink','f95'),
  exact: true,
},
{
  path: '/docs/API/v1/item-links/DeleteItemLink',
  component: ComponentCreator('/docs/API/v1/item-links/DeleteItemLink','d03'),
  exact: true,
},
{
  path: '/docs/API/v1/item-links/GetLinkedItems',
  component: ComponentCreator('/docs/API/v1/item-links/GetLinkedItems','c46'),
  exact: true,
},
{
  path: '/docs/API/v1/item-links/UpdateItemLink',
  component: ComponentCreator('/docs/API/v1/item-links/UpdateItemLink','d8a'),
  exact: true,
},
{
  path: '/docs/API/v1/items-import/GetImportResults',
  component: ComponentCreator('/docs/API/v1/items-import/GetImportResults','547'),
  exact: true,
},
{
  path: '/docs/API/v1/items-import/ImportItems',
  component: ComponentCreator('/docs/API/v1/items-import/ImportItems','11c'),
  exact: true,
},
{
  path: '/docs/API/v1/items-search/GetItemSearchConditions',
  component: ComponentCreator('/docs/API/v1/items-search/GetItemSearchConditions','f4f'),
  exact: true,
},
{
  path: '/docs/API/v1/items-search/GetUserQueries',
  component: ComponentCreator('/docs/API/v1/items-search/GetUserQueries','287'),
  exact: true,
},
{
  path: '/docs/API/v1/items/CreateItem',
  component: ComponentCreator('/docs/API/v1/items/CreateItem','132'),
  exact: true,
},
{
  path: '/docs/API/v1/items/DeleteItem',
  component: ComponentCreator('/docs/API/v1/items/DeleteItem','d27'),
  exact: true,
},
{
  path: '/docs/API/v1/items/DeleteItemByConditions',
  component: ComponentCreator('/docs/API/v1/items/DeleteItemByConditions','42d'),
  exact: true,
},
{
  path: '/docs/API/v1/items/GetAutoNumber',
  component: ComponentCreator('/docs/API/v1/items/GetAutoNumber','c60'),
  exact: true,
},
{
  path: '/docs/API/v1/items/GetItemDetails',
  component: ComponentCreator('/docs/API/v1/items/GetItemDetails','dbf'),
  exact: true,
},
{
  path: '/docs/API/v1/items/ItemList',
  component: ComponentCreator('/docs/API/v1/items/ItemList','f14'),
  exact: true,
},
{
  path: '/docs/API/v1/items/UpdateItem',
  component: ComponentCreator('/docs/API/v1/items/UpdateItem','b62'),
  exact: true,
},
{
  path: '/docs/API/v1/login/Login',
  component: ComponentCreator('/docs/API/v1/login/Login','98e'),
  exact: true,
},
{
  path: '/docs/API/v1/login/Logout',
  component: ComponentCreator('/docs/API/v1/login/Logout','82a'),
  exact: true,
},
{
  path: '/docs/API/v1/reports/GetReportData',
  component: ComponentCreator('/docs/API/v1/reports/GetReportData','dc1'),
  exact: true,
},
{
  path: '/docs/API/v1/reports/GetReportDataByConditions',
  component: ComponentCreator('/docs/API/v1/reports/GetReportDataByConditions','a0e'),
  exact: true,
},
{
  path: '/docs/API/v1/reports/GetReportSearchConditions',
  component: ComponentCreator('/docs/API/v1/reports/GetReportSearchConditions','ef5'),
  exact: true,
},
{
  path: '/docs/API/v1/roles/AddGroupRoles',
  component: ComponentCreator('/docs/API/v1/roles/AddGroupRoles','748'),
  exact: true,
},
{
  path: '/docs/API/v1/roles/AddRoleToUser',
  component: ComponentCreator('/docs/API/v1/roles/AddRoleToUser','806'),
  exact: true,
},
{
  path: '/docs/API/v1/roles/RemoveRoleFromUser',
  component: ComponentCreator('/docs/API/v1/roles/RemoveRoleFromUser','264'),
  exact: true,
},
{
  path: '/docs/API/v1/roles/UpdateGroupRoles',
  component: ComponentCreator('/docs/API/v1/roles/UpdateGroupRoles','35e'),
  exact: true,
},
{
  path: '/docs/API/v1/user-registration/ConfirmRegistration',
  component: ComponentCreator('/docs/API/v1/user-registration/ConfirmRegistration','581'),
  exact: true,
},
{
  path: '/docs/API/v1/user-registration/RegisterUser',
  component: ComponentCreator('/docs/API/v1/user-registration/RegisterUser','5ec'),
  exact: true,
},
{
  path: '/docs/API/v1/user-registration/UserRegistration',
  component: ComponentCreator('/docs/API/v1/user-registration/UserRegistration','01f'),
  exact: true,
},
{
  path: '/docs/API/v1/userinfo/GetUserInfo',
  component: ComponentCreator('/docs/API/v1/userinfo/GetUserInfo','752'),
  exact: true,
},
{
  path: '/docs/API/v1/userinfo/ResetPassword',
  component: ComponentCreator('/docs/API/v1/userinfo/ResetPassword','4bf'),
  exact: true,
},
{
  path: '/docs/API/v1/userinfo/SetNewPassword',
  component: ComponentCreator('/docs/API/v1/userinfo/SetNewPassword','aae'),
  exact: true,
},
{
  path: '/docs/API/v1/userinfo/SetPassword',
  component: ComponentCreator('/docs/API/v1/userinfo/SetPassword','b50'),
  exact: true,
},
{
  path: '/docs/API/v1/userinfo/UpdateUserInfo',
  component: ComponentCreator('/docs/API/v1/userinfo/UpdateUserInfo','c65'),
  exact: true,
},
{
  path: '/docs/API/v1/userinfo/ValidatePassword',
  component: ComponentCreator('/docs/API/v1/userinfo/ValidatePassword','4bd'),
  exact: true,
},
{
  path: '/docs/API/v1/users/AddUser',
  component: ComponentCreator('/docs/API/v1/users/AddUser','01d'),
  exact: true,
},
{
  path: '/docs/API/v1/users/GetAllUsersInWorkspace',
  component: ComponentCreator('/docs/API/v1/users/GetAllUsersInWorkspace','e9a'),
  exact: true,
},
{
  path: '/docs/API/v1/users/GetRoleUsers',
  component: ComponentCreator('/docs/API/v1/users/GetRoleUsers','b52'),
  exact: true,
},
{
  path: '/docs/API/v1/users/GetUsersInGroup',
  component: ComponentCreator('/docs/API/v1/users/GetUsersInGroup','886'),
  exact: true,
},
{
  path: '/docs/API/v1/users/GetUsersInWorkspace',
  component: ComponentCreator('/docs/API/v1/users/GetUsersInWorkspace','ce1'),
  exact: true,
},
{
  path: '/docs/API/v1/users/RemoveUser',
  component: ComponentCreator('/docs/API/v1/users/RemoveUser','647'),
  exact: true,
},
{
  path: '/docs/API/v1/users/UserImport',
  component: ComponentCreator('/docs/API/v1/users/UserImport','f0a'),
  exact: true,
},
{
  path: '/docs/API/v1/users/UserInvite',
  component: ComponentCreator('/docs/API/v1/users/UserInvite','a38'),
  exact: true,
},
{
  path: '/docs/API/v1/workspaces/GetWorkspaces',
  component: ComponentCreator('/docs/API/v1/workspaces/GetWorkspaces','650'),
  exact: true,
},
{
  path: '/docs/API/v1/workspaces/SelectWorkspace',
  component: ComponentCreator('/docs/API/v1/workspaces/SelectWorkspace','31d'),
  exact: true,
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1','96f'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','7d1'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','6f8'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','155'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
