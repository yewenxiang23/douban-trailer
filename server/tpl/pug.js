module.exports = `
doctype html
html
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')  
    title   Koa Server pug
    link(href='https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', rel='stylesheet')
    script(src='https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js') 
    script(src='https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js')
body
    .container
        .row
            .col-md-8
                h1 Hi #{name}
                p this is #{name}
            .col-md-4
                p 测试动态PUG
`
