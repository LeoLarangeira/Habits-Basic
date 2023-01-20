const form= document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')



button.addEventListener('click', add)
form.addEventListener('change',save)



function add(){
    
    const today = new Date().toLocaleDateString('pt-br').slice(0,5)
    
    if(nlwSetup.dayExists(today)){
        swal({
            title:'Dia já incluso',
            icon:'warning'
        })
        return
    }

    swal({
        title:'Dia incluido com sucesso!',
        icon:'success',
        button:'Vamos para mais um dia!'
    })
    nlwSetup.addDay(today)
}


function save() {
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) ||  {}
nlwSetup.setData(data)
nlwSetup.load()
