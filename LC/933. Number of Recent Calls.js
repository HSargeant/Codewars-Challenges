
class RecentCounter{
    constructor(){
        this.req=[]
    }
    ping(t){
        if(!this.req.length){
            this.req.push(t)
            return this.req.length
        }
        this.req.push(t)
        if(t-this.req[0] >3000){
            while(t-this.req[0] >3000 && this.req.length>0){
                this.req.shift()
            }
        }
        return this.req.length
    }
};
// 933. Number of Recent Calls