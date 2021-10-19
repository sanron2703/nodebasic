define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/blogs/create",
    "title": "Create blog",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogBody",
            "description": "<p>blogBody of the blog passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Blog Created successfully\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           blogId: \"string\",\n                           title: \"string\",\n                           description: \"string\",\n                           bodyHtml: \"string\",\n                           views: number,\n                           isPublished: boolean,\n                           category: \"string\",\n                           author: \"string\",\n                           tags: object(type = array),\n                           created: \"date\",\n                           lastModified: \"date\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured.,\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "create",
    "name": "PostApiV1BlogsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/:blogId/delete",
    "title": "Delete blog by blogId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Blog Deleted Successfully\",\n           \"status\": 200,\n           \"data\": []\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured.,\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "delete",
    "name": "PostApiV1BlogsBlogidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/:blogId/edit",
    "title": "Edit blog by blogId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Blog Edited Successfully.\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           blogId: \"string\",\n                           title: \"string\",\n                           description: \"string\",\n                           bodyHtml: \"string\",\n                           views: number,\n                           isPublished: boolean,\n                           category: \"string\",\n                           author: \"string\",\n                           tags: object(type = array),\n                           created: \"date\",\n                           lastModified: \"date\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured.,\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "edit",
    "name": "PutApiV1BlogsBlogidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/all",
    "title": "Get all blogs",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"All Blog Details Found\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           blogId: \"string\",\n                           title: \"string\",\n                           description: \"string\",\n                           bodyHtml: \"string\",\n                           views: number,\n                           isPublished: boolean,\n                           category: \"string\",\n                           author: \"string\",\n                           tags: object(type = array),\n                           created: \"date\",\n                           lastModified: \"date\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed To Find Blog Details\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/:blogId",
    "title": "Get a single blog",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Blog Found Successfully.\",\n           \"status\": 200,\n           \"data\": {\n                       _id: \"string\",\n                       __v: number\n                       blogId: \"string\",\n                       title: \"string\",\n                       description: \"string\",\n                       bodyHtml: \"string\",\n                       views: number,\n                       isPublished: boolean,\n                       category: \"string\",\n                       author: \"string\",\n                       tags: object(type = array),\n                       created: \"date\",\n                       lastModified: \"date\"\n                   }\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured.\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewBlogid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/author/:author",
    "title": "Get blogs by author",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>author of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Blogs Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           blogId: \"string\",\n                           title: \"string\",\n                           description: \"string\",\n                           bodyHtml: \"string\",\n                           views: number,\n                           isPublished: boolean,\n                           category: \"string\",\n                           author: \"string\",\n                           tags: object(type = array),\n                           created: \"date\",\n                           lastModified: \"date\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured.,\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByAuthorAuthor"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/view/by/category/:category",
    "title": "Get blogs by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Blogs Found Successfully.\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           blogId: \"string\",\n                           title: \"string\",\n                           description: \"string\",\n                           bodyHtml: \"string\",\n                           views: number,\n                           isPublished: boolean,\n                           category: \"string\",\n                           author: \"string\",\n                           tags: object(type = array),\n                           created: \"date\",\n                           lastModified: \"date\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured.,\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/:blogId/count/view",
    "title": "Increase Blogs Count",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blogId",
            "description": "<p>blogId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Blog Updated Successfully.\",\n           \"status\": 200,\n           \"data\": [\n                       {\n                           blogId: \"string\",\n                           title: \"string\",\n                           description: \"string\",\n                           bodyHtml: \"string\",\n                           views: number,\n                           isPublished: boolean,\n                           category: \"string\",\n                           author: \"string\",\n                           tags: object(type = array),\n                           created: \"date\",\n                           lastModified: \"date\"\n                       }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Error Occured.,\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "update",
    "name": "GetApiV1BlogsBlogidCountView"
  }
] });
