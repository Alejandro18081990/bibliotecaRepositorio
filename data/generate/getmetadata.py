import argparse
import requests
import json


def parseResponse(item,id_autonumerico):
        
 
    libro = item['volumeInfo']
    lista = libro.get('industryIdentifiers', [])
    if len(lista) >= 2:
        isbn_10 = libro.get('industryIdentifiers', [])[0].get('identifier', 'No disponible')
        isbn_13 = libro.get('industryIdentifiers', [])[1].get('identifier', 'No disponible')
        isbn = isbn_10 if len(isbn_10) == 10 else isbn_13
        titulo = libro.get('title', '')
        if isbn!='8446041812':
            if titulo:
                metadato = {
                    "id": id_autonumerico,
                    "isbn": isbn,
                    "titulo": titulo,
                    "autores": ", ".join(libro.get('authors', ['No disponible'])),
                    "editorial": libro.get('publisher', 'No disponible'),
                    "fecha": libro.get('publishedDate', 'No disponible'),
                    "descripcion": libro.get('description', 'No disponible')
                }
                # Obtener la URL de la portada
                portada_url = libro['imageLinks']['thumbnail'] if 'imageLinks' in libro else None
                if portada_url:
                    # print("Descargando la portada...")
                    portada_response = requests.get(portada_url)
                    if portada_response.status_code == 200:
                        with open(f'../../src/assets/covers/{isbn}.jpg', 'wb') as portada_file:
                            portada_file.write(portada_response.content)
                        print(f"titulo: {titulo}")
                        return metadato
                    # else:
                        # print("Error al descargar la portada.")
                # else:
                    # print("Portada no disponible.")
                
    return None

def esta_isbn_en_metadatos(isbn, metadatos):
    for libro in metadatos:
        if libro["isbn"] == isbn:
            return True
    return False
def obtener_metadatos_libros(isbns,titulos, clave_api, output_file):
    metadatos = []
    id_autonumerico = 1
    
    for isbn in isbns:
        if isbn != '':
            url = f'https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}&key={clave_api}'
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                if 'items' in data:
                    for item in data['items']:
                        metadato = parseResponse(item,id_autonumerico)
                        if metadato:
                            if esta_isbn_en_metadatos(metadato.isbn, metadatos):
                                print(f"ISBN {metadato.isbn} ya está en el archivo de metadatos.")
                            else:
                                metadatos.append(metadato)
                                id_autonumerico += 1

                # else:
                #     print(f"Libro no encontrado.")
            else:
                print(f"Error al realizar la solicitud. Código de estado:", response.status_code)
    
    print ("=========================Buscando por titulo==========================")
    for titulo in titulos:
        if titulo != '':
            url = f'https://www.googleapis.com/books/v1/volumes?q=intitle:{titulo}&key={clave_api}'
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                if 'items' in data:
                    for item in data['items']:
                        metadato = parseResponse(item,id_autonumerico)
                        if metadato:
                            metadatos.append(metadato)
                            id_autonumerico += 1

                else:
                    print(f"Libro no encontrado.")
            else:
                print(f"Error al realizar la solicitud. Código de estado:", response.status_code)
            
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(metadatos, json_file, indent=4, ensure_ascii=False)


def main():
    parser = argparse.ArgumentParser(description="Obtener metadatos y portadas de libros por ISBN.")
    parser.add_argument("isbn_file", type=str, help="Nombre del archivo de texto con los ISBN")
    parser.add_argument("title_file", type=str, help="Nombre del archivo de texto con los titulos")
    parser.add_argument("--apikey", required=True, help="Clave de API de Google Books")
    parser.add_argument("--output", default="metadatos.json", help="Nombre del archivo JSON de salida")

    args = parser.parse_args()
    
    with open(args.isbn_file, 'r') as file:
        isbns = [line.strip() for line in file.readlines()]

    with open(args.title_file, 'r') as file:
        titulos = [line.strip() for line in file.readlines()]

    obtener_metadatos_libros(isbns,titulos, args.apikey, args.output)

if __name__ == "__main__":
    main()
