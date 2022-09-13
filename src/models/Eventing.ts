// add type Aielus, the return type is a function
type Callback = () => void;

export class Eventing {
    events: {[key:string]: Callback[]} = {};
    
    // Setting the function below as bound function we put the equal sign
    // and the arrow function. This bounds referenced variable using this
    // to the variable on the left always
    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        //why do we have this function below
        this.events[eventName] = handlers;
     } 

    // gives us the output of an event using its name
    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if(!handlers || handlers.length === 0){
            return
        }

        handlers.forEach(callback => {
            callback();
        })
    }
}
