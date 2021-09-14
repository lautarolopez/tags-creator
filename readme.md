## Markdown
Tienen que devolver una lista en markdown para pegar en gitlab.

- [GET] /md/:list_name/all - Devuelve todas las tarjetas de esa lista
- [GET] /md/:list_name/:tag_name - Devuelve todas las tarjetas de esa lista con esa etiqueta 

## Plain
Tienen que devolver texto plano, endpoints /links para devolver enlaces y /names para devolver nombres

- [GET] /plain/:list_name/all/links - Devuelve los enlaces de todas las tarjetas de esa lista
- [GET] /plain/:list_name/:tag_name/links - Devuelve los enlaces de todas las tarjetas de esa lista con esa etiqueta
- [GET] /plain/:list_name/all/names - Devuelve los nombres de todas las tarjetas de esa lista
- [GET] /plain/:list_name/all/names - Devuelve los nombres de todas las tarjetas de esa lista con esa etiqueta


**Detalle:** Para las listas y etiquetas con espacios simplemente eliminaros. Por ejemplo si la lista se llama "Desarrollo completo" y la etiqueta "No contemplado en estimación inicial" utilizar el endpoint __/plain/desarrollocompleto/nocontempladoenestimacioninicial/links__ 
