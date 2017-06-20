var jsreport = require('jsreport-core')()
var fs = require('fs');

jsreport.init().then(function () {     
   return jsreport.render({
	   template: {
		   //content: '<h1>Hello {{:foo}}</h1>',
        content: `<html>
                   <head>
                     <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
                     <style>
                        td {
                              background-color: yellow;
                              color: green;
                              border-style: solid;
                          }
                      </style>
                   </head>
                        <body>
                          <table>
                              <tr>
                                  <td style="height: 50px; font-size: 35px">Hello world</td>
                                  <td>world</td>
                              </tr>
                              <tr>
                                  <td style="width: 20px; text-align:right">right</td>
                                  <td>world</td>
                              </tr>
                              <tr>
                                  <td>world</td>
                                  <td>world</td>
                              </tr>
                          </table>
                        </body>
                  </html>`,
       recipe: 'html-to-xlsx',
		   engine: 'jsrender'
		},
		data: {
			foo: "world"
		}
	}).then(function(resp) {
	  //prints pdf with headline Hello world
    //console.log(resp.content.toString())
    resp.result.pipe(fs.createWriteStream('testXlxs.xlsx'));
   });
}).catch(function(e) {
  console.log(e)
})