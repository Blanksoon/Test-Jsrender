var jsreport = require('jsreport-core')()
var phantomPath = require('phantomjs-exact-2-1-1').path
var fs = require('fs');
jsreport.init().then(function () {     
   return jsreport.render({
	   template: {
		   //content: '<h1>Hello {{:foo}}</h1>',
        content: `<html>
                   <head>
                     <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
                   </head>
                        <body>
                          <h1>สวัสดีครับ kfjdfjsafjj</h1>
                        </body>
                  </html>`,
		   engine: 'jsrender',
		   recipe: 'phantom-pdf'
		},
		data: {
			foo: "world"
		}
	}).then(function(resp) {
	 //prints pdf with headline Hello world
     //console.log(resp.content.toString())
    resp.result.pipe(fs.createWriteStream('helloworld.pdf'));
   });
}).catch(function(e) {
  console.log(e)
})