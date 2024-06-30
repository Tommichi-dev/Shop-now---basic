let productos = [
    {
        id: 1,
        nombre: "Producto 1",
        descripcion: "Descripcion del producto",
        precio: "20.000",
        imagen: "https://picsum.photos/id/420/600/400"

    },
    {
        id: 2,
        nombre: "Producto 2",
        descripcion: "Descripcion del producto",
        precio: "50.000",
        imagen: "https://picsum.photos/id/484/600/400"

    },
    {
        id: 3,
        nombre: "Producto 3",
        descripcion: "Descripcion del producto",
        precio: "10.000",
        imagen: "https://picsum.photos/id/344/600/400"
    },
]

console.log("cajaElementos")

let template = ""

for (let index = 0; index < productos.length; index++) {
    console.log(productos[index])

    let producto = productos[index]

    template += `

<div class="col-12 col-md-6 col-lg-4">
<div class="card m-auto my-3" style="width: 260px;">
    <img src="${producto.imagen}" alt=""> 
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">${producto.precio}</p>      


    </div>
    
    <div class="card-body">
        <a href="#" class="c
cajaProductos.innerHTML = templateard-link btn btn-primary">Agregar..</a>
        <a href="#" class="card-link btn btn-danger" >ver..</a>
    </div>
</div>
</div> 

`
}


let cajaProductos = document.querySelector("#products .container-products .row")

cajaProductos.innerHTML = template