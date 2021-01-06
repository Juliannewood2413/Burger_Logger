//Wait for handlers until DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    //UPDATE BURGER 

    const orderBurgerBtn = document.getElementById('order-form');

    if(orderBurgerBtn) {
      orderBurgerBtn.forEach((button) => {
        button.addEventListener(click, (e) => {

            const id = e.target.getAttribute('data-id');
            const devourBurger = e.target.getAttribute('data-newBurger');
  
            const newDevouredState = {
                devoured: devourBurger,
            };

            fetch(`/api/burger/${id}`,  {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                },

                body: JSON.stringify(newSleepState)
            }).then((response) => {
                if (response.ok) {
                    console.log(`Changed state to: ${newDevouredState}`);
                    location.reload('/');
                } else {
                    alert('Something went wrong!');
                }
            })

        })
      })
    }

    //ADD







})