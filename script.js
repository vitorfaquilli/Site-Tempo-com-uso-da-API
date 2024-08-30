<body>
    <header>
        <h1>Previsão do Tempo</h1>
    </header>
    <div class="container">
        <div class="weather-card">
            <h2>Previsão Atual</h2>
            <input type="text" id="city" placeholder="Digite o nome da cidade" />
            <button>Buscar</button>
            <div id="weather-info">
                <h2>-- Informações do tempo serão exibidas aqui!--</h2>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
// Função para buscar a previsão do tempo
async function getWeather() {
    // Obtém o valor do campo de entrada
    const city = document.getElementById('city').value;
    
    // Verifica se o campo de entrada está vazio
    if (!city) {
        alert('Por favor, digite o nome da cidade.');
        return;
    }

    // Substitua 'YOUR_API_KEY' pela sua chave de API do OpenWeatherMap
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        // Faz a requisição para a API
        const response = await fetch(url);
        const data = await response.json();

        // Verifica se a cidade foi encontrada
        if (data.cod === '404') {
            document.getElementById('weather-info').innerHTML = `<p>Cidade não encontrada.</p>`;
            return;
        }

        // Obtém os dados da resposta
        const weather = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        // Atualiza o conteúdo do elemento com o ID 'weather-info'
        document.getElementById('weather-info').innerHTML = `
            <h3>${data.name}</h3>
            <p>${weather}</p>
            <p>Temperatura: ${temp}°C</p>
            <p>Umidade: ${humidity}%</p>
            <p>Velocidade do Vento: ${windSpeed} m/s</p>
        `;
    } catch (error) {
        // Exibe uma mensagem de erro se a requisição falhar
        document.getElementById('weather-info').innerHTML = `<p>Erro ao buscar a previsão do tempo.</p>`;
    }
}

// Adiciona um listener de evento ao botão
document.querySelector('button').addEventListener('click', getWeather);

<script src="script.js"></script>

