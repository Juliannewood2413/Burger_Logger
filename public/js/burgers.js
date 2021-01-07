//Wait for handlers until DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    //ADD BURGER 

    const orderBurgerBtn = document.getElementById('create-form');

    if(orderBurgerBtn) {
        orderBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newOrder = {
                burger: document.getElementById('burg').value.trim()
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
                document.getElementsByName('burg')[0].value = '';
        
                // Reload the page with new order
                console.log('Created a new order!');
                location.reload();
              });


        })
    };

    //EAT BURGER
    const eatBurgerBtn = document.querySelectorAll('.devour')

    if(eatBurgerBtn) {
        eatBurgerBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-newdevour');

                const newDevourState = {
                    devoured: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newDevourState),
                }).then((response) => {
                    if (response.ok) {
                        console.log(`Burger has been changed to: ${newDevour}`);
                        location.reload('/');
                    }else {
                        alert('Error');
                    }
                })

            })
        })
    }










})