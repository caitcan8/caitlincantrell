const thisYear = new Date().getFullYear();
document.getElementById('year').textContent = thisYear;
let tabPressed = false;

document.addEventListener('DOMContentLoaded', () => {
    // get all the cards
    const cards = document.querySelectorAll('.app, .entree, .dessert');
    let count = 0; 
    let ended = true;
    

    cards.forEach(meal => {
     
      meal.querySelectorAll('div').forEach(card => {
        
        //let ended = true;
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                tabPressed = true; // Tab key was pressed
                ended = true;
            }
        });
        card.addEventListener('focus', () => {

            if (!ended) {
                ended = true;
                return;
            }
            
            
            if (tabPressed && count > 2) {
                console.log("here");
                
                const allCards = Array.from(document.querySelectorAll('.activepage, .secondpage, .lastpage'));
                const current = document.activeElement;
                const currentIndex = allCards.indexOf(current);
            
                const nextCard = allCards[currentIndex + 2]; // next .activepage in DOM
            
                if (nextCard) {
                    ended = true;
                    tabPressed = false;
                count= 0;
                    nextCard.focus(); // move to next deck's first card
                    return;
                }
                
                
                return;
            }
        
            if (card.classList.contains('activepage')) {
                return;
            }
        
            const a = meal.querySelector('.activepage');
            const b = meal.querySelector('.secondpage');
            const c = meal.querySelector('.lastpage');
        
            if (card.classList.contains('secondpage')) {
                const aContent = a.innerHTML;
                const bContent = b.innerHTML;
                const cContent = c.innerHTML;
        
                a.innerHTML = bContent;
                b.innerHTML = cContent;
                c.innerHTML = aContent;
        
            } else if (card.classList.contains('lastpage')) {
                const aContent = a.innerHTML;
                const cContent = c.innerHTML;
        
                a.innerHTML = cContent;
                c.innerHTML = aContent;
            }
        
            //ended = false;
        
            if (!(tabPressed && count > 2)) {
                ended = false;
                a.focus();
            }
        
            if (tabPressed) {
                ++count;
                console.log("works");
                tabPressed = false;
            }
        });
        
        
      });
    });
  
});
