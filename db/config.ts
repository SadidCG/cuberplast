import {column, defineDb, NOW } from 'astro:db';


const usuario={
	columns:{
		id: column.number({ primaryKey: true }),
    	nombres: column.text(),
    	apellidos: column.text(),
    	usuario: column.text(),
    	contraseña: column.text(),
   		rol: column.text({ optional: true }),
    	fecha_creacion: column.date({ default: NOW })
	},
}
const seguimientos={
	columns:{
		id: column.number({ primaryKey: true }),
    	nombres: column.text(),
    	apellidos: column.text(),
    	usuario: column.text(),
    	contraseña: column.text(),
   		rol: column.text({ optional: true }),
    	fecha_creacion: column.date({ default: NOW })
	},
}

export default defineDb({
  tables: { 
    usuario, 
	seguimientos
  },
})

