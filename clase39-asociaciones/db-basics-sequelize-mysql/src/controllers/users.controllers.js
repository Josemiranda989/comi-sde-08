const {
  Usuarios,
  HistorialCompras,
  Productos,
  Categorias,
} = require("../database/models");

module.exports = {
  listado: (req, res) => {
    Usuarios.findAll({
      attributes: { exclude: ['contrasena'] } //excluir atributos
    })
      .then((usuarios) => {
        res.json(usuarios);
      })
      .catch((error) => res.json(error));
  },
  perfil: (req, res) => {
    Usuarios.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ['contrasena'] } 
    })
      .then((usuario) => {
        res.json(usuario);
      })
      .catch((error) => res.json(error));
  },
  nuevoUsuario: (req, res) => {
    console.log(req.body);
    Usuarios.create({
      ...req.body,
    })
      .then((nuevoUsuario) => {
        res.json(nuevoUsuario);
      })
      .catch((error) => res.json(error));
  },

  // Agregar nueva compra
  nuevoHistorial: async (req, res) => {
    const { usuario_id, producto_id, cantidad, fecha_compra } = req.body;

    HistorialCompras.create({
      usuario_id,
      producto_id,
      cantidad,
      fecha_compra,
    })
      .then((nuevaCompra) => {
        res.json(nuevaCompra);
      })
      .catch((error) => res.json(error));
  },
  // Obtener historial de compras de un usuario por su ID
  historialUsuario: (req, res) => {
    const { id } = req.params;

    HistorialCompras.findAll({
      where: { usuario_id: id },
      include: {all:true} //traerse todo
      /* include: [ 
        {
          model: Productos,
          include: [{ model: Categorias, as: "categoria" }],
        },
      ], */
    })
      .then((historialCompras) => {
        res.json(historialCompras);
      })
      .catch((error) => console.log(error));
  },
  // Obtener carrito de compras de un usuario por su ID
  carritoCompras: (req, res) => {
    const { id } = req.params;
    Usuarios.findByPk(id, {
      include: [
        {
          model: CarritoCompras,
          as: 'carritoCompras',
          include: [
            {
              model: Productos,
              as: 'producto',
              include: ['categoria'],  // Si quieres incluir también la información de la categoría del producto
            },
          ],
        },
      ],
    })
      .then((usuario) => {
        if (!usuario) {
          console.log('Usuario no encontrado');
          return;
        }

        // Aquí puedes acceder a los datos del carrito de compras del usuario
        console.log('Carrito de compras del usuario:', usuario.carritoCompras);
      })
      .catch((error) => {
        console.error('Error al obtener el carrito de compras:', error);
      });
  }
};


/* const { Usuarios, CarritoCompras, Productos, HistorialCompras } = require('../models');
const { Op } = require('sequelize');

// Supongamos que tienes el ID del usuario para el que se realizará la compra
const usuarioId = 1;  // Reemplaza con el ID del usuario deseado

// Obtener el carrito de compras del usuario
CarritoCompras.findAll({
  where: {
    usuario_id: usuarioId,
  },
  include: [
    {
      model: Productos,
      as: 'producto',
    },
  ],
})
  .then((productosEnCarrito) => {
    if (!productosEnCarrito || productosEnCarrito.length === 0) {
      console.log('El carrito de compras está vacío');
      return;
    }

    // Crear una nueva entrada en la tabla historial_compras para cada producto en el carrito
    const historialPromises = productosEnCarrito.map((productoEnCarrito) => {
      return HistorialCompras.create({
        usuario_id: usuarioId,
        producto_id: productoEnCarrito.producto.id,
        cantidad: productoEnCarrito.cantidad,
        fecha_compra: new Date(),
      });
    });

    // Actualizar la tabla carrito_compras para reflejar la compra (opcional)
    const actualizarCarritoPromise = CarritoCompras.destroy({
      where: {
        usuario_id: usuarioId,
        producto_id: {
          [Op.in]: productosEnCarrito.map((producto) => producto.producto_id),
        },
      },
    });

    // Ejecutar todas las promesas en paralelo
    return Promise.all([...historialPromises, actualizarCarritoPromise]);
  })
  .then(() => {
    console.log('Compra realizada con éxito y agregada al historial de compras');
  })
  .catch((error) => {
    console.error('Error al realizar la compra:', error);
  });
 */