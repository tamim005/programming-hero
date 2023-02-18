 /* 
 1) if ticket number is less than or equal to 100, per ticket price 100tk.
 2) if ticket number is more than 100,but less than or equal to 200.
 first 100 = 100 tk
 rest = 90 tk
 3) if ticket number more than 200,
 first 100 = 100 tk
 101-200 = 90tk
 200+ = 70tk
 */

 function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * 100;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;

    }
    else{
        const first100Price = 100 * first100Rate;
        const second100price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalPrice = first100Price + second100price + restTicketPrice;
        return totalPrice;
    }
 }
const price = ticketPrice(120);
console.log("Price: ", price);