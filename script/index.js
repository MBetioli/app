(function(){

		
	var categorias = [

		{
			nome:'Bolsas',
			subcategorias:['Alça','Tira-colo']
		},
		{
			nome:'Decoração',
			subcategorias:['Almofadas','Toalhas de mesa','Iluminárias']
		},
		{
			nome:'Acessórios',
			subcategorias:['Porta Celulares','Carteiras']
		}
	];


	var products = [

		{
			id:1,
			nome:'Bolsa de praia',
			descricao:'Bolsa de algodão, feita em patchwork',
			preco:200,
			imagem:'bolsa1.png',
		},
		{
			id:2,
			nome:'Bolsa de verão',
			descricao:'Bolsa de algodão, feita em patchwork , técnica mista',
			preco:200,
			imagem:'bolsa2.jpg',
		},
		{
			id:3,
			nome:'Bolsa de Floral Vermelha',
			descricao:'Bolsa de algodão, feita em patchwork , técnica mista',
			preco:200,
			imagem:'bolsa3.jpg',
		}

	];



	function loadProducts(){


		for(var i = 0; i < products.length; i++){

			showInfo(products[i]);
		}


	}


	function showInfo(produto){

			var divRow = document.querySelector('.row');

			var h3;
			var divColumn = document.createElement('div');
			var spanNome = document.createElement('span');
			var pDescricao = document.createElement('p');
			var imagem = document.createElement('img');


			var divProduct = document.createElement('div');

			divProduct.classList.add('product');
			divColumn.classList.add('column');
			spanNome.classList.add('nome'); 
			

			imagem.src = 'images/products/' + produto.imagem;
			spanNome.innerText = produto.nome;
			pDescricao.innerText = produto.descricao;
			divProduct.appendChild(imagem);
			divProduct.appendChild(spanNome);
			divProduct.appendChild(pDescricao);
			
			divColumn.appendChild(divProduct);
			divRow.appendChild(divColumn);

		}




	window.addEventListener('load',function(){

		loadProducts();
		loadProducts();
		loadProducts();
		loadProducts();
		loadProducts();
		loadProducts();
		loadProducts();
		loadProducts();
		loadProducts();
	});


})();