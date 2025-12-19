document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cards-container');
  
  fetch('data.json')
    .then(res => res.json())
    .then(products => {
      container.innerHTML = products.map(product => `
                <div class="product-wrapper">
                    <input type="radio" name="modal-group" id="card-${product.id}" class="modal-logic">
                    
                    <label for="card-${product.id}" class="card-horizontal">
                        <div class="img-box"><img src="${product.img}" alt="${product.title}"></div>
                        <div class="info-box">
                            <div class="meta">
                                <span>${product.price}</span>
                                <span class="star">★ ${product.rating}</span>
                            </div>
                            <h3>${product.title}</h3>
                            <p>${product.desc}</p>
                        </div>
                    </label>

                    <div class="modal-overlay">
                        <label for="close-modal" class="overlay-bg"></label>
                        <div class="modal-window">
                            <label for="close-modal" class="close-x">&times;</label>
                            <div class="modal-grid">
                                <img src="${product.img}" class="full-img">
                                <div class="details">
                                    <h2>${product.title}</h2>
                                    <p>${product.fullDesc}</p>
                                    <ul>
                                        ${product.specs.map(s => `<li>${s}</li>`).join('')}
                                    </ul>
                                    <button class="btn" onclick="sendTransaction('${product.price}')">
   Оплатить в USDT
</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
      
      // Добавляем триггер закрытия в конец
      container.insertAdjacentHTML('beforeend', '<input type="radio" name="modal-group" id="close-modal" class="modal-logic">');
    })
    .catch(err => console.error('Ошибка загрузки данных:', err));
});