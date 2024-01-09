const HOST = "http://localhost:3000"

module.exports = {  
    indice:(req, res) => {
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>API REST SEQUELIZE</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 20px;
              padding: 20px;
              background-color: #f8f9fa;
            }
            h2 {
              color: #343a40;
              border-bottom: 2px solid #007bff;
              padding-bottom: 5px;
            }
            p {
              margin-bottom: 15px;
            }
            a {
              color: #28a745;
              text-decoration: none;
              font-weight: bold;
            }
            a:hover {
              text-decoration: underline;
            }
            .note {
              margin-top: 20px;
              color: #d9534f;
            }
            .endpoint {
              margin-top: 15px;
              padding: 10px;
              background-color: #ffffff;
              border: 1px solid #dee2e6;
              border-radius: 5px;
            }
            .endpoint-title {
              color: #007bff;
            }
          </style>
        </head>
        <body>

        <h2>Productos</h2>
        <div class="endpoint">
          <p class="endpoint-title">1. Listado de Productos:</p>
          <p>Método: GET</p>
          <p>URL: <a href="${HOST}/productos">${HOST}/productos</a></p>
        </div>
        <div class="endpoint">
          <p class="endpoint-title">2. Detalle de Producto por ID:</p>
          <p>Método: GET</p>
          <p>URL: <a href="${HOST}/productos/detalle/1">${HOST}/productos/detalle/:id</a></p>
        </div>
        <div class="endpoint">
          <p class="endpoint-title">3. Buscar Producto por Nombre:</p>
          <p>Método: GET</p>
          <p>URL: <a href="${HOST}/productos/search?nombre=laptop">${HOST}/productos/search?nombre=productoBuscado</a></p>
        </div>

        <div class="endpoint">
          <p class="endpoint-title">4. Buscar Historial de Compras por ID de Producto:</p>
          <p>Método: GET</p>
          <p>URL: <a href="${HOST}/productos/:id/historial-compras">${HOST}/productos/:id/historial-compras</a></p>
        </div>

        <h2>Usuarios</h2>

        <div class="endpoint">
          <p class="endpoint-title">5. Listado de Usuarios:</p>
          <p>Método: GET</p>
          <p>URL: <a href="${HOST}/usuarios">${HOST}/usuarios</a></p>
        </div>

        <div class="endpoint">
          <p class="endpoint-title">6. Perfil de Usuario por ID:</p>
          <p>Método: GET</p>
          <p>URL: <a href="${HOST}/usuarios/:id">${HOST}/usuarios/:id</a></p>
        </div>

        <div class="endpoint">
          <p class="endpoint-title">7. Obtener Historial de Compras por ID de Usuario:</p>
          <p>Método: GET</p>
          <p>URL: <a href="${HOST}/usuarios/:id/historial-compras">${HOST}/usuarios/:id/historial-compras</a></p>
        </div>

        <p class="note"><strong>Nota:</strong> Las peticiones POST, PUT y DELETE deben realizarse utilizando una herramienta como Postman debido a sus características específicas.</p>

        </body>
        </html>
        `);
    }
} 