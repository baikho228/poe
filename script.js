let nomeri = 23

let fName = 'Giorgi'

let isRainy = false

let students = ['Giorgi', 'Nika', 'Saba']  //array

let myJob;  



let info = {

    fName: 'Akakai',
    sName: 'Tsereteli',
    birthDate: '1840-21-Jun',
    death:'1915-8-Feb',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Akaki_Tsereteli_in_1900s.png'

}

let arr = [

    {

        fName: 'Vaja',
        sName: 'Pshavela',
        birthDate: '14 (26) ივლისი, 1861',
        death:'27 ივნისი (10 ივლისი), 1915',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Vazha-Pshavela_%281861-1915%29%2C_photo_by_Alexandre_Roinashvili.png/375px-Vazha-Pshavela_%281861-1915%29%2C_photo_by_Alexandre_Roinashvili.png'
    },
        
    {
        fName: 'Nikoloz',
        sName: 'Baratashvili',
        birthDate: '4 December 1817',
        death:'21 October 1845',
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Prince_Nikoloz_Baratashvili.jpg'
    
    },

    {

        fName: 'Akakai',
        sName: 'Tsereteli',
        birthDate: '1840-21-Jun',
        death:'1915-8-Feb',
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Akaki_Tsereteli_in_1900s.png'
    },
    
]



// for(let i = 0;    i< arr.length;   i++){

//     console.log(   arr[i]  )

// }


let container = document.querySelector('.container')


for(let person of arr){

    let div = document.createElement('div')

    div.innerHTML = `

    <img  src="${person.img}"  >
    <p> ${person.fName} </p>
    <p> ${person.sName} </p>
    <p> ${person.birthDate} </p>
    <p> ${person.death} </p>
    `

container.appendChild(div)
}





