class App {

    constructor(name) {
        this.name = name
        this.clocks = []
    }

    addClock(clock){
        this.clocks.push(clock)
    }

    getClocks(){
        return this.clocks
    }

    show(){
        let myDiv1 = document.getElementById("myDiv")
        myDiv1.innerHTML = ""
        let arrr = this.getClocks()
        for (let myKey in arrr) {
            let clo = arrr[myKey]
            let myDiv = document.getElementById("myDiv")
            let div = document.createElement('div')
            div.className = "clocks"
            let img = document.createElement('img')
            img.src = 'ClockView2.png'
            let label = document.createElement("label")
            label.className = "switch"
            let label1 = document.createElement("div")
            label1.innerText = clo.getName()
            label1.className = "clockName"
            let label2 = document.createElement("div")
            label2.innerText = clo.getMyDate()
            label2.className = "clockDate"
            let myCheckBox = document.createElement("input")
            myCheckBox.setAttribute("type", "checkbox")
            myCheckBox.checked = clo.getSta()
            myCheckBox.id = clo.getId()
            myCheckBox.addEventListener("change", function () {
                if(this.checked){
                    /*alert("выбран")*/
                    clo.on()
                }
                else {
                    /*alert("невыбран")*/
                    clo.off()
                    clo.changeButt()
                }
            })
            let mySpan = document.createElement("span")
            mySpan.className = "slider round"
            label.appendChild(myCheckBox)
            label.appendChild(mySpan)
            div.prepend(img)
            div.prepend(label1)
            div.appendChild(label2)
            div.appendChild(label)
            /*div.appendChild(label)*/
            myDiv.prepend(div)

        }
    }
}
