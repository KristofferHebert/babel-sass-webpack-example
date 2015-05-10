class PromiseExample {
    constructor(){}

    timeout(duration = 0){
        return new Promise((resolve, reject) => {
            setTimeout(resolve, duration)
        })
    }
}

export default PromiseExample