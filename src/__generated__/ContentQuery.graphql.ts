/**
 * @generated SignedSource<<9e26e7e5c56ce7f55f631bb295ad4411>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AccountUserStatus = "Banned" | "Default" | "Deleted";
export type ContentQuery$variables = {};
export type ContentQuery$data = {
  readonly accountUser: {
    readonly id: string;
    readonly imageUrl: string;
    readonly status: AccountUserStatus;
    readonly metadata: {
      readonly isBusiness: boolean | null;
      readonly isNewUser: boolean;
    };
    readonly hoianUser: {
      readonly nickname: string;
    } | null;
  } | null;
};
export type ContentQuery = {
  variables: ContentQuery$variables;
  response: ContentQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "AccountUserMetaData",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isBusiness",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isNewUser",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nickname",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContentQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountUser",
        "kind": "LinkedField",
        "name": "accountUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountHoianUser",
            "kind": "LinkedField",
            "name": "hoianUser",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContentQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountUser",
        "kind": "LinkedField",
        "name": "accountUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AccountHoianUser",
            "kind": "LinkedField",
            "name": "hoianUser",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "995a07dc9e9ead86aabd68fc5a786575",
    "id": null,
    "metadata": {},
    "name": "ContentQuery",
    "operationKind": "query",
    "text": "query ContentQuery {\n  accountUser {\n    id\n    imageUrl\n    status\n    metadata {\n      isBusiness\n      isNewUser\n    }\n    hoianUser {\n      nickname\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "02a651da15639375b93b764654a15edd";

export default node;
