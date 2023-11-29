# Nuevo repo

- Crear estructura express ejemplo con .gitignore.
- Inicializar git
```git init```
- Vincular a repo remoto
```git remote add origin TU_URL_REPOSITORIO```
- Agregar todos los cambios
```git add .```
- Crear commit 
```git commit -m "primer commit"```
- Subir esos cambios a github
```git push origin master```

# Nueva branch
- Listamos las ramas disponibles
```git branch```
- Si creamos una nueva branch sin cambiarnos de rama
```git branch development```
- Si creamos una nueva branch y nos cambiamos
```git checkout -b development```

## Merge
- Creamos un archivo nuevo en la rama dev y agregamos los cambios con un commit de ejemplo para ver que pasa cuando hacemos un checkout a la principal
```
echo "hola mundo!">text.txt
git add .
git commit -m "agregue text.txt"
```
Nos ubicamos en la rama main para introducir los cambios de dev
```
git checkout master
git merge development
``` 


## Cambiar entre ramas
```git checkout development```

## Cambiar nombre de rama (nombre viejo, nombre nuevo)
```git branch -m development dev```

## Eliminar branch
```git branch -d development```

## Agregar tags
- Al crear un tag se genera una etiqueta en base al ultimo commit
```
git tag Sprint-1 -m "Sprint 1 terminado"
git push --tags
```


- [Link flujos de trabajo](https://www.atlassian.com/es/git/tutorials/syncing)
- [Drive DH](https://drive.google.com/file/d/11Sa5qfHWUjHi7OvRRqVRUaOExwnVxJfN/view?usp=drive_link)

