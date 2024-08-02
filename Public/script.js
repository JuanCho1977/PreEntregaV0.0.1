

const formClient = document.getElementById('form-client');
const formProduct = document.getElementById('form-product');



formClient.addEventListener('submit', async (e) => {
	
	e.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	const clientId = generateId(); // Generar un ID único
	document.getElementById('clientId').innerText = clientId

     try {
		await productManagerFs.createClient({ id: clientId, nombre, email });
		console.log('Cliente creado con éxito');
      
	 } catch (error) {
		console.error('Error al crear cliente:', error);
	 }
});


function generateId() {
	return Math.floor(Math.random() * 1000).toString();

}
	


formProduct.addEventListener('submit', async (e) => {
	e.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const precio = document.getElementById('precio').value;
	try {
		await productManagerFs.c  reateProduct({ nombre, precio });
		console.log('Producto creado con éxito');
	} catch (error) {
		console.error('Error al crear producto:', error);
	}
});

