let app = new App("Мои будильники")

let add1 = document.getElementById("add1")
add1.addEventListener("click", create )

function create(){

    if(confirm("Вы хотите указать когда прозвенит будильник в секундах?")){
        let time = prompt("Через сколько секунд должен сработать будильник ?", "10")
        let name = prompt("Какое сообщение должен выдавать будильник?", "Сообщение")
        let clockDate = "Таймер на " + time + " секунд"
        if(time !== null) {
            time = time * 1000
            let cl = new Clock(name, clockDate, time)
            app.addClock(cl)
            app.show()
        }
    }else{
        let date = prompt("Какого числа должен сработать будильник?", "21.10.2020")
        let time = prompt("В котором времени должен сработать будильник?", "14:30")
        let arr1 = date.split(".")
        let arr2 = time.split(":")
        let arr = arr1.concat(arr2)
        let day = parseInt(arr[0])
        let month = parseInt(arr[1]) - 1
        let year = parseInt(arr[2])
        let hour = parseInt(arr[3])
        let minute = parseInt(arr[4])
        let inputDate = new Date(year, month, day, hour, minute)
        let nowDate = new Date()
        let realDate = inputDate - nowDate
        realDate = realDate
        let clockDate = "Будильник на " + date + ", в " + time + ""
        let name = prompt("Какое сообщение должен выдавать будильник?", "Сообщение")
        if(date !== null){
            if(time !== null){
                let cl = new Clock(name, clockDate, realDate)
                app.addClock(cl)
                app.show()
            }
        }
    }
}
app.show()



