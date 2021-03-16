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
      //     'v0/index/'
      //   ]
      // },
      {
        type: 'category',
        label: 'Applications',
        items: [
          'v0/applications/GetApplicationsAndDatastores',
        ]
      }
      , {
        type: 'category',
        label: 'Charts',
        items: [
          'v0/charts/GetChartData'
          , 'v0/charts/GetChartDataByConditions'
          , 'v0/charts/GetChartSearchConditions'    
        ]
      }
      , {
        type: 'category',
        label: 'Datastores',
        items: [
          'v0/datastores/GetDatastoreFields'
        ]
      }      
      , {
        type: 'category',
        label: 'Groups',
        items: [
          'v0/groups/CreateGroup'
          , 'v0/groups/CreateTopGroup'
          , 'v0/groups/DeleteGroup'
          , 'v0/groups/GetGroup'
          , 'v0/groups/GetGroupTree'
          , 'v0/groups/UpdateGroup'
        ]
      }   
      , {
        type: 'category',
        label: 'Item Actions',
        items: [
          'v0/item-actions/CreateItemWithItemID'
          , 'v0/item-actions/CreateNewItemID'
          , 'v0/item-actions/ExecuteAction'
          , 'v0/item-actions/ExecuteActionByActionID'
          , 'v0/item-actions/ExecuteBulkAction'
          , 'v0/item-actions/GetInputFields'
          , 'v0/item-actions/GetNewActions'
    
        ]
      }
      , {
        type: 'category',
        label: 'Item Files',
        items: [
          'v0/item-files/DeleteFile'
          , 'v0/item-files/GetFile'
          , 'v0/item-files/UploadFile'
        ]
      }
      , {
        type: 'category',
        label: 'Item Histories',
        items: [
          'v0/item-histories/DeleteItemComment'
          , 'v0/item-histories/GetItemHistories'
          , 'v0/item-histories/GetItemHistoriesOld'
          , 'v0/item-histories/PostItemComment'
          , 'v0/item-histories/UpdateItemComment'
        ]
      }
      , {
        type: 'category',
        label: 'Item Links',
        items: [
          'v0/item-links/AddItemLink'
          , 'v0/item-links/DeleteItemLink'
          , 'v0/item-links/GetLinkedItems'
          , 'v0/item-links/UpdateItemLink'
        ]
      }
      , {
        type: 'category',
        label: 'Items Import',
        items: [
          'v0/items-import/GetImportResults'
          , 'v0/items-import/ImportItems'
        ]
      }
      , {
        type: 'category',
        label: 'Items Search',
        items: [
          'v0/items-search/GetItemSearchConditions'
          , 'v0/items-search/GetUserQueries'
        ]
      }
      , {
        type: 'category',
        label: 'Items',
        items: [
          'v0/items/CreateItem'
          , 'v0/items/DeleteItem'
          , 'v0/items/DeleteItemByConditions'
          , 'v0/items/GetAutoNumber'
          , 'v0/items/GetItemDetails'
          , 'v0/items/ItemList'
          , 'v0/items/UpdateItem'
        ]
      }      
      , {
        type: 'category',
        label: 'Login',
        items: [
          'v0/login/Login'
          , 'v0/login/Logout'
        ]
      }
      , {
        type: 'category',
        label: 'Data Reports',
        items: [
          'v0/reports/GetReportData'
          , 'v0/reports/GetReportDataByConditions'
          , 'v0/reports/GetReportSearchConditions'
        ]
      }
      , {
        type: 'category',
        label: 'Roles',
        items: [
          'v0/roles/AddGroupRoles'
          , 'v0/roles/AddRoleToUser'
          , 'v0/roles/RemoveRoleFromUser'
          , 'v0/roles/UpdateGroupRoles'
        ]
      }
      , {
        type: 'category',
        label: 'User Registration',
        items: [
          'v0/user-registration/README'
          , 'v0/user-registration/ConfirmRegistration'
          , 'v0/user-registration/RegisterUser'
          , 'v0/user-registration/UserRegistration'
        ]
      }
      , {
        type: 'category',
        label: 'User Info',
        items: [
          'v0/userinfo/README'
          , 'v0/userinfo/ConfirmUserEmail'
          , 'v0/userinfo/GetUserInfo'
          , 'v0/userinfo/ResetPassword'
          , 'v0/userinfo/SetNewPassword'
          , 'v0/userinfo/SetPassword'
          , 'v0/userinfo/UpdateUserEmail'
          , 'v0/userinfo/UpdateUserEmailRequest'
          , 'v0/userinfo/UpdateUserInfo'
          , 'v0/userinfo/ValidatePassword'
        ]
      }
      , {
        type: 'category',
        label: 'User',
        items: [
          'v0/users/README'
          , 'v0/users/AddUser'
          , 'v0/users/GetAllUsersInWorkspace'
          , 'v0/users/GetRoleUsers'
          , 'v0/users/GetUsersInGroup'
          , 'v0/users/GetUsersInWorkspace'
          , 'v0/users/RemoveUser'
          , 'v0/users/UserImport'
          , 'v0/users/UserInvite'
        ]
      }
      , {
        type: 'category',
        label: 'Workspaces',
        items: [
          'v0/workspaces/GetWorkspaces'
          , 'v0/workspaces/SelectWorkspace'
        ]
      }      
    ],
  }
};
