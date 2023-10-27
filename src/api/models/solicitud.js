import { Schema as _Schema, model } from "mongoose";

// Define un esquema para las solicitudes
const solicitudSchema = new _Schema(
	{
		solicitante: { type: _Schema.Types.ObjectId, ref: "Usuario" }, // Referencia al usuario solicitante
		detalles: String,
		estado: String,
		archivosAdjuntos: [String],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

// Crea un modelo de solicitud basado en el esquema
const Solicitud = model("Solicitud", solicitudSchema);
