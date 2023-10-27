// Importar el modelo de usuarios
import Usuario, {
	findById,
	findByIdAndUpdate,
	findByIdAndRemove,
} from "../models/usuario.js";

// Función para listar todos los usuarios
const listarUsuarios = () => {
	find({}, (err, usuarios) => {
		if (err) {
			console.error("Error al listar los usuarios:", err);
		} else {
			console.log("Usuarios:", usuarios);
		}
	});
};

// Función para crear un nuevo usuario
const crearUsuario = (nombre, email, contrasena, rol, permisos) => {
	const nuevoUsuario = new Usuario({
		nombre,
		email,
		contrasena,
		rol,
	});

	nuevoUsuario.save((err, usuario) => {
		if (err) {
			console.error("Error al crear un usuario:", err);
		} else {
			console.log("Usuario creado:", usuario);
		}
	});
};

// Función para buscar un usuario por su ID
const buscarUsuarioPorID = (idDelUsuario) => {
	findById(idDelUsuario, (err, usuario) => {
		if (err) {
			console.error("Error al buscar un usuario:", err);
		} else {
			console.log("Usuario encontrado:", usuario);
		}
	});
};

// Función para actualizar un usuario por su ID
const actualizarUsuarioPorID = (idDelUsuario, nuevoNombre) => {
	findByIdAndUpdate(idDelUsuario, { nombre: nuevoNombre }, (err, usuario) => {
		if (err) {
			console.error("Error al actualizar un usuario:", err);
		} else {
			console.log("Usuario actualizado:", usuario);
		}
	});
};

// Función para eliminar un usuario por su ID
const eliminarUsuarioPorID = (idDelUsuario) => {
	findByIdAndRemove(idDelUsuario, (err, usuario) => {
		if (err) {
			console.error("Error al eliminar un usuario:", err);
		} else {
			console.log("Usuario eliminado:", usuario);
		}
	});
};

export default {
	listarUsuarios,
	crearUsuario,
	buscarUsuarioPorID,
	actualizarUsuarioPorID,
	eliminarUsuarioPorID,
};
