/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  default: {
    'API Reference': [
      'index',
      // template for new category
      // do not delete -jp
      // , {
      //   type: 'category',
      //   label: '',
      //   items: []
      // }
      
      // {
      //   type: 'category',
      //   label: 'Index',
      //   items: [
      //     'v1/index/'
      //   ]
      // },
      {
        type: 'category',
        label: 'Applications',
        items: [
          'v1/Applications/GetApplicationsAndDatastores',
        ]
      }
      , {
        type: 'category',
        label: 'Charts',
        items: [
          'v1/charts/GetChartData'
          , 'v1/charts/GetChartDataByConditions'
          , 'v1/charts/GetChartSearchConditions'    
        ]
      }
      , {
        type: 'category',
        label: 'Datastores',
        items: [
          'v1/datastores/GetDatastoreFields'
        ]
      }      
      , {
        type: 'category',
        label: 'Groups',
        items: [
          'v1/groups/CreateGroup'
          , 'v1/groups/CreateTopGroup'
          , 'v1/groups/DeleteGroup'
          , 'v1/groups/GetGroup'
          , 'v1/groups/GetGroupTree'
          , 'v1/groups/UpdateGroup'
        ]
      }   
      , {
        type: 'category',
        label: 'ItemActions',
        items: [
          'v1/item-actions/CreateItemWithItemID'
          , 'v1/item-actions/CreateNewItemID'
          , 'v1/item-actions/ExecuteAction'
          , 'v1/item-actions/ExecuteActionByActionID'
          , 'v1/item-actions/ExecuteBulkAction'
          , 'v1/item-actions/GetInputFields'
          , 'v1/item-actions/GetNewActions'
    
        ]
      }
      , {
        type: 'category',
        label: 'ItemFiles',
        items: [
          'v1/item-files/DeleteFile'
          , 'v1/item-files/GetFile'
          , 'v1/item-files/UploadFile'
        ]
      }
      , {
        type: 'category',
        label: 'ItemHistories',
        items: [
          'v1/item-histories/GetItemHistories'
          , 'v1/item-histories/PostItemComment'
        ]
      }
      , {
        type: 'category',
        label: 'ItemLinks',
        items: [
          'v1/item-links/AddItemLink'
          , 'v1/item-links/DeleteItemLink'
          , 'v1/item-links/GetLinkedItems'
          , 'v1/item-links/UpdateItemLink'
        ]
      }
      , {
        type: 'category',
        label: 'ItemsImport',
        items: [
          'v1/items-import/GetImportResults'
          , 'v1/items-import/ImportItems'
        ]
      }
      , {
        type: 'category',
        label: 'ItemsSearch',
        items: [
          'v1/items-search/GetItemSearchConditions'
          , 'v1/items-search/GetUserQueries'
        ]
      }
      , {
        type: 'category',
        label: 'Items',
        items: [
          'v1/items/CreateItem'
          , 'v1/items/DeleteItem'
          , 'v1/items/DeleteItemByConditions'
          , 'v1/items/GetAutoNumber'
          , 'v1/items/GetItemDetails'
          , 'v1/items/ItemList'
          , 'v1/items/UpdateItem'
        ]
      }      
      , {
        type: 'category',
        label: 'Login',
        items: [
          'v1/login/Login'
          , 'v1/login/Logout'
        ]
      }
      , {
        type: 'category',
        label: 'Reports',
        items: [
          'v1/reports/GetReportData'
          , 'v1/reports/GetReportDataByConditions'
          , 'v1/reports/GetReportSearchConditions'
        ]
      }
      , {
        type: 'category',
        label: 'Roles',
        items: [
          'v1/roles/AddGroupRoles'
          , 'v1/roles/AddRoleToUser'
          , 'v1/roles/RemoveRoleFromUser'
          , 'v1/roles/UpdateGroupRoles'
        ]
      }
      , {
        type: 'category',
        label: 'UserRegistration',
        items: [
          'v1/user-registration/ConfirmRegistration'
          , 'v1/user-registration/RegisterUser'
          , 'v1/user-registration/UserRegistration'
        ]
      }
      , {
        type: 'category',
        label: 'UserInfo',
        items: [
          'v1/userinfo/GetUserInfo'
          , 'v1/userinfo/ResetPassword'
          , 'v1/userinfo/SetNewPassword'
          , 'v1/userinfo/SetPassword'
          , 'v1/userinfo/UpdateUserInfo'
          , 'v1/userinfo/ValidatePassword'
        ]
      }
      , {
        type: 'category',
        label: 'Users',
        items: [
          'v1/users/AddUser'
          , 'v1/users/GetAllUsersInWorkspace'
          , 'v1/users/GetRoleUsers'
          , 'v1/users/GetUsersInGroup'
          , 'v1/users/GetUsersInWorkspace'
          , 'v1/users/RemoveUser'
          , 'v1/users/UserImport'
          , 'v1/users/UserInvite'
        ]
      }
      , {
        type: 'category',
        label: 'Workspaces',
        items: [
          'v1/workspaces/GetWorkspaces'
          , 'v1/workspaces/SelectWorkspace'
        ]
      }      
    ],
  }
};
