# bibliofriki
Que la fuerza os acompañe.

![Que la fuerza te acompañe](./data/yoda.png)

# Curiosidades PostExamen
  En la carpeta data/generate, encontrareis un script de python que ha generado la metadata y ha descargado las imagenes del API de Google Books pasandole una lista de titulos que queria buscar. Que lo disfrutéis.
  Para lanzarlo, a parte de tener conexión a internet, deberemos lanzarlo de la siguiente forma:

````
python3 getmetadata.py isbns.txt tittle.txt --apikey TUAPIKEY
````
  Para la ApiKey, deberéis ir al google console y crear un proyecto, activar la api de google books y en credenciales, obtener la apikey.
