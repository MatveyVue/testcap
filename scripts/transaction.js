document.addEventListener('DOMContentLoaded', () => {
    if (typeof TON_CONNECT_UI === 'undefined') {
        console.error(' Проверьте подключение к интернету');
        alert('Error!');
return;
        }
        const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://gist.githubusercontent.com/Danya-byte/8736e11dd232567a697cc2fd97debb06/raw/497d2ff94ba84f434e567f23f93a417129d6ab47/HateUsers.json',
            buttonRootId: 'ton-connect'
        });
    
        window.handlePayment = async function() {
            try {
                console.log('Инициализация платежа...');
    
            if (!tonConnectUI.connected) {
                console.log('Подключение кошелька...');
                await tonConnectUI.connectWallet();
            }
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 360, 
            messages: [
                {
                    address: 'UQDW5V6H3mx3p31qlkEHTkkewiXkqX8wRdOl5F6E0pWMXle4',
                    amount: '1000000000',
                }
            ]
        };
        console.log('Отправка транзакции...');
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log('Транзакция успешно отправлена');
        alert('The transaction successful');
        } catch (error) {
            console.error('Ошибка при оплате');
            alert('The transaction failed');
        }
    };
});