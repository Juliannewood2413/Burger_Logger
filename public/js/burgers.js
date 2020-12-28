//Wait for handlers until DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    //ADD BURGER 

    const orderBurgerBtn = document.getElementById('order-form');

    if(orderBurgerBtn) {
        orderBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newOrder = {
                burger: document.getElementById('order').value.trim()
            };
            console.log(newOrder);

            //POST request for new order
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
        
                // make sure to serialize the JSON body
                body: JSON.stringify(newOrder),
              }).then((response) => {
                // Empty the form
                document.getElementsByName('order')[0].value = '';
        
                // Reload the page with new order
                console.log('Created a new order!');
                location.reload();
              });


        })
    }








})