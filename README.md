#URL routing jQuery plugin
---
##usage
    $.route(
      {
        //always match
        //http://example.com/foo/bar/baz.html
        path: /./,
        func: function() {
          console.log("always match!");
        }
      },

      {
        //url contains /sample/index.html
        //http://example.com/foo/bar/sample/index.html
        path: /\/sample\/index\.html/,
        func: function() {
          console.log("sample page!");
        }
      },

      {
        //url contains /users/1
        //http://example.com/users/1
        path: /^\/users\/([0-9])/,
        func: function(id) {
          console.log("users page!");
          console.log("user_id:" + id);
        }
      }
    );

