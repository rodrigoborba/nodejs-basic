function handle(request, response){

    showConsole()

    let modo = 2
    switch (modo) {
        case 2:
            handleWriteHtml(request, response)
            break;
    
        default:
            handleBasic(request, response)
            break;
    }

}

function handleWriteHtml(request, response){

    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head><title>Http Module</title></head>");
    response.write("<body>");
    response.write("<h1>Hello from http module SON</h1>");
    response.write("</body>");
    response.write("</html>");

    response.end();
}

function handleBasic(request, response){
    response.end('Hello from http module: ' + c)
}

function showConsole(){

    console.log('Hello world')

    var a = 2;
    var b = 2;
    var c = a + b;

    console.log('c ->', c)
}

module.exports = handle