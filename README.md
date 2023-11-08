[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/8zmCNbVE)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12789612&assignment_repo_type=AssignmentRepo)
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
