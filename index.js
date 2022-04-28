
let amar={
    name:"amar",
    location:"Goa",
    talent:"Singer"

}
let akbar={
    name:"akbar",
    location:"Mumbai",
    talent:"Chef"
}
let anthony={
    name:"anthony",
    location:"Kashmir",
    talent:"Magician"
}

let talent=function(){
console.log(this.talent)
}
  let name=function(){
      console.log(this.name)
  }
  let place=function(){
    console.log(this.location)
}




let getAllTalent=function(){

    let result=[
        talent.bind(amar),
        talent.bind(akbar),
        talent.bind(anthony),
       ]

for(i=0;i<result.length;i++){
    result[i]()
}
}
//  place()

// place.call(akbar)

getAllTalent()