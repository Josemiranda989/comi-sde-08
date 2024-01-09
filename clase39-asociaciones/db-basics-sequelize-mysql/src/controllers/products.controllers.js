const {
  Productos,
  HistorialCompras,
  Categorias,
  Usuarios,
  Sequelize,
} = require("../database/models");

const Op = Sequelize.Op;

module.exports = {
  // -Todos los productos incluyendo la relación con su categoría
  listado: async (req, res) => {
    try {
      const productos = await Productos.findAll({
        attributes: { exclude: "categoria_id" },
        include: ["categoria"],
      });
      res.json(productos);
    } catch (error) {
      console.log(error);
    }
  },
  //  -Detalle de producto por params para obtener ID :id
  detalle: async (req, res) => {
    try {
      //Si necesitamos buscar por otro atributo usamos findOne
      const producto = await Productos.findByPk(req.params.id, {
        include: ["categoria"],
      });
      res.json(producto);
    } catch (error) {
      console.log(error);
    }
  },
  //   -Busqueda por nombres por query ordenada por precio ?nombre=laptop
  buscarPorNombre: async (req, res) => {
    try {
      const producto = await Productos.findAll({
        where: {
          nombre: { [Op.like]: `%${req.query.nombre}%` },
        },
        order: [["precio", "ASC"]],
      });
      res.json(producto);
    } catch (error) {
      console.log(error);
    }
  },
  // Nuevo producto
  nuevoProducto: async (req, res) => {
    const { nombre, precio, imagen, categoria_id } = req.body;

    try {
      const nuevoProducto = await Productos.create({
        nombre,
        precio,
        imagen,
        categoria_id,
      });
      res.json(nuevoProducto);
    } catch (error) {
      console.log(error);
    }
  },
  // Actualizar producto
  actualizarProducto: async (req, res) => {
    const { nombre, precio, imagen, categoria_id } = req.body;
    const { id } = req.params;

    try {
      const productoActualizado = await Productos.update(
        { nombre, precio, imagen, categoria_id },
        { where: { id } }
      );
      res.json({
        actualizado: productoActualizado,
        message: "El producto se actualizó correctamente",
      });
    } catch (error) {
      console.log(error);
    }
  },
  // Elminar producto por id
  eliminarProducto: async (req, res) => {
    const { id } = req.params;
    try {
      await Productos.destroy({ where: { id: id } });
      res.json({ message: `El producto con id ${id} se eliminó` });
    } catch (error) {
      console.log(error);
    }
  },
  nuevaCategoria: async (req, res) => {
    const { nombre } = req.body;

    try {
      const nuevaCategoria = await Categorias.create({
        nombre,
      });
      res.json(nuevaCategoria);
    } catch (error) {
      console.log(error);
    }
  },
  // Buscar historial de compra de un producto
  buscarHistorial: async (req, res) => {
    const { id } = req.params;

    try {
      const historialCompras = await HistorialCompras.findAll({
        where: { producto_id: id },
        include: [{ model: Usuarios }],
      });
      res.json(historialCompras);
    } catch (error) {
      console.log(error);
    }
  },
};
