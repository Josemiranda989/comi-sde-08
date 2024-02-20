window.onload = async () => {

    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');

    const response = await fetch(`http://localhost:3031/api/movies/${id}`);
    const peliculas = await response.json();

    if (peliculas.data) {
        const formulario = document.querySelector('form');
        console.log(peliculas.data.release_date);
        formulario.title.value = peliculas.data.title;
        formulario.rating.value = peliculas.data.rating;
        formulario.awards.value = peliculas.data.awards;
        formulario.release_date.value = peliculas.data.release_date.split('T')[0];
        formulario.length.value = peliculas.data.length;

        const buttonEditar = document.querySelector('#editar');

        buttonEditar.addEventListener('click', (e) => {
            e.preventDefault();
            const body = {
                title: formulario.title.value,
                rating: formulario.rating.value,
                awards: formulario.awards.value,
                release: formulario.release_date.value,
                length: formulario.length.value
            }

            fetch(`http://localhost:3031/api/movies/update/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    location.reload()
                })
                .catch(error => {
                    console.log(error);
                })


        })




    }





}