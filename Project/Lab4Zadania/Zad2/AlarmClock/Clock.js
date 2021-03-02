class Clock {

    constructor(name, date, time) {
        this.id = Math.random() + Math.random()
        this.name = name
        this.state = true;
        this.time = time;
        this.timeOut = setTimeout(() =>{
            alert(this.name)
            this.state = false
            this.changeButt()
        }, this.time)
        this.date = date;
    }

    changeButt(){
        let myId = this.id
        let check = document.getElementById(myId.toString())
        check.checked = 0
    }

    message(){
        alert(this.name + " " + this.time)
        this.state = false
    }

    getSta(){
        return this.state
    }

    getMyDate(){
        return this.date
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }


    on(){
            this.state = true
            this.timeOut = setTimeout(() =>{
                alert(this.name)
                this.state = false
                this.changeButt()
            }, this.time)
            let myId = this.id
            let check = document.getElementById(myId.toString())
            check.checked = 1
    }

    off(){
            this.state = false
            clearTimeout(this.timeOut)
            this.timeOut = undefined
            let myId = this.id
            let check = document.getElementById(myId.toString())
            check.checked = 0
    }
}


