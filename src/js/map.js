export default class ErrorRepository {
    constructor(){
   this.map = new Map()
      this.map.set(301, "Мы переехали, не ищи нас")
      .set(302, "Как ты нас нашел?")
      .set(403, "Тебе тут не место")
      .set(503, "СисАдмин пьет чай,ладно не чай")
    
    }
    translate(code){
     if(this.map.get(code) == undefined){
       return 'Unknown error'
     }else{
       return this.map.get(code)
     }
    }
}
