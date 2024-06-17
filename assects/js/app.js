let cl = console.log;


const contries = document.getElementById('container-info');
const search = document.getElementById('search');
const Name = document.getElementById('Name');
const Capital = document.getElementById('Capital');
const Population = document.getElementById('Population');

let flag = true;

//  ============== Templating Function ============>>>

function Templating(arr){
    let result = '';
    arr.forEach(ele => {
        result += `
        <div class="col-md-3 mt-4">
            <div class="card">
                <div class="card-body">
                    <figure>
                        <img src="${ele.flag}" alt="${ele.name}" tittle="${ele.name}" class="flag">
                    </figure>
                    <figcaption class="fig-caption">
                        <h1>${ele.name}</h1>
                    </figcaption>
                    <h2><strong>Capital</strong> : ${ele.capital}</strong></h2>
                    <h3><strong>languages</strong> : ${ele.languages}</h3>
                    <h4><strong>Population</strong> : ${ele.population}</h4>
                </div>
            </div>
      </div>
        `
    });
    contries.innerHTML = result;
}

Templating(countries);

//// ================= Call BackFunction ==================>>>>>>>>>>>

const onsearch = (event) =>{
    if(event.key === 'Enter'){
        let name = event.target.value.toLowerCase().trim();
        let findcountrie = countries.filter(county => county.name.toLowerCase().trim().includes(name));
        Templating(findcountrie);
    }else{
        Templating(countries);
    }
}

const onName = (e) =>{
    let sortArr = countries.sort(function(a,b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if(x < y){
            return -1
        }else if(x > y){
            return 1;
        }
        return 0
    })
    if(flag === true){
        Templating(sortArr);
        flag = false;
    }else{
        Templating(sortArr.reverse());
        flag = true;
    }

};

const onCapital = (e) =>{
    let sortCapital = countries.sort(function(a,b){
        let x = a.capital
        let y = b.capital
        if(x < y){
            return -1
        }else if(x > y){
            return 1;
        }
        return 0
    }) 
    if(flag === true){
        Templating(sortCapital);
        flag = false;
    }else{
        Templating(sortCapital.reverse());
        flag = true;
    }

}

const onPopulation = (e) => {
    let sortPopulation = countries.sort(function(a,b){
       return a.population - b.population;
    }) 
    if(flag === true){
        Templating(sortPopulation);
        flag = false;
    }else{
        Templating(sortPopulation.reverse());
        flag = true;
    }

}

// ============= All events ===============>>>>>>>>>>.


search.addEventListener('keyup', onsearch);
Name.addEventListener('click', onName);
Capital.addEventListener('click', onCapital);
Population.addEventListener('click', onPopulation);