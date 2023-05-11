const app = document.getElementById('app');
const btns = document.querySelectorAll('button');
btns?.forEach((btn: HTMLButtonElement) => {
  btn.addEventListener('click', (event) => {
    if (app) app.innerHTML = '';
    const value = (event.target as Element).innerHTML;
    fetchMarcas(value);
  });
});

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

const fetchMarcas = async (tipo: string) => {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas`,
  );
  const data = await response.json();
  renderMarcas(data);
};
