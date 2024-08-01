const formClient = document.getElementById('form-client');
const formProduct = document.getElementById('form-product');



formClient.addEventListener('submit', async (e) => {
	e.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	const clientId = generateId(); // Generar un ID único
	function generateId() {
        return Math.floor(Math.random() * 1000000).toString();
    }
    try {
		await productManagerFs.createClient({ id: clientId, nombre, email });
		console.log('Cliente creado con éxito');
        console.log("Su Id para operar es :", clientId)
	} catch (error) {
		console.error('Error al crear cliente:', error);
	}
});






formProduct.addEventListener('submit', async (e) => {
	e.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const price = document.getElementById('price').value;
	try {
		await productManagerFs.createProduct({ nombre, price });
		console.log('Producto creado con éxito');
	} catch (error) {
		console.error('Error al crear producto:', error);
	}
});

