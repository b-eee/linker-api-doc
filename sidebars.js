/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    'GettingStarted': ['index', 'wordings', 'doc1'],
    Features: ['mdx'],
    'Hexabase API v1.0': [
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
      //     'API/v1/index/'
      //   ]
      // },
      {
        type: 'category',
        label: 'Applications',
        items: [
          'API/v1/Applications/GetApplicationsAndDatastores'
        ]
      }
      , {
        type: 'category',
        label: 'Charts',
        items: [
          'API/v1/charts/GetChartData'
          , 'API/v1/charts/GetChartDataByConditions'
          , 'API/v1/charts/GetChartSearchConditions'    
        ]
      }
      , {
        type: 'category',
        label: 'Datastores',
        items: [
          'API/v1/datastores/GetDatastoreFields'
        ]
      }      
      , {
        type: 'category',
        label: 'Groups',
        items: [
          'API/v1/groups/CreateGroup'
          , 'API/v1/groups/CreateTopGroup'
          , 'API/v1/groups/DeleteGroup'
          , 'API/v1/groups/GetGroup'
          , 'API/v1/groups/GetGroupTree'
          , 'API/v1/groups/UpdateGroup'
        ]
      }   
      , {
        type: 'category',
        label: 'ItemActions',
        items: [
          'API/v1/item-actions/CreateItemWithItemID'
          , 'API/v1/item-actions/CreateNewItemID'
          , 'API/v1/item-actions/ExecuteAction'
          , 'API/v1/item-actions/ExecuteActionByActionID'
          , 'API/v1/item-actions/ExecuteBulkAction'
          , 'API/v1/item-actions/GetInputFields'
          , 'API/v1/item-actions/GetNewActions'
    
        ]
      }
      , {
        type: 'category',
        label: 'ItemFiles',
        items: [
          'API/v1/item-files/DeleteFile'
          , 'API/v1/item-files/GetFile'
          , 'API/v1/item-files/UploadFile'
        ]
      }
      , {
        type: 'category',
        label: 'ItemHistories',
        items: [
          'API/v1/item-histories/GetItemHistories'
          , 'API/v1/item-histories/PostItemComment'
        ]
      }
      , {
        type: 'category',
        label: 'ItemLinks',
        items: [
          'API/v1/item-links/AddItemLink'
          , 'API/v1/item-links/DeleteItemLink'
          , 'API/v1/item-links/GetLinkedItems'
          , 'API/v1/item-links/UpdateItemLink'
        ]
      }
      , {
        type: 'category',
        label: 'ItemsImport',
        items: [
          'API/v1/items-import/GetImportResults'
          , 'API/v1/items-import/ImportItems'
        ]
      }
      , {
        type: 'category',
        label: 'ItemsSearch',
        items: [
          'API/v1/items-search/GetItemSearchConditions'
          , 'API/v1/items-search/GetUserQueries'
        ]
      }
      , {
        type: 'category',
        label: 'Items',
        items: [
          'API/v1/items/CreateItem'
          , 'API/v1/items/DeleteItem'
          , 'API/v1/items/DeleteItemByConditions'
          , 'API/v1/items/GetAutoNumber'
          , 'API/v1/items/GetItemDetails'
          , 'API/v1/items/ItemList'
          , 'API/v1/items/UpdateItem'
        ]
      }      
      , {
        type: 'category',
        label: 'Login',
        items: [
          'API/v1/login/Login'
          , 'API/v1/login/Logout'
        ]
      }
      , {
        type: 'category',
        label: 'Reports',
        items: [
          'API/v1/reports/GetReportData'
          , 'API/v1/reports/GetReportDataByConditions'
          , 'API/v1/reports/GetReportSearchConditions'
        ]
      }
      , {
        type: 'category',
        label: 'Roles',
        items: [
          'API/v1/roles/AddGroupRoles'
          , 'API/v1/roles/AddRoleToUser'
          , 'API/v1/roles/RemoveRoleFromUser'
          , 'API/v1/roles/UpdateGroupRoles'
        ]
      }
      , {
        type: 'category',
        label: 'UserRegistration',
        items: [
          'API/v1/user-registration/ConfirmRegistration'
          , 'API/v1/user-registration/RegisterUser'
          , 'API/v1/user-registration/UserRegistration'
        ]
      }
      , {
        type: 'category',
        label: 'UserInfo',
        items: [
          'API/v1/userinfo/GetUserInfo'
          , 'API/v1/userinfo/ResetPassword'
          , 'API/v1/userinfo/SetNewPassword'
          , 'API/v1/userinfo/SetPassword'
          , 'API/v1/userinfo/UpdateUserInfo'
          , 'API/v1/userinfo/ValidatePassword'
        ]
      }
      , {
        type: 'category',
        label: 'Users',
        items: [
          'API/v1/users/AddUser'
          , 'API/v1/users/GetAllUsersInWorkspace'
          , 'API/v1/users/GetRoleUsers'
          , 'API/v1/users/GetUsersInGroup'
          , 'API/v1/users/GetUsersInWorkspace'
          , 'API/v1/users/RemoveUser'
          , 'API/v1/users/UserImport'
          , 'API/v1/users/UserInvite'
        ]
      }
      , {
        type: 'category',
        label: 'Workspaces',
        items: [
          'API/v1/workspaces/GetWorkspaces'
          , 'API/v1/workspaces/SelectWorkspace'
        ]
      }      
    ]
  },
};
