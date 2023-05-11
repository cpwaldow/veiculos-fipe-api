const marcasAPI = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
const app = document.getElementById('app');

interface Marca {
  codigo: string;
  nome: string;
}

const renderMarcas = (data: Array<Marca>) => {
  data.forEach((element: Marca) => {
    const p = document.createElement('p');
    p.innerText = element.nome;
    app?.appendChild(p);
  });
};

const fetchMarcas = async () => {
  const response = await fetch(marcasAPI);
  const data = await response.json();
  renderMarcas(data);
};

fetchMarcas();
