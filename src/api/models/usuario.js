import { Schema as _Schema, model } from "mongoose";

// Define un esquema para los usuarios
const usuarioSchema = new _Schema(
	{
		nombre: String,
		rut: String,
		apellido: String,
		email: String,
		contrasena: String,
		rol: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

// Crea un modelo de usuario basado en el esquema
const Usuario = model("Usuario", usuarioSchema);
