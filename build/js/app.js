//botones
const btnCalcular1 = document.querySelector("#calcular-1"),
      btnCalcular2 = document.querySelector("#calcular-2"),
      btnCalcular3 = document.querySelector("#calcular-3"),
      btnCalcular4 = document.querySelector("#calcular-4"),
      btnCalcular5 = document.querySelector("#calcular-5");

document.addEventListener('DOMContentLoaded', () => {
    btnCalcular1.addEventListener('click', validar);
    btnCalcular2.addEventListener('click', validar);
    btnCalcular3.addEventListener('click', validar);
    btnCalcular4.addEventListener('click', validar);
    btnCalcular5.addEventListener('click', validar);
});

function validar(e) {
    const divCalculadora = e.path[0].parentElement;
    const divResultado = divCalculadora.parentElement.lastElementChild.lastElementChild;
    const input1 = divCalculadora.children[1];
    const input2 = divCalculadora.children[3];
    const comprobar = document.querySelector('.existe');
    const camposVacios = [input1.value, input2.value].some(campo => campo === "");
    if (!comprobar) {
        if (camposVacios){
            limpiarHtml(divResultado);
            const todavia = document.createElement('p')
            todavia.textContent = 'Aún no hay resultado';
            todavia.className = 'resultado__contenido text-center';
            divResultado.appendChild(todavia);


            const mensajeError = document.createElement('p');
            mensajeError.textContent = 'Debes rellenar todos los campos'
            mensajeError.className = 'calculadora__error text-center existe';
            input1.classList.add('calculadora__input--error');
            input2.classList.add('calculadora__input--error');
            divCalculadora.insertAdjacentElement("beforebegin", mensajeError);
            setTimeout(() => {
                mensajeError.remove();
                input1.classList.remove('calculadora__input--error');
                input2.classList.remove('calculadora__input--error');
            }, 2000);
            return;
        };
    };


    const calculadoraId = e.path[0].id;
    switch (calculadoraId) {
        case 'calcular-1':
            calculo1(input1.value, input2.value, divResultado);
            break;

        case 'calcular-2':
            calculo2(input1.value, input2.value, divResultado);
            break;

        case 'calcular-3':
            calculo3(input1.value, input2.value, divResultado);
            break;

        case 'calcular-4':
            calculo4(input1.value, input2.value, divResultado);
            break;

        case 'calcular-5':
            calculo5(input1.value, input2.value, divResultado);
            break;
    
        default:
            break;
    };
};

function calculo1(valor1, valor2, divResultado) {
    const num1 = Number(valor1);
    const num2 = Number(valor2);
    const resultado = ((num1*num2)/100)
    const htmlResultado = document.createElement('p');
    htmlResultado.className = 'resultado__contenido text-center'
    htmlResultado.innerHTML = `El <span class="semi-bold">${num1}%</span> de <span class="semi-bold">${num2}</span> es: <span class="bold">${resultado}</span>`;
    limpiarHtml(divResultado);
    divResultado.appendChild(htmlResultado);
};


function calculo2(valor1, valor2, divResultado) {
    const num1 = Number(valor1);
    const num2 = Number(valor2);
    const resultado = ((num1*100)/num2)
    const htmlResultado = document.createElement('p');
    htmlResultado.className = 'resultado__contenido text-center'
    htmlResultado.innerHTML = `<span class="semi-bold">${num1}</span> es el <span class="semi-bold">${num2}%</span> de: <span class="bold">${resultado}</span>`;
    limpiarHtml(divResultado);
    divResultado.appendChild(htmlResultado);
};


function calculo3(valor1, valor2, divResultado) {
    const num1 = Number(valor1);
    const num2 = Number(valor2);
    const resultado = ((num1/num2)*100);
    const htmlResultado = document.createElement('p');
    htmlResultado.className = 'resultado__contenido text-center'
    htmlResultado.innerHTML = `<span class="sbold">${num1}</span> es el <span class="bold">${resultado}%</span> de: <span class="semi-bold">${num2}</span>`;
    limpiarHtml(divResultado);
    divResultado.appendChild(htmlResultado);
};


function calculo4(valor1, valor2, divResultado) {
    const num1 = Number(valor1);
    const num2 = Number(valor2);
    const resultado = (num2-((num1*num2)/100));
    const htmlResultado = document.createElement('p');
    htmlResultado.className = 'resultado__contenido text-center'
    htmlResultado.innerHTML = `El <span class="semi-bold">${num1}%</span> menos de <span class="semi-bold">${num2}</span> es: <span class="bold">${resultado}</span>`;
    limpiarHtml(divResultado);
    divResultado.appendChild(htmlResultado);
};


function calculo5(valor1, valor2, divResultado) {
    const num1 = Number(valor1);
    const num2 = Number(valor2);
    const resultado = (num2+((num1*num2)/100));
    const htmlResultado = document.createElement('p');
    htmlResultado.className = 'resultado__contenido text-center'
    htmlResultado.innerHTML = `El <span class="semi-bold">${num1}%</span> mas de <span class="semi-bold">${num2}</span> es: <span class="bold">${resultado}</span>`;
    limpiarHtml(divResultado);
    divResultado.appendChild(htmlResultado);
};




function limpiarHtml(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
