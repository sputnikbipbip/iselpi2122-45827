const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-typ', 'html/text')
    res.write('test server')
    res.end()
})
.listen(8080, () => console.log('server is running at 8080'))

